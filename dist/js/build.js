!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){var n=function(t){"use strict";var e,i=Object.prototype,n=i.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",o=s.asyncIterator||"@@asyncIterator",r=s.toStringTag||"@@toStringTag";function l(t,e,i,n){var s=e&&e.prototype instanceof d?e:d,a=Object.create(s.prototype),o=new C(n||[]);return a._invoke=function(t,e,i){var n=c;return function(s,a){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===s)throw a;return E()}for(i.method=s,i.arg=a;;){var o=i.delegate;if(o){var r=x(o,i);if(r){if(r===u)continue;return r}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===c)throw n=m,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=p;var l=h(t,e,i);if("normal"===l.type){if(n=i.done?m:f,l.arg===u)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(n=m,i.method="throw",i.arg=l.arg)}}}(t,i,o),a}function h(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var c="suspendedStart",f="suspendedYield",p="executing",m="completed",u={};function d(){}function v(){}function g(){}var y={};y[a]=function(){return this};var b=Object.getPrototypeOf,O=b&&b(b(M([])));O&&O!==i&&n.call(O,a)&&(y=O);var S=g.prototype=d.prototype=Object.create(y);function P(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function w(t){var e;this._invoke=function(i,s){function a(){return new Promise((function(e,a){!function e(i,s,a,o){var r=h(t[i],t,s);if("throw"!==r.type){var l=r.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(c).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,o)}))}o(r.arg)}(i,s,e,a)}))}return e=e?e.then(a,a):a()}}function x(t,i){var n=t.iterator[i.method];if(n===e){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=e,x(t,i),"throw"===i.method))return u;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var s=h(n,t.iterator,i.arg);if("throw"===s.type)return i.method="throw",i.arg=s.arg,i.delegate=null,u;var a=s.arg;return a?a.done?(i[t.resultName]=a.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,u):a:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,u)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function M(t){if(t){var i=t[a];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var s=-1,o=function i(){for(;++s<t.length;)if(n.call(t,s))return i.value=t[s],i.done=!1,i;return i.value=e,i.done=!0,i};return o.next=o}}return{next:E}}function E(){return{value:e,done:!0}}return v.prototype=S.constructor=g,g.constructor=v,g[r]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,r in t||(t[r]="GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},P(w.prototype),w.prototype[o]=function(){return this},t.AsyncIterator=w,t.async=function(e,i,n,s){var a=new w(l(e,i,n,s));return t.isGeneratorFunction(i)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(S),S[r]="Generator",S[a]=function(){return this},S.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},t.values=M,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function s(n,s){return r.type="throw",r.arg=t,i.next=n,s&&(i.method="next",i.arg=e),!!s}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],r=o.completion;if("root"===o.tryLoc)return s("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),h=n.call(o,"finallyLoc");if(l&&h){if(this.prev<o.catchLoc)return s(o.catchLoc,!0);if(this.prev<o.finallyLoc)return s(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return s(o.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return s(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var a=s;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),L(i),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var s=n.arg;L(i)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,n){return this.delegate={iterator:M(t),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=e),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,i){"use strict";i.r(e);i(0);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t,e,i,n,s,a,o){try{var r=t[a](o),l=r.value}catch(t){return void i(t)}r.done?e(l):Promise.resolve(l).then(n,s)}function o(t){return function(){var e=this,i=arguments;return new Promise((function(n,s){var o=t.apply(e,i);function r(t){a(o,n,s,r,l,"next",t)}function l(t){a(o,n,s,r,l,"throw",t)}r(void 0)}))}}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var h=function(){function t(e){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"createClickNext",(function(){i.stackNext++,1===i.stackNext&&0===i.stackPrev&&i.stackWatcher(),0!==i.stackPrev&&(i.stackPrev=1)})),l(this,"createClickPrev",(function(){i.stackPrev++,1===i.stackPrev&&0===i.stackNext&&i.stackWatcher(),0!==i.stackNext&&(i.stackNext=1)})),l(this,"getFirstTouch",(function(t){t.target!=i.itemsContainer&&t.target!=i.staticItem&&(i.sliderContainer.addEventListener("touchmove",i.touchMove),i.sliderContainer.addEventListener("touchend",i.touchEnd),i.sliderContainer.addEventListener("touchcancel",i.touchEnd),i.startPosition=t.touches[0].clientX)})),l(this,"touchMove",(function(t){i.items[Math.floor(i.items.length/2)].getBoundingClientRect().width/(i.timeOptions.animationTime/i.timeOptions.interval)<=Math.abs(i.startPosition-t.touches[0].clientX)&&(i.startPosition-t.touches[0].clientX>0?0===i.stackNext&&0===i.stackPrev?(i.startPosition=t.touches[0].clientX,i.animation.inAnimationFlag||i.setAnimationOptions({direction:"toNext",refreshFlag:!0,inAnimationFlag:!0}),i.animationBehavior("toNext",!0)):(i.setAnimationOptions({inAnimationFlag:!1}),i.touchEnd(),i.createClickNext()):0===i.stackNext&&0===i.stackPrev?(i.startPosition=t.touches[0].clientX,i.animation.inAnimationFlag||i.setAnimationOptions({direction:"toPrev",refreshFlag:!0,inAnimationFlag:!0}),i.animationBehavior("toPrev",!0)):(i.setAnimationOptions({inAnimationFlag:!1}),i.touchEnd(),i.createClickPrev()))})),l(this,"touchEnd",o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.sliderContainer.removeEventListener("touchmove",i.touchMove),i.sliderContainer.removeEventListener("touchend",i.touchEnd),i.sliderContainer.removeEventListener("touchcancel",i.touchEnd),i.animation.inAnimationFlag&&("toNext"===i.animation.direction?i.createClickNext():i.createClickPrev());case 4:case"end":return t.stop()}}),t)})))),l(this,"getMouseDown",(function(t){t.preventDefault(),1==t.which&&t.target!=i.itemsContainer&&t.target!=i.staticItem&&(i.startPosition=t.clientX,i.sliderContainer.addEventListener("mousemove",i.mouseMove),i.sliderContainer.addEventListener("mouseup",i.mouseUp),i.sliderContainer.addEventListener("mouseleave",i.mouseUp))})),l(this,"mouseMove",function(){var t=o(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=i.items[Math.floor(i.items.length/2)].getBoundingClientRect().width,n/(i.timeOptions.animationTime/i.timeOptions.interval)<=Math.abs(i.startPosition-e.clientX)&&(i.startPosition-e.clientX>0?0===i.stackNext&&0===i.stackPrev?(i.startPosition=e.clientX,i.animation.inAnimationFlag||i.setAnimationOptions({direction:"toNext",refreshFlag:!0,inAnimationFlag:!0}),i.animationBehavior("toNext",!0)):(i.setAnimationOptions({inAnimationFlag:!1}),i.mouseUp(),i.createClickNext()):0===i.stackNext&&0===i.stackPrev?(i.startPosition=e.clientX,i.animation.inAnimationFlag||i.setAnimationOptions({direction:"toPrev",refreshFlag:!0,inAnimationFlag:!0}),i.animationBehavior("toPrev",!0)):(i.setAnimationOptions({inAnimationFlag:!1}),i.mouseUp(),i.createClickPrev()));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),l(this,"mouseUp",o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.sliderContainer.removeEventListener("mousemove",i.mouseMove),i.sliderContainer.removeEventListener("mouseleave",i.mouseUp),i.sliderContainer.removeEventListener("mouseup",i.mouseUp),i.animation.inAnimationFlag&&("toNext"===i.animation.direction?i.createClickNext():i.createClickPrev());case 4:case"end":return t.stop()}}),t)})))),this.defaultSettings={animationTime:300,sliderContainer:void 0,itemsContainer:void 0,staticItem:void 0,btnsContainer:void 0,btnNext:void 0,btnPrev:void 0,mainElement:{class:void 0,keepOrder:!1},itemsOnSide:3,adaptive:!1,lazyLoad:!1,responsive:!0,breakpoints:void 0},this.finalSettings=this.mergeSettings(this.defaultSettings,e),this.flagForRebuilding="large",this.firstForLazy=!0,this.tableOfPositions={},this.itemsMap={},this.virtMap=[],this.tableOfSteps={},this.timeOptions={animationTime:this.finalSettings.animationTime,interval:5,perToRight:20},this.responsiveOptions={responsive:!this.finalSettings.adaptive,adaptive:this.finalSettings.adaptive,itemsOnSide:this.finalSettings.itemsOnSide},this.startPosition=null,this.animation={currentStep:null,leftX:null,widthX:null,heightX:null,inAnimationFlag:!1,reverseFlag:!1},this.stackNext=0,this.stackPrev=0,this.sizeOfSliderContainer={height:null,width:null},this.sliderContainer=document.querySelector(this.finalSettings.sliderContainer),this.itemsContainer=document.querySelector(this.finalSettings.itemsContainer),this.staticItem=document.querySelector(this.finalSettings.staticItem),this.items=this.itemsContainer.children,this.btnsContainer=document.querySelector(this.finalSettings.btnsContainer),this.btnNext=document.querySelector(this.finalSettings.btnNext),this.btnPrev=document.querySelector(this.finalSettings.btnPrev)}var e,i,a,h,c,f,p,m;return e=t,(i=[{key:"doSlide",value:function(t,e){var i=this;"next"===e?t.addEventListener("click",(function(){i.createClickNext()})):"prev"===e&&t.addEventListener("click",(function(){i.createClickPrev()}))}},{key:"isNode",value:function(t){return t&&(1===t.nodeType||11==t.nodeType)}},{key:"getPropertyOfElement",value:function(t,e){if(this.isNode(t))return""===t.style[e]?t.currentStyle?t.currentStyle[e]:getComputedStyle(t,null)[e]:t.style[e]}},{key:"mergeSettings",value:function(t,e){var i=Object.assign(t,e);if(void 0!==i.breakpoints)for(var n=Object.keys(i.breakpoints),s={responsive:i.responsive,adaptive:i.adaptive,itemsOnSide:i.itemsOnSide},a=n.length-1;a>=0;a--)a===n.length-1?(i.breakpoints[n[a]].adaptive?i.breakpoints[n[a]].adaptive=i.breakpoints[n[a]].adaptive:i.breakpoints[n[a]].responsive?i.breakpoints[n[a]].adaptive=!i.breakpoints[n[a]].responsive:i.breakpoints[n[a]].adaptive=s.adaptive,i.breakpoints[n[a]].responsive=!i.breakpoints[n[a]].adaptive,i.breakpoints[n[a]].itemsOnSide=i.breakpoints[n[a]].itemsOnSide?i.breakpoints[n[a]].itemsOnSide:s.itemsOnSide):(i.breakpoints[n[a]].adaptive||i.breakpoints[n[a]].responsive?i.breakpoints[n[a]].adaptive?(i.breakpoints[n[a]].adaptive=i.breakpoints[n[a]].adaptive,i.breakpoints[n[a]].responsive=!i.breakpoints[n[a]].adaptive):(i.breakpoints[n[a]].responsive=i.breakpoints[n[a]].responsive,i.breakpoints[n[a]].adaptive=!i.breakpoints[n[a]].responsive):(i.breakpoints[n[a]].adaptive=i.breakpoints[n[a+1]].adaptive,i.breakpoints[n[a]].responsive=i.breakpoints[n[a+1]].responsive),i.breakpoints[n[a]].itemsOnSide=i.breakpoints[n[a]].itemsOnSide?i.breakpoints[n[a]].itemsOnSide:i.breakpoints[n[a+1]].itemsOnSide);return i}},{key:"setResponsiveOptions",value:function(){for(var t in this.finalSettings.breakpoints)if(window.innerWidth<parseInt(t))return this.responsiveOptions=Object.assign(this.responsiveOptions,this.finalSettings.breakpoints[t]),this.flagForRebuilding=t,!0;this.responsiveOptions={responsive:!this.finalSettings.adaptive,adaptive:this.finalSettings.adaptive,itemsOnSide:this.finalSettings.itemsOnSide}}},{key:"buildMainElement",value:function(){if("string"==typeof this.finalSettings.mainElement.class&&this.finalSettings.mainElement.keepOrder){var t="."===this.finalSettings.mainElement.class[0]?this.finalSettings.mainElement.class:".".concat(this.finalSettings.mainElement.class),e=this.itemsContainer.querySelector(t),i=null;if(this.isNode(e))for(i=Math.floor(this.items.length/2);this.items[i]!==e;)this.itemsContainer.append(this.items[0]);else console.error("the class ".concat(t," is absent in DOM"))}else if("string"==typeof this.finalSettings.mainElement.class){var n="."===this.finalSettings.mainElement.class[0]?this.finalSettings.mainElement.class:".".concat(this.finalSettings.mainElement.class),s=this.itemsContainer.querySelector(n),a=null;this.isNode(s)?(a=Math.floor(this.items.length/2),this.items[a].after(s)):console.error("the class ".concat(n," is absent in DOM"))}else if(this.finalSettings.mainElement.keepOrder)for(var o=Math.floor(this.items.length/2),r=o===this.items.length/2?1:0;r<=o;)this.itemsContainer.append(this.items[0]),r++}},{key:"makeBoxSizing",value:function(){"border-box"!==this.getPropertyOfElement(this.sliderContainer,"box-sizing")&&(this.sliderContainer.style.boxSizing="border-box")}},{key:"setSliderHeight",value:function(){var t=this,e=Math.floor(this.items.length/2),i=parseInt(this.getPropertyOfElement(this.sliderContainer,"padding-top"))+parseInt(this.getPropertyOfElement(this.sliderContainer,"padding-bottom")),n=parseInt(this.getPropertyOfElement(this.sliderContainer,"border-top-width"))+parseInt(this.getPropertyOfElement(this.sliderContainer,"border-bottom-width")),s=parseInt(this.getPropertyOfElement(this.sliderContainer,"height")),a=s<=i+n?s-(i+n):s,o=function(){for(var e={sum:0},i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return n.forEach((function(i){if(t.isNode(i)){var n=isNaN(2*parseInt(t.getPropertyOfElement(i,"box-shadow").split("px ")[2]))?0:2*parseInt(t.getPropertyOfElement(i,"box-shadow").split("px ")[2]),s=parseInt(t.getPropertyOfElement(i,"height")),a=n+s;"number"!=typeof n||isNaN(n)||"number"!=typeof s||isNaN(s)||a>e.sum&&(e={boxShadow:n,height:s,sum:n+s})}})),e}(this.staticItem,this.items[e-this.finalSettings.itemsOnSide-this.finalSettings.lazyLoad]);if(a<o.sum){if(a<o.height&&0!==a)throw new Error("a height of biggest inner element of slider is bigger then slider's height");this.sizeOfSliderContainer.height=o.sum;var r=this.responsiveOptions.responsive?"".concat(o.sum/(window.innerWidth/100),"vw"):"".concat(o.sum,"px");this.sliderContainer.style.height=r}}},{key:"setSliderWidth",value:function(){var t=null,e=null;this.isNode(this.staticItem)&&(t=parseInt(this.getPropertyOfElement(this.staticItem,"width")),e=isNaN(2*parseInt(this.getPropertyOfElement(this.staticItem,"box-shadow").split("px ")[2]))?0:2*parseInt(this.getPropertyOfElement(this.staticItem,"box-shadow").split("px ")[2]));for(var i=t+e,n=Math.floor(this.items.length/2),s=this.items[n].getBoundingClientRect().width,a=(s-=s/100*15)/100*60+this.items[n].getBoundingClientRect().width/2,o=0;o<this.responsiveOptions.itemsOnSide-1;o++)a+=(s-=s/100*5)/100*15;a*=2;var r=Math.max(i,a);this.sizeOfSliderContainer.width=r;var l=this.responsiveOptions.responsive?"".concat(r/(window.innerWidth/100),"vw"):"".concat(r,"px");this.sliderContainer.style.width=l}},{key:"setParentHeight",value:function(){if("absolute"===this.getPropertyOfElement(this.sliderContainer,"position")){var t=this.getPropertyOfElement(this.sliderContainer.parentNode,"height"),e=this.sizeOfSliderContainer.height;parseInt(t)<e&&this.responsiveOptions.responsive?(0!==parseInt(t)&&(console.error('The parent of the slider has a height which is less than the height of the slider. The parent height was changed to "'.concat(e/(window.innerWidth/100),'vw", and min-height was changed to "').concat(t,'"')),this.sliderContainer.parentNode.style.minHeight=t),this.sliderContainer.parentNode.style.height="".concat(e/(window.innerWidth/100),"vw")):parseInt(t)<e&&!this.responsiveOptions.responsive&&(0!==parseInt(t)&&(console.error('The parent of the slider has a height which is less than the height of the slider. The parent height was changed to "'.concat(e,'px", and min-height was changed to "').concat(t,'"')),this.sliderContainer.parentNode.style.minHeight=t),this.sliderContainer.parentNode.style.height="".concat(e,"px"))}}},{key:"resetJsStyles",value:function(){this.isNode(this.staticItem)&&(this.staticItem.style.left="",this.staticItem.style.top="",this.staticItem.style.width="",this.staticItem.style.height=""),this.isNode(this.staticItem)&&(this.btnsContainer.style.zIndex=""),this.sliderContainer.parentNode.style.height="",this.sliderContainer.parentNode.style.minHeight="",this.sliderContainer.style.height="",this.sliderContainer.style.width="";for(var t=0;t<this.items.length;t++)this.items[t].style.width="",this.items[t].style.height="",this.items[t].style.left="",this.items[t].style.zIndex="",this.items[t].style.filter="",this.items[t].style.cursor=""}},{key:"centeringTheStaticItem",value:function(){var t=this.sizeOfSliderContainer.width,e=this.staticItem.getBoundingClientRect().width,i=(t-e)/2/t*100;this.staticItem.style.left="".concat(i,"%");var n=this.sizeOfSliderContainer.height,s=this.staticItem.getBoundingClientRect().height,a=(n-s)/2/n*100;this.staticItem.style.top="".concat(a,"%");var o="".concat(s/n*100,"%"),r="".concat(e/t*100,"%");this.staticItem.style.height=o,this.staticItem.style.width=r}},{key:"setTableOfPositions",value:function(){var t=this.sizeOfSliderContainer.width,e=this.sizeOfSliderContainer.height,i=this.items[0].getBoundingClientRect().width,n=Math.floor(this.items.length/2);this.tableOfPositions[n]={width:i/t*100,height:this.items[n-this.finalSettings.itemsOnSide-this.finalSettings.lazyLoad].getBoundingClientRect().height/e*100,left:(t-i)/2/t*100,zIndex:n+2,opacity:1,invert:0},this.isNode(this.btnsContainer)&&(this.btnsContainer.style.zIndex="".concat(this.tableOfPositions[n].zIndex+1));for(var s=n-1;s>=0;s--){var a=void 0,o=void 0,r=void 0,l=s+1,h=void 0;n-1===s?(this.isNode(this.staticItem)&&(this.staticItem.style.zIndex=n+1),a=this.tableOfPositions[n].width-this.tableOfPositions[n].width/100*15,o=this.tableOfPositions[n].height-this.tableOfPositions[n].height/100*15,r=this.tableOfPositions[n].left-a/100*60,h=.05):n-this.responsiveOptions.itemsOnSide<=s?(a=this.tableOfPositions[s+1].width-this.tableOfPositions[s+1].width/100*5,o=this.tableOfPositions[s+1].height-this.tableOfPositions[s+1].height/100*5,r=this.tableOfPositions[s+1].left-a/100*15,h=this.tableOfPositions[s+1].invert+.05):(a=this.tableOfPositions[n-this.responsiveOptions.itemsOnSide].width,o=this.tableOfPositions[n-this.responsiveOptions.itemsOnSide].height,r=this.tableOfPositions[n-this.responsiveOptions.itemsOnSide].left,h=this.tableOfPositions[n-this.responsiveOptions.itemsOnSide].invert),this.tableOfPositions[s]={width:a,height:o,left:r,zIndex:l,invert:h}}for(var c=n+1;c<this.items.length;c++){var f=void 0,p=void 0,m=void 0,u=this.items.length-c,d=void 0;n+1===c?(f=this.tableOfPositions[n].width-this.tableOfPositions[n].width/100*15,p=this.tableOfPositions[n].height-this.tableOfPositions[n].height/100*15,m=this.tableOfPositions[n].left+this.tableOfPositions[n].width-f/100*40,d=.1):n+this.responsiveOptions.itemsOnSide>=c?(f=this.tableOfPositions[c-1].width-this.tableOfPositions[c-1].width/100*5,p=this.tableOfPositions[c-1].height-this.tableOfPositions[c-1].height/100*5,m=this.tableOfPositions[c-1].left+this.tableOfPositions[c-1].width-f/100*85,d=this.tableOfPositions[c-1].invert+.1):(f=this.tableOfPositions[n+this.responsiveOptions.itemsOnSide].width,p=this.tableOfPositions[n+this.responsiveOptions.itemsOnSide].height,m=this.tableOfPositions[n+this.responsiveOptions.itemsOnSide].left,d=this.tableOfPositions[n+this.responsiveOptions.itemsOnSide].invert),this.tableOfPositions[c]={width:f,height:p,left:m,zIndex:u,invert:d}}}},{key:"setItemsMap",value:function(){for(var t=0;t<this.items.length;t++)this.itemsMap[t]=t}},{key:"setTableOfSteps",value:function(){for(var t=this.timeOptions.animationTime/this.timeOptions.interval,e=0;e<this.items.length;e++){var i={stepWidth:{toPrev:null,toNext:null},stepHeight:{toPrev:null,toNext:null},stepLeft:{toPrev:null,toNext:null},stepInvert:{toPrev:null,toNext:null}};0===e?(i.stepWidth.toPrev=(this.tableOfPositions[e+1].width-this.tableOfPositions[e].width)/t,i.stepWidth.toNext=!1,i.stepHeight.toPrev=(this.tableOfPositions[e+1].height-this.tableOfPositions[e].height)/t,i.stepHeight.toNext=!1,i.stepInvert.toPrev=(this.tableOfPositions[e+1].invert-this.tableOfPositions[e].invert)/t,i.stepInvert.toNext=!1,i.stepLeft.toPrev=(this.tableOfPositions[e+1].left-this.tableOfPositions[e].left)/t,i.stepLeft.toNext=(this.tableOfPositions[this.items.length-1].left-this.tableOfPositions[0].left)/t):e===this.items.length-1?(i.stepWidth.toPrev=!1,i.stepWidth.toNext=(this.tableOfPositions[e-1].width-this.tableOfPositions[e].width)/t,i.stepHeight.toPrev=!1,i.stepHeight.toNext=(this.tableOfPositions[e-1].height-this.tableOfPositions[e].height)/t,i.stepInvert.toPrev=!1,i.stepInvert.toNext=(this.tableOfPositions[e-1].invert-this.tableOfPositions[e].invert)/t,i.stepLeft.toPrev=(this.tableOfPositions[0].left-this.tableOfPositions[e].left)/t,i.stepLeft.toNext=(this.tableOfPositions[e-1].left-this.tableOfPositions[e].left)/t):(i.stepWidth.toPrev=(this.tableOfPositions[e+1].width-this.tableOfPositions[e].width)/t,i.stepWidth.toNext=(this.tableOfPositions[e-1].width-this.tableOfPositions[e].width)/t,i.stepHeight.toPrev=(this.tableOfPositions[e+1].height-this.tableOfPositions[e].height)/t,i.stepHeight.toNext=(this.tableOfPositions[e-1].height-this.tableOfPositions[e].height)/t,i.stepInvert.toPrev=(this.tableOfPositions[e+1].invert-this.tableOfPositions[e].invert)/t,i.stepInvert.toNext=(this.tableOfPositions[e-1].invert-this.tableOfPositions[e].invert)/t,i.stepLeft.toPrev=(this.tableOfPositions[e+1].left-this.tableOfPositions[e].left)/t,i.stepLeft.toNext=(this.tableOfPositions[e-1].left-this.tableOfPositions[e].left)/t),this.tableOfSteps[e]=i}}},{key:"alignmentOfItems",value:function(){for(var t=0;t<this.items.length;t++)this.items[t].style.width="".concat(this.tableOfPositions[t].width,"%"),this.items[t].style.height="".concat(this.tableOfPositions[t].height,"%"),this.items[t].style.left="".concat(this.tableOfPositions[t].left,"%"),this.items[t].style.zIndex="".concat(this.tableOfPositions[t].zIndex),this.items[t].style.filter="invert(".concat(this.tableOfPositions[t].invert,")"),this.items[t].style.cursor="pointer"}},{key:"setAnimationOptions",value:function(t){var e=Math.floor(this.items.length/2),i="toPrev"===t.direction?e-1:e+1;t.refreshFlag&&!t.reverseFlag?this.animation={direction:t.direction,currentStep:0,leftX:this.tableOfPositions[i].left,widthX:this.tableOfPositions[i].width,heightX:this.tableOfPositions[i].height,inAnimationFlag:!!t.hasOwnProperty("inAnimationFlag")&&t.inAnimationFlag,reverseFlag:!1}:this.animation=Object.assign(this.animation,t)}},{key:"animationBehavior",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!1;return this.animation.inAnimationFlag&&(n=t!==this.animation.direction,t=t===this.animation.direction?t:this.animation.direction),new Promise((function(s){var a,o=e.timeOptions.animationTime/e.timeOptions.interval,r=Math.floor(e.items.length/2),l=Math.round(o/100*e.timeOptions.perToRight),h=Math.round(o/100*(100-e.timeOptions.perToRight)),c="toPrev"===t?r-1:r+1,f=e.tableOfSteps[c].stepWidth[t]*l/h,p=e.tableOfSteps[c].stepHeight[t]*l/h,m=e.tableOfPositions[c].width/100*40,u=m/l,d=(e.finalSettings.animationTime,e.finalSettings.animationTime/250-1),v=i?2+d:1,g=function(t,i){if(e.itemsMap[t]===r-1||e.itemsMap[t]===r+1)if("toPrev"===i&&e.itemsMap[t]===r-1)if(e.animation.currentStep<l)n?e.animation.leftX-=-1*u*v:e.animation.leftX+=-1*u*v,e.items[t].style.left="".concat(e.animation.leftX,"%");else{e.animation.currentStep>=l&&!n&&e.items[t].style.zIndex!=r+2?(e.items[t].style.zIndex=r+2,e.items[t===e.items.length-1?0:t+1].style.zIndex=r+1):e.animation.currentStep>=l&&n&&e.items[t].style.zIndex!=r&&(e.items[t].style.zIndex=r,e.items[t===e.items.length-1?0:t+1].style.zIndex=r+2);var s=(e.tableOfSteps[e.itemsMap[t]].stepLeft[i]*l+m)/(h+5.3);n?(e.animation.leftX-=(e.tableOfSteps[e.itemsMap[t]].stepLeft[i]+s)*v,e.animation.widthX-=(e.tableOfSteps[e.itemsMap[t]].stepWidth[i]+f)*v,e.animation.heightX-=(e.tableOfSteps[e.itemsMap[t]].stepHeight[i]+p)*v):(e.animation.leftX+=(e.tableOfSteps[e.itemsMap[t]].stepLeft[i]+s)*v,e.animation.widthX+=(e.tableOfSteps[e.itemsMap[t]].stepWidth[i]+f)*v,e.animation.heightX+=(e.tableOfSteps[e.itemsMap[t]].stepHeight[i]+p)*v),e.items[t].style.left="".concat(e.animation.leftX,"%"),e.items[t].style.width="".concat(e.animation.widthX,"%"),e.items[t].style.height="".concat(e.animation.heightX,"%")}else if("toNext"===i&&e.itemsMap[t]===r+1)if(e.animation.currentStep<l)n?e.animation.leftX-=u*v:e.animation.leftX+=u*v,e.items[t].style.left="".concat(e.animation.leftX,"%");else{e.animation.currentStep>=l&&!n&&e.items[t].style.zIndex!=r+2?(e.items[t].style.zIndex=r+2,e.items[0===t?e.items.length-1:t-1].style.zIndex=r+1):e.animation.currentStep>=l&&n&&e.items[t].style.zIndex!==r&&(e.items[t].style.zIndex=r,e.items[0===t?e.items.length-1:t-1].style.zIndex=r+2);var a=(Math.abs(e.tableOfSteps[e.itemsMap[t]].stepLeft[i]*l)+m)/(h+5.3)*-1;n?(e.animation.leftX-=(e.tableOfSteps[e.itemsMap[t]].stepLeft[i]+a)*v,e.animation.widthX-=(e.tableOfSteps[e.itemsMap[t]].stepWidth[i]+f)*v,e.animation.heightX-=(e.tableOfSteps[e.itemsMap[t]].stepHeight[i]+p)*v):(e.animation.leftX+=(e.tableOfSteps[e.itemsMap[t]].stepLeft[i]+a)*v,e.animation.widthX+=(e.tableOfSteps[e.itemsMap[t]].stepWidth[i]+f)*v,e.animation.heightX+=(e.tableOfSteps[e.itemsMap[t]].stepHeight[i]+p)*v),e.items[t].style.left="".concat(e.animation.leftX,"%"),e.items[t].style.width="".concat(e.animation.widthX,"%"),e.items[t].style.height="".concat(e.animation.heightX,"%")}else n?(e.items[t].style.width="".concat(parseFloat(e.items[t].style.width)-e.tableOfSteps[e.itemsMap[t]].stepWidth[i]*v,"%"),e.items[t].style.height="".concat(parseFloat(e.items[t].style.height)-e.tableOfSteps[e.itemsMap[t]].stepHeight[i]*v,"%"),e.items[t].style.left="".concat(parseFloat(e.items[t].style.left)-e.tableOfSteps[e.itemsMap[t]].stepLeft[i]*v,"%")):(e.items[t].style.width="".concat(parseFloat(e.items[t].style.width)+e.tableOfSteps[e.itemsMap[t]].stepWidth[i]*v,"%"),e.items[t].style.height="".concat(parseFloat(e.items[t].style.height)+e.tableOfSteps[e.itemsMap[t]].stepHeight[i]*v,"%"),e.items[t].style.left="".concat(parseFloat(e.items[t].style.left)+e.tableOfSteps[e.itemsMap[t]].stepLeft[i]*v,"%"));else e.items[t].style.left="".concat(n?parseFloat(e.items[t].style.left)-e.tableOfSteps[e.itemsMap[t]].stepLeft[i]*v:parseFloat(e.items[t].style.left)+e.tableOfSteps[e.itemsMap[t]].stepLeft[i]*v,"%")},y=function(t){0===e.animation.currentStep&&n&&(t="toPrev"===t?"toNext":"toPrev",n=!1,e.setAnimationOptions({direction:t,refreshFlag:!0,inAnimationFlag:!0})),e.animation.currentStep=i&&n?parseFloat((e.animation.currentStep-1*v).toFixed(1)):parseFloat((e.animation.currentStep+1*v).toFixed(1));for(var l=0;l<e.items.length;l++)e.itemsMap[l]!==r-1&&e.itemsMap[l]!==r+1&&(n?(e.items[l].style.width="".concat(parseFloat(e.items[l].style.width)-e.tableOfSteps[e.itemsMap[l]].stepWidth[t]*v,"%"),e.items[l].style.height="".concat(parseFloat(e.items[l].style.height)-e.tableOfSteps[e.itemsMap[l]].stepHeight[t]*v,"%")):(e.items[l].style.width="".concat(parseFloat(e.items[l].style.width)+e.tableOfSteps[e.itemsMap[l]].stepWidth[t]*v,"%"),e.items[l].style.height="".concat(parseFloat(e.items[l].style.height)+e.tableOfSteps[e.itemsMap[l]].stepHeight[t]*v,"%"))),g(l,t),e.animation.currentStep>=o/2&&e.itemsMap[l]===e.items.length-1&&"toPrev"===t&&(e.items[l].style.zIndex="0"),e.animation.currentStep>=o/2&&0===e.itemsMap[l]&&"toNext"===t&&(e.items[l].style.zIndex="0");e.animation.currentStep>=o&&(clearInterval(a),function(t){if(e.setAnimationOptions({refreshFlag:!0}),"toPrev"===t)for(var i=e.itemsMap[0],n=0;n<e.items.length;n++)n===e.items.length-1?e.itemsMap[n]=i:e.itemsMap[n]=e.itemsMap[n+1];else for(var s=e.itemsMap[e.items.length-1],a=e.items.length-1;a>=0;a--)e.itemsMap[a]=0===a?s:e.itemsMap[a-1];for(var o=0;o<e.items.length;o++)e.items[o].style.width="".concat(e.tableOfPositions[e.itemsMap[o]].width,"%"),e.items[o].style.height="".concat(e.tableOfPositions[e.itemsMap[o]].height,"%"),e.items[o].style.left="".concat(e.tableOfPositions[e.itemsMap[o]].left,"%"),e.items[o].style.zIndex="".concat(e.tableOfPositions[e.itemsMap[o]].zIndex),e.items[o].style.filter="invert(".concat(e.tableOfPositions[e.itemsMap[o]].invert,")");e.lazyLoadController(t)}(t),s(!0))};i?y(t):a=setInterval((function(){y(t)}),e.timeOptions.interval)}))}},{key:"lazyLoad",value:(m=o(regeneratorRuntime.mark((function t(e){var i,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=this.items[e].classList.contains("Glazy")?[this.items[e]].concat(s(this.items[e].querySelectorAll(".Glazy"))):s(this.items[e].querySelectorAll(".Glazy")),!this.firstForLazy){t.next=6;break}return t.next=4,Promise.all(i.map((function(t){return n.load(t,t.getAttribute("data-src"))})));case 4:t.next=7;break;case 6:Promise.all(i.map((function(t){return n.load(t,t.getAttribute("data-src"))})));case 7:case"end":return t.stop()}}),t,this)}))),function(t){return m.apply(this,arguments)})},{key:"load",value:(p=o(regeneratorRuntime.mark((function t(e,i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){e.src=i,e.addEventListener("load",(function(){e.classList.remove("Glazy"),t()})),e.addEventListener("error",(function(){return n("img wasn't found. url: ".concat(i))}))})));case 1:case"end":return t.stop()}}),t)}))),function(t,e){return p.apply(this,arguments)})},{key:"lazyLoadController",value:function(t){var e=this;return new Promise((function(i,n){var s=Math.floor(e.items.length/2);if("toNext"===t){var a=e.virtMap[s]+e.finalSettings.itemsOnSide+e.finalSettings.lazyLoad+1>e.items.length-1?e.virtMap[s]+e.finalSettings.itemsOnSide+e.finalSettings.lazyLoad+1-(e.items.length-1)-1:e.virtMap[s]+e.finalSettings.itemsOnSide+e.finalSettings.lazyLoad+1;e.lazyLoad(a),e.virtMap.push(e.virtMap.shift()),i()}else{var o=e.virtMap[s]-e.finalSettings.itemsOnSide-e.finalSettings.lazyLoad-1<0?e.items.length+(e.virtMap[s]-e.finalSettings.itemsOnSide-e.finalSettings.lazyLoad-1):e.virtMap[s]-e.finalSettings.itemsOnSide-e.finalSettings.lazyLoad-1;e.lazyLoad(o),e.virtMap.unshift(e.virtMap.pop()),i()}}))}},{key:"setVirtMap",value:function(){for(var t=0;t<this.items.length;t++)this.virtMap[t]=t}},{key:"setLazyLoad",value:function(){!0!==this.finalSettings.lazyLoad&&"number"!=typeof this.finalSettings.lazyLoad||("number"==typeof n(this.finalSettings.lazyLoad)&&(this.finalSettings.lazyLoad=Math.min(Math.max(this.finalSettings.lazyLoad,1),this.items.length-2*this.finalSettings.itemsOnSide+1)),this.setVirtMap())}},{key:"firstLazyLoad",value:(f=o(regeneratorRuntime.mark((function t(){var e,i,n,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=Math.floor(this.items.length/2),i=0;case 2:if(!(i<this.items.length)){t.next=19;break}if(!(i>=e-this.finalSettings.itemsOnSide-this.finalSettings.lazyLoad&&i<=e+this.finalSettings.itemsOnSide+this.finalSettings.lazyLoad)){t.next=13;break}if(!this.firstForLazy){t.next=10;break}return t.next=7,this.lazyLoad(i);case 7:this.firstForLazy=!1,t.next=11;break;case 10:this.lazyLoad(i);case 11:t.next=16;break;case 13:for(this.items[i].classList.contains("Glazy")&&(this.items[i].alt=""),n=this.items[i].querySelectorAll(".Glazy"),s=0;s<n.length;s++)n[s].alt="";case 16:i++,t.next=2;break;case 19:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)})},{key:"createSlider",value:(c=o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.buildMainElement(),!0!==this.lazyLoad&&"number"!=typeof this.finalSettings.lazyLoad){t.next=5;break}return this.setLazyLoad(),t.next=5,this.firstLazyLoad();case 5:this.makeBoxSizing(),this.setResponsiveOptions(),this.setSliderHeight(),this.setSliderWidth(),this.setParentHeight(),this.setTableOfPositions(),this.setItemsMap(),this.setTableOfSteps(),this.isNode(this.staticItem)&&this.centeringTheStaticItem(),this.alignmentOfItems(),this.setEventListeners();case 16:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},{key:"stackWatcher",value:(h=o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.stackNext>0)){t.next=8;break}return this.animation.inAnimationFlag||this.setAnimationOptions({direction:"toNext",refreshFlag:!0}),t.next=4,this.animationBehavior("toNext");case 4:this.stackNext--,this.stackWatcher(),t.next=14;break;case 8:if(!(this.stackPrev>0)){t.next=14;break}return this.animation.inAnimationFlag||this.setAnimationOptions({direction:"toPrev",refreshFlag:!0}),t.next=12,this.animationBehavior("toPrev");case 12:this.stackPrev--,this.stackWatcher();case 14:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)})},{key:"setEventListeners",value:function(){var t=this;window.addEventListener("resize",(function(){for(var e=Object.keys(t.finalSettings.breakpoints),i=0;i<e.length;i++){if(e[i]>window.innerWidth)return t.flagForRebuilding.toString()===e[i].toString()||(t.flagForRebuilding=e[i],t.resetJsStyles(),t.createSlider(),!0);if(i===e.length-1&&"large"!==t.flagForRebuilding.toString())return t.flagForRebuilding="large",t.resetJsStyles(),t.createSlider(),!0}})),this.sliderContainer.addEventListener("touchstart",this.getFirstTouch),this.isNode(this.btnNext)&&this.isNode(this.btnPrev)&&(this.btnNext.addEventListener("click",this.createClickNext),this.btnNext.addEventListener("mousedown",(function(t){return t.stopPropagation()})),this.btnPrev.addEventListener("click",this.createClickPrev),this.btnNext.addEventListener("mousedown",(function(t){return t.stopPropagation()}))),this.isNode(this.itemsContainer)&&this.sliderContainer.addEventListener("mousedown",this.getMouseDown)}}])&&r(e.prototype,i),a&&r(e,a),t}();window.addEventListener("load",(function(){new h({mainElement:{class:"first",keepOrder:!0},animationTime:300,sliderContainer:".firstExample .container .GnativeCarousel",itemsContainer:".firstExample .container .GnativeCarousel .GnativeCarousel__itemsContainer",staticItem:".firstExample .container .GnativeCarousel .GnativeCarousel__staticItem",btnsContainer:".firstExample .container .GnativeCarousel .GnativeCarousel__buttons",btnNext:".firstExample .container .GnativeCarousel .GnativeCarousel__buttons .GnativeCarousel__next",btnPrev:".firstExample .container .GnativeCarousel .GnativeCarousel__buttons .GnativeCarousel__prev",itemsOnSide:5,adaptive:!0,breakpoints:{1100:{itemsOnSide:4},960:{itemsOnSide:3,responsive:!0},768:{itemsOnSide:2,responsive:!0}}}).createSlider()}))}]);