import initStage from 'hilo-init-stage';
import Graphics from 'hilojs/view/Graphics';
import Container from 'hilojs/view/Container';
// import Ease from 'hilojs/tween/Ease';
import Parallax from '../';

class Demo extends initStage {
  gamma = 0;
  constructor(props) {
    super(props);
    this.init();
    this.stage.background = '#000';
  }

  init() {
    const bg0 = this.drawBg('#ff0000');
    bg0.x = 50 * this.dpr;
    bg0.y = 100 * this.dpr;
    const bg1 = this.drawBg('#ffff00');
    bg1.x = 150 * this.dpr;
    bg1.y = 150 * this.dpr;

    this.bgWrapper = new Parallax({
      childrens: [
        {
          depth: 0.5,
          children: bg0,
        },
        {
          depth: 1,
          children: bg1,
        },
      ],
      loop: false,
      type: 'x',
      duration: 500,
      // stack: 'add',
      // ease: Ease.Quad.EaseInOut,
      width: this.width,
      height: this.height,
    });
    this.stage.addChild(this.bgWrapper);
    window.addEventListener('deviceorientation', this.orientationHandler);
    window.addEventListener('mousemove', this.mouseMove);
  }

  drawBg(color) {
    const bg = new Container();
    const grap = new Graphics();
    grap.beginFill(color).drawCircle(0, 0, 50 * this.dpr).endFill();
    bg.addChild(grap);
    return bg;
  }

  mouseMove = (e) => {
    const x = e.clientX;
    this.bgWrapper.cameraAnimateTo(-x / 2 * this.dpr);
  }

  orientationHandler = (e) => {
    if (Math.abs(this.gamma - e.gamma) >= 5) {
      console.log(Math.round(e.gamma));
      this.bgWrapper.cameraAnimateTo(e.gamma * -3 * this.dpr);
      this.gamma = e.gamma;
    }
  }
}

new Demo();
