# hilo-parallax

---

## Install

```
npm i @ali/hilo-parallax
```

[![hilo-parallax](https://nodei.co/npm/hilo-parallax.png)](https://npmjs.org/package/hilo-parallax)


## Usage

```js
import Stage from 'hilojs/view/Stage';
import Ticker from 'hilojs/util/Ticker';
import Ease from 'hilojs/tween/Ease';
import Parallax from 'hilo-parallax';

// hilo stage
var stage = new Stage({
  renderType: 'canvas',
  canvas,
  width: 375,
  height: 614,
});
canvas.width = 375;
canvas.height = 614;
this.ticker = new Ticker(30);
this.ticker.addTick(stage);
this.ticker.start();

const bgWrapper = new Parallax({
  childrens: [
    {
      depth: 0.5,
      children: 'https://zos.alipayobjects.com/rmsportal/vQbYqyotOjnnTPfpjpzN.png',
      imageData: {
        cpPosition: -800,
        y: 200,
      },
    },
    {
      depth: 1,
      children: 'https://zos.alipayobjects.com/rmsportal/gVBfGmjSskHNvmScZMGm.png',
      imageData: {
        cpPosition: -800,
        y: 250,
      },
    },
  ],
  type: 'x',
  duration: 10000,
  ease: Ease.Linear.EaseNone,
  width: this.width,
  height: this.height,
  loop: true,
  startPercent: 0.2,
});
stage.addChild(bgWrapper);
bgWrapper.cameraAnimateTo(-800);
```

## API

> Parallax extends Container

| name      | type           | default | description    |
|-----------|----------------|---------|----------------|
| childrens |  Array<Object> | null    | parallax 的子级 |
| type      |  string        | `x`     | parallax 动画类型: `x`, `y`, `xy`; 如果为 `xy`, cameraAnimateTo 里的 value 可以为 { x, y };
| duration  |  number        | 1000    | 初始时间设定 |
| ease      |  hilo.Ease     | `Ease.Quad.EaseOut` | 动画缓动 |
| loop      |  boolean       | false   | 是否循环播放，注: 如果为 true, cameraAnimateTo 只能触发一次 |
| invert    |  boolean       | false   | loop 时, 第二遍是否反向播放 |
| cameraStart | number       |  0      | 镜头位置  |
| startPercent | number<float>  | 0    | 0 - 1 之间的百分比值； 开始显示镜头所在动画轴上的百分比 |
| stack       |  string      | reset   | type: `add`, `reset`; 两种方式；<br /> `add`: 为不结束前面一个动画，往动画队列里添加后面即将发生的动画， 为多轨动画， 比较耗性能; <br /> `reset`: 保持单个动画的运行，强制结束前面一个动画， 单轨动画。|

### childrens 

| name      | type           | default | description    |
|-----------|----------------|---------|----------------|
| children  | <Hilo.View> or string | null | 子级元素， 如果是 string， 将自动创建 Bitmap; |
| depth     |  number        | null    |  当前子级深度, 控制视差的 |
| imageData | object         |  null    | 只适用 children 为 string 时 { ...(所有 Bitmap 属性), cpPosition }: cpPosition 开启拷贝图片，并设置所在位置。 |

### cameraAnimateTo(value, animateProps);

动画调用方法:

value: 动画参数；

animateProps: { duration, ease }; 替换初始设置的动画值;

## Development

```
npm install
npm start
```

## Example

http://localhost:8301/examples/


## License

hilo-parallax is released under the MIT license.