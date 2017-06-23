import Bitmap from 'hilojs/view/Bitmap';
import Container from 'hilojs/view/Container';
import Ease from 'hilojs/tween/Ease';

export default class ParallaxContainer extends Container {
  /**
   * childrnes
   * @type {Array<Object>} Object: ChildData.
   * @interface ChildData: {
   *   depth: number,
   *   children: Object<Hilo.View> or img url string,
   *   imageData: object
   * };
   * @param {depth}: 图层深度，影响动画速度.
   * @param {children}: 图层里的内容。可为以 View 为基类的 class 或直接 url 地址。如果是 url 地址，children 将只有一个子级。
   * @param {imageData}: 只适用 children 是 string 的链接时, {cpPosition}: number 拷贝图片所在位置。
   */
  childrens = [];
  /**
   * width
   * @type {number}
   */
  width = 200;
  /**
   * height
   * @type {number}
   */
  height = 200;
  /**
   * invert is true moves layers in opposition to the device motion.
   * invert 如果是 true 则做反向动画。
   * @type {boolean}
   */
  invert = false;
  /**
   * loop 是否重复播放.
   * @type {boolean}
   * loop 不能与切换动画同时使用. animateTo 只支持一次.
   */
  loop = false;
  /**
   * type 可选参数 x（横向）, y(竖向), xy.
   * xy 时 animateTo 里的 value 必须为 { x, y }
   * @type {string}
   */
  type = 'x';
  /**
   * stack 动画方式，可选参数 add, reset;
   * @type {string}
   * @param {add}: 为不结束前面一个动画，往动画队列里添加后面即将发生的动画， 为多轨动画， 比较耗性能;
   * @param {reset}: 保持单个动画的运行，强制结束前面一个动画， 单轨动画。
   */
  stack = 'reset';
  /**
   * duration 动画时间
   * @type {number}
   */
  duration = 1000;
  /**
   * ease 动画缓动
   * @type {Hilo.Ease}
   */
  ease = Ease.Quad.EaseOut;
  /**
   * animateQueue 动画队列
   * @type {Array}
   */
  animateQueue = [];
  /**
   * animate 当前动画的值储存.
   * @type {{}}
   */
  animate = {};

  /**
   * cameraStart 初始当前坐标
   * @type {number} or {object<{ x, y }>}
   */
  cameraStart = 0;

  /**
   * startPercent 第一次进入显示在动画的百多比 0-1 之间;
   * @type {number}
   */
  startPercent = 0;

  constructor(props) {
    super(props);
    ParallaxContainer.superclass.constructor.call(this, props);
    this.init();
  }

  /**
   * init children
   */
  init() {
    this.childrens.forEach((item) => {
      if (!item.children) {
        return;
      }
      if (typeof item.children === 'string') {
        // 新建两个图层平辅，可循环动画;
        const imageWrapper = new Container();
        const image = this.newImage(item);
        imageWrapper.addChild(image);
        if (item.imageData && item.imageData.cpPosition) {
          const imageCp = this.newImage(item);
          imageWrapper.addChild(imageCp);
          const cpPos = item.imageData.cpPosition;
          if (this.type === 'xy') {
            imageCp.x = (cpPos.x || 0) + item.imageData.cpPosition.x * item.depth;
            imageCp.y = (cpPos.y || 0) + item.imageData.cpPosition.y * item.depth;
          } else {
            imageCp[this.type] = (cpPos[this.type] || 0) + item.imageData.cpPosition * item.depth;
          }
        }
        this.addChild(imageWrapper);
      } else if (typeof item.children === 'object') {
        // view 元素自行控制平辅。。。
        this.addChild(item.children);
      }
    });
    this.start = this.children.map(item => ({ x: item.x || 0, y: item.y || 0 }));
    this.repeat = 0;
  }

  newImage = (item) => {
    const data = { ...item };
    delete data.childrens;
    delete data.depth;
    const imageData = { ...data.imageData };
    delete imageData.cpPosition;
    delete data.imageData;
    return new Bitmap({
      image: item.children,
      ...data,
      ...imageData,
    });
  }

  getValue = (config, easeValue, type) => {
    const start = type ? config.startValue[type] : config.startValue;
    const end = type ? config.endValue[type] : config.endValue;
    return start + (end - start) * easeValue - end;
  };

  getTweenValue() {
    const timestamp = Date.now();
    let tweenValue = this.type === 'xy' ? { ...this.animate[this.type] } : this.animate[this.type];

    this.animateQueue = this.animateQueue.map((_item) => {
      const item = _item;
      const time = item.isOneEnter ? timestamp - item.initTime :
        timestamp + this.startPercent * item.duration - item.initTime;
      const ratio = time / item.duration > 1 ? 1 : Math.max(0, time / item.duration);
      const easeValue = item.ease(this.invert && this.repeat % 2 ? 1 - ratio : ratio);
      let value;
      if (this.type === 'xy') {
        value = {
          x: this.getValue(item.config, easeValue, 'x'),
          y: this.getValue(item.config, easeValue, 'y'),
        };
        tweenValue.x += value.x;
        tweenValue.y += value.y;
      } else {
        value = this.getValue(item.config, easeValue);
        tweenValue += value;
      }
      if (time >= item.duration) {
        item.isOneEnter = true;
        if (this.loop) {
          item.initTime = Date.now();
          this.repeat += 1;
          return item;
        }
        return null;
      }
      return item;
    }).filter(item => item);
    return tweenValue;
  }

  /**
   * animate self start.
   * @param {value} animation to data;
   * @param {animateProps} animation param
   */
  cameraAnimateTo(value, animateProps = {}) {
    if (this.loop && this.animateQueue.length) {
      throw new Error('Cannot be used simultaneously loop and cameraAnimateTo');
    }
    let startValue;
    let endValue;
    const isReset = this.stack === 'reset';
    if (this.type === 'xy') {
      const st = this.animate[this.type];
      const ss = isReset ? this.getTweenValue() : st;
      startValue = {
        x: ss.x || this.cameraStart.x || 0,
        y: ss.y || this.cameraStart.y || 0,
      };
      endValue = typeof value === 'object' ? value : { x: value, y: value };
    } else {
      startValue = (isReset ? this.getTweenValue() :
          this.animate[this.type]) || this.cameraStart || 0;
      endValue = value;
    }

    const config = {
      endValue,
      startValue,
    };
    this.animate[this.type] = endValue;

    const duration = animateProps.duration || this.duration;

    const ease = animateProps.duration || this.ease;
    if (isReset) {
      this.animateQueue = [];
    }

    this.animateQueue.push({
      type: this.type,
      config,
      initTime: Date.now(),
      duration,
      ease,
    });
  }

  render(renderer, delta) {
    Container.superclass.render.call(this, renderer, delta);

    const children = this.children.slice(0);
    children.forEach((child) => {
      if (child.parent === this) {
        child._render(renderer, delta);
      }
    });

    if (this.animateQueue.length) {
      const value = this.getTweenValue();
      this.children.forEach((_item, i) => {
        const item = _item;
        const depth = this.childrens[i].depth;
        if (this.type === 'x') {
          item.x = this.start[i].x - value * depth;
        } else if (this.type === 'y') {
          item.y = this.start[i].y - value * depth;
        } else {
          item.x = this.start[i].x - value.x * depth;
          item.y = this.start[i].y - value.y * depth;
        }
      });
    }
  }
}
