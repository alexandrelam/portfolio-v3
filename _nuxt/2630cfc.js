(window.webpackJsonp=window.webpackJsonp||[]).push([[22,2,3,5,7,8,9,10,11,12,13,26,27],{276:function(e,t,r){var content=r(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(71).default)("1ae7d03f",content,!0,{sourceMap:!1})},277:function(e,t,r){var content=r(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(71).default)("288547af",content,!0,{sourceMap:!1})},278:function(e,t,r){var content=r(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(71).default)("90ccea82",content,!0,{sourceMap:!1})},279:function(e,t,r){"use strict";r(276)},280:function(e,t,r){var o=r(70)(!1);o.push([e.i,'.card[data-v-49e286e6]{display:flex;justify-content:space-between;align-items:center;width:500px;height:96px;border-bottom:1px solid #000;font-size:1.5rem;cursor:pointer}.card .new[data-v-49e286e6]{color:var(--primary)}.card .index[data-v-49e286e6],.card .new[data-v-49e286e6]{font-family:"Merriweather",serif;font-style:italic}.card .index[data-v-49e286e6]{font-weight:300}.border-top[data-v-49e286e6]{border-top:1px solid #000}',""]),e.exports=o},281:function(e,t,r){"use strict";r.r(t);var o=r(8),n=(r(188),r(43),r(62),r(21),r(19),r(20),r(29),r(18),r(30),r(48));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={props:{index:{type:Number,required:!0},title:{type:String,required:!0},image:{type:String,required:!0},isNew:{type:Boolean,default:!1}},computed:{titleFormatted:function(){return this.title.toUpperCase()},indexFormatted:function(){return this.index+1<10?"0".concat(this.index+1):"".concat(this.index+1)},link:function(){return"/experiences/"+this.title.replace(/\s/g,"")}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.c)(["addImageUrl","resetImageUrl","setMouseHover"]))},d=(r(279),r(26)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("NuxtLink",{attrs:{to:e.link}},[r("div",{staticClass:"card",class:0===e.index&&"border-top",on:{mouseover:function(t){e.addImageUrl(e.image),e.setMouseHover(!0)},mouseleave:function(t){e.resetImageUrl(),e.setMouseHover(!1)}}},[r("div",[e.isNew?r("span",{staticClass:"new"},[e._v("new")]):e._e(),r("span",[e._v(e._s(e.titleFormatted))])]),r("span",{staticClass:"index"},[e._v(e._s(e.indexFormatted))])])])}),[],!1,null,"49e286e6",null);t.default=component.exports},282:function(e,t,r){"use strict";r(277)},283:function(e,t,r){var o=r(70)(!1);o.push([e.i,".size[data-v-51fd2879]{width:24px}",""]),e.exports=o},284:function(e,t,r){e.exports=r.p+"img/hand_wave.2f48cd4.png"},285:function(e,t,r){var content=r(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(71).default)("1272d8cc",content,!0,{sourceMap:!1})},286:function(e,t,r){var content=r(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(71).default)("1b3621b0",content,!0,{sourceMap:!1})},287:function(e,t,r){"use strict";r(278)},288:function(e,t,r){var o=r(70)(!1);o.push([e.i,'h2[data-v-264c8b00]{font-family:"Merriweather",serif;font-weight:700;font-style:italic;margin-bottom:8px}',""]),e.exports=o},289:function(e,t,r){e.exports=r.p+"img/green_book.4c0fc3b.png"},290:function(e,t,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(71).default)("16492333",content,!0,{sourceMap:!1})},291:function(e,t,r){var content=r(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(71).default)("8e057b4c",content,!0,{sourceMap:!1})},292:function(e,t,r){"use strict";r.r(t),t.default=[{title:"okarito",isNew:!0,image:"okarito.png",priority:10},{title:"ratp",isNew:!1,image:"ratp.png",priority:0}]},293:function(e,t,r){"use strict";r.r(t),t.default=[{title:"portfoliov3",isNew:!0,image:"portfoliov3.png",priority:2},{title:"lesgrainsdesel",isNew:!0,image:"lesgrainsdesel.png",priority:5},{title:"buzzer",isNew:!1,image:"buzzer.png",priority:0},{title:"data handling for ratp",isNew:!1,image:"vigicrue.png",priority:0},{title:"machine learning labelling",isNew:!1,image:"labelling.png",priority:0},{title:"grapher",isNew:!1,image:"grapher.png",priority:0}]},294:function(e,t,r){"use strict";r.r(t);var o={name:"IGithub"},n=(r(282),r(26)),component=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"size",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"}},[t("path",{attrs:{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}})])}),[],!1,null,"51fd2879",null);t.default=component.exports},295:function(e,t,r){"use strict";r.r(t);var o={name:"IHandWave"},n=r(26),component=Object(n.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("img",{attrs:{src:r(284),alt:"hand_wave"}})}),[],!1,null,null,null);t.default=component.exports},296:function(e,t,r){"use strict";r.r(t);var o={props:{title:{type:String,required:!0},cardElements:{type:Array,required:!0}},computed:{titleFormatted:function(){return this.title.toUpperCase()}}},n=(r(287),r(26)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v(e._s(e.titleFormatted))]),e._l(e.cardElements,(function(e,t){return r("Card",{key:t,attrs:{title:"okarito",index:t,title:e.title,isNew:e.isNew,image:e.image}})}))],2)}),[],!1,null,"264c8b00",null);t.default=component.exports;installComponents(component,{Card:r(281).default})},297:function(e,t,r){"use strict";r.r(t);var o={name:"IGreenBook"},n=r(26),component=Object(n.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("img",{attrs:{src:r(289),alt:"green_book"}})}),[],!1,null,null,null);t.default=component.exports},298:function(e,t,r){"use strict";r.r(t);var o={name:"IArrowUp"},n=r(26),component=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"long-arrow-alt-up",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"}},[t("path",{attrs:{fill:"white",d:"M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"}})])}),[],!1,null,null,null);t.default=component.exports},299:function(e,t,r){"use strict";r(285)},300:function(e,t,r){var o=r(70)(!1);o.push([e.i,".hero[data-v-7f6eac5f]{height:100vh;position:relative;overflow:hidden}.hero .hi-wrapper[data-v-7f6eac5f]{display:flex;align-items:center;grid-gap:.8rem;gap:.8rem}.hero .hi-wrapper .emoji[data-v-7f6eac5f]{width:3rem}.hero .text-wrapper[data-v-7f6eac5f]{position:absolute;left:2rem;bottom:2rem;font-size:2rem}.hero .icons[data-v-7f6eac5f]{position:absolute;top:2rem;right:2rem;display:flex;flex-direction:column;align-items:center;grid-gap:24px;gap:24px}.hero .icons span[data-v-7f6eac5f]{display:block}",""]),e.exports=o},301:function(e,t,r){"use strict";r(286)},302:function(e,t,r){var o=r(70)(!1);o.push([e.i,".experiences[data-v-8493b64c]{display:flex;grid-gap:4rem;gap:4rem;padding:18rem 2rem}.experiences .zindex[data-v-8493b64c]{z-index:10}.experiences .image-wrapper[data-v-8493b64c]{position:relative;flex-grow:1;display:flex;justify-content:center;align-items:center}.experiences .image-wrapper .image[data-v-8493b64c]{width:100%;max-width:60rem;max-height:80vh;border-radius:.25rem}.experiences .projects[data-v-8493b64c]{margin-top:140px}.experiences .fade-enter-active[data-v-8493b64c],.experiences .fade-leave-active[data-v-8493b64c]{transition:opacity 1s}.experiences .fade-enter[data-v-8493b64c],.experiences .fade-leave-to[data-v-8493b64c]{opacity:0}",""]),e.exports=o},303:function(e,t,r){"use strict";r(290)},304:function(e,t,r){var o=r(70)(!1);o.push([e.i,'.resume[data-v-0f1378ba]{padding:18rem 2rem;font-size:2.5rem}.resume[data-v-0f1378ba],.resume a[data-v-0f1378ba]{display:flex;justify-content:center;align-items:center}.resume a[data-v-0f1378ba]{grid-gap:1.5rem;gap:1.5rem}.resume h2[data-v-0f1378ba]{font-family:"Merriweather",serif}',""]),e.exports=o},305:function(e,t,r){"use strict";r(291)},306:function(e,t,r){var o=r(70)(!1);o.push([e.i,'.fade-enter-active[data-v-3cd253ad],.fade-leave-active[data-v-3cd253ad]{transition:opacity .3s}.fade-enter[data-v-3cd253ad],.fade-leave-to[data-v-3cd253ad]{opacity:0}.footer[data-v-3cd253ad]{padding:5px;background-color:var(--blackblack);height:380px;display:flex;flex-direction:column}.footer .align-right[data-v-3cd253ad]{display:flex;align-items:center;grid-gap:.5rem;gap:.5rem;margin-left:auto;margin-top:28px;margin-right:28px;cursor:pointer;background:none;border:none;padding:0;outline:inherit}.footer .align-right .arrow[data-v-3cd253ad]{width:10px;display:flex}.footer .align-right span[data-v-3cd253ad]{font-family:"Merriweather",sans-serif;font-weight:700;color:#fff}.footer .info[data-v-3cd253ad]{display:flex;justify-content:space-between}.footer .info span[data-v-3cd253ad]{font-family:"Merriweather",sans-serif;font-size:.875rem;color:#fff}.footer .text-wrapper[data-v-3cd253ad]{display:flex;flex-grow:1;justify-content:center;align-items:center;grid-gap:40px;gap:40px}.footer .text-wrapper h2[data-v-3cd253ad]{color:#fff;font-size:2rem;font-family:"Merriweather",sans-serif}.footer .text-wrapper .email-wrapper[data-v-3cd253ad]{position:relative}.footer .text-wrapper .email-wrapper .copied[data-v-3cd253ad]{padding:6px 10px;border-radius:4px;background-color:var(--background);position:absolute;font-weight:700;top:-40px;left:50%;transform:translate(-50%)}.footer .text-wrapper button[data-v-3cd253ad]{color:#fff;font-family:"Cabin",sans-serif;font-size:1.65rem;background:none;border:none;padding:0;cursor:pointer;outline:inherit}',""]),e.exports=o},307:function(e,t,r){var content=r(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(71).default)("28f1127f",content,!0,{sourceMap:!1})},308:function(e,t,r){"use strict";r.r(t);r(21),r(19),r(20),r(29),r(18),r(30);var o=r(8),n=r(294),c=r(295),l=r(48);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={components:{IGithub:n.default,IHandWave:c.default},mounted:function(){this.$nextTick((function(){var e=this.$gsap.timeline();e.from("#hi",{opacity:0,y:300,duration:.8}),e.from(".emoji",{opacity:0,duration:1},"<0.8"),e.from("#header1",{opacity:0,y:300,duration:1},"0.7"),e.from("#header2",{opacity:0,y:300,duration:1},"<0.2"),e.from("#lang",{opacity:0,x:300,duration:1},"<0.3"),e.from("#git",{opacity:0,x:300,duration:1},"<0.2")}))},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.c)(["setMouseHover","setMouseSmall"]))},m=(r(299),r(26)),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"hero"},[r("div",{staticClass:"text-wrapper"},[r("div",{staticClass:"hi-wrapper"},[r("h2",{attrs:{id:"hi"}},[e._v("HI")]),r("IHandWave",{staticClass:"emoji"})],1),r("h2",{attrs:{id:"header1"}},[e._v("I'm Alexandre LAM, a developer")]),r("h2",{attrs:{id:"header2"}},[e._v("based in Paris")])]),r("div",{staticClass:"icons"},[r("a",{attrs:{id:"lang",href:"#"},on:{mouseover:function(t){e.setMouseHover(!0),e.setMouseSmall(!0)},mouseleave:function(t){e.setMouseHover(!1),e.setMouseSmall(!1)}}},[r("span",[e._v("EN")])]),r("a",{attrs:{id:"git",href:"https://github.com/alexandrelam",target:"_blank"},on:{mouseover:function(t){e.setMouseHover(!0),e.setMouseSmall(!0)},mouseleave:function(t){e.setMouseHover(!1),e.setMouseSmall(!1)}}},[r("IGithub",{staticClass:"git"})],1)])])}),[],!1,null,"7f6eac5f",null);t.default=component.exports},309:function(e,t,r){"use strict";r.r(t);var o=r(292),n=r(293),c={data:function(){return{experiencesCards:o.default,projectsCards:n.default}}},l=(r(301),r(26)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"experiences"},[r("div",{staticClass:"image-wrapper"},[r("transition",{attrs:{name:"fade"}},[e.$store.state.imageUrl.length?r("nuxt-img",{staticClass:"image",attrs:{src:e.$store.state.imageUrl,quality:"70",fit:"cover"}}):e._e()],1)],1),r("div",{staticClass:"zindex"},[r("CardList",{attrs:{title:"experience",cardElements:e.experiencesCards}}),r("CardList",{staticClass:"projects",attrs:{title:"projects",cardElements:e.projectsCards}})],1)])}),[],!1,null,"8493b64c",null);t.default=component.exports;installComponents(component,{CardList:r(296).default})},310:function(e,t,r){"use strict";r.r(t);r(21),r(19),r(20),r(29),r(18),r(30);var o=r(8),n=r(297),c=r(48);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={components:{IGreenBook:n.default},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)(["setMouseHover"]))},f=(r(303),r(26)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"resume"},[r("a",{attrs:{href:"/static/resume.pdf",download:""},on:{mouseover:function(t){return e.setMouseHover(!0)},mouseleave:function(t){return e.setMouseHover(!1)}}},[r("h2",[e._v("DOWNLOAD MY RESUME")]),r("IGreenBook")],1)])}),[],!1,null,"0f1378ba",null);t.default=component.exports},311:function(e,t,r){"use strict";r.r(t);r(21),r(19),r(20),r(29),r(18),r(30);var o=r(8),n=(r(63),r(298)),c=r(48);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={components:{IArrowUp:n.default},data:function(){return{displayCopied:!1}},methods:d(d({},Object(c.c)(["setMouseHover"])),{},{scrollTop:function(){window.scroll({top:0,left:0,behavior:"smooth"})},handleCopy:function(){var e=this,t=document.querySelector("#emailCopy");t.setAttribute("type","text"),t.select();try{document.execCommand("copy"),this.displayCopied=!0,setTimeout((function(){e.displayCopied=!1}),1e3)}catch(e){alert("Oops, unable to copy")}t.setAttribute("type","hidden"),window.getSelection().removeAllRanges()}})},m=(r(305),r(26)),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"footer"},[r("button",{staticClass:"align-right",on:{click:e.scrollTop}},[r("span",{on:{mouseover:function(t){return e.setMouseHover(!0)},mouseleave:function(t){return e.setMouseHover(!1)}}},[e._v("bring me to the top")]),r("IArrowUp",{staticClass:"arrow"})],1),r("div",{staticClass:"text-wrapper"},[r("h2",[e._v("LET'S GET IN TOUCH")]),r("div",{staticClass:"email-wrapper"},[r("transition",{attrs:{name:"fade"}},[e.displayCopied?r("span",{staticClass:"copied"},[e._v("Copied!")]):e._e()]),r("button",{on:{click:e.handleCopy,mouseover:function(t){return e.setMouseHover(!0)},mouseleave:function(t){return e.setMouseHover(!1)}}},[e._v("alexandrelam@outlook.com")]),r("input",{attrs:{type:"hidden",id:"emailCopy",value:"alexandrelam@outlook.com"}})],1)]),e._m(0)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"info"},[r("span",[e._v("2021")]),r("span",[e._v("designed and developed by Alexandre LAM")])])}],!1,null,"3cd253ad",null);t.default=component.exports},312:function(e,t,r){"use strict";r(307)},313:function(e,t,r){var o=r(70)(!1);o.push([e.i,':root{--primary:#ffb600;--black:#0b0f25;--blackblack:#0f0f0f;--background:#fffcf5}*{font-family:"Roboto",sans-serif;color:#0b0f25;color:var(--black)}a{text-decoration:none;color:inherit}body,h2{margin:0}',""]),e.exports=o},327:function(e,t,r){"use strict";r.r(t);var o=r(308),n=r(309),c=r(310),l=r(311),d={components:{Hero:o.default,Experiences:n.default,Resume:c.default,Footer:l.default}},f=(r(312),r(26)),component=Object(f.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Hero"),t("Experiences"),t("Resume"),t("Footer")],1)}),[],!1,null,null,null);t.default=component.exports}}]);