import initStage from 'hilo-init-stage';
import Ease from 'hilojs/tween/Ease';
import Parallax from '../';

class Demo extends initStage {
  constructor(props) {
    super(props);
    this.init();
    this.stage.background = '#000';
  }

  init() {
    this.bgWrapper = new Parallax({
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
    this.stage.addChild(this.bgWrapper);
    this.bgWrapper.cameraAnimateTo(-800 * this.dpr);
  }
}

new Demo();
