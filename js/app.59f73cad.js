(function(t){function e(e){for(var n,s,l=e[0],r=e[1],c=e[2],u=0,d=[];u<l.length;u++)s=l[u],o[s]&&d.push(o[s][0]),o[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,s=1;s<i.length;s++){var l=i[s];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},o={app:0},a=[];function l(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"27469ad0"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(t){var e=[],i={about:1};s[t]?e.push(s[t]):0!==s[t]&&i[t]&&e.push(s[t]=new Promise(function(e,i){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"6785daf6"}[t]+".css",o=r.p+n,a=document.getElementsByTagName("link"),l=0;l<a.length;l++){var c=a[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===n||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");a.request=n,delete s[t],p.parentNode.removeChild(p),i(a)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){s[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,i){n=o[t]=[e,i]});e.push(n[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=l(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var i=o[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");a.type=n,a.request=s,i[1](a)}o[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dog-UI/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"046d":function(t,e,i){},"0e35":function(t,e,i){},"0e8d":function(t,e,i){},1529:function(t,e,i){"use strict";var n=i("ce13"),s=i.n(n);s.a},"15f6":function(t,e,i){},1962:function(t,e,i){},"1fd0":function(t,e,i){"use strict";var n=i("74d6"),s=i.n(n);s.a},"21b6":function(t,e,i){"use strict";var n=i("1962"),s=i.n(n);s.a},"23d1":function(t,e,i){},2967:function(t,e,i){t.exports=i.p+"img/dog.ad8a5e64.jpg"},"2be9":function(t,e,i){},"2d43":function(t,e,i){"use strict";var n=i("23d1"),s=i.n(n);s.a},4355:function(t,e,i){"use strict";var n=i("9d02"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),i("div",{staticClass:"container"},[i("aside",{staticClass:"aside"},[i("ul",[i("li",{staticClass:"title"},[t._v("组件")]),i("li",{staticClass:"module-title"},[t._v("Common")]),i("li",{staticClass:"module"},[i("router-link",{attrs:{to:"/buttonDemo"}},[t._v("Button 按钮")])],1),i("li",{staticClass:"module"},[i("router-link",{attrs:{to:"/text"}},[t._v("Txt 文本")])],1),i("li",{staticClass:"module-title"},[t._v("Form")]),i("li",{staticClass:"module"},[i("router-link",{attrs:{to:"/inputDemo"}},[t._v("Input 输入框")])],1),i("li",{staticClass:"module"},[i("router-link",{attrs:{to:"/slideDemo"}},[t._v("Slide 滑块")])],1),i("li",{staticClass:"module"},[i("router-link",{attrs:{to:"/selectDemo"}},[t._v("Select 选择器")])],1),i("li",{staticClass:"module"},[i("router-link",{attrs:{to:"/radioGroupDemo"}},[t._v("Radio 单选框组")])],1),i("li",{staticClass:"module"},[i("router-link",{attrs:{to:"/checkBoxGroupDemo"}},[t._v("CheckBox 多选框组")])],1),i("li",{staticClass:"module-title"},[t._v("Navigation")]),i("li",{staticClass:"module"},[i("router-link",{attrs:{to:"/tabDemo"}},[t._v("Tab 标签页")])],1),i("li",{staticClass:"module-title"},[t._v("Notice")]),i("li",{staticClass:"module"},[i("router-link",{attrs:{to:"/messageDemo"}},[t._v("Message 消息提示")])],1),i("li",{staticClass:"module"},[i("router-link",{attrs:{to:"/messageBoxDemo"}},[t._v("MessageBox 弹框")])],1),i("li",{staticClass:"module"},[i("router-link",{attrs:{to:"/toastDemo"}},[t._v("Notification 通知")])],1),i("li",{staticClass:"module-title"},[t._v("Plugins")]),i("li",{staticClass:"module"},[i("router-link",{attrs:{to:"/dragableDemo"}},[t._v("Dragable 回到顶部")])],1),i("li",{staticClass:"module-title"},[t._v("Others")]),i("li",{staticClass:"module"},[i("router-link",{attrs:{to:"/hoverTipDemo"}},[t._v("Tooltip 文字提示")])],1)])]),i("main",{staticClass:"main"},[i("router-view")],1)]),i("footer",{staticClass:"footer"})])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:i("2967"),alt:"logo"}})]),n("div",{staticClass:"menu"},[n("ul",[n("li",[t._v("测试测试")])])])])}],a={data(){return{routesList:[]}},mounted(){}},l=a,r=(i("5c0b"),i("2877")),c=Object(r["a"])(l,s,o,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,d=i("8c4f");n["a"].use(d["a"]);var p=new d["a"]({routes:[{path:"/about",name:"about",component:function(){return i.e("about").then(i.bind(null,"f820"))}},{path:"/buttonDemo",name:"buttonDemo",component:function(){return i.e("about").then(i.bind(null,"aadb"))}},{path:"/text",name:"text",component:function(){return i.e("about").then(i.bind(null,"a067"))}},{path:"/slideDemo",name:"slideDemo",component:function(){return i.e("about").then(i.bind(null,"f3b6"))}},{path:"/hoverTipDemo",name:"hoverTipDemo",component:function(){return i.e("about").then(i.bind(null,"0ce4"))}},{path:"/messageBoxDemo",name:"messageBoxDemo",component:function(){return i.e("about").then(i.bind(null,"4dfb"))}},{path:"/messageDemo",name:"messageDemo",component:function(){return i.e("about").then(i.bind(null,"4809"))}},{path:"/toastDemo",name:"toastDemo",component:function(){return i.e("about").then(i.bind(null,"ce5a"))}},{path:"/tabDemo",name:"tabDemo",component:function(){return i.e("about").then(i.bind(null,"b82a"))}},{path:"/inputDemo",name:"inputDemo",component:function(){return i.e("about").then(i.bind(null,"1b1c"))}},{path:"/selectDemo",name:"selectDemo",component:function(){return i.e("about").then(i.bind(null,"a838"))}},{path:"/dragableDemo",name:"dragableDemo",component:function(){return i.e("about").then(i.bind(null,"5d33"))}},{path:"/radioDemo",name:"radioDemo",component:function(){return i.e("about").then(i.bind(null,"6210"))}},{path:"/radioGroupDemo",name:"radioGroupDemo",component:function(){return i.e("about").then(i.bind(null,"dabc"))}},{path:"/checkBoxGroupDemo",name:"checkBoxGroupDemo",component:function(){return i.e("about").then(i.bind(null,"d686"))}}]}),m=i("2f62");n["a"].use(m["a"]);var h=new m["a"].Store({state:{},mutations:{},actions:{}}),f=(i("d06d"),i("0874")),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[t.visible?i("div",{class:["toast-"+t.type,t.horizontalClass],style:t.positionStyle},[i("div",{staticClass:"toast-body"},[i("p",{staticClass:"toast-title"},[t._v("\n        "+t._s(t.title)+"\n      ")]),i("p",{staticClass:"toast-content",attrs:{title:t.content}},[t._v(t._s(t.content))])]),t.showClose?i("div",{staticClass:"toast-close-btn",attrs:{name:"close"},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[i("v-icon",{attrs:{name:"times"}})],1):t._e()]):t._e()])},b=[],g={data(){return{visible:!0}},watch:{visible(t){t||this.$el.addEventListener("transitionend",this.destroyElement)}},mounted(){document.body.appendChild(this.$el)},destroyed(){this.$el.parentNode.removeChild(this.$el)},methods:{destroyElement(){this.$destroy()},close(){this.visible=!1}}},y={warn:"exclamation-circle",info:"info-circle",success:"check-circle",error:"times-circle"},_={mixins:[g],props:{type:{type:String,default:"info"},content:{type:String,default:"测试"},title:{type:String,default:"提示"},duration:{type:Number,default:2500},position:{type:String,default:"top-right"},autoClose:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1}},data(){return{closed:!1,timer:null,verticalOffset:16}},computed:{horizontalClass(){this.position;return-1!==this.position.indexOf("right")?"right":"left"},positionStyle(){return{["top"]:`${this.verticalOffset}px`}},iconType(){return"normal"!==this.type?y[this.type]:this.type}},watch:{closed(t){t&&(this.visible=!1,this.$el.addEventListener("transitionend",this.destroyElement),this.$emit("toastClose"))}},mounted(){this.autoClose&&this.startTimer()},beforeDestroy(){this.stopTimer()},methods:{startTimer(){this.duration>0&&(this.timer=setTimeout(()=>{this.closed||this.close()},this.duration))},stopTimer(){this.timer&&clearTimeout(this.timer)},close(){this.closed=!0},destroyElement(){this.$destroy()}}},C=_,x=(i("5f5b"),Object(r["a"])(C,v,b,!1,null,null,null));x.options.__file="toast.vue";var $=x.exports;const w=["normal","warn","success","error","info"],k=n["a"].extend($),S=16;let T={},W=[],D=0,E=Object.keys($.props).filter(t=>$.props[t].required);function O(t){let e=W.filter(e=>e.position===t);return e.reduce((t,e)=>e.$el.offsetHeight+t+S,S)}function I(t){let e=0,i=t.verticalOffset;for(;e<W.length;e++)if(W[e].id===t.id)break;for(W.splice(e,1);e<W.length;++e)W[e].position===t.position&&([W[e].verticalOffset,i]=[i,W[e].verticalOffset])}function B(t){let e=new k({propsData:t}).$mount(document.createElement("div"));"function"===typeof t.onClose&&(e.onClose=t.onClose);let i="toast_"+D++;return e.id=i,e.verticalOffset=O(e.position),e.$once("toastClose",function(){const t=this;I(t),"function"===typeof t.onClose&&t.onClose()}),e}T.install=function(t){t.prototype.$toast=((t={})=>{if(E.forEach(e=>{if(!t[e])throw`err: options lack ${e} prop`}),t.type&&!w.some(e=>e===t.type))throw`err: toast not exist ${t.type} type`;let e=B(t);W.push(e)})};var P=T,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[t.visible?i("div",{staticClass:"mock"},[i("div",{class:["message-box"]},[i("h5",{staticClass:"message-box-header"},[i("span",[t._v(t._s(t.title))]),i("span",{staticClass:"close-btn",on:{click:t.closeClick}},[t.showClose?i("v-icon",{attrs:{name:"times"}}):t._e()],1)]),i("div",{staticClass:"message-box-body"},["alert"!==t.type?i("div",{staticClass:"message-icon"},[i("v-icon",{attrs:{name:"exclamation-circle",scale:"1.5",color:"red"}})],1):t._e(),i("div",{staticClass:"message-box-content",domProps:{innerHTML:t._s(t.content)}})]),i("div",{staticClass:"message-box-footer"},[t.cancelButtonText&&"alert"!==t.type?i("dog-button",{attrs:{size:"mini",type:"primary",outline:!0},on:{click:function(e){e.stopPropagation(),t.handleClick("cancel")}}},[t._v(t._s(t.cancelButtonText))]):t._e(),t.confirmButtonText?i("dog-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){e.stopPropagation(),t.handleClick("confirm")}}},[t._v(t._s(t.confirmButtonText))]):t._e()],1)])]):t._e()])},j=[],V={mixins:[g],props:{type:{type:String,default:""},title:{type:String,default:"提示"},content:{type:String,required:!0},confirmButtonText:{type:String,default:"确定"},cancelButtonText:{type:String,default:"取消"},showClose:{type:Boolean,default:!0}},methods:{handleClick(t){this.$emit(t),this.close()},closeClick(){this.close()}}},L=V,H=(i("1529"),Object(r["a"])(L,N,j,!1,null,null,null));H.options.__file="messageBox.vue";var G=H.exports;const z=n["a"].extend(G);function A(t,e="alert"){let i=new z({propsData:Object.assign(t,{type:e})}).$mount(document.createElement("div"));return i.onConfirm=t.onConfirm,i.onCancel=t.onCancel,i.onClose=t.onClose,"function"===typeof t.onConfirm&&(i.onConfirm=t.onConfirm,i.$on("confirm",function(){i.onConfirm()})),"function"===typeof t.onCancel&&(i.onCancel=t.onCancel,i.$on("cancel",function(){i.onCancel()})),"function"===typeof t.onClose&&(i.onClose=t.onClose,i.$on("close",function(){i.onClose()})),i}var M={install(t){t.prototype.$alert=((t={})=>A(t)),t.prototype.$confirm=((t={})=>A(t,"confirm"))}},q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[t.visible?i("div",{class:["message-"+t.type,"center"],style:t.positionStyle},[i("v-icon",{staticClass:"icon",attrs:{name:t.icon,size:"16"}}),i("p",{staticClass:"message-content",domProps:{innerHTML:t._s(t.content)}}),t.showClose?i("span",{on:{click:function(e){return e.stopPropagation(),t.messageClose(e)}}},[i("v-icon",{staticClass:"close-icon",attrs:{name:"times",size:"16"}})],1):t._e()],1):t._e()])},X=[],F={mixins:[g],props:{type:{type:String,default:"info"},content:{default:String,required:!0},duration:{type:Number,default:2e3},verticalOffset:{type:Number,default:32},showClose:{type:Boolean,default:!1}},data(){return{timer:null}},computed:{positionStyle(){return{["top"]:`${this.verticalOffset}px`}},icon(){return y[this.type]}},mounted(){this.startTimer()},beforeDestroy(){this.stopTimer()},methods:{startTimer(){this.duration>0&&(this.timer=setTimeout(()=>{this.close(),this.$emit("messageClose")},this.duration))},stopTimer(){this.timer&&clearTimeout(this.timer)},messageClose(){this.close()}}},K=F,Y=(i("fc89"),Object(r["a"])(K,q,X,!1,null,"d9a3c0e0",null));Y.options.__file="message.vue";var J=Y.exports,R={install(t){const e=t.extend(J);let i=null,n=0;function s(t){let i=new e({propsData:t}).$mount(document.createElement("div"));"function"===typeof t.onClose&&(i.onClose=t.onClose);let s="message"+n++;return i.id=s,i.$once("messageClose",function(){const t=this;"function"===typeof t.onClose&&t.onClose()}),i}t.prototype.$message=((t={})=>{i&&i.$destroy(),i=s(t)}),t.prototype.$closeMessage=(()=>{i&&i.$destroy()})}},U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:[t.vertical?"slider-wrapper-vertical":"slider-wrapper",{"is-disabled":t.disabled}]},[t.isIE?t._e():i("div",{staticClass:"progress",style:t.progressStyle}),i("input",t._g(t._b({directives:[{name:"model",rawName:"v-model",value:t.rate,expression:"rate"}],class:["slider-inner",{"is-disabled":t.disabled}],attrs:{disabled:t.disabled,min:t.min,max:t.max,type:"range"},domProps:{value:t.rate},on:{__r:function(e){t.rate=e.target.value}}},"input",t.$attrs,!1),t.$listeners)),!t.isIE&&t.showTooltip?i("span",{staticClass:"tooltip",style:t.toolTipPosition},[t._v(t._s(t.rate))]):t._e()])},Q=[],Z={props:{showTooltip:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},min:{type:Number,default:0},max:{type:Number,default:100},value:{type:[Number,String]},vertical:{type:Boolean,default:!1}},model:{prop:"value",event:"sliding"},data(){return{rate:0}},computed:{isIE(){return!!window.ActiveXObject||"ActiveXObject"in window||navigator.userAgent.indexOf("Edge")>-1},progressStyle(){const{rate:t,max:e,min:i}=this;return{width:`${100*(t-i)/(e-i)}%`}},toolTipPosition(){const{rate:t,max:e,min:i}=this,n=9-(t-i)/(e-i)*18;return this.vertical?{left:`${100*(t-i)/(e-i)}%`,marginLeft:`${n}px`,transform:"translate(-50%,-50%) rotate(90deg)"}:{left:`${100*(t-i)/(e-i)}%`,marginLeft:`${n}px`,transform:"translateX(-50%)"}}},watch:{rate(t){this.$emit("sliding",Number(t))},value:{handler(t){this.rate=this.value||this.min},immediate:!0}}},tt=Z,et=(i("bc1e"),Object(r["a"])(tt,U,Q,!1,null,null,null));et.options.__file="slide.vue";var it=et.exports,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["hover-tip",t.customClass]},[i("div",{staticClass:"hover-part"},[t._t("hover-part",[i("v-icon",{attrs:{name:t.iconName}})])],2),i("div",{class:[t.type,"tip-part"]},[t._t("tip-part"),i("div",{staticClass:"arrow"}),i("div",{staticClass:"block"})],2)])},st=[],ot={name:"hover-tip",props:{type:{type:String,default:"top-center"},customClass:{type:String,default:""},iconName:{type:String,default:"question-circle"}}},at=ot,lt=(i("4355"),Object(r["a"])(at,nt,st,!1,null,null,null));lt.options.__file="hoverTip.vue";var rt=lt.exports,ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",t._b({class:["btn",""+t.size,""+t.type,{outline:t.outline},{"is-disabled":t.disabled}],on:{click:function(e){return!t.disabled&&t.$emit("click",e)}}},"button",t.$attrs,!1),[t._t("default")],2)},ut=[],dt={props:{size:{type:String,default:"small"},disabled:{type:Boolean,default:!1},type:{type:String,default:"primary"},outline:{type:Boolean,default:!1}}},pt=dt,mt=(i("d753"),Object(r["a"])(pt,ct,ut,!1,null,"ea436494",null));mt.options.__file="button.vue";var ht=mt.exports,ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tabs-wrapper"},[i("ul",{class:["tabs-header",{"is-card":t.card}]},t._l(t.childrens,function(e,n){return i("li",{key:n,class:["tabs-header-item",{"is-active":t.activeId===e.id},{"is-disabled":e.disabled}],on:{click:function(i){i.stopPropagation(),!e.disabled&&t.handleClick(e)}}},[i("span",[t._v(t._s(e.label))]),i("span",{on:{click:function(i){i.stopPropagation(),t.handleDelete(e)}}},[e.closable?i("v-icon",{staticClass:"delete-btn",attrs:{name:"times-circle"}}):t._e()],1)])}),0),i("div",{staticClass:"tabs-content"},[t._t("default")],2)])},vt=[],bt={props:{value:{type:[Number,String]},card:{type:Boolean,default:!1}},model:{prop:"value",event:"change"},data(){return{activeId:"",childrens:[]}},provide(){return{fatTabs:this}},watch:{childrens(t){const e={},i=t.every(t=>{const{id:i}=t;return!e[i]&&(e[i]=!0,!0)});if(!i)throw new Error("Tab has duplicate ID");if(this.childrens.length){let t=!1;for(const e of this.childrens)if(this.value===e.id&&!e.disabled){this.activeId=e.id,t=!0;break}t||(this.activeId=this.childrens.filter(t=>!t.disabled)[0].id)}},value(t){this.activeId=t}},methods:{handleClick(t){this.activeId!==t.id&&(this.activeId=t.id,this.$emit("change",t.id))},handleDelete(t){this.childrens=this.childrens.filter(e=>e.id!==t.id)}}},gt=bt,yt=(i("bbd6"),Object(r["a"])(gt,ft,vt,!1,null,null,null));yt.options.__file="tabs.vue";var _t=yt.exports,Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"move"}},[t.isOpen?i("div",[t._t("default")],2):t._e()])},xt=[],$t={props:{label:{type:String,required:!0},id:{type:[String,Number],required:!0},disabled:{type:Boolean,default:!1},closable:{type:Boolean,default:!1}},computed:{isOpen(){return this.fatTabs.activeId===this.id}},inject:["fatTabs"],created(){this.fatTabs.childrens.push(this)},destroyed(){this.fatTabs.childrens=this.fatTabs.childrens.filter(t=>t.id!==this.id)}},wt=$t,kt=(i("1fd0"),Object(r["a"])(wt,Ct,xt,!1,null,null,null));kt.options.__file="tab.vue";var St=kt.exports,Tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["input-wrapper",{"have-prefix-icon":t.prefixIcon,"have-suffix-icon":t.suffixIcon}]},["textarea"===t.type?i("textarea",t._g(t._b({staticClass:"textarea-inner",domProps:{value:t.inputValue}},"textarea",t.$attrs,!1),t.inputListeners)):[t.prefixIcon?i("v-icon",{staticClass:"icon",attrs:{color:t.prefixIconColor,name:t.prefixIcon}}):t._e(),t._t("prepend"),i("input",t._g(t._b({class:["input-inner",{"have-prepand":t.havePrepand,"have-append":t.haveAppend}],attrs:{type:t.type},domProps:{value:t.inputValue}},"input",t.$attrs,!1),t.inputListeners)),t._t("append"),t.suffixIcon?i("v-icon",{staticClass:"icon",attrs:{color:t.suffixIconColor,name:t.suffixIcon}}):t._e()]],2)},Wt=[],Dt={props:{type:{type:String,default:"text"},value:{type:[String,Number],default:""},prefixIcon:{type:String},suffixIcon:{type:String},prefixIconColor:{type:String,default:"#c0c4cc"},suffixIconColor:{type:String,default:"#c0c4cc"}},model:{prop:"value",event:"input"},data(){return{inputValue:""}},computed:{havePrepand(){return this.$slots.prepend},haveAppend(){return this.$slots.append},inputListeners(){return Object.assign({},this.$listeners,{input:t=>this.$emit("input",t.target.value)})}},watch:{value:{handler(t){this.inputValue=t},immediate:!0}}},Et=Dt,Ot=(i("2d43"),Object(r["a"])(Et,Tt,Wt,!1,null,null,null));Ot.options.__file="input.vue";var It=Ot.exports,Bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("div",{class:["select-wrapper",{"is-disabled":t.disabled}],attrs:{tabindex:"0"},on:{click:function(e){t.openSelect(e)},blur:t.handleBlur,focus:t.handleFocus}},[i("div",{staticClass:"select-top-part"},[t.selectItems.length?[t.multiple?t.collapseTags?[i("span",{staticClass:"select-tag-item c-size-s",on:{click:function(e){t.handleDelete(t.selectItems[0],e)}}},[t._v("\n            "+t._s(t.selectItems[0].label)+"\n            "),i("v-icon",{staticClass:"delete-btn",attrs:{name:"times-circle",size:8}})],1),t.restValueNum?i("span",{staticClass:"select-tag-item c-size-s c-bold"},[t._v("\n            +\n            "+t._s(t.restValueNum)+"\n          ")]):t._e()]:t._l(t.selectItems,function(e){return i("span",{key:e.key,staticClass:"select-tag-item c-size-s",on:{click:function(i){t.handleDelete(e,i)}}},[t._v("\n            "+t._s(e.label)+"\n            "),i("v-icon",{staticClass:"delete-btn",attrs:{name:"times-circle",size:8}})],1)}):i("div",[t._v(t._s(t.selectItems[0].label))])]:[i("span",{staticClass:"placeholder"},[t._v(t._s(t.placeholder))])]],2),t.isOpen?i("v-icon",{staticClass:"arrow",attrs:{name:"chevron-up"}}):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"select-bottom-part"},[t._t("default")],2)],1)])},Pt=[],Nt={props:{placeholder:{type:String,default:"请选择"},optionKey:{type:String,default:"value"},value:{type:[String,Object,Number,Array]},multiple:{type:Boolean,default:!1},collapseTags:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},model:{prop:"value",event:"input"},data(){return{isOpen:!1,selectValue:[],selectItems:[]}},provide(){return{fatSelect:this}},computed:{restValueNum(){return this.selectItems.length-1}},watch:{value:{handler(t){const{multiple:e}=this,i=t||(e?[]:"");this.selectValue=e?[...i]:i},immediate:!0},selectValue:{handler(t){this.selectItems=[]}}},methods:{openSelect(t){"svg"!==t.target.localName&&"path"!==t.target.localName&&(this.isOpen=!this.disabled&&!this.isOpen)},handleDelete(t,e){if("svg"==e.target.localName||"path"==e.target.localName){const{value:e}=t;this.selectValue=this.selectValue.filter(t=>t!==e),this.$emit("input",this.selectValue),this.$emit("change",this.selectValue)}},handleBlur(t){this.isOpen=!1,this.$emit("blur",t)},handleFocus(t){this.$emit("focus",t)}}},jt=Nt,Vt=(i("ce7f"),Object(r["a"])(jt,Bt,Pt,!1,null,null,null));Vt.options.__file="index.vue";var Lt=Vt.exports,Ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["select-option-wrapper",{"is-selected":t.isSelect},{"is-disabled":t.disabled}],on:{click:function(e){return e.stopPropagation(),t.handleClick(e)}}},[t._t("default")],2)},Gt=[],zt={props:{value:{type:[Object,String,Number],required:!0},label:{type:String},disabled:{type:Boolean,defa:!1}},inject:["fatSelect"],computed:{isSelect(){const{fatSelect:{optionKey:t,selectItems:e}}=this,i=this[t]||this.$attrs[t];return e.find(t=>t.key===i)}},watch:{["fatSelect.selectValue"]:{handler(t){const{value:e,label:i,fatSelect:{optionKey:n,multiple:s,selectValue:o}}=this,a=this[n]||this.$attrs[n];(t===e||Array.isArray(t)&&t.find(t=>t===e))&&(s?this.fatSelect.selectItems.push({key:a,label:i,value:e}):this.fatSelect.selectItems=[{key:a,label:i,value:e}])},immediate:!0}},methods:{handleSelect(t){let{fatSelect:{multiple:e,selectValue:i},value:n,label:s,isSelect:o}=this;e?o?this.fatSelect.selectValue=i.filter(t=>t!==n):this.fatSelect.selectValue.push(n):(this.fatSelect.selectValue=n,this.fatSelect.isOpen=!1),this.fatSelect.$emit("change",this.fatSelect.selectValue),this.fatSelect.$emit("input",this.fatSelect.selectValue)},handleClick(){let{fatSelect:{multiple:t,optionKey:e,selectValue:i},disabled:n}=this;const s=this[e]||this.$attrs[e];n||this.handleSelect(s)}}},At=zt,Mt=(i("d296"),Object(r["a"])(At,Ht,Gt,!1,null,null,null));Mt.options.__file="index.vue";var qt=Mt.exports,Xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{class:[{"is-checked":t.value===t.model},{"is-disabled":t.isDisabled},"radio"],on:{click:function(e){return e.stopPropagation(),t.handleClick(e)}}},[i("span",{staticClass:"radio-inner"}),i("input",t._b({staticClass:"f-hide",attrs:{type:"radio",disabled:t.isDisabled},domProps:{value:t.model},on:{click:function(t){t.stopPropagation()}}},"input",t.$attrs,!1)),t._t("default")],2)},Ft=[],Kt={props:{value:{type:[String,Number],required:!0},disabled:{type:[Boolean],default:!1},propValue:{type:[String,Number]}},model:{prop:"propValue",event:"select"},computed:{isGroup(){return"dog-radiogroup"===this.$parent.$options._componentTag},isDisabled(){return this.$parent.disabled||this.disabled},model:{get(){return this.isGroup?this.$parent.value:this.propValue},set(t){this.isGroup?this.$parent.$emit("select",t):this.$emit("select",t)}}},methods:{handleClick(t){!this.isDisabled&&(this.model=this.value)}}},Yt=Kt,Jt=(i("9242"),Object(r["a"])(Yt,Xt,Ft,!1,null,null,null));Jt.options.__file="radio.vue";var Rt=Jt.exports,Ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["radio-group"],attrs:{name:"radio-group"}},[t._t("default")],2)},Qt=[],Zt={name:"radio-group",props:{value:{},disabled:Boolean},model:{prop:"value",event:"select"},watch:{value(t){this.$emit("change",t)}}},te=Zt,ee=(i("a403"),Object(r["a"])(te,Ut,Qt,!1,null,null,null));ee.options.__file="radioGroup.vue";var ie=ee.exports,ne=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{class:["checkbox",{"is-checked":t.isChecked},{"is-disabled":t.isDisabled}],on:{click:function(e){return e.stopPropagation(),t.handleClick(e)}}},[i("span",{staticClass:"checkbox__label"},[i("v-icon",{staticClass:"icon",attrs:{name:"check",size:4}})],1),t._e(),t._t("default")],2)},se=[],oe={props:{value:{type:[String,Number],required:!0},disabled:{type:[Boolean],default:!1},propValue:{type:[String,Number,Boolean]}},model:{prop:"propValue",event:"select"},data(){return{oldValueList:[]}},computed:{isGroup(){return"dog-checkBoxGroup"===this.$parent.$options._componentTag},isDisabled(){return this.$parent.disabled||this.disabled},isChecked(){let{isGroup:t,model:e}=this;if(!t)return e;let{value:i,$parent:{value:n}}=this,s=n.length;return void 0==this.$parent.min||void 0==this.$parent.max?n.some(t=>t===i):s>=this.$parent.min&&s<=this.$parent.max?(this.oldValueList=n,this.oldValueList.some(t=>t===i)):this.oldValueList.length>=this.$parent.min&&this.oldValueList.length<=this.$parent.max?(n=this.oldValueList,this.$parent.value=this.oldValueList,this.oldValueList.some(t=>t===i)):void 0},model:{get(){return this.isGroup?this.$parent.value:this.propValue},set(t){const{isGroup:e,isChecked:i}=this;e?i?this.$parent.deleteItem(t):this.$parent.selectItem(t):this.$emit("select",t)}}},methods:{handleClick(t){const{isDisabled:e,isGroup:i,model:n,value:s}=this;e||(this.model=i?s:!n)}}},ae=oe,le=(i("9162"),Object(r["a"])(ae,ne,se,!1,null,null,null));le.options.__file="index.vue";var re=le.exports,ce=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"checkbox-group",attrs:{name:"checkbox-group"}},[t._t("default")],2)},ue=[],de={name:"checkbox-group",props:{value:{type:Array,required:!0},disabled:{type:Boolean},min:{type:[Number]},max:{type:[Number]}},model:{prop:"value",event:"select"},watch:{value(t){this.$emit("change",t)}},computed:{isMin(){return this.value.length-1<this.min},isMax(){return this.value.length+1>this.max}},methods:{selectItem(t){const{value:e,isMax:i}=this;i||this.$emit("select",[...e,t])},deleteItem(t){const{value:e,isMin:i}=this;i||this.$emit("select",e.filter(e=>e!==t))}}},pe=de,me=(i("21b6"),Object(r["a"])(pe,ce,ue,!1,null,null,null));me.options.__file="index.vue";var he=me.exports,fe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"div",staticClass:"dragable-block",style:{width:t.elWidth,height:t.elHeight,left:t.left,top:t.top},on:{click:t.onBtnClicked}},[i("v-icon",{attrs:{size:6,name:"chevron-up"}}),i("p",[t._v(t._s(t.text))])],1)},ve=[],be={name:"FloatImgBtn",props:{text:{type:String,default:"Go Top"},itemWidth:{type:Number,default:60},itemHeight:{type:Number,default:60},gapWidth:{type:Number,default:10},coefficientHeight:{type:Number,default:.8},iconSize:{type:Number,default:20},animationTime:{type:Number,default:.3}},data(){return{timer:null,currentTop:0,clientWidth:0,clientHeight:0,left:0,top:0,isPC:Boolean}},computed:{elWidth:function(){return this.isPC?this.itemWidth+"px":this.itemWidth/document.documentElement.clientWidth*100+"vw"},elHeight:function(){return this.isPC?this.itemHeight+"px":this.itemHeight/document.documentElement.clientWidth*100+"vw"},elGapWidth:function(){return this.isPC?this.gapWidth:this.gapWidth/document.documentElement.clientWidth*100}},watch:{},created(){this.isPC=this.IsPC(),this.setPosition()},mounted(){let t=this;window.addEventListener("scroll",t.handleScrollStart),window.onresize=function(){t.isPC&&t.setPosition()},t.isPC?t.$nextTick(()=>{let e=0,i=0;const n=t.$refs.div;n.onmousedown=(s=>{e=(new Date).getTime(),n.style.transition="none";let o=s||event,a=o.clientX-n.offsetLeft,l=o.clientY-n.offsetTop;return document.onmousemove=(e=>{let i=e||event,s=i.clientX-a,o=i.clientY-l;s<0?s=0:s>document.documentElement.clientWidth-n.offsetWidth&&(s=document.documentElement.clientWidth-n.offsetWidth),o<0?o=0:o>document.documentElement.clientHeight-n.offsetHeight&&(o=document.documentElement.clientHeight-n.offsetHeight),t.left=s+"px",t.top=o+"px"}),document.onmouseup=(()=>{i=(new Date).getTime(),i-e<150&&window.scrollTo(0,0),document.onmousemove=null,document.onmouseup=null,n.style.transition="all "+t.animationTime+"s",parseInt(t.left.split("px")[0])>t.clientWidth/2?t.left=t.clientWidth-t.itemWidth-t.gapWidth+"px":t.left=t.gapWidth+"px"}),!1}),n.addEventListener("mouseup",()=>{})}):t.$nextTick(()=>{const e=t.$refs.div;e.addEventListener("touchstart",()=>{e.style.transition="none"}),e.addEventListener("touchmove",e=>{let i=e||event;if(i.preventDefault(),1===e.targetTouches.length){let e=event.targetTouches[0];t.left=(e.clientX-t.itemWidth/2)/t.clientWidth*100+"vw",t.top=(e.clientY-t.itemHeight/2)/t.clientWidth*100+"vw"}},!1),e.addEventListener("touchend",()=>{e.style.transition="all "+t.animationTime+"s",parseInt(t.left.split("vw")[0])>50?t.left=(t.clientWidth-t.itemWidth-t.gapWidth)/t.clientWidth*100+"vw":t.left=t.gapWidth/t.clientWidth*100+"vw"})})},beforeDestroy(){window.removeEventListener("scroll",this.handleScrollStart)},methods:{setPosition(){this.isPC?(this.clientWidth=document.documentElement.clientWidth,this.clientHeight=document.documentElement.clientHeight,this.left=this.clientWidth-this.itemWidth-this.gapWidth+"px",this.top=this.clientHeight*this.coefficientHeight+"px"):(this.clientWidth=document.documentElement.clientWidth,this.clientHeight=document.documentElement.clientHeight,this.left=(this.clientWidth-this.itemWidth-this.gapWidth)/this.clientWidth*100+"vw",this.top=this.clientHeight*this.coefficientHeight/this.clientWidth*100+"vw")},IsPC(){let t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],i=!0;for(var n=0;n<e.length;n++)if(t.indexOf(e[n])>0){i=!1;break}return i},onBtnClicked(){window.scrollTo(0,0)},handleScrollStart(){let t=this;t.$refs.div.style.transition="all "+t.animationTime+"s",t.timer&&clearTimeout(this.timer),t.timer=setTimeout(()=>{t.handleScrollEnd()},300),t.currentTop=document.documentElement.scrollTop||document.body.scrollTop,t.isPC?parseInt(t.left.split("px")[0])>t.clientWidth/2?t.left=t.clientWidth-t.itemWidth/2+"px":t.left=-t.itemWidth/2+"px":parseInt(t.left.split("vw")[0])>50?t.left=100-t.itemWidth/t.clientWidth*100/2+"vw":t.left=-t.itemWidth/t.clientWidth*100/2+"vw"},handleScrollEnd(){let t=this,e=document.documentElement.scrollTop||document.body.scrollTop;e===this.currentTop&&(t.isPC?parseInt(t.left.split("px")[0])>t.clientWidth/2?t.left=t.clientWidth-t.itemWidth-t.gapWidth+"px":t.left=t.gapWidth+"px":parseInt(t.left.split("vw")[0])>50?t.left=(t.clientWidth-t.itemWidth-t.gapWidth)/t.clientWidth*100+"vw":t.left=t.gapWidth/t.clientWidth*100+"vw",clearTimeout(t.timer))}}},ge=be,ye=(i("9df7"),Object(r["a"])(ge,fe,ve,!1,null,"fd785bbe",null));ye.options.__file="dragablepx.vue";var _e=ye.exports;n["a"].component("v-icon",f["a"]),n["a"].use(P),n["a"].use(M),n["a"].use(R),n["a"].component("dog-slide",it),n["a"].component("dog-hover-tip",rt),n["a"].component("dog-button",ht),n["a"].component("dog-tabs",_t),n["a"].component("dog-tab",St),n["a"].component("dog-input",It),n["a"].component("dog-select",Lt),n["a"].component("dog-option",qt),n["a"].component("dog-radio",Rt),n["a"].component("dog-radiogroup",ie),n["a"].component("dog-checkBox",re),n["a"].component("dog-checkBoxGroup",he),n["a"].component("dog-dragableTop",_e),n["a"].config.productionTip=!1,new n["a"]({router:p,store:h,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("5e27"),s=i.n(n);s.a},"5e27":function(t,e,i){},"5f5b":function(t,e,i){"use strict";var n=i("7a01"),s=i.n(n);s.a},6194:function(t,e,i){},"74d6":function(t,e,i){},"7a01":function(t,e,i){},"854b":function(t,e,i){},9162:function(t,e,i){"use strict";var n=i("854b"),s=i.n(n);s.a},9242:function(t,e,i){"use strict";var n=i("046d"),s=i.n(n);s.a},"9d02":function(t,e,i){},"9df7":function(t,e,i){"use strict";var n=i("2be9"),s=i.n(n);s.a},a403:function(t,e,i){"use strict";var n=i("ee37"),s=i.n(n);s.a},a96c:function(t,e,i){},bbd6:function(t,e,i){"use strict";var n=i("6194"),s=i.n(n);s.a},bc1e:function(t,e,i){"use strict";var n=i("0e35"),s=i.n(n);s.a},ce13:function(t,e,i){},ce7f:function(t,e,i){"use strict";var n=i("a96c"),s=i.n(n);s.a},d296:function(t,e,i){"use strict";var n=i("0e8d"),s=i.n(n);s.a},d753:function(t,e,i){"use strict";var n=i("eae2"),s=i.n(n);s.a},eae2:function(t,e,i){},ee37:function(t,e,i){},fc89:function(t,e,i){"use strict";var n=i("15f6"),s=i.n(n);s.a}});
//# sourceMappingURL=app.59f73cad.js.map