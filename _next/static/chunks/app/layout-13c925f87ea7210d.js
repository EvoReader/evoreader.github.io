(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1770:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(7437),a=n(2265);t.default=function({html:e,height:t=null,width:n=null,children:o,dataNtpc:l=""}){return(0,a.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${l}`}})},[l]),(0,r.jsxs)(r.Fragment,{children:[o,e?(0,r.jsx)("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=n?`${n}px`:"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:e}}):null]})}},8325:function(e,t,n){"use strict";let r;var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let o=n(7437),l=n(2265),i=a(n(8475));t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===r&&(r=n),(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:`
          window['${n}'] = window['${n}'] || [];
          function gtag(){window['${n}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');`}}),(0,o.jsx)(i.default,{id:"_next-ga",src:`https://www.googletagmanager.com/gtag/js?id=${t}`})]})},t.sendGAEvent=(...e)=>{if(void 0===r){console.warn("@next/third-parties: GA has not been initialized");return}window[r]?window[r].push(...e):console.warn(`@next/third-parties: GA dataLayer ${r} does not exist`)}},6293:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=n(7437),o=n(255),l=r(n(1770));t.default=function(e){let{apiKey:t,...n}=e,r={...n,key:t},{html:i}=(0,o.GoogleMapsEmbed)(r);return(0,a.jsx)(l.default,{height:r.height||null,width:r.width||null,html:i,dataNtpc:"GoogleMapsEmbed"})}},6927:function(e,t,n){"use strict";let r;var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let o=n(7437),l=n(2265),i=a(n(8475));t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:a,preview:s,dataLayer:u}=e;void 0===r&&(r=n);let c="dataLayer"!==n?`$l=${n}`:"",d=a?`&gtm_auth=${a}`:"",f=s?`&gtm_preview=${s}&gtm_cookies_win=x`:"";return(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${u?`w[l].push(${JSON.stringify(u)})`:""}
      })(window,'${n}');`}}),(0,o.jsx)(i.default,{id:"_next-gtm","data-ntpc":"GTM",src:`https://www.googletagmanager.com/gtm.js?id=${t}${c}${d}${f}`})]})},t.sendGTMEvent=e=>{if(void 0===r){console.warn("@next/third-parties: GTM has not been initialized");return}window[r]?window[r].push(e):console.warn(`@next/third-parties: GTM dataLayer ${r} does not exist`)}},3845:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var a=n(6293);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return r(a).default}});var o=n(8625);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return r(o).default}});var l=n(6927);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return l.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return l.sendGTMEvent}});var i=n(8325);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return i.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return i.sendGAEvent}})},8625:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=n(7437),o=r(n(8475)),l=n(255),i=r(n(1770)),s={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"};t.default=function(e){let{html:t,scripts:n,stylesheets:r}=(0,l.YouTubeEmbed)(e);return(0,a.jsx)(i.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==n?void 0:n.map(e=>(0,a.jsx)(o.default,{src:e.url,strategy:s[e.strategy],stylesheets:r},e.url))})}},6435:function(e,t,n){"use strict";n.d(t,{F:function(){return u},f:function(){return c}});var r=n(2265);let a=["light","dark"],o="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=(0,r.createContext)(void 0),s={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:s},c=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),d=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:s="theme",themes:u=d,defaultTheme:c=n?"system":"light",attribute:f="data-theme",value:y,children:b,nonce:v})=>{let[_,w]=(0,r.useState)(()=>p(s,c)),[j,x]=(0,r.useState)(()=>p(s)),O=y?Object.values(y):u,E=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=h());let o=y?y[r]:r,i=t?g():null,s=document.documentElement;if("class"===f?(s.classList.remove(...O),o&&s.classList.add(o)):o?s.setAttribute(f,o):s.removeAttribute(f),l){let e=a.includes(c)?c:null,t=a.includes(r)?r:e;s.style.colorScheme=t}null==i||i()},[]),M=(0,r.useCallback)(e=>{w(e);try{localStorage.setItem(s,e)}catch(e){}},[e]),T=(0,r.useCallback)(t=>{x(h(t)),"system"===_&&n&&!e&&E("system")},[_,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(o);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,r.useEffect)(()=>{let e=e=>{e.key===s&&M(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[M]),(0,r.useEffect)(()=>{E(null!=e?e:_)},[e,_]);let S=(0,r.useMemo)(()=>({theme:_,setTheme:M,forcedTheme:e,resolvedTheme:"system"===_?j:_,themes:n?[...u,"system"]:u,systemTheme:n?j:void 0}),[_,M,e,j,n,u]);return r.createElement(i.Provider,{value:S},r.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:l,storageKey:s,themes:u,defaultTheme:c,attribute:f,value:y,children:b,attrs:O,nonce:v}),b)},m=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:l,enableColorScheme:i,defaultTheme:s,value:u,attrs:c,nonce:d})=>{let f="system"===s,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=i?a.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=(e,t=!1,r=!0)=>{let o=u?u[e]:e,l=t?e+"|| ''":`'${o}'`,s="";return i&&r&&!t&&a.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?s+=t||o?`c.add(${l})`:"null":o&&(s+=`d[s](n,${l})`),s},h=e?`!function(){${m}${g(e)}}()`:l?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${g(u?"x[e]":"e",!0)}}${f?"":"else{"+g(s,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${g(u?"x[e]":"e",!0)}}else{${g(s,!1,!1)};}${p}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:h}})},()=>!0),p=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},8410:function(e,t,n){Promise.resolve().then(n.bind(n,6728))},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:l}=n;return l?a.innerHTML=l.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&i.push(n)}let u=t.map(a).filter(e=>{for(let t=0,n=i.length;t<n;t++)if(o(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(l-i.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return g},initScriptLoader:function(){return h},default:function(){return b}});let r=n(1024),a=n(8533),o=r._(n(4887)),l=a._(n(2265)),i=n(3634),s=n(3313),u=n(2185),c=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],m=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},p=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:l="",strategy:i="afterInteractive",onError:u,stylesheets:p}=e,g=n||t;if(g&&d.has(g))return;if(c.has(t)){d.add(g),c.get(t).then(r,u);return}let h=()=>{a&&a(),d.add(g)},y=document.createElement("script"),b=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),h()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(o?(y.innerHTML=o.__html||"",h()):l?(y.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",h()):t&&(y.src=t,c.set(t,b)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===i&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",i),p&&m(p),document.body.appendChild(y)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>p(e))}):p(e)}function h(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}function y(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:s="afterInteractive",onError:c,stylesheets:f,...m}=e,{updateScripts:g,scripts:h,getIsSsr:y,appDir:b,nonce:v}=(0,l.useContext)(i.HeadManagerContext),_=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;_.current||(a&&e&&d.has(e)&&a(),_.current=!0)},[a,t,n]);let w=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!w.current&&("afterInteractive"===s?p(e):"lazyOnload"===s&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>p(e))})),w.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(g?(h[s]=(h[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:c,...m}]),g(h)):y&&y()?d.add(t||n):y&&!y()&&p(e)),b){if(f&&f.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(o.default.preload(n,m.integrity?{as:"script",integrity:m.integrity}:{as:"script"}),l.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),l.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m}])+")"}}));"afterInteractive"===s&&n&&o.default.preload(n,m.integrity?{as:"script",integrity:m.integrity}:{as:"script"})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6728:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7437);n(3385);var a=n(3845);n(2265);var o=n(6435);function l(e){let{children:t,...n}=e;return(0,r.jsx)(o.f,{...n,children:t})}let i="EvoReader",s="Great ePub Reader",u="https://evoreader.github.io";function c(e){let{children:t}=e;return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[(0,r.jsx)("title",{children:"Evo Reader"}),(0,r.jsx)(a.GoogleAnalytics,{gaId:"G-X5DGG2EFDT"}),(0,r.jsx)("meta",{name:"application-name",content:"".concat(i)}),(0,r.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,r.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),(0,r.jsx)("meta",{name:"apple-mobile-web-app-title",content:"".concat(i)}),(0,r.jsx)("meta",{name:"description",content:"".concat(s)}),(0,r.jsx)("meta",{name:"format-detection",content:"telephone=no"}),(0,r.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/icons/browserconfig.xml"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#2B5797"}),(0,r.jsx)("meta",{name:"msapplication-tap-highlight",content:"no"}),(0,r.jsx)("meta",{name:"theme-color",content:"#122232"}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"/icons/icon-512x512.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/icons/icon-152x152.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/icons/touch-icon-iphone-retina.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"167x167",href:"/icons/touch-icon-ipad-retina.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"72x72",href:'/icons/icon-72x72.png"'}),(0,r.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{name:"twitter:url",content:"".concat(u)}),(0,r.jsx)("meta",{name:"twitter:title",content:"".concat(i)}),(0,r.jsx)("meta",{name:"twitter:description",content:"".concat(s)}),(0,r.jsx)("meta",{name:"twitter:image",content:"".concat(u,"/images/screenshot-wide-0.png")}),(0,r.jsx)("meta",{name:"twitter:creator",content:"@xian_min"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:"".concat(i)}),(0,r.jsx)("meta",{property:"og:description",content:"".concat(s)}),(0,r.jsx)("meta",{property:"og:site_name",content:"".concat(i)}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(u)}),(0,r.jsx)("meta",{property:"og:image",content:"".concat(u,"/images/screenshot-wide-0.png")})]}),(0,r.jsx)("body",{children:(0,r.jsx)(l,{attribute:"class",defaultTheme:"light",disableTransitionOnChange:!0,children:t})})]})}},3385:function(){},622:function(e,t,n){"use strict";var r=n(2265),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:i.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},7437:function(e,t,n){"use strict";e.exports=n(622)},8475:function(e,t,n){e.exports=n(5935)},255:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var r=n(531);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return r.GoogleAnalytics}});var a=n(173);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return a.GoogleMapsEmbed}});var o=n(2487);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return o.YouTubeEmbed}})},531:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let o=a(n(6893)),l=n(3202);t.GoogleAnalytics=e=>{var t=r(e,[]);return(0,l.formatData)(o.default,t)}},173:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let o=a(n(6362)),l=n(3202);t.GoogleMapsEmbed=e=>{var t=r(e,[]);return(0,l.formatData)(o.default,t)}},2487:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let o=a(n(5825)),l=n(3202);t.YouTubeEmbed=e=>{var t=r(e,[]);return(0,l.formatData)(o.default,t)}},3202:function(e,t){"use strict";function n(e,t,n=!1){return t?Object.keys(e).filter(e=>n?!t.includes(e):t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}):{}}function r(e,t,n,r){let a=r&&Object.keys(r).length>0?new URL(Object.values(r)[0],e):new URL(e);return t&&n&&t.forEach(e=>{n[e]&&a.searchParams.set(e,n[e])}),a.toString()}function a(e,t,n,a,o){var l;if(!t)return`<${e}></${e}>`;let i=(null===(l=t.src)||void 0===l?void 0:l.url)?Object.assign(Object.assign({},t),{src:r(t.src.url,t.src.params,a,o)}):t,s=Object.keys(Object.assign(Object.assign({},i),n)).reduce((e,t)=>{let r=null==n?void 0:n[t],a=i[t],o=null!=r?r:a,l=!0===o?t:`${t}="${o}"`;return o?e+` ${l}`:e},"");return`<${e}${s}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=r,t.createHtml=a,t.formatData=function(e,t){var o,l,i,s,u;let c=n(t,null===(o=e.scripts)||void 0===o?void 0:o.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[])),d=n(t,null===(i=null===(l=e.html)||void 0===l?void 0:l.attributes.src)||void 0===i?void 0:i.params),f=n(t,[null===(u=null===(s=e.html)||void 0===s?void 0:s.attributes.src)||void 0===u?void 0:u.slugParam]),m=n(t,[...Object.keys(c),...Object.keys(d),...Object.keys(f)],!0);return Object.assign(Object.assign({},e),{html:e.html?a(e.html.element,e.html.attributes,m,d,f):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:r(e.url,e.params,c)})):null})}},6893:function(e){"use strict";e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},6362:function(e){"use strict";e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},5825:function(e){"use strict";e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}},function(e){e.O(0,[971,752,744],function(){return e(e.s=8410)}),_N_E=e.O()}]);