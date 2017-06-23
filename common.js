/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */


/**
 * @language=en
 * Create Example Class:
 * <pre>
 * var Bird = Hilo.Class.create({
 *     Extends: Animal,
 *     Mixes: EventMixin,
 *     constructor: function(name){
 *         this.name = name;
 *     },
 *     fly: function(){
 *         console.log('I am flying');
 *     },
 *     Statics: {
 *         isBird: function(bird){
 *             return bird instanceof Bird;
 *         }
 *     }
 * });
 *
 * var swallow = new Bird('swallow');
 * swallow.fly();
 * Bird.isBird(swallow);
 * </pre>
 * @namespace Class Class is created to aid the developer.
 * @static
 * @module hilo/core/Class
 */
var Class = (function(){

/**
 * @language=en
 * Create a class based on the parameters, properties and methods specified.
 * @param {Object} properties Properties and methods to create the class.
 * <ul>
 * <li><b>Extends</b> - Designed to inherit the parent class.</li>
 * <li><b>Mixes</b> - Specifies mixed member collection object.</li>
 * <li><b>Statics</b> - Static property or method specified class.</li>
 * <li><b>constructor</b> -  The constructor of specified class.</li>
 * <li>Other members of the property or method to create the class.</li>
 * </ul>
 * @returns {Object} Create classes.
 */
var create = function(properties){
    properties = properties || {};
    var clazz = properties.hasOwnProperty('constructor') ? properties.constructor : function(){};
    implement.call(clazz, properties);
    return clazz;
};

/**
 * @language=en
 * @private
 */
var implement = function(properties){
    var proto = {}, key, value;
    for(key in properties){
        value = properties[key];
        if(classMutators.hasOwnProperty(key)){
            classMutators[key].call(this, value);
        }else{
            proto[key] = value;
        }
    }

    mix(this.prototype, proto);
};

var classMutators = /** @ignore */{
    Extends: function(parent){
        var existed = this.prototype, proto = createProto(parent.prototype);
        //inherit static properites
        mix(this, parent);
        //keep existed properties
        mix(proto, existed);
        //correct constructor
        proto.constructor = this;
        //prototype chaining
        this.prototype = proto;
        //shortcut to parent's prototype
        this.superclass = parent.prototype;
    },

    Mixes: function(items){
        items instanceof Array || (items = [items]);
        var proto = this.prototype, item;

        while(item = items.shift()){
            mix(proto, item.prototype || item);
        }
    },

    Statics: function(properties){
        mix(this, properties);
    }
};

/**
 * @language=en
 * @private
 */
var createProto = (function(){
    if(Object.__proto__){
        return function(proto){
            return {__proto__: proto};
        };
    }else{
        var Ctor = function(){};
        return function(proto){
            Ctor.prototype = proto;
            return new Ctor();
        };
    }
})();

/**
 * @language=en
 * Mixed property or method.
 * @param {Object} target Mixed audiences.
 * @param {Object} source The source whose methods and properties are to be mixed. It can support multiple source parameters.
 * @returns {Object} Mixed audiences.
 */
var mix = function(target){
    for(var i = 1, len = arguments.length; i < len; i++){
        var source  = arguments[i], defineProps;
        for(var key in source){
            var prop = source[key];
            if(prop && typeof prop === 'object'){
                if(prop.value !== undefined || typeof prop.get === 'function' || typeof prop.set === 'function'){
                    defineProps = defineProps || {};
                    defineProps[key] = prop;
                    continue;
                }
            }
            target[key] = prop;
        }
        if(defineProps) defineProperties(target, defineProps);
    }

    return target;
};

var defineProperty, defineProperties;
try{
    defineProperty = Object.defineProperty;
    defineProperties = Object.defineProperties;
    defineProperty({}, '$', {value:0});
}catch(e){
    if('__defineGetter__' in Object){
        defineProperty = function(obj, prop, desc){
            if('value' in desc) obj[prop] = desc.value;
            if('get' in desc) obj.__defineGetter__(prop, desc.get);
            if('set' in desc) obj.__defineSetter__(prop, desc.set);
            return obj;
        };
        defineProperties = function(obj, props){
            for(var prop in props){
                if(props.hasOwnProperty(prop)){
                    defineProperty(obj, prop, props[prop]);
                }
            }
            return obj;
        };
    }
}

return {create:create, mix:mix};

})();


module.exports = Class;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */



/**
 * @language=en
 * @namespace Hilo The underlying core set of methods.
 * @static
 * @module hilo/core/Hilo
 */
var Hilo = (function(){

var win = window, doc = document, docElem = doc.documentElement,
    uid = 0;

return {
    /**
     * Hilo version
     * @type String
     */
    version:'1.0.5',
    /**
     * @language=en
     * Gets a globally unique id. Such as Stage1, Bitmap2 etc.
     * @param {String} prefix Generated id's prefix.
     * @returns {String} Globally unique id.
     */
    getUid: function(prefix){
        var id = ++uid;
        if(prefix){
            var charCode = prefix.charCodeAt(prefix.length - 1);
            if (charCode >= 48 && charCode <= 57) prefix += "_"; //0至9之间添加下划线
            return prefix + id;
        }
        return id;
    },

    /**
     * @language=en
     * Generates a string representation that contains a path to the specified visual object. Such as Stage1.Container2.Bitmap3.
     * @param {View} view Specified visual object.
     * @returns {String} String representation of the visual object.
     */
    viewToString: function(view){
        var result, obj = view;
        while(obj){
            result = result ? (obj.id + '.' + result) : obj.id;
            obj = obj.parent;
        }
        return result;
    },

    /**
     * @language=en
     * Simple shallow copy objects.
     * @param {Object} target Target object to copy to.
     * @param {Object} source Source object to copy.
     * @param {Boolean} strict Indicates whether replication is undefined property, default is false, i.e., undefined attributes are not copied.
     * @returns {Object} Object after copying.
     */
    copy: function(target, source, strict){
        for(var key in source){
            if(!strict || target.hasOwnProperty(key) || target[key] !== undefined){
                target[key] = source[key];
            }
        }
        return target;
    },

    /**
     * @language=en
     * Browser feature set includes:
     * <ul>
     * <li><b>jsVendor</b> - Browser vendors js value CSS prefix. For example: webkit.</li>
     * <li><b>cssVendor</b> - Browser vendors css value CSS prefix.</li>
     * <li><b>supportTransform</b> - Whether to support CSS Transform transformation.</li>
     * <li><b>supportTransform3D</b> - Whether to support CSS Transform 3D transformation.</li>
     * <li><b>supportStorage</b> - Whether to support local stores like localStorage.</li>
     * <li><b>supportTouch</b> - Whether to support the touch event.</li>
     * <li><b>supportCanvas</b> - Whether to support the canvas element.</li>
     * </ul>
     */
    browser: (function(){
        var ua = navigator.userAgent;
        var data = {
            iphone: /iphone/i.test(ua),
            ipad: /ipad/i.test(ua),
            ipod: /ipod/i.test(ua),
            ios: /iphone|ipad|ipod/i.test(ua),
            android: /android/i.test(ua),
            webkit: /webkit/i.test(ua),
            chrome: /chrome/i.test(ua),
            safari: /safari/i.test(ua),
            firefox: /firefox/i.test(ua),
            ie: /msie/i.test(ua),
            opera: /opera/i.test(ua),
            supportTouch: 'ontouchstart' in win,
            supportCanvas: doc.createElement('canvas').getContext != null,
            supportStorage: false,
            supportOrientation: 'orientation' in win,
            supportDeviceMotion: 'ondevicemotion' in win
        };

        //`localStorage` is null or `localStorage.setItem` throws error in some cases (e.g. localStorage is disabled)
        try{
            var value = 'hilo';
            localStorage.setItem(value, value);
            localStorage.removeItem(value);
            data.supportStorage = true;
        }catch(e){}

        //vendor prefix
        var jsVendor = data.jsVendor = data.webkit ? 'webkit' : data.firefox ? 'webkit' : data.opera ? 'o' : data.ie ? 'ms' : '';
        var cssVendor = data.cssVendor = '-' + jsVendor + '-';

        //css transform/3d feature dectection
        var testElem = doc.createElement('div'), style = testElem.style;
        var supportTransform = style[jsVendor + 'Transform'] != undefined;
        var supportTransform3D = style[jsVendor + 'Perspective'] != undefined;
        if(supportTransform3D){
            testElem.id = 'test3d';
            style = doc.createElement('style');
            style.textContent = '@media ('+ cssVendor +'transform-3d){#test3d{height:3px}}';
            doc.head.appendChild(style);

            docElem.appendChild(testElem);
            supportTransform3D = testElem.offsetHeight == 3;
            doc.head.removeChild(style);
            docElem.removeChild(testElem);
        }
        data.supportTransform = supportTransform;
        data.supportTransform3D = supportTransform3D;

        return data;
    })(),

    /**
     * @language=en
     * Event enumeration objects include:
     * <ul>
     * <li><b>POINTER_START</b> - Mouse or touch start event. Corresponds to touchstart or mousedown.</li>
     * <li><b>POINTER_MOVE</b> - Mouse or touch move event. Corresponds to touchmove or mousemove.</li>
     * <li><b>POINTER_END</b> - Mouse or touch end event. Corresponds to touchend or mouseup.</li>
     * </ul>
     */
    event: (function(){
        var supportTouch = 'ontouchstart' in win;
        return {
            POINTER_START: supportTouch ? 'touchstart' : 'mousedown',
            POINTER_MOVE: supportTouch ? 'touchmove' : 'mousemove',
            POINTER_END: supportTouch ? 'touchend' : 'mouseup'
        };
    })(),

    /**
     * @language=en
     * Visual object alinment enumeration objects include:
     * <ul>
     * <li><b>TOP_LEFT</b> - Align the top left corner.</li>
     * <li><b>TOP</b> - Top center alignment.</li>
     * <li><b>TOP_RIGHT</b> - Align the top right corner.</li>
     * <li><b>LEFT</b> - Left center alignment.</li>
     * <li><b>CENTER</b> - Align center.</li>
     * <li><b>RIGHT</b> - Right center alignment.</li>
     * <li><b>BOTTOM_LEFT</b> - Align the bottom left corner.</li>
     * <li><b>BOTTOM</b> - Bottom center alignment.</li>
     * <li><b>BOTTOM_RIGHT</b> - Align the bottom right corner.</li>
     * </ul>
     */
    align: {
        TOP_LEFT: 'TL', //top & left
        TOP: 'T', //top & center
        TOP_RIGHT: 'TR', //top & right
        LEFT: 'L', //left & center
        CENTER: 'C', //center
        RIGHT: 'R', //right & center
        BOTTOM_LEFT: 'BL', //bottom & left
        BOTTOM: 'B', //bottom & center
        BOTTOM_RIGHT: 'BR' //bottom & right
    },

    /**
     * @language=en
     * Get DOM element content in the page display area.
     * @param {HTMLElement} elem DOM elements.
     * @returns {Object} Viewable area DOM elements. Format is: {left:0, top:0, width:100, height:100}.
     */
    getElementRect: function(elem){
        var bounds;
        try{
            //this fails if it's a disconnected DOM node
            bounds = elem.getBoundingClientRect();
        }catch(e){
            bounds = {top:elem.offsetTop, left:elem.offsetLeft, right:elem.offsetLeft + elem.offsetWidth, bottom:elem.offsetTop + elem.offsetHeight};
        }

        var offsetX = ((win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)) || 0;
        var offsetY = ((win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0)) || 0;
        var styles = win.getComputedStyle ? getComputedStyle(elem) : elem.currentStyle;
        var parseIntFn = parseInt;

        var padLeft = (parseIntFn(styles.paddingLeft) + parseIntFn(styles.borderLeftWidth)) || 0;
        var padTop = (parseIntFn(styles.paddingTop) + parseIntFn(styles.borderTopWidth)) || 0;
        var padRight = (parseIntFn(styles.paddingRight) + parseIntFn(styles.borderRightWidth)) || 0;
        var padBottom = (parseIntFn(styles.paddingBottom) + parseIntFn(styles.borderBottomWidth)) || 0;

        var top = bounds.top || 0;
        var left = bounds.left || 0;
        var right = bounds.right || 0;
        var bottom = bounds.bottom || 0;

        return {
            left: left + offsetX + padLeft,
            top: top + offsetY + padTop,
            width: right - padRight - left - padLeft,
            height: bottom - padBottom - top - padTop
        };
    },

    /**
     * @language=en
     * Create a DOM element. You can specify properties and styles.
     * @param {String} type DOM element type to be created. Such as: 'div'.
     * @param {Object} properties Properties and styles for DOM element.
     * @returns {HTMLElement} A DOM element.
     */
    createElement: function(type, properties){
        var elem = doc.createElement(type), p, val, s;
        for(p in properties){
            val = properties[p];
            if(p === 'style'){
                for(s in val) elem.style[s] = val[s];
            }else{
                elem[p] = val;
            }
        }
        return elem;
    },

    /**
     * @language=en
     * Gets a DOM element according to the parameter id. This method is equivalent to document.getElementById(id).
     * @param {String} id id of the DOM element you want to get.
     * @returns {HTMLElement} A DOM element.
     */
    getElement: function(id){
        return doc.getElementById(id);
    },

    /**
     * @language=en
     * Set visual object DOM element CSS style.
     * @param {View} obj Specifies the CSS style to set the visual object.
     * @private
     */
    setElementStyleByView: function(obj){
        var drawable = obj.drawable,
            style = drawable.domElement.style,
            stateCache = obj._stateCache || (obj._stateCache = {}),
            prefix = Hilo.browser.jsVendor, px = 'px', flag = false;

        if(this.cacheStateIfChanged(obj, ['visible'], stateCache)){
            style.display = !obj.visible ? 'none' : '';
        }
        if(this.cacheStateIfChanged(obj, ['alpha'], stateCache)){
            style.opacity = obj.alpha;
        }
        if(!obj.visible || obj.alpha <= 0) return;

        if(this.cacheStateIfChanged(obj, ['width'], stateCache)){
            style.width = obj.width + px;
        }
        if(this.cacheStateIfChanged(obj, ['height'], stateCache)){
            style.height = obj.height + px;
        }
        if(this.cacheStateIfChanged(obj, ['depth'], stateCache)){
            style.zIndex = obj.depth + 1;
        }
        if(flag = this.cacheStateIfChanged(obj, ['pivotX', 'pivotY'], stateCache)){
            style[prefix + 'TransformOrigin'] = obj.pivotX + px + ' ' + obj.pivotY + px;
        }
        if(this.cacheStateIfChanged(obj, ['x', 'y', 'rotation', 'scaleX', 'scaleY'], stateCache) || flag){
            style[prefix + 'Transform'] = this.getTransformCSS(obj);
        }
        if(this.cacheStateIfChanged(obj, ['background'], stateCache)){
            style.backgroundColor = obj.background;
        }
        if(!style.pointerEvents){
            style.pointerEvents = 'none';
        }

        //render image as background
        var image = drawable.image;
        if(image){
            var src = image.src;
            if(src !== stateCache.image){
                stateCache.image = src;
                style.backgroundImage = 'url(' + src + ')';
            }

            var rect = drawable.rect;
            if(rect){
                var sx = rect[0], sy = rect[1];
                if(sx !== stateCache.sx){
                    stateCache.sx = sx;
                    style.backgroundPositionX = -sx + px;
                }
                if(sy !== stateCache.sy){
                    stateCache.sy = sy;
                    style.backgroundPositionY = -sy + px;
                }
            }
        }

        //render mask
        var mask = obj.mask;
        if(mask){
            var maskImage = mask.drawable.domElement.style.backgroundImage;
            if(maskImage !== stateCache.maskImage){
                stateCache.maskImage = maskImage;
                style[prefix + 'MaskImage'] = maskImage;
                style[prefix + 'MaskRepeat'] = 'no-repeat';
            }

            var maskX = mask.x, maskY = mask.y;
            if(maskX !== stateCache.maskX || maskY !== stateCache.maskY){
                stateCache.maskX = maskX;
                stateCache.maskY = maskY;
                style[prefix + 'MaskPosition'] = maskX + px + ' ' + maskY + px;
            }
        }
    },

    /**
     * @private
     */
    cacheStateIfChanged: function(obj, propNames, stateCache){
        var i, len, name, value, changed = false;
        for(i = 0, len = propNames.length; i < len; i++){
            name = propNames[i];
            value = obj[name];
            if(value != stateCache[name]){
                stateCache[name] = value;
                changed = true;
            }
        }
        return changed;
    },

    /**
     * @language=en
     * Generated visual object CSS style transformation.
     * @param {View} obj Specifies visual object whose CSS style must be got.
     * @returns {String} String representation of the CSS style.
     */
    getTransformCSS: function(obj){
        var use3d = this.browser.supportTransform3D,
            str3d = use3d ? '3d' : '';

        return 'translate' + str3d + '(' + (obj.x - obj.pivotX) + 'px, ' + (obj.y - obj.pivotY) + (use3d ? 'px, 0px)' : 'px)')
             + 'rotate' + str3d + (use3d ? '(0, 0, 1, ' : '(') + obj.rotation + 'deg)'
             + 'scale' + str3d + '(' + obj.scaleX + ', ' + obj.scaleY + (use3d ? ', 1)' : ')');
    }
};

})();


module.exports = Hilo;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Hilo = __webpack_require__(1);
var Class = __webpack_require__(0);
var View = __webpack_require__(4);



/**
 * @language=en
 * @class Container is the base class to all container classes. Each Container can add other view object as children.
 * @augments View
 * @param {Object} properties Properties parameters of the object to create. Contains all writable properties of this class.
 * @module hilo/view/Container
 * @requires hilo/core/Hilo
 * @requires hilo/core/Class
 * @requires hilo/view/View
 * @property {Array} children List of children elements of the container, readonly!
 * @property {Boolean} pointerChildren Whether children elements of the container can response to user interactive events, default value is true.
 * @property {Boolean} clipChildren Whether clip children elements which are out of the container, default value is false.
 */
var Container = Class.create(/** @lends Container.prototype */{
    Extends: View,
    constructor: function(properties){
        properties = properties || {};
        this.id = this.id || properties.id || Hilo.getUid("Container");
        Container.superclass.constructor.call(this, properties);

        if(this.children) this._updateChildren();
        else this.children = [];
    },

    children: null,
    pointerChildren: true,
    clipChildren: false,

    /**
     * @language=en
     * Return the amount of the children elements of the container.
     * @returns {Uint} The amount of the children elements of the container.
     */
    getNumChildren: function(){
        return this.children.length;
    },

    /**
     * @language=en
     * Add child element at given index.
     * @param {View} child Element to add.
     * @param {Number} index The given index position, range from 0.
     */
    addChildAt: function(child, index){
        var children = this.children,
            len = children.length,
            parent = child.parent;

        index = index < 0 ? 0 : index > len ? len : index;
        var childIndex = this.getChildIndex(child);
        if(childIndex == index){
            return this;
        }else if(childIndex >= 0){
            children.splice(childIndex, 1);
            index = index == len ? len - 1 : index;
        }else if(parent){
            parent.removeChild(child);
        }

        children.splice(index, 0, child);

        //直接插入，影响插入位置之后的深度
        //Insert directly, this will affect depth of elements after the index.
        if(childIndex < 0){
            this._updateChildren(index);
        }
        //只是移动时影响中间段的深度
        //Will affect depth of elements in the middle during moving
        else{
            var startIndex = childIndex < index ? childIndex : index;
            var endIndex = childIndex < index ? index : childIndex;
            this._updateChildren(startIndex, endIndex + 1);
        }

        return this;
    },

    /**
     * @language=en
     * Add child element at the top.
     * @param {View} child Elements to add.
     */
    addChild: function(child){
        var total = this.children.length,
            args = arguments;

        for(var i = 0, len = args.length; i < len; i++){
            this.addChildAt(args[i], total + i);
        }
        return this;
    },

    /**
     * @language=en
     * Remove element at the index.
     * @param {Int} index Index of the element to remove, range from 0.
     * @returns {View} Element had been removed.
     */
    removeChildAt: function(index){
        var children = this.children;
        if(index < 0 || index >= children.length) return null;

        var child = children[index];
        if(child){
            //NOTE: use `__renderer` for fixing child removal (DOMRenderer and FlashRenderer only).
            //Do `not` use it in any other case.
            if(!child.__renderer){
                var obj = child;
                while(obj = obj.parent){
                    //obj is stage
                    if(obj.renderer){
                        child.__renderer = obj.renderer;
                        break;
                    }
                    else if(obj.__renderer){
                        child.__renderer = obj.__renderer;
                        break;
                    }
                }
            }

            if(child.__renderer){
                child.__renderer.remove(child);
            }

            child.parent = null;
            child.depth = -1;
        }

        children.splice(index, 1);
        this._updateChildren(index);

        return child;
    },

    /**
     * @language=en
     * Remove the given child element.
     * @param {View} child The child element to remove.
     * @returns {View} Element had been removed.
     */
    removeChild: function(child){
        return this.removeChildAt(this.getChildIndex(child));
    },

    /**
     * @language=en
     * Remove child element by its id.
     * @param {String} id The id of element to remove.
     * @returns {View} Element had been removed.
     */
    removeChildById: function(id){
        var children = this.children, child;
        for(var i = 0, len = children.length; i < len; i++){
            child = children[i];
            if(child.id === id){
                this.removeChildAt(i);
                return child;
            }
        }
        return null;
    },

    /**
     * @language=en
     * Remove all children elements.
     * @returns {Container} Container itself.
     */
    removeAllChildren: function(){
        while(this.children.length) this.removeChildAt(0);
        return this;
    },

    /**
     * @language=en
     * Return child element at the given index.
     * @param {Number} index The index of the element, range from 0.
     */
    getChildAt: function(index){
        var children = this.children;
        if(index < 0 || index >= children.length) return null;
        return children[index];
    },

    /**
     * @language=en
     * Return child element at the given id.
     * @param {String} id The id of child element to return.
     */
    getChildById: function(id){
        var children = this.children, child;
        for(var i = 0, len = children.length; i < len; i++){
            child = children[i];
            if(child.id === id) return child;
        }
        return null;
    },

    /**
     * @language=en
     * Return index value of the given child element.
     * @param {View} child The child element need to get its index.
     */
    getChildIndex: function(child){
        return this.children.indexOf(child);
    },

    /**
     * @language=en
     * Set the index of child element.
     * @param {View} child The child element need to set index.
     * @param {Number} index The index to set to the element.
     */
    setChildIndex: function(child, index){
        var children = this.children,
            oldIndex = children.indexOf(child);

        if(oldIndex >= 0 && oldIndex != index){
            var len = children.length;
            index = index < 0 ? 0 : index >= len ? len - 1 : index;
            children.splice(oldIndex, 1);
            children.splice(index, 0, child);
            this._updateChildren();
        }
        return this;
    },

    /**
     * @language=en
     * Swap index between two child elements.
     * @param {View} child1 Child element A.
     * @param {View} child2 Child element B.
     */
    swapChildren: function(child1, child2){
        var children = this.children,
            index1 = this.getChildIndex(child1),
            index2 = this.getChildIndex(child2);

        child1.depth = index2;
        children[index2] = child1;
        child2.depth = index1;
        children[index1] = child2;
    },

    /**
     * @language=en
     * Swap two children elements at given indexes.
     * @param {Number} index1 Given index A.
     * @param {Number} index2 Given index B.
     */
    swapChildrenAt: function(index1, index2){
        var children = this.children,
            child1 = this.getChildAt(index1),
            child2 = this.getChildAt(index2);

        child1.depth = index2;
        children[index2] = child1;
        child2.depth = index1;
        children[index1] = child2;
    },

    /**
     * @language=en
     * Sort children elements by the given key or function.
     * @param {Object} keyOrFunction If is String, sort children elements by the given property string; If is Function, sort by the function.
     */
    sortChildren: function(keyOrFunction){
        var fn = keyOrFunction,
            children = this.children;
        if(typeof fn == "string"){
            var key = fn;
            fn = function(a, b){
                return b[key] - a[key];
            };
        }
        children.sort(fn);
        this._updateChildren();
    },

    /**
     * @language=en
     * Update children elements.
     * @private
     */
    _updateChildren: function(start, end){
        var children = this.children, child;
        start = start || 0;
        end = end || children.length;
        for(var i = start; i < end; i++){
            child = children[i];
            child.depth = i + 1;
            child.parent = this;
        }
    },

    /**
     * @language=en
     * Return whether this container contains the parameter described child element.
     * @param {View} child The child element to test.
     */
    contains: function(child){
        while(child = child.parent){
            if(child === this){
                return true;
            }
        }
        return false;
    },

    /**
     * @language=en
     * Return object at the point positioned by given values on x axis and y axis.
     * @param {Number} x The point's value on the coordinate's x axis.
     * @param {Number} y The point's value on the coordinate's y asix.
     * @param {Boolean} usePolyCollision Whether use polygon collision detection, default value is false.
     * @param {Boolean} global Whether return all elements that match the condition, default value is false.
     * @param {Boolean} eventMode Whether find elements under event mode, default value is false.
     */
    getViewAtPoint: function(x, y, usePolyCollision, global, eventMode){
        var result = global ? [] : null,
            children = this.children, child, obj;

        for(var i = children.length - 1; i >= 0; i--){
            child = children[i];
            //skip child which is not shown or pointer enabled
            if(!child || !child.visible || child.alpha <= 0 || (eventMode && !child.pointerEnabled)) continue;
            //find child recursively
            if(child.children && child.children.length && !(eventMode && !child.pointerChildren)){
                obj = child.getViewAtPoint(x, y, usePolyCollision, global, eventMode);
            }

            if(obj){
                if(!global) return obj;
                else if(obj.length) result = result.concat(obj);
            }else if(child.hitTestPoint(x, y, usePolyCollision)){
                if(!global) return child;
                else result.push(child);
            }
        }

        return global && result.length ? result : null;
    },

    /**
     * @language=en
     * Rewrite render method.
     * @private
     */
    render: function(renderer, delta){
        Container.superclass.render.call(this, renderer, delta);

        var children = this.children.slice(0), i, len, child;
        for(i = 0, len = children.length; i < len; i++){
            child = children[i];
            //NOTE: the child could remove or change it's parent
            if(child.parent === this) child._render(renderer, delta);
        }
    }

});


module.exports = Container;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Hilo = __webpack_require__(1);
var Class = __webpack_require__(0);



/**
 * @language=en
 * @class Drawable is a wrapper of drawable images.
 * @param {Object} properties create Objects properties, contains all writable properties.
 * @module hilo/view/Drawable
 * @requires hilo/core/Hilo
 * @requires hilo/core/Class
 * @property {Object} image Image to be drawed, can used by CanvasRenderingContext2D.drawImage，like HTMLImageElement、HTMLCanvasElement、HTMLVideoElement。
 * @property {array} rect The retangle area that image will be drawed.
 */
var Drawable = Class.create(/** @lends Drawable.prototype */{
    constructor: function(properties){
        this.init(properties);
    },

    image: null,
    rect: null,

    /**
     * @language=en
     * Initialize drawable elements.
     * @param {Object} properties Properties need to be initialized.
     */
    init: function(properties){
        var me = this, oldImage = me.image;
        if(Drawable.isDrawable(properties)){
            me.image = properties;
        }else{
            Hilo.copy(me, properties, true);
        }

        var image = me.image;
        if(typeof image === 'string'){
            if(oldImage && image === oldImage.getAttribute('src')){
                image = me.image = oldImage;
            }else{
                me.image = null;
                //load image dynamically
                var img = new Image();
                if(properties.crossOrigin){
                    img.crossOrigin = properties.crossOrigin;
                }
                img.onload = function(){
                    img.onload = null;
                    me.init(img);
                };
                img.src = image;
                return;
            }
        }

        if(image && !me.rect) me.rect = [0, 0, image.width, image.height];
    },

    Statics: /** @lends Drawable */{
        /**
         * @language=en
         * Check whether the given 'elem' and be wrapped into Drawable object.
         * @param {Object} elem Element to be tested.
         * @return {Boolean} Return true if element can be wrapped into Drawable element, otherwises return false.
         */
        isDrawable: function(elem){
            if(!elem || !elem.tagName) return false;
            var tagName = elem.tagName.toLowerCase();
            return tagName === "img" || tagName === "canvas" || tagName === "video";
        }
    }
});

module.exports = Drawable;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Hilo = __webpack_require__(1);
var Class = __webpack_require__(0);
var EventMixin = __webpack_require__(16);
var Matrix = __webpack_require__(11);



/**
 * @language=en
 * @class View View is the base class of all display objects
 * @mixes EventMixin
 * @borrows EventMixin#on as #on
 * @borrows EventMixin#off as #off
 * @borrows EventMixin#fire as #fire
 * @param {Object} properties The properties to create a view object, contains all writeable props of this class
 * @module hilo/view/View
 * @requires hilo/core/Hilo
 * @requires hilo/core/Class
 * @requires hilo/event/EventMixin
 * @requires hilo/geom/Matrix
 * @property {String} id The identifier for the view.
 * @property {Number} x The position of the view on the x axis relative to the local coordinates of the parent, default value is 0.
 * @property {Number} y The position of the view on the y axis relative to the local coordinates of the parent, default value is 0.
 * @property {Number} width The width of the view, default value is 0.
 * @property {Number} height The height of the view, default value is 0.
 * @property {Number} alpha The opacity of the view, default value is 1.
 * @property {Number} rotation The rotation of the view in angles, default value is 0.
 * @property {Boolean} visible The visibility of the view. If false the vew will not be drawn, default value is true.
 * @property {Number} pivotX Position of the center point on the x axis of the view, default value is 0.
 * @property {Number} pivotY Position of the center point on the y axis of the view, default value is 0.
 * @property {Number} scaleX The x axis scale factor of the view, default value is 1.
 * @property {Number} scaleY The y axis scale factor of the view, default value is 1.
 * @property {Boolean} pointerEnabled Is the view can receive DOM events, default value is true.
 * @property {Object} background The background style to fill the view, can be css color, gradient or pattern of canvas
 * @property {Graphics} mask Sets a mask for the view. A mask is an object that limits the visibility of an object to the shape of the mask applied to it. A regular mask must be a Hilo.Graphics object. This allows for much faster masking in canvas as it utilises shape clipping. To remove a mask, set this property to null.
 * @property {Number} tint The tint applied to the view，default is 0xFFFFFF.Only support in WebGL mode.
 * @property {String|Function} align The alignment of the view, the value must be one of Hilo.align enum.
 * @property {Container} parent The parent view of this view, readonly!
 * @property {Number} depth The z index of the view, readonly!
 * @property {Drawable} drawable The drawable object of the view. Only for advanced develop.
 * @property {Array} boundsArea The vertex points of the view, the points are relative to the center point. This is a example: [{x:10, y:10}, {x:20, y:20}].
 */
var View = (function(){

return Class.create(/** @lends View.prototype */{
    Mixes: EventMixin,
    constructor: function(properties){
        properties = properties || {};
        this.id = this.id || properties.id || Hilo.getUid("View");
        Hilo.copy(this, properties, true);
    },

    tint:0xffffff,
    id: null,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    alpha: 1,
    rotation: 0,
    visible: true,
    pivotX: 0,
    pivotY: 0,
    scaleX: 1,
    scaleY: 1,
    pointerEnabled: true,
    background: null,
    mask: null,
    align: null,
    drawable: null,
    boundsArea: null,
    parent: null,
    depth: -1,

    /**
     * @language=en
     * Get the stage object of the view. If the view doesn't add to any stage, null will be returned.
     * @returns {Stage} The stage object of the view.
     */
    getStage: function(){
        var obj = this, parent;
        while(parent = obj.parent) obj = parent;
        //NOTE: don't use `instanceof` to prevent circular module requirement.
        //But it's not a very reliable way to check it's a stage instance.
        if(obj.canvas) return obj;
        return null;
    },

    /**
     * @language=en
     * Get the scaled width of the view.
     * @returns {Number} scaled width of the view.
     */
    getScaledWidth: function(){
        return this.width * this.scaleX;
    },

    /**
     * @language=en
     * Get the scaled height of the view.
     * @returns {Number} scaled height of the view.
     */
    getScaledHeight: function(){
        return this.height * this.scaleY;
    },

    /**
     * @language=en
     * Add current view to a Contaner.
     * @param {Container} container Container object.
     * @param {Uint} index The index of the view in container.
     * @returns {View} Current view.
     */
    addTo: function(container, index){
        if(typeof index === 'number') container.addChildAt(this, index);
        else container.addChild(this);
        return this;
    },

    /**
     * @language=en
     * Remove current view from it's parent container
     * @returns {View} Current view.
     */
    removeFromParent: function(){
        var parent = this.parent;
        if(parent) parent.removeChild(this);
        return this;
    },

    /**
     * @language=en
     * Get the bounds of the view as a circumscribed rectangle and all vertex points relative to the coordinates of the stage.
     * @returns {Array} The vertex points array, and the array contains the following properties:
     * <ul>
     * <li><b>x</b> - The position of the view on the x axis relative to the coordinates of the stage.</li>
     * <li><b>y</b> - The position of the view on the y axis relative to the coordinates of the stage.</li>
     * <li><b>width</b> - The width of circumscribed rectangle of the view.</li>
     * <li><b>height</b> - The height of circumscribed rectangle of the view</li>
     * </ul>
     */
    getBounds: function(){
        var w = this.width, h = this.height,
            mtx = this.getConcatenatedMatrix(),
            poly = this.boundsArea || [{x:0, y:0}, {x:w, y:0}, {x:w, y:h}, {x:0, y:h}],
            vertexs = [], point, x, y, minX, maxX, minY, maxY;

        for(var i = 0, len = poly.length; i < len; i++){
            point = mtx.transformPoint(poly[i], true, true);
            x = point.x;
            y = point.y;

            if(i == 0){
                minX = maxX = x;
                minY = maxY = y;
            }else{
                if(minX > x) minX = x;
                else if(maxX < x) maxX = x;
                if(minY > y) minY = y;
                else if(maxY < y) maxY = y;
            }
            vertexs[i] = point;
        }

        vertexs.x = minX;
        vertexs.y = minY;
        vertexs.width = maxX - minX;
        vertexs.height = maxY - minY;
        return vertexs;
    },

    /**
     * @language=en
     * Get the matrix that can transform points from current view coordinates to the ancestor container coordinates.
     * @param {View} ancestor The ancestor of current view, default value is the top container.
     * @private
     */
    getConcatenatedMatrix: function(ancestor){
        var mtx = new Matrix(1, 0, 0, 1, 0, 0);

        for(var o = this; o != ancestor && o.parent; o = o.parent){
            var cos = 1, sin = 0,
                rotation = o.rotation % 360,
                pivotX = o.pivotX, pivotY = o.pivotY,
                scaleX = o.scaleX, scaleY = o.scaleY;

            if(rotation){
                var r = rotation * Math.PI / 180;
                cos = Math.cos(r);
                sin = Math.sin(r);
            }

            if(pivotX != 0) mtx.tx -= pivotX;
            if(pivotY != 0) mtx.ty -= pivotY;
            mtx.concat(cos*scaleX, sin*scaleX, -sin*scaleY, cos*scaleY, o.x, o.y);
        }
        return mtx;
    },

    /**
     * @language=en
     * Determining whether a point is in the circumscribed rectangle of current view.
     * @param {Number} x The x axis relative to the stage coordinates.
     * @param {Number} y The y axis relative to the stage coordinates.
     * @param {Boolean} usePolyCollision Is use polygon collision, default value is false.
     * @returns {Boolean} the point is in the circumscribed rectangle of current view.
     */
    hitTestPoint: function(x, y, usePolyCollision){
        var bound = this.getBounds(),
            hit = x >= bound.x && x <= bound.x + bound.width &&
                  y >= bound.y && y <= bound.y + bound.height;

        if(hit && usePolyCollision){
            hit = pointInPolygon(x, y, bound);
        }
        return hit;
    },

    /**
     * @language=en
     * Determining whether an object is in the circumscribed rectangle of current view.
     * @param {View} object The object need to determining.
     * @param {Boolean} usePolyCollision Is use polygon collision, default value is false.
     */
    hitTestObject: function(object, usePolyCollision){
        var b1 = this.getBounds(),
            b2 = object.getBounds(),
            hit = b1.x <= b2.x + b2.width && b2.x <= b1.x + b1.width &&
                  b1.y <= b2.y + b2.height && b2.y <= b1.y + b1.height;

        if(hit && usePolyCollision){
            hit = polygonCollision(b1, b2);
        }
        return !!hit;
    },

    /**
     * @language=en
     * The method to render current display object. Only for advanced develop.
     * @param {Renderer} renderer Renderer object.
     * @param {Number} delta The delta time of render.
     * @protected
     */
    _render: function(renderer, delta){
        if((!this.onUpdate || this.onUpdate(delta) !== false) && renderer.startDraw(this)){
            renderer.transform(this);
            this.render(renderer, delta);
            renderer.endDraw(this);
        }
    },
    /**
     * @language=en
     * Mouse event
    */
    _fireMouseEvent:function(e){
        e.eventCurrentTarget = this;
        this.fire(e);

        // 处理mouseover事件 mouseover不需要阻止冒泡
        // handle mouseover event, mouseover needn't stop propagation.
        if(e.type == "mousemove"){
            if(!this.__mouseOver){
                this.__mouseOver = true;
                var overEvent = Hilo.copy({}, e);
                overEvent.type = "mouseover";
                this.fire(overEvent);
            }
        }
        else if(e.type == "mouseout"){
            this.__mouseOver = false;
        }

        // 向上冒泡
        // handle event propagation
        var parent = this.parent;
        if(!e._stopped && !e._stopPropagationed && parent){
            if(e.type == "mouseout" || e.type == "touchout"){
                if(!parent.hitTestPoint(e.stageX, e.stageY, true)){
                    parent._fireMouseEvent(e);
                }
            }
            else{
                parent._fireMouseEvent(e);
            }
        }
    },

    /**
     * @language=en
     * This method will call while the view need update(usually caused by ticker update). This method can return a Boolean value, if return false, the view will not be drawn.
     * Limit: If you change the index in it's parent, it will not be drawn correct in current frame but next frame is correct.
     * @type Function
     * @default null
     */
    onUpdate: null,

    /**
     * @language=en
     * The render method of current view. The subclass can implement it's own render logic by rewrite this function.
     * @param {Renderer} renderer Renderer object.
     * @param {Number} delta The delta time of render.
     */
    render: function(renderer, delta){
        renderer.draw(this);
    },

    /**
     * @language=en
     * Get a string representing current view.
     * @returns {String} string representing current view.
     */
    toString: function(){
        return Hilo.viewToString(this);
    }
});

/**
 * @language=en
 * @private
 */
function pointInPolygon(x, y, poly){
    var cross = 0, onBorder = false, minX, maxX, minY, maxY;

    for(var i = 0, len = poly.length; i < len; i++){
        var p1 = poly[i], p2 = poly[(i+1)%len];

        if(p1.y == p2.y && y == p1.y){
            p1.x > p2.x ? (minX = p2.x, maxX = p1.x) : (minX = p1.x, maxX = p2.x);
            if(x >= minX && x <= maxX){
                onBorder = true;
                continue;
            }
        }

        p1.y > p2.y ? (minY = p2.y, maxY = p1.y) : (minY = p1.y, maxY = p2.y);
        if(y < minY || y > maxY) continue;

        var nx = (y - p1.y)*(p2.x - p1.x) / (p2.y - p1.y) + p1.x;
        if(nx > x) cross++;
        else if(nx == x) onBorder = true;

        //当射线和多边形相交
        if(p1.x > x && p1.y == y){
            var p0 = poly[(len+i-1)%len];
            //当交点的两边在射线两旁
            if(p0.y < y && p2.y > y || p0.y > y && p2.y < y){
                cross ++;
            }
        }
    }

    return onBorder || (cross % 2 == 1);
}

/**
 * @language=en
 * @private
 */
function polygonCollision(poly1, poly2){
    var result = doSATCheck(poly1, poly2, {overlap:-Infinity, normal:{x:0, y:0}});
    if(result) return doSATCheck(poly2, poly1, result);
    return false;
}

/**
 * @language=en
 * @private
 */
function doSATCheck(poly1, poly2, result){
    var len1 = poly1.length, len2 = poly2.length,
        currentPoint, nextPoint, distance,
        min1, max1, min2, max2, dot, overlap, normal = {x:0, y:0};

    for(var i = 0; i < len1; i++){
        currentPoint = poly1[i];
        nextPoint = poly1[(i < len1-1 ? i+1 : 0)];

        normal.x = currentPoint.y - nextPoint.y;
        normal.y = nextPoint.x - currentPoint.x;

        distance = Math.sqrt(normal.x * normal.x + normal.y * normal.y);
        normal.x /= distance;
        normal.y /= distance;

        min1 = max1 = poly1[0].x * normal.x + poly1[0].y * normal.y;
        for(var j = 1; j < len1; j++){
            dot = poly1[j].x * normal.x + poly1[j].y * normal.y;
            if(dot > max1) max1 = dot;
            else if(dot < min1) min1 = dot;
        }

        min2 = max2 = poly2[0].x * normal.x + poly2[0].y * normal.y;
        for(j = 1; j < len2; j++){
            dot = poly2[j].x * normal.x + poly2[j].y * normal.y;
            if(dot > max2) max2 = dot;
            else if(dot < min2) min2 = dot;
        }

        if(min1 < min2){
            overlap = min2 - max1;
            normal.x = -normal.x;
            normal.y = -normal.y;
        }else{
            overlap = min1 - max2;
        }

        if(overlap >= 0){
            return false;
        }else if(overlap > result.overlap){
            result.overlap = overlap;
            result.normal.x = normal.x;
            result.normal.y = normal.y;
        }
    }

    return result;
}

})();

module.exports = View;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src___ = __webpack_require__(15);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__src___["a" /* default */]);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hilojs_view_Stage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hilojs_view_Stage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hilojs_view_Stage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hilojs_util_Ticker__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hilojs_util_Ticker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hilojs_util_Ticker__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var initStage = function () {
  function initStage() {
    var _this = this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, initStage);

    this.dpr = window.devicePixelRatio;

    this.onResizeWindowElement = function () {
      var names = ['body > h1', '#qrcode', 'body > .highlight', 'body > .header', '.container .header', '.container > .highlight'];
      if (window.innerWidth < 768) {
        _this.stageMobileShow(names, 'none');
      } else {
        _this.stageMobileShow(names, '');
      }
    };

    this.stageMobileShow = function (d, s) {
      d.forEach(function (key) {
        var dom = document.querySelector(key);
        if (!dom) {
          return;
        }
        dom.style.display = s;
      });
      var root = document.querySelector('body .example');
      var container = document.querySelector('.container');
      if (container) {
        if (s === 'none') {
          container.style.cssText = 'width: 100%; max-width: 100%;';
          root.style.padding = '0';
          document.body.style.margin = '0';
        } else {
          container.style.cssText = '';
          root.style.padding = '';
          document.body.style.margin = '';
        }
      }
    };

    this.width = (props.width || 375) * this.dpr;
    this.height = (props.height || 667) * this.dpr;
    this.renderType = props.renderType || 'canvas';
    this.initStage();
    this.onResizeWindowElement();
    window.addEventListener('resize', this.onResizeWindowElement);
  }

  _createClass(initStage, [{
    key: 'initStage',
    value: function initStage() {
      var canvas = document.createElement('canvas');
      var dom = document.getElementById('__react-content');
      dom.appendChild(canvas);
      this.stage = new __WEBPACK_IMPORTED_MODULE_0_hilojs_view_Stage___default.a({
        renderType: this.renderType,
        canvas: canvas,
        width: this.width,
        height: this.height
      });
      canvas.width = this.width;
      canvas.height = this.height;
      canvas.style.width = this.width / this.dpr + 'px';
      canvas.style.height = this.height / this.dpr + 'px';
      this.ticker = new __WEBPACK_IMPORTED_MODULE_1_hilojs_util_Ticker___default.a(30);
      this.ticker.addTick(this.stage);
      this.ticker.start();
    }
  }]);

  return initStage;
}();

/* harmony default export */ __webpack_exports__["a"] = (initStage);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Hilo = __webpack_require__(1);
var Class = __webpack_require__(0);



/**
 * @language=en
 * @class Renderer Renderer is the base class of renderer.
 * @param {Object} properties The properties to create a renderer, contains all writeable props of this class.
 * @module hilo/renderer/Renderer
 * @requires hilo/core/Hilo
 * @requires hilo/core/Class
 * @property {Object} canvas The canvas of renderer. It can be a dom element, such as a div element, or a canvas element. readonly.
 * @property {Object} stage The stage of renderer, readonly.
 * @property {String} renderType The render type of renderer, readonly.
 */
var Renderer = Class.create(/** @lends Renderer.prototype */{
    constructor: function(properties){
        properties = properties || {};
        Hilo.copy(this, properties, true);
    },

    renderType:null,
    canvas: null,
    stage: null,

    /**
     * @language=en
     * Prepare for draw visual object. The subclass need to implement it.
     * @param {View} target The visual target to draw.
     */
    startDraw: function(target){ },

    /**
     * @language=en
     * Draw the visual object. The subclass need to implement it.
     * @param {View} target The visual target to draw.
     */
    draw: function(target){ },

    /**
     * @language=en
     * The handling method after draw the visual object. The subclass need to implement it.
     * @param {View} target The visual target to draw.
     */
    endDraw: function(target){ },

    /**
     * @language=en
     * Transfrom the visual object. The subclass need to implement it.
     */
    transform: function(){ },

    /**
     * @language=en
     * Hide the visual object. The subclass need to implement it.
     */
    hide: function(){ },

    /**
     * @language=en
     * Remove the visual object from canvas. Notice that it dosen't remove the object from stage. The subclass need to implement it.
     * @param {View} target The visual target to remove.
     */
    remove: function(target){ },

    /**
     * @language=en
     * Clear the given region of canvas. The subclass need to implement it.
     * @param {Number} x The position on the x axis of the given region.
     * @param {Number} y The position on the y axis of the given region.
     * @param {Number} width The width of the given region.
     * @param {Number} height The height of the given region.
     */
    clear: function(x, y, width, height){ },

    /**
     * @language=en
     * Resize the renderer's canvas.
     * @param {Number} width The width of renderer's canvas.
     * @param {Number} height The height of the renderer's canvas.
     */
    resize: function(width, height){ }

});

module.exports = Renderer;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */


/**
 * @language=en
 * @class Ease class provides multiple easing functions for Tween.
 * @module hilo/tween/Ease
 * @static
 */
var Ease = (function(){

function createEase(obj, easeInFn, easeOutFn, easeInOutFn, easeNoneFn){
    obj = obj || {};
    easeInFn && (obj.EaseIn = easeInFn);
    easeOutFn && (obj.EaseOut = easeOutFn);
    easeInOutFn && (obj.EaseInOut = easeInOutFn);
    easeNoneFn && (obj.EaseNone = easeNoneFn);
    return obj;
}

/**
 * @language=en
 * Linear easing function.Include EaseNone.
 */
var Linear = createEase(null, null, null, null, function(k){
    return k;
});

/**
 * @language=en
 * Quad easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Quad = createEase(null,
    function(k){
        return k * k;
    },

    function(k){
        return - k * (k - 2);
    },

    function(k){
        return ((k *= 2) < 1) ? 0.5 * k * k : -0.5 * (--k * (k - 2) - 1);
    }
);

/**
 * @language=en
 * Cubic easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Cubic = createEase(null,
    function(k){
        return k * k * k;
    },

    function(k){
        return --k * k * k + 1;
    },

    function(k){
        return ((k *= 2) < 1) ? 0.5 * k * k * k : 0.5 * ((k -= 2) * k * k + 2);
    }
);

/**
 * @language=en
 * Quart easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Quart = createEase(null,
    function(k){
        return k * k * k * k;
    },

    function(k){
        return -(--k * k * k * k - 1);
    },

    function(k){
        return ((k *= 2) < 1) ? 0.5 * k * k * k * k : - 0.5 * ((k -= 2) * k * k * k - 2);
    }
);

/**
 * @language=en
 * Quint easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Quint = createEase(null,
    function(k){
        return k * k * k * k * k;
    },

    function(k){
        return (k = k - 1) * k * k * k * k + 1;
    },

    function(k){
        return ((k *= 2) < 1) ? 0.5 * k * k * k * k * k : 0.5 * ((k -= 2) * k * k * k * k + 2);
    }
);

var math = Math,
    PI = math.PI, HALF_PI = PI * 0.5,
    sin = math.sin, cos = math.cos,
    pow = math.pow, sqrt = math.sqrt;

/**
 * @language=en
 * Sine easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Sine = createEase(null,
    function(k){
        return -cos(k * HALF_PI) + 1;
    },

    function(k){
        return sin(k * HALF_PI);
    },

    function(k){
        return -0.5 * (cos(PI * k) - 1);
    }
);

/**
 * @language=en
 * Expo easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Expo = createEase(null,
    function(k){
        return k == 0 ? 0 : pow(2, 10 * (k - 1));
    },

    function(k){
        return k == 1 ? 1 : -pow(2, -10 * k) + 1;
    },

    function(k){
        if(k == 0 || k == 1) return k;
        if((k *= 2) < 1) return 0.5 * pow(2, 10 * (k - 1));
        return 0.5 * (-pow(2, - 10 * (k - 1)) + 2);
    }
);

/**
 * @language=en
 * Circ easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Circ = createEase(null,
    function(k){
        return -(sqrt(1 - k * k) - 1);
    },

    function(k){
        return sqrt(1 - (--k * k));
    },

    function(k){
        if((k /= 0.5) < 1) return - 0.5 * (sqrt(1 - k * k) - 1);
        return 0.5 * (sqrt(1 - (k -= 2) * k) + 1);
    }
);

/**
 * @language=en
 * Elastic easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Elastic = createEase(
    {
        a: 1,
        p: 0.4,
        s: 0.1,

        config: function(amplitude, period){
            Elastic.a = amplitude;
            Elastic.p = period;
            Elastic.s = period / (2 * PI) * Math.asin(1 / amplitude) || 0;
        }
    },

    function(k){
        return -(Elastic.a * pow(2, 10 * (k -= 1)) * sin((k - Elastic.s) * (2 * PI) / Elastic.p));
    },

    function(k){
        return (Elastic.a * pow(2, -10 * k) * sin((k - Elastic.s) * (2 * PI) / Elastic.p) + 1);
    },

    function(k){
        return ((k *= 2) < 1) ? -0.5 * (Elastic.a * pow(2, 10 * (k -= 1)) * sin((k - Elastic.s) * (2 * PI) / Elastic.p)) :
               Elastic.a * pow(2, -10 * (k -= 1)) * sin((k - Elastic.s) * (2 * PI) / Elastic.p) * 0.5 + 1;
    }
);

/**
 * @language=en
 * Back easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Back = createEase(
    {
        o: 1.70158,
        s: 2.59491,

        config: function(overshoot){
            Back.o = overshoot;
            Back.s = overshoot * 1.525;
        }
    },

    function(k){
        return k * k * ((Back.o + 1) * k - Back.o);
    },

    function(k){
        return (k = k - 1) * k * ((Back.o + 1) * k + Back.o) + 1;
    },

    function(k){
        return ((k *= 2) < 1) ? 0.5 * (k * k * ((Back.s + 1) * k - Back.s)) : 0.5 * ((k -= 2) * k * ((Back.s + 1) * k + Back.s) + 2);
    }
);

/**
 * @language=en
 * Bounce easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Bounce = createEase(null,
    function(k){
        return 1 - Bounce.EaseOut(1 - k);
    },

    function(k){
        if((k /= 1) < 0.36364){
            return 7.5625 * k * k;
        }else if(k < 0.72727){
            return 7.5625 * (k -= 0.54545) * k + 0.75;
        }else if(k < 0.90909){
            return 7.5625 * (k -= 0.81818) * k + 0.9375;
        }else{
            return 7.5625 * (k -= 0.95455) * k + 0.984375;
        }
    },

    function(k){
        return k < 0.5 ? Bounce.EaseIn(k * 2) * 0.5 : Bounce.EaseOut(k * 2 - 1) * 0.5 + 0.5;
    }
);

return {
    Linear: Linear,
    Quad: Quad,
    Cubic: Cubic,
    Quart: Quart,
    Quint: Quint,
    Sine: Sine,
    Expo: Expo,
    Circ: Circ,
    Elastic: Elastic,
    Back: Back,
    Bounce: Bounce
};

})();

module.exports = Ease;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Class = __webpack_require__(0);



/**
 * @language=en
 * @class Matrix class is a transforming matrix, which declare how points in one coordinate maped to another coordinate.
 * @param {Number} a The value affects pixel positioning alongside the x axis when Scale or rotate images.
 * @param {Number} b The value affects pixel positioning alongside the y axis when rotate or skew images.
 * @param {Number} c The value affects pixel positioning alongside the x axis when rotate or skew images.
 * @param {Number} d The value affects pixel positioning alongside the y axis when Scale or rotate images.
 * @param {Number} tx The distance to move every point alongside the x axis.
 * @param {Number} ty The distance to move every point alongside the y axis.
 * @module hilo/geom/Matrix
 * @requires hilo/core/Class
 */
var Matrix = Class.create(/** @lends Matrix.prototype */{
    constructor: function(a, b, c, d, tx, ty){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
    },

    /**
     * @language=en
     * Link a Matrix to current Matrix, in order to make geometry effects on these two composed more effective.
     * @param {Matrix} mtx Matrix that link to the source matrix.
     * @returns {Matrix} A Matrix Object.
     */
    concat: function(mtx){
        var args = arguments,
            a = this.a, b = this.b, c = this.c, d = this.d,
            tx = this.tx, ty = this.ty;

        var ma, mb, mc, md, mx, my;
        if(args.length >= 6){
            ma = args[0];
            mb = args[1];
            mc = args[2];
            md = args[3];
            mx = args[4];
            my = args[5];
        }
        else{
            ma = mtx.a;
            mb = mtx.b;
            mc = mtx.c;
            md = mtx.d;
            mx = mtx.tx;
            my = mtx.ty;
        }

        this.a = a * ma + b * mc;
        this.b = a * mb + b * md;
        this.c = c * ma + d * mc;
        this.d = c * mb + d * md;
        this.tx = tx * ma + ty * mc + mx;
        this.ty = tx * mb + ty * md + my;
        return this;
    },

    /**
     * @language=en
     * Rotate the Matrix Object.
     * @param {Number} angle The angle to rotate.
     * @returns {Matrix} A Matrix object.
     */
    rotate: function(angle){
        var sin = Math.sin(angle), cos = Math.cos(angle),
            a = this.a, b = this.b, c = this.c, d = this.d,
            tx = this.tx, ty = this.ty;

        this.a = a * cos - b * sin;
        this.b = a * sin + b * cos;
        this.c = c * cos - d * sin;
        this.d = c * sin + d * cos;
        this.tx = tx * cos - ty * sin;
        this.ty = tx * sin + ty * cos;
        return this;
    },

    /**
     * @language=en
     * Scale the Matrix.
     * @param {Number} sx The value to multiply those object scale alongside the x axis.
     * @param {Number} sy The value to multiply those object scale alongside the y axis.
     * @returns {Matrix} A Matrix object.
     */
    scale: function(sx, sy){
        this.a *= sx;
        this.d *= sy;
        this.c *= sx;
        this.b *= sy;
        this.tx *= sx;
        this.ty *= sy;
        return this;
    },

    /**
     * @language=en
     * Translate the Matrix alongside x axis and y axis by dx and dy.
     * @param {Number} dx Translate Matrix alongside the x axis to the right (measured in px).
     * @param {Number} dy Translate Matrix alongside the y axis to the right (measured in px).
     * @returns {Matrix} A Matrix object.
     */
    translate: function(dx, dy){
        this.tx += dx;
        this.ty += dy;
        return this;
    },

    /**
     * @language=en
     * Set each Matrix property a value to trigger null transform. The Matrix after applying identity matrix transformation will be exactly the same as original.
     * @returns {Matrix} A Matrix object.
     */
    identity: function(){
        this.a = this.d = 1;
        this.b = this.c = this.tx = this.ty = 0;
        return this;
    },

    /**
     * @language=en
     * Apply an invert transformation of original Matrix. Using this invert transformation, you can reset a Matrix to a state before it had been apply some Matrix.
     * @returns {Matrix} A Matrix object.
     */
    invert: function(){
        var a = this.a;
        var b = this.b;
        var c = this.c;
        var d = this.d;
        var tx = this.tx;
        var i = a * d - b * c;

        this.a = d / i;
        this.b = -b / i;
        this.c = -c / i;
        this.d = a / i;
        this.tx = (c * this.ty - d * tx) / i;
        this.ty = -(a * this.ty - b * tx) / i;
        return this;
    },

    /**
     * @language=en
     * Return the result after apply a Matrix displaying transform on the point.
     * @param {Object} point Point need to transform.
     * @param {Boolean} round Whether ceil the coordinate values of the point.
     * @param {Boolean} returnNew Whether return a new point.
     * @returns {Object} 由应用矩阵转换所产生的点。
     */
    transformPoint: function(point, round, returnNew){
        var x = point.x * this.a + point.y * this.c + this.tx,
            y = point.x * this.b + point.y * this.d + this.ty;

        if(round){
            x = x + 0.5 >> 0;
            y = y + 0.5 >> 0;
        }
        if(returnNew) return {x:x, y:y};
        point.x = x;
        point.y = y;
        return point;
    }

});


module.exports = Matrix;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hilojs_view_Bitmap__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hilojs_view_Bitmap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hilojs_view_Bitmap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hilojs_view_Container__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hilojs_view_Container___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hilojs_view_Container__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hilojs_tween_Ease__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hilojs_tween_Ease___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hilojs_tween_Ease__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ParallaxContainer = function (_Container) {
  _inherits(ParallaxContainer, _Container);

  /**
   * cameraStart 初始当前坐标
   * @type {number} or {object<{ x, y }>}
   */

  /**
   * animateQueue 动画队列
   * @type {Array}
   */

  /**
   * duration 动画时间
   * @type {number}
   */

  /**
   * type 可选参数 x（横向）, y(竖向), xy.
   * xy 时 animateTo 里的 value 必须为 { x, y }
   * @type {string}
   */

  /**
   * invert is true moves layers in opposition to the device motion.
   * invert 如果是 true 则做反向动画。
   * @type {boolean}
   */

  /**
   * width
   * @type {number}
   */
  function ParallaxContainer(props) {
    _classCallCheck(this, ParallaxContainer);

    var _this = _possibleConstructorReturn(this, (ParallaxContainer.__proto__ || Object.getPrototypeOf(ParallaxContainer)).call(this, props));

    _this.childrens = [];
    _this.width = 200;
    _this.height = 200;
    _this.invert = false;
    _this.loop = false;
    _this.type = 'x';
    _this.stack = 'reset';
    _this.duration = 1000;
    _this.ease = __WEBPACK_IMPORTED_MODULE_2_hilojs_tween_Ease___default.a.Quad.EaseOut;
    _this.animateQueue = [];
    _this.animate = {};
    _this.cameraStart = 0;
    _this.startPercent = 0;

    _this.newImage = function (item) {
      var data = _extends({}, item);
      delete data.childrens;
      delete data.depth;
      var imageData = _extends({}, data.imageData);
      delete imageData.cpPosition;
      delete data.imageData;
      return new __WEBPACK_IMPORTED_MODULE_0_hilojs_view_Bitmap___default.a(_extends({
        image: item.children
      }, data, imageData));
    };

    _this.getValue = function (config, easeValue, type) {
      var start = type ? config.startValue[type] : config.startValue;
      var end = type ? config.endValue[type] : config.endValue;
      return start + (end - start) * easeValue - end;
    };

    ParallaxContainer.superclass.constructor.call(_this, props);
    _this.init();
    return _this;
  }

  /**
   * init children
   */


  /**
   * startPercent 第一次进入显示在动画的百多比 0-1 之间;
   * @type {number}
   */

  /**
   * animate 当前动画的值储存.
   * @type {{}}
   */

  /**
   * ease 动画缓动
   * @type {Hilo.Ease}
   */

  /**
   * stack 动画方式，可选参数 add, reset;
   * @type {string}
   * @param {add}: 为不结束前面一个动画，往动画队列里添加后面即将发生的动画， 为多轨动画， 比较耗性能;
   * @param {reset}: 保持单个动画的运行，强制结束前面一个动画， 单轨动画。
   */

  /**
   * loop 是否重复播放.
   * @type {boolean}
   * loop 不能与切换动画同时使用. animateTo 只支持一次.
   */

  /**
   * height
   * @type {number}
   */

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


  _createClass(ParallaxContainer, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.childrens.forEach(function (item) {
        if (!item.children) {
          return;
        }
        if (typeof item.children === 'string') {
          // 新建两个图层平辅，可循环动画;
          var imageWrapper = new __WEBPACK_IMPORTED_MODULE_1_hilojs_view_Container___default.a();
          var image = _this2.newImage(item);
          imageWrapper.addChild(image);
          if (item.imageData && item.imageData.cpPosition) {
            var imageCp = _this2.newImage(item);
            imageWrapper.addChild(imageCp);
            var cpPos = item.imageData.cpPosition;
            if (_this2.type === 'xy') {
              imageCp.x = (cpPos.x || 0) + item.imageData.cpPosition.x * item.depth;
              imageCp.y = (cpPos.y || 0) + item.imageData.cpPosition.y * item.depth;
            } else {
              imageCp[_this2.type] = (cpPos[_this2.type] || 0) + item.imageData.cpPosition * item.depth;
            }
          }
          _this2.addChild(imageWrapper);
        } else if (_typeof(item.children) === 'object') {
          // view 元素自行控制平辅。。。
          _this2.addChild(item.children);
        }
      });
      this.start = this.children.map(function (item) {
        return { x: item.x || 0, y: item.y || 0 };
      });
      this.repeat = 0;
    }
  }, {
    key: 'getTweenValue',
    value: function getTweenValue() {
      var _this3 = this;

      var timestamp = Date.now();
      var tweenValue = this.type === 'xy' ? _extends({}, this.animate[this.type]) : this.animate[this.type];

      this.animateQueue = this.animateQueue.map(function (_item) {
        var item = _item;
        var time = item.isOneEnter ? timestamp - item.initTime : timestamp + _this3.startPercent * item.duration - item.initTime;
        var ratio = time / item.duration > 1 ? 1 : Math.max(0, time / item.duration);
        var easeValue = item.ease(_this3.invert && _this3.repeat % 2 ? 1 - ratio : ratio);
        var value = void 0;
        if (_this3.type === 'xy') {
          value = {
            x: _this3.getValue(item.config, easeValue, 'x'),
            y: _this3.getValue(item.config, easeValue, 'y')
          };
          tweenValue.x += value.x;
          tweenValue.y += value.y;
        } else {
          value = _this3.getValue(item.config, easeValue);
          tweenValue += value;
        }
        if (time >= item.duration) {
          item.isOneEnter = true;
          if (_this3.loop) {
            item.initTime = Date.now();
            _this3.repeat += 1;
            return item;
          }
          return null;
        }
        return item;
      }).filter(function (item) {
        return item;
      });
      return tweenValue;
    }

    /**
     * animate self start.
     * @param {value} animation to data;
     * @param {animateProps} animation param
     */

  }, {
    key: 'cameraAnimateTo',
    value: function cameraAnimateTo(value) {
      var animateProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.loop && this.animateQueue.length) {
        throw new Error('Cannot be used simultaneously loop and cameraAnimateTo');
      }
      var startValue = void 0;
      var endValue = void 0;
      var isReset = this.stack === 'reset';
      if (this.type === 'xy') {
        var st = this.animate[this.type];
        var ss = isReset ? this.getTweenValue() : st;
        startValue = {
          x: ss.x || this.cameraStart.x || 0,
          y: ss.y || this.cameraStart.y || 0
        };
        endValue = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value : { x: value, y: value };
      } else {
        startValue = (isReset ? this.getTweenValue() : this.animate[this.type]) || this.cameraStart || 0;
        endValue = value;
      }

      var config = {
        endValue: endValue,
        startValue: startValue
      };
      this.animate[this.type] = endValue;

      var duration = animateProps.duration || this.duration;

      var ease = animateProps.duration || this.ease;
      if (isReset) {
        this.animateQueue = [];
      }

      this.animateQueue.push({
        type: this.type,
        config: config,
        initTime: Date.now(),
        duration: duration,
        ease: ease
      });
    }
  }, {
    key: 'render',
    value: function render(renderer, delta) {
      var _this4 = this;

      __WEBPACK_IMPORTED_MODULE_1_hilojs_view_Container___default.a.superclass.render.call(this, renderer, delta);

      var children = this.children.slice(0);
      children.forEach(function (child) {
        if (child.parent === _this4) {
          child._render(renderer, delta);
        }
      });

      if (this.animateQueue.length) {
        var value = this.getTweenValue();
        this.children.forEach(function (_item, i) {
          var item = _item;
          var depth = _this4.childrens[i].depth;
          if (_this4.type === 'x') {
            item.x = _this4.start[i].x - value * depth;
          } else if (_this4.type === 'y') {
            item.y = _this4.start[i].y - value * depth;
          } else {
            item.x = _this4.start[i].x - value.x * depth;
            item.y = _this4.start[i].y - value.y * depth;
          }
        });
      }
    }
  }]);

  return ParallaxContainer;
}(__WEBPACK_IMPORTED_MODULE_1_hilojs_view_Container___default.a);

/* harmony default export */ __webpack_exports__["a"] = (ParallaxContainer);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Class = __webpack_require__(0);



/**
 * @language=en
 * @class EventMixin is a mixin on event related functions. Use Class.mix(target, EventMixin) to add event function onto target.
 * @static
 * @mixin
 * @module hilo/event/EventMixin
 * @requires hilo/core/Class
 */
var EventMixin = /** @lends EventMixin# */{
    _listeners: null,

    /**
     * @language=en
     * Add an event listenser.
     * @param {String} type Event type to listen.
     * @param {Function} listener Callback function of event listening.
     * @param {Boolean} once Listen on event only once and no more response after the first response?
     * @returns {Object} The Event itself. Functions chain call supported.
     */
    on: function(type, listener, once){
        var listeners = (this._listeners = this._listeners || {});
        var eventListeners = (listeners[type] = listeners[type] || []);
        for(var i = 0, len = eventListeners.length; i < len; i++){
            var el = eventListeners[i];
            if(el.listener === listener) return;
        }
        eventListeners.push({listener:listener, once:once});
        return this;
    },

    /**
     * @language=en
     * Remove one event listener. Remove all event listeners if no parameter provided, and remove all event listeners on one type which is provided as the only parameter.
     * @param {String} type The type of event listener that want to remove.
     * @param {Function} listener Event listener callback function to be removed.
     * @returns {Object} The Event itself. Functions chain call supported.
     */
    off: function(type, listener){
        //remove all event listeners
        if(arguments.length == 0){
            this._listeners = null;
            return this;
        }

        var eventListeners = this._listeners && this._listeners[type];
        if(eventListeners){
            //remove event listeners by specified type
            if(arguments.length == 1){
                delete this._listeners[type];
                return this;
            }

            for(var i = 0, len = eventListeners.length; i < len; i++){
                var el = eventListeners[i];
                if(el.listener === listener){
                    eventListeners.splice(i, 1);
                    if(eventListeners.length === 0) delete this._listeners[type];
                    break;
                }
            }
        }
        return this;
    },

    /**
     * @language=en
     * Send events. If the first parameter is an Object, take it  as an Event Object.
     * @param {String} type Event type to send.
     * @param {Object} detail The detail (parameters go with the event) of Event to send.
     * @returns {Boolean} Whether Event call successfully.
     */
    fire: function(type, detail){
        var event, eventType;
        if(typeof type === 'string'){
            eventType = type;
        }else{
            event = type;
            eventType = type.type;
        }

        var listeners = this._listeners;
        if(!listeners) return false;

        var eventListeners = listeners[eventType];
        if(eventListeners){
            var eventListenersCopy = eventListeners.slice(0);
            event = event || new EventObject(eventType, this, detail);
            if(event._stopped) return false;

            for(var i = 0; i < eventListenersCopy.length; i++){
                var el = eventListenersCopy[i];
                el.listener.call(this, event);
                if(el.once) {
                    var index = eventListeners.indexOf(el);
                    if(index > -1){
                        eventListeners.splice(index, 1);
                    }
                }
            }

            if(eventListeners.length == 0) delete listeners[eventType];
            return true;
        }
        return false;
    }
};

/**
 * @language=en
 * Event Object class. It's an private class now, but maybe will become a public class if needed.
 */
var EventObject = Class.create({
    constructor: function EventObject(type, target, detail){
        this.type = type;
        this.target = target;
        this.detail = detail;
        this.timeStamp = +new Date();
    },

    type: null,
    target: null,
    detail: null,
    timeStamp: 0,

    stopImmediatePropagation: function(){
        this._stopped = true;
    }
});

//Trick: `stopImmediatePropagation` compatibility
var RawEvent = window.Event;
if(RawEvent){
    var proto = RawEvent.prototype,
        stop = proto.stopImmediatePropagation;
    proto.stopImmediatePropagation = function(){
        stop && stop.call(this);
        this._stopped = true;
    };
}


module.exports = EventMixin;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Class = __webpack_require__(0);
var Hilo = __webpack_require__(1);
var Renderer = __webpack_require__(7);



/**
 * @language=en
 * @class CanvasRenderer CanvasRenderer, all the visual object is drawing on the canvas element.The stage will create different renderer depend on the canvas and renderType properties, developer need not use this class directly.
 * @augments Renderer
 * @param {Object} properties The properties to create a renderer, contains all writeable props of this class.
 * @module hilo/renderer/CanvasRenderer
 * @requires hilo/core/Class
 * @requires hilo/core/Hilo
 * @requires hilo/renderer/Renderer
 * @property {CanvasRenderingContext2D} context The context of the canvas element, readonly.
 */
var CanvasRenderer = Class.create(/** @lends CanvasRenderer.prototype */{
    Extends: Renderer,
    constructor: function(properties){
        CanvasRenderer.superclass.constructor.call(this, properties);

        this.context = this.canvas.getContext("2d");
    },
    renderType:'canvas',
    context: null,

    /**
     * @private
     * @see Renderer#startDraw
     */
    startDraw: function(target){
        if(target.visible && target.alpha > 0){
            if(target === this.stage){
                this.context.clearRect(0, 0, target.width, target.height);
            }
            this.context.save();
            return true;
        }
        return false;
    },

    /**
     * @private
     * @see Renderer#draw
     */
    draw: function(target){
        var ctx = this.context, w = target.width, h = target.height;

        //draw background
        var bg = target.background;
        if(bg){
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, w, h);
        }

        //draw image
        var drawable = target.drawable, image = drawable && drawable.image;
        if(image){
            var rect = drawable.rect, sw = rect[2], sh = rect[3], offsetX = rect[4], offsetY = rect[5];
            //ie9+浏览器宽高为0时会报错 fixed ie9 bug.
            if(!sw || !sh){
                return;
            }
            if(!w && !h){
                //fix width/height TODO: how to get rid of this?
                w = target.width = sw;
                h = target.height = sh;
            }
            //the pivot is the center of frame if has offset, otherwise is (0, 0)
            if(offsetX || offsetY) ctx.translate(offsetX - sw * 0.5, offsetY - sh * 0.5);
            ctx.drawImage(image, rect[0], rect[1], sw, sh, 0, 0, w, h);
        }
    },

    /**
     * @private
     * @see Renderer#endDraw
     */
    endDraw: function(target){
        this.context.restore();
    },

    /**
     * @private
     * @see Renderer#transform
     */
    transform: function(target){
        var drawable = target.drawable;
        if(drawable && drawable.domElement){
            Hilo.setElementStyleByView(target);
            return;
        }

        var ctx = this.context,
            scaleX = target.scaleX,
            scaleY = target.scaleY;

        if(target === this.stage){
            var style = this.canvas.style,
                oldScaleX = target._scaleX,
                oldScaleY = target._scaleY,
                isStyleChange = false;

            if((!oldScaleX && scaleX != 1) || (oldScaleX && oldScaleX != scaleX)){
                target._scaleX = scaleX;
                style.width = scaleX * target.width + "px";
                isStyleChange = true;
            }
            if((!oldScaleY && scaleY != 1) || (oldScaleY && oldScaleY != scaleY)){
                target._scaleY = scaleY;
                style.height = scaleY * target.height + "px";
                isStyleChange = true;
            }
            if(isStyleChange){
                target.updateViewport();
            }
        }else{
            var x = target.x,
                y = target.y,
                pivotX = target.pivotX,
                pivotY = target.pivotY,
                rotation = target.rotation % 360,
                mask = target.mask;

            if(mask){
                mask._render(this);
                ctx.clip();
            }

            //alignment
            var align = target.align;
            if(align){
                if(typeof align === 'function'){
                    target.align();
                }else{
                    var parent = target.parent;
                    if(parent){
                        var w = target.width, h = target.height,
                            pw = parent.width, ph = parent.height;
                        switch(align){
                            case 'TL':
                                x = 0;
                                y = 0;
                                break;
                            case 'T':
                                x = pw - w >> 1;
                                y = 0;
                                break;
                            case 'TR':
                                x = pw - w;
                                y = 0;
                                break;
                            case 'L':
                                x = 0;
                                y = ph - h >> 1;
                                break;
                            case 'C':
                                x = pw - w >> 1;
                                y = ph - h >> 1;
                                break;
                            case 'R':
                                x = pw - w;
                                y = ph - h >> 1;
                                break;
                            case 'BL':
                                x = 0;
                                y = ph - h;
                                break;
                            case 'B':
                                x = pw - w >> 1;
                                y = ph - h;
                                break;
                            case 'BR':
                                x = pw - w;
                                y = ph - h;
                                break;
                        }
                    }
                }
            }

            if(x != 0 || y != 0) ctx.translate(x, y);
            if(rotation != 0) ctx.rotate(rotation * Math.PI / 180);
            if(scaleX != 1 || scaleY != 1) ctx.scale(scaleX, scaleY);
            if(pivotX != 0 || pivotY != 0) ctx.translate(-pivotX, -pivotY);
        }

        if(target.alpha > 0) ctx.globalAlpha *= target.alpha;
    },

    /**
     * @private
     * @see Renderer#remove
     */
    remove: function(target){
        var drawable = target.drawable;
        var elem = drawable && drawable.domElement;

        if(elem){
            var parentElem = elem.parentNode;
            if(parentElem){
                parentElem.removeChild(elem);
            }
        }
    },

    /**
     * @private
     * @see Renderer#clear
     */
    clear: function(x, y, width, height){
        this.context.clearRect(x, y, width, height);
    },

    /**
     * @private
     * @see Renderer#resize
     */
    resize: function(width, height){
        var canvas = this.canvas;
        var stage = this.stage;
        var style = canvas.style;

        canvas.width = width;
        canvas.height = height;

        style.width = stage.width * stage.scaleX + 'px';
        style.height = stage.height * stage.scaleY + 'px';
    }

});

module.exports = CanvasRenderer;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Class = __webpack_require__(0);
var Hilo = __webpack_require__(1);
var Renderer = __webpack_require__(7);
var Drawable = __webpack_require__(3);



/**
 * @language=en
 * @class DomRenderer The DomRenderer, all the visual object is drawing using dom element.The stage will create different renderer depend on the canvas and renderType properties, developer need not use this class directly.
 * @augments Renderer
 * @param {Object} properties The properties to create a renderer, contains all writeable props of this class.
 * @module hilo/renderer/DOMRenderer
 * @requires hilo/core/Class
 * @requires hilo/core/Hilo
 * @requires hilo/renderer/Renderer
 * @requires hilo/view/Drawable
 */
var DOMRenderer = (function(){

return Class.create({
    Extends: Renderer,
    constructor: function(properties){
        DOMRenderer.superclass.constructor.call(this, properties);
    },
    renderType:'dom',
    /**
     * @private
     * @see Renderer#startDraw
     */
    startDraw: function(target){
        //prepare drawable
        var drawable = (target.drawable = target.drawable || new Drawable());
        drawable.domElement = drawable.domElement || createDOMDrawable(target, drawable);
        return true;
    },

    /**
     * @private
     * @see Renderer#draw
     */
    draw: function(target){
        var parent = target.parent,
            targetElem = target.drawable.domElement,
            currentParent = targetElem.parentNode;

        if(parent){
            var parentElem = parent.drawable.domElement;
            if(parentElem != currentParent){
                parentElem.appendChild(targetElem);
            }
            //fix image load bug
            if(!target.width && !target.height){
                var rect = target.drawable.rect;
                if(rect && (rect[2] || rect[3])){
                    target.width = rect[2];
                    target.height = rect[3];
                }
            }
        }
        else if(target === this.stage && !currentParent){
            targetElem.style.overflow = 'hidden';
            this.canvas.appendChild(targetElem);
        }
    },

    /**
     * @private
     * @see Renderer#transform
     */
    transform: function(target){
        Hilo.setElementStyleByView(target);
        if(target === this.stage){
            var style = this.canvas.style,
                oldScaleX = target._scaleX,
                oldScaleY = target._scaleY,
                scaleX = target.scaleX,
                scaleY = target.scaleY;

            if((!oldScaleX && scaleX != 1) || (oldScaleX && oldScaleX != scaleX)){
                target._scaleX = scaleX;
                style.width = scaleX * target.width + "px";
            }
            if((!oldScaleY && scaleY != 1) || (oldScaleY && oldScaleY != scaleY)){
                target._scaleY = scaleY;
                style.height = scaleY * target.height + "px";
            }
        }
    },

    /**
     * @private
     * @see Renderer#remove
     */
    remove: function(target){
        var drawable = target.drawable;
        var elem = drawable && drawable.domElement;

        if(elem){
            var parentElem = elem.parentNode;
            if(parentElem){
                parentElem.removeChild(elem);
            }
        }
    },

    /**
     * @private
     * @see Renderer#hide
     */
    hide: function(target){
        var elem = target.drawable && target.drawable.domElement;
        if(elem) elem.style.display = 'none';
    },

    /**
     * @private
     * @see Renderer#resize
     */
    resize: function(width, height){
        var style = this.canvas.style;
        style.width = width + 'px';
        style.height = height + 'px';
        if(style.position != "absolute") {
          style.position = "relative";
        }
    }
});

/**
 * @language=en
 * Create a dom element, you can set the tagName property，such as canvas and div.
 * @param {Object} view A visual object.
 * @param {Object} imageObj The image object to render, include the image propertiy and other associated properties, such as rect.
 * @return {HTMLElement} The created dom element.
 * @private
 */
function createDOMDrawable(view, imageObj){
    var tag = view.tagName || "div",
        img = imageObj.image,
        w = view.width || (img && img.width),
        h =  view.height || (img && img.height),
        elem = Hilo.createElement(tag), style = elem.style;

    if(view.id) elem.id = view.id;
    style.position = "absolute";
    style.left = (view.left || 0) + "px";
    style.top = (view.top || 0) + "px";
    style.width = w + "px";
    style.height = h + "px";

    if(tag == "canvas"){
        elem.width = w;
        elem.height = h;
        if(img){
            var ctx = elem.getContext("2d");
            var rect = imageObj.rect || [0, 0, w, h];
            ctx.drawImage(img, rect[0], rect[1], rect[2], rect[3],
                         (view.x || 0), (view.y || 0),
                         (view.width || rect[2]),
                         (view.height || rect[3]));
        }
    }else{
        style.opacity = view.alpha != undefined ? view.alpha : 1;
        if(view === this.stage || view.clipChildren) style.overflow = "hidden";
        if(img && img.src){
            style.backgroundImage = "url(" + img.src + ")";
            var bgX = view.rectX || 0, bgY = view.rectY || 0;
            style.backgroundPosition = (-bgX) + "px " + (-bgY) + "px";
        }
    }
    return elem;
}

})();


module.exports = DOMRenderer;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Class = __webpack_require__(0);
var Renderer = __webpack_require__(7);
var Matrix = __webpack_require__(11);



/**
 * Heavily inspired by PIXI's SpriteRenderer:
 * https://github.com/pixijs/pixi.js/blob/v3.0.9/src/core/sprites/webgl/SpriteRenderer.js
 */

var DEG2RAD = Math.PI / 180;
/**
 * @language=en
 * @class WebGLRenderer The WebGLRenderer, all the visual object is drawing on the canvas using WebGL.The stage will create different renderer depend on the canvas and renderType properties, developer need not use this class directly.
 * @augments Renderer
 * @param {Object} properties The properties to create a renderer, contains all writeable props of this class.
 * @module hilo/renderer/WebGLRenderer
 * @requires hilo/core/Class
 * @requires hilo/renderer/Renderer
 * @requires  hilo/geom/Matrix
 * @property {WebGLRenderingContext} gl The WebGL context of the renderer, readonly.
 */
var WebGLRenderer = Class.create(/** @lends WebGLRenderer.prototype */{
    Extends: Renderer,
    Statics:/** @lends WebGLRenderer */{
        /**
         * @language=en
         * The max num of batch draw, default is 2000.
         * @type {Number}
         */
        MAX_BATCH_NUM:2000,
        /**
         * @language=en
         * The num of vertex attributes, readonly.
         * @type {Number}
         */
        ATTRIBUTE_NUM:5,
        /**
         * @language=en
         * is WebGL supported, readonly.
         * @type {Boolean}
         */
        isSupport:function(){
            if(this._isSupported == undefined){
                var canvas = document.createElement('canvas');
                if(canvas.getContext && (canvas.getContext('webgl')||canvas.getContext('experimental-webgl'))){
                    this._isSupported = true;
                }
                else{
                    this._isSupported = false;
                }
            }
            return this._isSupported;
        }
    },
    renderType:'webgl',
    gl:null,
    _isContextLost:false,
    _cacheTexture:{},
    constructor: function(properties){
        WebGLRenderer.superclass.constructor.call(this, properties);
        var that = this;
        this.gl = this.canvas.getContext("webgl")||this.canvas.getContext('experimental-webgl');

        this.maxBatchNum = WebGLRenderer.MAX_BATCH_NUM;
        this.positionStride = WebGLRenderer.ATTRIBUTE_NUM * 4;
        var vertexNum = this.maxBatchNum * WebGLRenderer.ATTRIBUTE_NUM * 4;
        var indexNum = this.maxBatchNum * 6;
        this.arrayBuffer = new ArrayBuffer(vertexNum * 4);
        this.float32Array = new Float32Array(this.arrayBuffer);
        this.uint32Array = new Uint32Array(this.arrayBuffer);
        this.indexs = new Uint16Array(indexNum);
        for (var i=0, j=0; i < indexNum; i += 6, j += 4)
        {
            this.indexs[i + 0] = j + 0;
            this.indexs[i + 1] = j + 1;
            this.indexs[i + 2] = j + 2;
            this.indexs[i + 3] = j + 1;
            this.indexs[i + 4] = j + 2;
            this.indexs[i + 5] = j + 3;
        }
        this.batchIndex = 0;
        this.sprites = [];

        this.canvas.addEventListener('webglcontextlost', function(e){
            that._isContextLost = true;
            e.preventDefault();
        }, false);

        this.canvas.addEventListener('webglcontextrestored', function(e){
            that._isContextLost = false;
            that.setupWebGLStateAndResource();
        }, false);

        this.setupWebGLStateAndResource();
    },
    setupWebGLStateAndResource:function(){
        var gl = this.gl;
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.clearColor(0, 0, 0, 0);
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);
        gl.enable(gl.BLEND);

        this._cacheTexture = {};
        this._initShaders();
        this.defaultShader.active();

        this.positionBuffer = gl.createBuffer();
        this.indexBuffer = gl.createBuffer();

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indexs, gl.STATIC_DRAW);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.arrayBuffer, gl.DYNAMIC_DRAW);

        gl.vertexAttribPointer(this.a_position, 2, gl.FLOAT, false, this.positionStride, 0);//x, y
        gl.vertexAttribPointer(this.a_TexCoord, 2, gl.FLOAT, false, this.positionStride, 2 * 4);//x, y
        gl.vertexAttribPointer(this.a_tint, 4, gl.UNSIGNED_BYTE, true, this.positionStride, 4 * 4);//alpha
    },

    context: null,

    /**
     * @private
     * @see Renderer#startDraw
     */
    startDraw: function(target){
        if(target.visible && target.alpha > 0){
            if(target === this.stage){
                this.clear();
            }
            return true;
        }
        return false;
    },
    /**
     * @private
     * @see Renderer#draw
     */
    draw: function(target){
        var w = target.width,
            h = target.height;

        //TODO:draw background
        var bg = target.background; // jshint ignore:line

        //draw image
        var drawable = target.drawable, image = drawable && drawable.image;
        if(image){
            var rect = drawable.rect, sw = rect[2], sh = rect[3];
            if(!w && !h){
                //fix width/height TODO: how to get rid of this?
                w = target.width = sw;
                h = target.height = sh;
            }

            if(this.batchIndex >= this.maxBatchNum){
                this._renderBatches();
            }

            var vertexs = this._createVertexs(image, rect[0], rect[1], sw, sh, 0, 0, w, h);
            var index = this.batchIndex * this.positionStride;
            var float32Array = this.float32Array;
            var uint32Array = this.uint32Array;

            var tint = (target.tint >> 16) + (target.tint & 0xff00) + ((target.tint & 0xff) << 16) + (target.__webglRenderAlpha * 255 << 24);

            float32Array[index + 0] = vertexs[0];//x
            float32Array[index + 1] = vertexs[1];//y
            float32Array[index + 2] = vertexs[2];//uvx
            float32Array[index + 3] = vertexs[3];//uvy
            uint32Array[index + 4] = tint;//tint

            float32Array[index + 5] = vertexs[4];
            float32Array[index + 6] = vertexs[5];
            float32Array[index + 7] = vertexs[6];
            float32Array[index + 8] = vertexs[7];
            uint32Array[index + 9] = tint;

            float32Array[index + 10] = vertexs[8];
            float32Array[index + 11] = vertexs[9];
            float32Array[index + 12] = vertexs[10];
            float32Array[index + 13] = vertexs[11];
            uint32Array[index + 14] = tint;

            float32Array[index + 15] = vertexs[12];
            float32Array[index + 16] = vertexs[13];
            float32Array[index + 17] = vertexs[14];
            float32Array[index + 18] = vertexs[15];
            uint32Array[index + 19] = tint;

            var matrix = target.__webglWorldMatrix;
            for(var i = 0;i < 4;i ++){
                var x = float32Array[index + i*5];
                var y = float32Array[index + i*5 + 1];

                float32Array[index + i*5] = matrix.a*x + matrix.c*y + matrix.tx;
                float32Array[index + i*5 + 1] = matrix.b*x + matrix.d*y + matrix.ty;
            }

            target.__textureImage = image;
            this.sprites[this.batchIndex++] = target;
        }
    },

    /**
     * @private
     * @see Renderer#endDraw
     */
    endDraw: function(target){
        if(target === this.stage){
            this._renderBatches();
        }
    },
    /**
     * @private
     * @see Renderer#transform
     */
    transform: function(target){
        var drawable = target.drawable;
        if(drawable && drawable.domElement){
            Hilo.setElementStyleByView(target);
            return;
        }

        var scaleX = target.scaleX,
            scaleY = target.scaleY;

        if(target === this.stage){
            var style = this.canvas.style,
                oldScaleX = target._scaleX,
                oldScaleY = target._scaleY,
                isStyleChange = false;

            if((!oldScaleX && scaleX != 1) || (oldScaleX && oldScaleX != scaleX)){
                target._scaleX = scaleX;
                style.width = scaleX * target.width + "px";
                isStyleChange = true;
            }
            if((!oldScaleY && scaleY != 1) || (oldScaleY && oldScaleY != scaleY)){
                target._scaleY = scaleY;
                style.height = scaleY * target.height + "px";
                isStyleChange = true;
            }
            if(isStyleChange){
                target.updateViewport();
            }
            target.__webglWorldMatrix = target.__webglWorldMatrix||new Matrix(1, 0, 0, 1, 0, 0);
        }
        else if(target.parent){
            target.__webglWorldMatrix = target.__webglWorldMatrix||new Matrix(1, 0, 0, 1, 0, 0);
            this._setConcatenatedMatrix(target, target.parent);
        }

        if(target.alpha > 0) {
            if(target.parent && target.parent.__webglRenderAlpha){
                target.__webglRenderAlpha = target.alpha * target.parent.__webglRenderAlpha;
            }
            else{
                target.__webglRenderAlpha = target.alpha;
            }
        }
    },

    /**
     * @private
     * @see Renderer#remove
     */
    remove: function(target){
        var drawable = target.drawable;
        var elem = drawable && drawable.domElement;

        if(elem){
            var parentElem = elem.parentNode;
            if(parentElem){
                parentElem.removeChild(elem);
            }
        }
    },

    /**
     * @private
     * @see Renderer#clear
     */
    clear: function(x, y, width, height){
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    },

    /**
     * @private
     * @see Renderer#resize
     */
    resize: function(width, height){
        if(this.width !== width || this.height !== height){
            var canvas = this.canvas;
            var stage = this.stage;
            var style = canvas.style;

            this.width = canvas.width = width;
            this.height = canvas.height = height;

            style.width = stage.width * stage.scaleX + 'px';
            style.height = stage.height * stage.scaleY + 'px';

            this.gl.viewport(0, 0, width, height);

            this.canvasHalfWidth = width * .5;
            this.canvasHalfHeight = height * .5;

            this._uploadProjectionTransform(true);
        }
    },
    _renderBatches:function(){
        var gl = this.gl;
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.uint32Array.subarray(0, this.batchIndex * this.positionStride));
        var startIndex = 0;
        var batchNum = 0;
        var preTextureImage = null;
        for(var i = 0;i < this.batchIndex;i ++){
            var sprite = this.sprites[i];
            if(preTextureImage && preTextureImage !== sprite.__textureImage){
                this._renderBatch(startIndex, i);
                startIndex = i;
                batchNum = 1;
            }
            preTextureImage = sprite.__textureImage;
        }
        this._renderBatch(startIndex, this.batchIndex);
        this.batchIndex = 0;
    },
    _renderBatch:function(start, end){
        var gl = this.gl;
        var num = end - start;
        if(num > 0){
            gl.bindTexture(gl.TEXTURE_2D, this._getTexture(this.sprites[start]));
            gl.drawElements(gl.TRIANGLES, num * 6, gl.UNSIGNED_SHORT, start * 6 * 2);
        }
    },
    _uploadProjectionTransform:function(force){
        if(!this._projectionTransformElements||force){
            this._projectionTransformElements = new Float32Array([
                1/this.canvasHalfWidth, 0, 0,
                0, -1/this.canvasHalfHeight, 0,
                -1, 1, 1,
            ]);
        }

        this.gl.uniformMatrix3fv(this.u_projectionTransform, false, this._projectionTransformElements);
    },
    _initShaders:function(){
        var VSHADER_SOURCE ='\
            attribute vec2 a_position;\n\
            attribute vec2 a_TexCoord;\n\
            attribute vec4 a_tint;\n\
            uniform mat3 u_projectionTransform;\n\
            varying vec2 v_TexCoord;\n\
            varying vec4 v_tint;\n\
            void main(){\n\
                gl_Position =  vec4((u_projectionTransform * vec3(a_position, 1.0)).xy, 1.0, 1.0);\n\
                v_TexCoord = a_TexCoord;\n\
                v_tint = vec4(a_tint.rgb * a_tint.a, a_tint.a);\n\
            }\n\
        ';

        var FSHADER_SOURCE = '\n\
            precision mediump float;\n\
            uniform sampler2D u_Sampler;\n\
            varying vec2 v_TexCoord;\n\
            varying vec4 v_tint;\n\
            void main(){\n\
                gl_FragColor = texture2D(u_Sampler, v_TexCoord) * v_tint;\n\
            }\n\
        ';

        this.defaultShader = new Shader(this, {
            v:VSHADER_SOURCE,
            f:FSHADER_SOURCE
        },{
            attributes:["a_position", "a_TexCoord", "a_tint"],
            uniforms:["u_projectionTransform", "u_Sampler"]
        });
    },
    _createVertexs:function(img, tx, ty, tw, th, x, y, w, h){
        var tempVertexs = this.__tempVertexs||[];
        var width = img.width;
        var height = img.height;

        tw = tw/width;
        th = th/height;
        tx = tx/width;
        ty = ty/height;

        w = w;
        h = h;
        x = x;
        y = y;

        if(tw + tx > 1){
            tw = 1 - tx;
        }

        if(th + ty > 1){
            th = 1 - ty;
        }

        var index = 0;
        tempVertexs[index++] = x; tempVertexs[index++] = y; tempVertexs[index++] = tx; tempVertexs[index++] = ty;
        tempVertexs[index++] = x+w;tempVertexs[index++] = y; tempVertexs[index++] = tx+tw; tempVertexs[index++] = ty;
        tempVertexs[index++] = x; tempVertexs[index++] = y+h; tempVertexs[index++] = tx;tempVertexs[index++] = ty+th;
        tempVertexs[index++] = x+w;tempVertexs[index++] = y+h;tempVertexs[index++] = tx+tw;tempVertexs[index++] = ty+th;

        return tempVertexs;
    },
    _setConcatenatedMatrix:function(view, ancestor){
        var mtx = view.__webglWorldMatrix;
        var cos = 1, sin = 0,
            rotation = view.rotation % 360,
            pivotX = view.pivotX, pivotY = view.pivotY,
            scaleX = view.scaleX, scaleY = view.scaleY;

        if(rotation){
            var r = rotation * DEG2RAD;
            cos = Math.cos(r);
            sin = Math.sin(r);
        }

        mtx.a = cos*scaleX;
        mtx.b = sin*scaleX;
        mtx.c = -sin*scaleY;
        mtx.d = cos*scaleY;
        mtx.tx =  view.x - mtx.a * pivotX - mtx.c * pivotY;
        mtx.ty =  view.y - mtx.b * pivotX - mtx.d * pivotY;

        mtx.concat(ancestor.__webglWorldMatrix);
    },
    _getTexture:function(sprite){
        var image = sprite.__textureImage;
        var texture = this._cacheTexture[image.src];
        if(!texture){
            texture = this.activeShader.uploadTexture(image);
        }
        return texture;
    }
});

/**
 * @language=en
 * shader
 * @param {WebGLRenderer} renderer [description]
 * @param {Object} source
 * @param {String} source.v 顶点shader
 * @param {String} source.f 片段shader
 * @param {Object} attr
 * @param {Array} attr.attributes attribute数组
 * @param {Array} attr.uniforms uniform数组
 */
var Shader = function(renderer, source, attr){
    this.renderer = renderer;
    this.gl = renderer.gl;
    this.program = this._createProgram(this.gl, source.v, source.f);

    attr = attr||{};
    this.attributes = attr.attributes||[];
    this.uniforms = attr.uniforms||[];
};

Shader.prototype = {
    active:function(){
        var that = this;
        var renderer = that.renderer;
        var gl = that.gl;
        var program = that.program;

        if(program && gl){
            renderer.activeShader = that;
            gl.useProgram(program);
            that.attributes.forEach(function(attribute){
                renderer[attribute] = gl.getAttribLocation(program, attribute);
                gl.enableVertexAttribArray(renderer[attribute]);
            });

            that.uniforms.forEach(function(uniform){
                renderer[uniform] = gl.getUniformLocation(program, uniform);
            });

            if(that.width !== renderer.width || that.height !== renderer.height){
                that.width = renderer.width;
                that.height = renderer.height;
                renderer._uploadProjectionTransform();
            }
        }
    },
    uploadTexture:function(image){
        var gl = this.gl;
        var renderer = this.renderer;
        var texture = gl.createTexture();
        var u_Sampler = renderer.u_Sampler;

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);

        // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.uniform1i(u_Sampler, 0);
        gl.bindTexture(gl.TEXTURE_2D, null);

        this.renderer._cacheTexture[image.src] = texture;
        return texture;
    },
    _createProgram:function(gl, vshader, fshader){
        var vertexShader = this._createShader(gl, gl.VERTEX_SHADER, vshader);
        var fragmentShader = this._createShader(gl, gl.FRAGMENT_SHADER, fshader);
        if (!vertexShader || !fragmentShader) {
            return null;
        }

        var program = gl.createProgram();
        if (program) {
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);

            gl.linkProgram(program);

            gl.deleteShader(fragmentShader);
            gl.deleteShader(vertexShader);
            var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
            if (!linked) {
                var error = gl.getProgramInfoLog(program);
                console.log('Failed to link program: ' + error);
                gl.deleteProgram(program);
                return null;
            }
        }
        return program;
    },
    _createShader:function(gl, type, source){
        var shader = gl.createShader(type);
        if(shader){
            gl.shaderSource(shader, source);
            gl.compileShader(shader);

            var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            if (!compiled) {
                var error = gl.getShaderInfoLog(shader);
                console.log('Failed to compile shader: ' + error);
                gl.deleteShader(shader);
                return null;
            }
        }
        return shader;
    }
};

module.exports = WebGLRenderer;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Class = __webpack_require__(0);
var Hilo = __webpack_require__(1);



/**
 * @language=en
 * @class Ticker is a Timer. It can run the code at specified framerate.
 * @param {Number} fps The fps of ticker.
 * @module hilo/util/Ticker
 * @requires hilo/core/Class
 * @requires hilo/core/Hilo
 */
var Ticker = Class.create(/** @lends Ticker.prototype */{
    constructor: function(fps){
        this._targetFPS = fps || 30;
        this._interval = 1000 / this._targetFPS;
        this._tickers = [];
    },

    _paused: false,
    _targetFPS: 0,
    _interval: 0,
    _intervalId: null,
    _tickers: null,
    _lastTime: 0,
    _tickCount: 0,
    _tickTime: 0,
    _measuredFPS: 0,

    /**
     * @language=en
     * Start the ticker.
     * @param {Boolean} userRAF Whether or not use requestAnimationFrame, default is not.
     */
    start: function(useRAF){
        if(this._intervalId) return;
        this._lastTime = +new Date();

        var self = this, interval = this._interval,
            raf = window.requestAnimationFrame ||
                  window[Hilo.browser.jsVendor + 'RequestAnimationFrame'];

        var runLoop;
        if(useRAF && raf && interval < 17){
            this._useRAF = true;
            runLoop = function(){
                self._intervalId = raf(runLoop);
                self._tick();
            };
        }else{
            runLoop = function(){
                self._intervalId = setTimeout(runLoop, interval);
                self._tick();
            };
        }

        this._paused = false;
        runLoop();
    },

    /**
     * @language=en
     * Stop the ticker.
     */
    stop: function(){
        if(this._useRAF){
            var cancelRAF = window.cancelAnimationFrame ||
                  window[Hilo.browser.jsVendor + 'CancelAnimationFrame'];
            cancelRAF(this._intervalId);
        }
        else{
            clearTimeout(this._intervalId);
        }
        this._intervalId = null;
        this._lastTime = 0;
        this._paused = true;
    },

    /**
     * @language=en
     * Pause the ticker.
     */
    pause: function(){
        this._paused = true;
    },

    /**
     * @language=en
     * Resume the ticker.
     */
    resume: function(){
        this._paused = false;
    },

    /**
     * @private
     */
    _tick: function(){
        if(this._paused) return;
        var startTime = +new Date(),
            deltaTime = startTime - this._lastTime,
            tickers = this._tickers;

        //calculates the real fps
        if(++this._tickCount >= this._targetFPS){
            this._measuredFPS = 1000 / (this._tickTime / this._tickCount) + 0.5 >> 0;
            this._tickCount = 0;
            this._tickTime = 0;
        }else{
            this._tickTime += startTime - this._lastTime;
        }
        this._lastTime = startTime;

        var tickersCopy = tickers.slice(0);
        for(var i = 0, len = tickersCopy.length; i < len; i++){
            tickersCopy[i].tick(deltaTime);
        }
    },

    /**
     * @language=en
     * Get the fps.
     */
    getMeasuredFPS: function(){
        return this._measuredFPS;
    },

    /**
     * @language=en
     * Add tickObject. The tickObject must implement the tick method.
     * @param {Object} tickObject The tickObject to add.It must implement the tick method.
     */
    addTick: function(tickObject){
        if(!tickObject || typeof(tickObject.tick) != 'function'){
            throw new Error('Ticker: The tick object must implement the tick method.');
        }
        this._tickers.push(tickObject);
    },

    /**
     * @language=en
     * Remove the tickObject
     * @param {Object} tickObject The tickObject to remove.
     */
    removeTick: function(tickObject){
        var tickers = this._tickers,
            index = tickers.indexOf(tickObject);
        if(index >= 0){
            tickers.splice(index, 1);
        }
    },
    /**
     * 下次tick时回调
     * @param  {Function} callback
     * @return {tickObj}
     */
    nextTick:function(callback){
        var that = this;
        var tickObj = {
            tick:function(dt){
                that.removeTick(tickObj);
                callback();
            }
        };

        that.addTick(tickObj);
        return tickObj;
    },
    /**
     * 延迟指定的时间后调用回调, 类似setTimeout
     * @param  {Function} callback
     * @param  {Number}   duration 延迟的毫秒数
     * @return {tickObj}
     */
    timeout:function(callback, duration){
        var that = this;
        var targetTime = new Date().getTime() + duration;
        var tickObj = {
            tick:function(){
                var nowTime = new Date().getTime();
                var dt = nowTime - targetTime;
                if(dt >= 0){
                    that.removeTick(tickObj);
                    callback();
                }
            }
        };
        that.addTick(tickObj);
        return tickObj;
    },
    /**
     * 指定的时间周期来调用函数, 类似setInterval
     * @param  {Function} callback
     * @param  {Number}   duration 时间周期，单位毫秒
     * @return {tickObj}
     */
    interval:function(callback, duration){
        var that = this;
        var targetTime = new Date().getTime() + duration;
        var tickObj = {
            tick:function(){
                var nowTime = new Date().getTime();
                var dt = nowTime - targetTime;
                if(dt >= 0){
                    if(dt < duration){
                        nowTime -= dt;
                    }
                    targetTime = nowTime + duration;
                    callback();
                }
            }
        };
        that.addTick(tickObj);
        return tickObj;
    }
});

module.exports = Ticker;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Hilo = __webpack_require__(1);
var Class = __webpack_require__(0);
var View = __webpack_require__(4);
var Drawable = __webpack_require__(3);



/**
 * @language=en
 * <iframe src='../../../examples/Bitmap.html?noHeader' width = '300' height = '200' scrolling='no'></iframe>
 * <br/>
 * Example:
 * <pre>
 * var bmp = new Hilo.Bitmap({image:imgElem, rect:[0, 0, 100, 100]});
 * stage.addChild(bmp);
 * </pre>
 * @class Bitmap
 * @augments View
 * @param {Object} properties the options of create Instance.It can contains all writable property and Moreover：
 * <ul>
 * <li><b>image</b> - the image of bitmap which contained。required。</li>
 * <li><b>rect</b> - the range of bitmap in the image。option</li>
 * </ul>
 * @module hilo/view/Bitmap
 * @requires hilo/core/Hilo
 * @requires hilo/core/Class
 * @requires hilo/view/View
 * @requires hilo/view/Drawable
 */
 var Bitmap = Class.create(/** @lends Bitmap.prototype */{
    Extends: View,
    constructor: function(properties){
        properties = properties || {};
        this.id = this.id || properties.id || Hilo.getUid("Bitmap");
        Bitmap.superclass.constructor.call(this, properties);

        this.drawable = new Drawable(properties);

        //init width and height
        if(!this.width || !this.height){
            var rect = this.drawable.rect;
            if(rect){
                this.width = rect[2];
                this.height = rect[3];
            }
        }
    },

    /**
     * @language=en
     * set the image。
     * @param {Image|String} Image Object or URL。
     * @param {Array} rect the range of bitmap in the image。
     * @returns {Bitmap} self。
     */
    setImage: function(image, rect){
        this.drawable.init({image:image, rect:rect});
        if(rect){
            this.width = rect[2];
            this.height = rect[3];
        }
        else if(!this.width && !this.height){
            rect = this.drawable.rect;
            if(rect){
                this.width = rect[2];
                this.height = rect[3];
            }
        }
        return this;
    }
 });


module.exports = Bitmap;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.0.5 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Hilo = __webpack_require__(1);
var Class = __webpack_require__(0);
var Container = __webpack_require__(2);
var CanvasRenderer = __webpack_require__(17);
var DOMRenderer = __webpack_require__(18);
var WebGLRenderer = __webpack_require__(19);



/**
 * @language=en
 * Demo:
 * <pre>
 * var stage = new Hilo.Stage({
 *     renderType:'canvas',
 *     container: containerElement,
 *     width: 320,
 *     height: 480
 * });
 * </pre>
 * @class Stage is the root of all visual object tree, any visual object will be render only after being added to Stage or any children elements of Stage. Normally, every hilo application start with an stage instance.
 * @augments Container
 * @param {Object} properties Properties parameters for the object. Includes all writable properties of this class. Some important like:
 * <ul>
 * <li><b>container</b>:String|HTMLElement - Assign the parent container element of the Stage in the page. It should be a dom container or an id. If this parameter is not given and canvas isn't in the dom tree, you should add the stage vanvas into the dom tree yourself, otherwise Stage will not render. optional.</li>
 * <li><b>renderType</b>:String - Renering way: canvas|dom|webgl，default value is canvas, optional.</li>
 * <li><b>canvas</b>:String|HTMLCanvasElement|HTMLElement - 指定舞台所对应的画布元素。它是一个canvas或普通的div，也可以传入元素的id。若为canvas，则使用canvas来渲染所有对象，否则使用dom+css来渲染。可选。</li>
 * <li><b>width</b>:Number</li> - The width of the Stage, default value is the width of canvas, optional.
 * <li><b>height</b>:Number</li> - The height of the Stage, default value is the height of canvas, optional.
 * <li><b>paused</b>:Boolean</li> - Whether stop rendering the Stage, default value is false, optional.
 * </ul>
 * @module hilo/view/Stage
 * @requires hilo/core/Hilo
 * @requires hilo/core/Class
 * @requires hilo/view/Container
 * @requires hilo/renderer/CanvasRenderer
 * @requires hilo/renderer/DOMRenderer
 * @requires hilo/renderer/WebGLRenderer
 * @property {HTMLCanvasElement|HTMLElement} canvas The canvas the Stage is related to. It can be a canvas or a div element, readonly!
 * @property {Renderer} renderer Stage renderer, readonly!
 * @property {Boolean} paused Paused Stage rendering.
 * @property {Object} viewport Rendering area of the Stage. Including properties like: left, top, width, height. readonly!
 */
var Stage = Class.create(/** @lends Stage.prototype */{
    Extends: Container,
    constructor: function(properties){
        properties = properties || {};
        this.id = this.id || properties.id || Hilo.getUid('Stage');
        Stage.superclass.constructor.call(this, properties);

        this._initRenderer(properties);

        //init size
        var width = this.width, height = this.height,
            viewport = this.updateViewport();
        if(!properties.width) width = (viewport && viewport.width) || 320;
        if(!properties.height) height = (viewport && viewport.height) || 480;
        this.resize(width, height, true);
    },

    canvas: null,
    renderer: null,
    paused: false,
    viewport: null,

    /**
     * @language=en
     * @private
     */
    _initRenderer: function(properties){
        var canvas = properties.canvas;
        var container = properties.container;
        var renderType = properties.renderType||'canvas';

        if(typeof canvas === 'string') canvas = Hilo.getElement(canvas);
        if(typeof container === 'string') container = Hilo.getElement(container);

        if(!canvas){
            var canvasTagName = renderType === 'dom'?'div':'canvas';
            canvas = Hilo.createElement(canvasTagName, {
                style: {
                    position: 'absolute'
                }
            });
        }
        else if(!canvas.getContext){
            renderType = 'dom';
        }

        this.canvas = canvas;
        if(container) container.appendChild(canvas);

        var props = {canvas:canvas, stage:this};
        switch(renderType){
            case 'dom':
                this.renderer = new DOMRenderer(props);
                break;
            case 'webgl':
                if(WebGLRenderer.isSupport()){
                    this.renderer = new WebGLRenderer(props);
                }
                else{
                    this.renderer = new CanvasRenderer(props);
                }
                break;
            case 'canvas':
	        /* falls through */
            default:
                this.renderer = new CanvasRenderer(props);
                break;
        }
    },

    /**
     * @language=en
     * Add Stage canvas to DOM container. Note: this function overwrite View.addTo function.
     * @param {HTMLElement} domElement An dom element.
     * @returns {Stage} The Stage Object, chained call supported.
     */
    addTo: function(domElement){
        var canvas = this.canvas;
        if(canvas.parentNode !== domElement){
            domElement.appendChild(canvas);
        }
        return this;
    },

    /**
     * @language=en
     * Invoke tick function and Stage will update and render. Developer may not need to use this funciton.
     * @param {Number} delta The time had pass between this tick invoke and last tick invoke.
     */
    tick: function(delta){
        if(!this.paused){
            this._render(this.renderer, delta);
        }
    },

    /**
     * @language=en
     * Turn on/off Stage response to DOM event. To make visual objects on the Stage interactive, use this function to turn on Stage's responses to events.
     * @param {String|Array} type The event name or array that need to turn on/off.
     * @param {Boolean} enabled Whether turn on or off the response method of stage DOM event. If not provided, default value is true.
     * @returns {Stage} The Stage Object, chained call supported.
     */
    enableDOMEvent: function(types, enabled){
        var me = this,
            canvas = me.canvas,
            handler = me._domListener || (me._domListener = function(e){me._onDOMEvent(e);});

        types = typeof types === 'string' ? [types] : types;
        enabled = enabled !== false;

        for(var i = 0; i < types.length; i++){
            var type = types[i];

            if(enabled){
                canvas.addEventListener(type, handler, false);
            }else{
                canvas.removeEventListener(type, handler);
            }
        }

        return me;
    },

    /**
     * @language=en
     * DOM events handler function. This funciton will invoke events onto the visual object, which is on the position of the coordinate where the events is invoked.
     * @private
     */
    _onDOMEvent: function(e){
        var type = e.type, event = e, isTouch = type.indexOf('touch') == 0;

        //calculate stageX/stageY
        var posObj = e;
        if(isTouch){
            var touches = e.touches, changedTouches = e.changedTouches;
            posObj = (touches && touches.length) ? touches[0] :
                     (changedTouches && changedTouches.length) ? changedTouches[0] : null;
        }

        var x = posObj.pageX || posObj.clientX, y = posObj.pageY || posObj.clientY,
            viewport = this.viewport || this.updateViewport();

        event.stageX = x = (x - viewport.left) / this.scaleX;
        event.stageY = y = (y - viewport.top) / this.scaleY;

        //鼠标事件需要阻止冒泡方法 Prevent bubbling on mouse events.
        event.stopPropagation = function(){
            this._stopPropagationed = true;
        };

        var obj = this.getViewAtPoint(x, y, true, false, true)||this,
            canvas = this.canvas, target = this._eventTarget;

        //fire mouseout/touchout event for last event target
        var leave = type === 'mouseout';
        //当obj和target不同 且obj不是target的子元素时才触发out事件 fire out event when obj and target isn't the same as well as obj is not a child element to target.
        if(target && (target != obj && (!target.contains || !target.contains(obj))|| leave)){
            var out = (type === 'touchmove') ? 'touchout' :
                      (type === 'mousemove' || leave || !obj) ? 'mouseout' : null;
            if(out) {
                var outEvent = Hilo.copy({}, event);
                outEvent.type = out;
                outEvent.eventTarget = target;
                target._fireMouseEvent(outEvent);
            }
            event.lastEventTarget = target;
            this._eventTarget = null;
        }

        //fire event for current view
        if(obj && obj.pointerEnabled && type !== 'mouseout'){
            event.eventTarget = this._eventTarget = obj;
            obj._fireMouseEvent(event);
        }

        //set cursor for current view
        if(!isTouch){
            var cursor = (obj && obj.pointerEnabled && obj.useHandCursor) ? 'pointer' : '';
            canvas.style.cursor = cursor;
        }

        //fix android: `touchmove` fires only once
        if(Hilo.browser.android && type === 'touchmove'){
            e.preventDefault();
        }
    },

    /**
     * @language=en
     * Update the viewport (rendering area) which Stage show on the page. Invoke this function to update viewport when Stage canvas changes border, margin or padding properties.
     * @returns {Object} The visible area of the Stage (the viewport property).
     */
    updateViewport: function(){
        var canvas = this.canvas, viewport = null;
        if(canvas.parentNode){
            viewport = this.viewport = Hilo.getElementRect(canvas);
        }
        return viewport;
    },

    /**
     * @language=en
     * Resize the Stage.
     * @param {Number} width The width of the new Stage.
     * @param {Number} height The height of the new Stage.
     * @param {Boolean} forceResize Whether forced to resize the Stage, means no matter the size of the Stage, force to change the size to keep Stage, canvas and window act at the same time.
     */
    resize: function(width, height, forceResize){
        if(forceResize || this.width !== width || this.height !== height){
            this.width = width;
            this.height = height;
            this.renderer.resize(width, height);
            this.updateViewport();
        }
    }

});


module.exports = Stage;

/***/ })
/******/ ]);
//# sourceMappingURL=common.js.map