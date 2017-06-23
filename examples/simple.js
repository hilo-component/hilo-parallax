import Graphics from 'hilojs/view/Graphics';
import Container from 'hilojs/view/Container';
import Ease from 'hilojs/tween/Ease';
import initStage from 'hilo-init-stage';
import Parallax from '../';

class Demo extends initStage {
  constructor(props) {
    super(props);
    this.init();
    this.stage.background = '#000';
  }

  init() {
    const bg0 = this.drawBg('#ff0000');
    bg0.x = -100 * this.dpr;
    bg0.y = 100 * this.dpr;
    const bg1 = this.drawBg('#ffff00');
    bg1.x = -200 * this.dpr;
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
      type: 'x',
      duration: 10000,
      ease: Ease.Linear.EaseNone,
      width: this.width,
      height: this.height,
      loop: true,
      startPercent: 0.3,
      invert: true,
    });
    this.stage.addChild(this.bgWrapper);
    this.bgWrapper.cameraAnimateTo(-950 * this.dpr);
  }

  drawBg(color) {
    const bg = new Container();
    const grap = new Graphics();
    grap.beginFill(color).drawCircle(0, 0, 50 * this.dpr).endFill();
    bg.addChild(grap);
    return bg;
  }
}

new Demo();
