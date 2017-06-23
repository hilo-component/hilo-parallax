webpackJsonp([2],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hilo_init_stage__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hilojs_tween_Ease__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hilojs_tween_Ease___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hilojs_tween_Ease__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Demo = function (_initStage) {
  _inherits(Demo, _initStage);

  function Demo(props) {
    _classCallCheck(this, Demo);

    var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

    _this.init();
    _this.stage.background = '#000';
    return _this;
  }

  _createClass(Demo, [{
    key: 'init',
    value: function init() {
      this.bgWrapper = new __WEBPACK_IMPORTED_MODULE_2____["a" /* default */]({
        childrens: [{
          depth: 0.5,
          children: 'https://zos.alipayobjects.com/rmsportal/vQbYqyotOjnnTPfpjpzN.png',
          imageData: {
            cpPosition: -800,
            y: 200
          }
        }, {
          depth: 1,
          children: 'https://zos.alipayobjects.com/rmsportal/gVBfGmjSskHNvmScZMGm.png',
          imageData: {
            cpPosition: -800,
            y: 250
          }
        }],
        type: 'x',
        duration: 10000,
        ease: __WEBPACK_IMPORTED_MODULE_1_hilojs_tween_Ease___default.a.Linear.EaseNone,
        width: this.width,
        height: this.height,
        loop: true,
        startPercent: 0.2
      });
      this.stage.addChild(this.bgWrapper);
      this.bgWrapper.cameraAnimateTo(-800 * this.dpr);
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_0_hilo_init_stage__["a" /* default */]);

new Demo();

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ })

},[23]);
//# sourceMappingURL=image-cpPosition.js.map