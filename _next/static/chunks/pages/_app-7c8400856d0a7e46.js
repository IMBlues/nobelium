(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},3454:function(e,t,n){"use strict";var r,o;e.exports=(null===(r=n.g.process)||void 0===r?void 0:r.env)&&"object"===typeof(null===(o=n.g.process)||void 0===o?void 0:o.env)?n.g.process:n(7663)},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8219)}])},8670:function(e,t,n){"use strict";var r=n(3454),o={title:"\u5e03\u9c81\u65af\u9c7c\u7684\u5999\u60f3\u5929\u5f00",author:"bluesyu",email:"bluesedenyu@gmail.com",link:"https://next.emergencyexit.xyz/",description:"\u6b64\u95f4\u7684\u535a\u6587\u5927\u62b5\u6709\u4e24\u7c7b\uff0c\u4e00\u79cd\u662f\u6c34\u7684\uff0c\u53e6\u4e00\u79cd\u4ecd\u662f\u6c34\u7684\u7f62\u3002 \u2014\u2014 \u9c81\u8fc5",lang:"zh-CN",appearance:"auto",font:"sans-serif",lightBackground:"#ffffff",darkBackground:"#18181B",path:"",since:2019,postsPerPage:9,sortByDate:!0,showAbout:!0,showArchive:!0,autoCollapsedNavBar:!1,ogImageGenerateURL:"https://og-image-craigary.vercel.app",socialLink:"https://twitter.com/bluesedenyu",seo:{keywords:["Blog","Notion","Tech","Python","Django"],googleSiteVerification:""},notionPageId:"a60899092d0d43efaf935e041712e826",notionAccessToken:r.env.NOTION_ACCESS_TOKEN,analytics:{provider:"ga",ackeeConfig:{tracker:"",dataAckeeServer:"",domainId:""},gaConfig:{measurementId:"G-WV23EXEF9X"}},comment:{provider:"utterances",gitalkConfig:{repo:"",owner:"",admin:[],clientID:"",clientSecret:"",distractionFreeMode:!1},utterancesConfig:{repo:"IMBlues/IMBlues.github.io"},cusdisConfig:{appId:"",host:"https://cusdis.com",scriptSrc:"https://cusdis.com/js/cusdis.es.js"}},isProd:"production"===r.env.VERCEL_ENV};e.exports=o},4873:function(e,t,n){"use strict";n.d(t,{I:function(){return h},b:function(){return y}});var r=n(7997),o=n(1720),a=n(8670),i=n.n(a),u={NAV:{INDEX:"Blog",RSS:"RSS",SEARCH:"Search",SURFING:"Surfing",ABOUT:"About"},PAGINATION:{PREV:"Prev",NEXT:"Next"},POST:{BACK:"Back",TOP:"Top"}},s={NAV:{INDEX:"\u535a\u5ba2",RSS:"\u8ba2\u9605",SEARCH:"\u641c\u7d22",SURFING:"\u51b2\u6d6a",ABOUT:"\u5173\u4e8e"},PAGINATION:{PREV:"\u4e0a\u4e00\u9875",NEXT:"\u4e0b\u4e00\u9875"},POST:{BACK:"\u8fd4\u56de",TOP:"\u56de\u5230\u9876\u90e8"}},c={NAV:{INDEX:"\u7db2\u8a8c",RSS:"\u8a02\u95b1",SEARCH:"\u641c\u5c0b",SURFING:"\u885d\u6d6a",ABOUT:"\u95dc\u65bc"},PAGINATION:{PREV:"\u4e0a\u4e00\u9801",NEXT:"\u4e0b\u4e00\u9801"},POST:{BACK:"\u8fd4\u56de",TOP:"\u56de\u5230\u9802\u7aef"}},l={NAV:{INDEX:"\u90e8\u843d\u683c",RSS:"\u8a02\u95b1",SEARCH:"\u641c\u5c0b",SURFING:"\u885d\u6d6a",ABOUT:"\u95dc\u65bc"},PAGINATION:{PREV:"\u4e0a\u4e00\u9801",NEXT:"\u4e0b\u4e00\u9801"},POST:{BACK:"\u8fd4\u56de",TOP:"\u56de\u5230\u9802\u7aef"}},f={NAV:{INDEX:"\u30d6\u30ed\u30b0",RSS:"\u8cfc\u8aad",SEARCH:"\u691c\u7d22",SURFING:"\u6ce2\u4e57\u308a",ABOUT:"\u3053\u306e\u30b5\u30a4\u30c8\u306b\u3064\u3044\u3066"},PAGINATION:{PREV:"\u524d\u30da\u30fc\u30b8",NEXT:"\u6b21\u30da\u30fc\u30b8"},POST:{BACK:"\u623b\u308b",TOP:"\u30c8\u30c3\u30d7\u306b\u623b\u308b"}},d={NAV:{INDEX:"Blog",RSS:"RSS",SEARCH:"Buscar",ABOUT:"Acerca de m\xed"},PAGINATION:{PREV:"Anterior",NEXT:"Siguiente"},POST:{BACK:"Atr\xe1s",TOP:"Arriba"}},p=function(){switch(i().lang.toLowerCase()){case"zh-cn":case"zh-sg":return s;case"zh-hk":return c;case"zh-tw":return l;case"ja":case"ja-jp":return f;case"es":case"es-ES":return d;default:return u}}(),v=(0,o.createContext)();function h(e){var t=e.children;return(0,r.tZ)(v.Provider,{value:p,children:t})}var y=function(){return(0,o.useContext)(v)}},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,s=Promise,(null!=s&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](i):i instanceof s)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=o({},r,e));var i,s;var c=r=o({},r,t);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return n(c);r.loadableGenerated&&delete(r=o({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};i(n(1720));var a=i(n(4302));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(1720))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u=(i=n(1720))&&i.__esModule?i:{default:i},s=n(7161),c=n(6319);var l=[],f=[],d=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var v=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,o;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),o&&r(t,o),e}();function h(e){return function(e,t){var n=function(){if(!o){var t=new v(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=u.default.lazy(r.loader));var o=null;if(!d&&!r.suspense){var i=r.webpack?r.webpack():r.modules;i&&f.push((function(e){var t=!0,r=!1,o=void 0;try{for(var a,u=i[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var s=a.value;if(-1!==e.indexOf(s))return n()}}catch(c){r=!0,o=c}finally{try{t||null==u.return||u.return()}finally{if(r)throw o}}}))}var l=r.suspense?function(e,t){return u.default.createElement(r.lazy,a({},e,{ref:t}))}:function(e,t){n();var a=u.default.useContext(c.LoadableContext),i=s.useSubscription(o);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),u.default.useMemo((function(){return i.loading||i.error?u.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return l.preload=function(){return!r.suspense&&n()},l.displayName="LoadableComponent",u.default.forwardRef(l)}(p,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){y(l).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};y(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var g=h;t.default=g},8219:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(7997),o=(n(2427),n(5560),n(7604),n(906),n(4722),n(8670)),a=n.n(o),i=n(5152),u=n(4873),s=n(4298),c=function(){return(0,r.BX)(r.HY,{children:[a().analytics&&"ackee"===a().analytics.provider&&(0,r.tZ)(s.default,{src:a().analytics.ackeeConfig.tracker,"data-ackee-server":a().analytics.ackeeConfig.dataAckeeServer,"data-ackee-domain-id":a().analytics.ackeeConfig.domainId}),a().analytics&&"ga"===a().analytics.provider&&(0,r.BX)(r.HY,{children:[(0,r.tZ)(s.default,{src:"https://www.googletagmanager.com/gtag/js?id=".concat(a().analytics.gaConfig.measurementId)}),(0,r.tZ)(s.default,{strategy:"lazyOnload",id:"ga",children:"window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(a().analytics.gaConfig.measurementId,"', {\n              page_path: window.location.pathname,\n            });")})]})]})};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}var d=(0,i.default)((function(){return Promise.all([n.e(605),n.e(359)]).then(n.bind(n,1359))}),{loadableGenerated:{webpack:function(){return[1359]}},ssr:!1}),p=(0,i.default)((function(){return n.e(921).then(n.bind(n,5921))}),{loadableGenerated:{webpack:function(){return[5921]}},ssr:!1});var v=function(e){var t,n,o=e.Component,i=e.pageProps;return(0,r.BX)(r.HY,{children:[(0,r.tZ)(c,{}),(0,r.tZ)(u.I,{children:(0,r.BX)(r.HY,{children:[a().isProd&&"ackee"===(null===a()||void 0===a()||null===(t=a().analytics)||void 0===t?void 0:t.provider)&&(0,r.tZ)(d,{ackeeServerUrl:a().analytics.ackeeConfig.dataAckeeServer,ackeeDomainId:a().analytics.ackeeConfig.domainId}),a().isProd&&"ga"===(null===a()||void 0===a()||null===(n=a().analytics)||void 0===n?void 0:n.provider)&&(0,r.tZ)(p,{}),(0,r.tZ)(o,f({},i))]})})]})}},7604:function(){},2427:function(){},5560:function(){},906:function(){},4722:function(){},7663:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u,s=[],c=!1,l=-1;function f(){c&&u&&(c=!1,u.length?s=u.concat(s):l=-1,s.length&&d())}function d(){if(!c){var e=i(f);c=!0;for(var t=s.length;t;){for(u=s,s=[];++l<t;)u&&u[l].run();l=-1,t=s.length}u=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||c||i(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}},i=!0;try{t[e](a,a.exports,r),i=!1}finally{i&&delete n[e]}return a.exports}r.ab="//";var o=r(162);e.exports=o}()},5152:function(e,t,n){e.exports=n(638)},4298:function(e,t,n){e.exports=n(699)},8217:function(e,t,n){"use strict";var r=n(6086),o=n(1720);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,a=o.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=a[0];var i=a[1];return a=e.value,e.getCurrentValue===t&&e.subscribe===n||(a=t(),i({getCurrentValue:t,subscribe:n,value:a})),o.useDebugValue(a),o.useEffect((function(){function e(){if(!o){var e=t();i((function(o){return o.getCurrentValue!==t||o.subscribe!==n||o.value===e?o:r({},o,{value:e})}))}}var o=!1,a=n(e);return e(),function(){o=!0,a()}}),[t,n]),a}},7161:function(e,t,n){"use strict";e.exports=n(8217)},7997:function(e,t,n){"use strict";n.d(t,{HY:function(){return r.HY},tZ:function(){return a},BX:function(){return a}});n(1720);var r=n(6400),o=0;function a(e,t,n,a,i){var u,s,c={};for(s in t)"ref"==s?u=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o,__source:a,__self:i};if("function"==typeof e&&(u=e.defaultProps))for(s in u)void 0===c[s]&&(c[s]=u[s]);return r.YM.vnode&&r.YM.vnode(l),l}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);