(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,26,27],{318:function(e,t,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(76).default)("1ae7d03f",content,!0,{sourceMap:!1})},320:function(e,t,r){var content=r(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(76).default)("90ccea82",content,!0,{sourceMap:!1})},322:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"projects":"projets"},"en":{"projects":"projects"}}'),delete e.options._Ctor}},323:function(e,t,r){"use strict";var n=r(12),o=r(4),c=r(92),l=r(20),d=r(15),f=r(67),m=r(115),v=r(77),x=r(3),h=r(59),y=r(68).f,w=r(48).f,_=r(16).f,N=r(324).trim,j="Number",C=o.Number,O=C.prototype,E=f(h(O))==j,I=function(e){var t,r,n,o,c,l,d,code,f=v(e,!1);if("string"==typeof f&&f.length>2)if(43===(t=(f=N(f)).charCodeAt(0))||45===t){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(c(j,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var M,k=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof k&&(E?x((function(){O.valueOf.call(r)})):f(r)!=j)?m(new C(I(t)),r,k):I(t)},A=n?y(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;A.length>F;F++)d(C,M=A[F])&&!d(k,M)&&_(k,M,w(C,M));k.prototype=O,O.constructor=k,l(o,j,k)}},324:function(e,t,r){var n=r(36),o="["+r(325)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(c,"")),2&e&&(r=r.replace(l,"")),r}};e.exports={start:d(1),end:d(2),trim:d(3)}},325:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},326:function(e,t,r){"use strict";r(318)},327:function(e,t,r){var n=r(75)(!1);n.push([e.i,'.card[data-v-49e286e6]{display:flex;justify-content:space-between;align-items:center;width:500px;height:96px;border-bottom:1px solid #000;font-size:1.5rem;cursor:pointer}.card .new[data-v-49e286e6]{color:var(--primary)}.card .index[data-v-49e286e6],.card .new[data-v-49e286e6]{font-family:"Merriweather",serif;font-style:italic}.card .index[data-v-49e286e6]{font-weight:300}.border-top[data-v-49e286e6]{border-top:1px solid #000}',""]),e.exports=n},330:function(e,t,r){"use strict";r.r(t);var n=r(14),o=(r(323),r(32),r(65),r(28),r(19),r(33),r(43),r(27),r(44),r(58));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={props:{index:{type:Number,required:!0},title:{type:String,required:!0},image:{type:String,required:!0},isNew:{type:Boolean,default:!1}},computed:{titleFormatted:function(){return this.title.toUpperCase()},indexFormatted:function(){return this.index+1<10?"0".concat(this.index+1):"".concat(this.index+1)},link:function(){return"/experiences/"+this.title.replace(/\s/g,"")}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["addImageUrl","resetImageUrl","setMouseHover"]))},d=(r(326),r(54)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("NuxtLink",{attrs:{to:e.link}},[r("div",{staticClass:"card",class:0===e.index&&"border-top",on:{mouseover:function(t){e.addImageUrl(e.image),e.setMouseHover(!0)},mouseleave:function(t){e.resetImageUrl(),e.setMouseHover(!1)}}},[r("div",[e.isNew?r("span",{staticClass:"new"},[e._v("new")]):e._e(),r("span",[e._v(e._s(e.titleFormatted))])]),r("span",{staticClass:"index"},[e._v(e._s(e.indexFormatted))])])])}),[],!1,null,"49e286e6",null);t.default=component.exports},334:function(e,t,r){var content=r(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(76).default)("9de99b26",content,!0,{sourceMap:!1})},335:function(e,t,r){"use strict";r(320)},336:function(e,t,r){var n=r(75)(!1);n.push([e.i,'h2[data-v-264c8b00]{font-family:"Merriweather",serif;font-weight:700;font-style:italic;margin-bottom:8px}',""]),e.exports=n},340:function(e,t,r){"use strict";r.r(t),t.default=[{title:"okarito",isNew:!0,image:"okarito.png",priority:10},{title:"ratp",isNew:!1,image:"ratp.png",priority:0}]},341:function(e,t,r){"use strict";r.r(t),t.default=[{title:"portfoliov3",isNew:!0,image:"portfoliov3.png",priority:2},{title:"lesgrainsdesel",isNew:!0,image:"lesgrainsdesel.png",priority:5},{title:"buzzer",isNew:!1,image:"buzzer.png",priority:0},{title:"data handling for ratp",isNew:!1,image:"vigicrue.png",priority:0},{title:"machine learning labelling",isNew:!1,image:"labelling.png",priority:0},{title:"grapher",isNew:!1,image:"grapher.png",priority:0}]},344:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,required:!0},cardElements:{type:Array,required:!0}},computed:{titleFormatted:function(){return this.title.toUpperCase()}}},o=(r(335),r(54)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v(e._s(e.titleFormatted))]),e._l(e.cardElements,(function(e,t){return r("Card",{key:t,attrs:{title:"okarito",index:t,title:e.title,isNew:e.isNew,image:e.image}})}))],2)}),[],!1,null,"264c8b00",null);t.default=component.exports;installComponents(component,{Card:r(330).default})},350:function(e,t,r){"use strict";r(334)},351:function(e,t,r){var n=r(75)(!1);n.push([e.i,".experiences[data-v-35dcd13a]{display:flex;grid-gap:4rem;gap:4rem;padding:18rem 2rem}.experiences .zindex[data-v-35dcd13a]{z-index:10}.experiences .image-wrapper[data-v-35dcd13a]{position:relative;flex-grow:1;display:flex;justify-content:center;align-items:center}.experiences .image-wrapper .image[data-v-35dcd13a]{width:100%;max-width:60rem;max-height:80vh;border-radius:.25rem}.experiences .projects[data-v-35dcd13a]{margin-top:140px}.experiences .fade-enter-active[data-v-35dcd13a],.experiences .fade-leave-active[data-v-35dcd13a]{transition:opacity 1s}.experiences .fade-enter[data-v-35dcd13a],.experiences .fade-leave-to[data-v-35dcd13a]{opacity:0}",""]),e.exports=n},352:function(e,t,r){"use strict";var n=r(322),o=r.n(n);t.default=o.a},364:function(e,t,r){"use strict";r.r(t);var n=r(340),o=r(341),c={data:function(){return{experiencesCards:n.default,projectsCards:o.default}}},l=(r(350),r(54)),d=r(352),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"experiences"},[r("div",{staticClass:"image-wrapper"},[r("transition",{attrs:{name:"fade"}},[e.$store.state.imageUrl.length?r("img",{staticClass:"image",attrs:{src:e.$store.state.imageUrl}}):e._e()])],1),r("div",{staticClass:"zindex"},[r("CardList",{attrs:{title:"experience",cardElements:e.experiencesCards}}),r("CardList",{staticClass:"projects",attrs:{title:e.$t("projects"),cardElements:e.projectsCards}})],1)])}),[],!1,null,"35dcd13a",null);"function"==typeof d.default&&Object(d.default)(component);t.default=component.exports;installComponents(component,{CardList:r(344).default})}}]);