(()=>{var t={195:(t,n,r)=>{t.exports=r(236)},236:t=>{var n=function(t){"use strict";var n,r=Object.prototype,e=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,r){return t[n]=r}}function u(t,n,r,e){var o=n&&n.prototype instanceof v?n:v,i=Object.create(o.prototype),a=new N(e||[]);return i._invoke=function(t,n,r){var e=f;return function(o,i){if(e===m)throw new Error("Generator is already running");if(e===d){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=I(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===f)throw e=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=m;var s=l(t,n,r);if("normal"===s.type){if(e=r.done?d:h,s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(e=d,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",m="executing",d="completed",p={};function v(){}function g(){}function y(){}var w={};s(w,i,(function(){return this}));var L=Object.getPrototypeOf,b=L&&L(L(E([])));b&&b!==r&&e.call(b,i)&&(w=b);var k=y.prototype=v.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&e.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}}function I(t,r){var e=t.iterator[r.method];if(e===n){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=n,I(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=n),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function A(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function E(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(e.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=n,r.done=!0,r};return a.next=a}}return{next:O}}function O(){return{value:n,done:!0}}return g.prototype=y,s(k,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(_.prototype),s(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(n,r,e,o,i){void 0===i&&(i=Promise);var a=new _(u(n,r,e,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(k),s(k,c,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},t.values=E,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(e,o){return c.type="throw",c.arg=t,r.next=e,o&&(r.method="next",r.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=e.call(a,"catchLoc"),u=e.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:E(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=n),p}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return r.d(n,{a:n}),n},r.d=(t,n)=>{for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var e={};(()=>{"use strict";r.r(e),r.d(e,{extend:()=>nt});const t=flarum.core.compat["forum/app"];var n=r.n(t);const o=flarum.core.compat["common/extend"],i=flarum.core.compat["forum/components/UserSecurityPage"];var a=r.n(i);function c(t,n,r,e,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?n(s):Promise.resolve(s).then(e,o)}function s(t){return function(){var n=this,r=arguments;return new Promise((function(e,o){var i=t.apply(n,r);function a(t){c(i,e,o,a,s,"next",t)}function s(t){c(i,e,o,a,s,"throw",t)}a(void 0)}))}}function u(t,n){return u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},u(t,n)}function l(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,u(t,n)}var f=r(195),h=r.n(f);const d=flarum.core.compat["common/Component"];var p=r.n(d);const v=flarum.core.compat["common/components/FieldSet"];var g=r.n(v);const y=flarum.core.compat["common/helpers/listItems"];var w=r.n(y);const L=flarum.core.compat["common/utils/ItemList"];var b=r.n(L);const k=flarum.core.compat["common/components/LoadingIndicator"];var x=r.n(k);const _=flarum.core.compat["common/helpers/icon"];var I=r.n(_);const P=flarum.core.compat["common/components/Button"];var A=r.n(P);const N=flarum.core.compat["common/helpers/humanTime"];var E=r.n(N),O=function(t){function r(){return t.apply(this,arguments)||this}l(r,t);var e=r.prototype;return e.view=function(t){var r=this.attrs.provider;return r.orphaned()?m("div",null,m("p",{className:"LinkedAccountsList-item-title"},r.name()),m("p",{className:"helpText"},n().translator.trans("fof-oauth.forum.user.settings.linked-account.orphaned-account")),this.renderDates(r)):r.linked()?m("div",null,m("p",{className:"LinkedAccountsList-item-title"},n().translator.trans("fof-oauth.forum.providers."+r.name())),this.renderDates(r)):m("div",null,m("p",{className:"LinkedAccountsList-item-title"},n().translator.trans("fof-oauth.forum.providers."+r.name())))},e.renderDates=function(t){return m("dl",null,m("dt",{className:"LinkedAccountsList-item-title"},n().translator.trans("fof-oauth.forum.user.settings.linked-account.link-created-label")),m("dd",{className:"LinkedAccountsList-item-value"},E()(t.firstLogin())),m("dt",{className:"LinkedAccountsList-item-title"},n().translator.trans("fof-oauth.forum.user.settings.linked-account.last-used-label")),m("dd",{className:"LinkedAccountsList-item-value"},E()(t.lastLogin())))},r}(p());const j=flarum.core.compat["common/utils/extractText"];var B=r.n(j),F=function(t){function r(){for(var n,r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];return(n=t.call.apply(t,[this].concat(e))||this).state={loading:!1},n}l(r,t);var e=r.prototype;return e.onbeforeupdate=function(r){t.prototype.onbeforeupdate.call(this,r),n().fof_oauth_linkingInProgress&&n().fof_oauth_linkingProvider===this.attrs.provider.name()?this.state.loading=!0:!1===n().fof_oauth_linkingInProgress&&n().fof_oauth_linkingProvider===this.attrs.provider.name()&&(this.state.loading=!1,delete n().fof_oauth_linkingInProgress,delete n().fof_oauth_linkingProvider)},e.view=function(t){return m("div",{className:"LinkedAccounts-Account LinkedAccounts-Account--"+this.attrs.provider.name()},this.iconView(),this.statusView(),this.actionView())},e.iconView=function(){return m("div",{className:"LinkedAccountsList-item-icon"},I()(this.attrs.provider.icon(),{className:"Provider-Icon Provider-Icon--"+this.attrs.provider.name()}))},e.statusView=function(){var t=this.attrs.provider;return m(O,{provider:t})},e.actionView=function(){var t=this,r=this.attrs.provider,e=this.attrs.user;return r.linked()?m("div",{className:"LinkedAccountsList-item-actions"},m(A(),{className:"Button FoFLogInButton LogInButton--"+r.name()+" LogInButton"+(r.linked()?"--linked":"--unlinked"),icon:r.icon(),onclick:function(){return t.deleteProvider(r)},loading:this.state.loading},n().translator.trans("fof-oauth.forum.unlink"))):r.orphaned()?null:m("div",{className:"LinkedAccountsList-item-actions"},m(A(),{className:"Button FoFLogInButton LogInButton--"+r.name(),icon:r.icon(),path:"/auth/"+r.name()+"?linkTo="+e.id(),loading:this.state.loading},n().translator.trans("fof-oauth.forum.log_in.with_"+r.name()+"_button",{provider:n().translator.trans("fof-oauth.forum.providers."+r.name())})))},e.deleteProvider=function(){var t=s(h().mark((function t(r){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!confirm(B()(n().translator.trans("fof-oauth.forum.user.settings.linked-account.unlink-confirm",{provider:n().translator.trans("fof-oauth.forum.providers."+r.name())})))){t.next=8;break}return this.state.loading=!0,t.next=4,r.delete();case 4:return t.next=6,n().store.find("linked-accounts",{});case 6:this.state.loading=!1,m.redraw();case 8:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}(),r}(p()),S=function(t){function r(){for(var n,r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];return(n=t.call.apply(t,[this].concat(e))||this).state={loadingAdditional:!0,errorLoadingAdditional:!1},n}l(r,t);var e=r.prototype;return e.oncreate=function(n){t.prototype.oncreate.call(this,n),this.loadLinkedAccounts()},e.view=function(t){var r=n().store.all("linked-accounts");return m(g(),{label:n().translator.trans("fof-oauth.forum.user.settings.linked-account.label")},m("p",{className:"helpText"},n().translator.trans("fof-oauth.forum.user.settings.linked-account.help")),this.state.loadingAdditional?m(x(),{containerClassName:"LinkedAccounts-Loading"}):m("ul",{className:"LinkedAccounts-List"},w()(this.linkedAccountsItems(r,this.attrs.user).toArray())))},e.linkedAccountsItems=function(t,n){var r=new(b());return t.forEach((function(t){r.add(t.name(),m(F,{provider:t,user:n}),t.priority())})),r},e.loadLinkedAccounts=function(){var t=s(h().mark((function t(){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n().store.find("linked-accounts",{});case 2:this.state.loadingAdditional=!1,m.redraw();case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),r}(p());const T=flarum.core.compat["forum/components/LogInButtons"];var G=r.n(T);const M=flarum.core.compat["forum/components/LogInButton"];var C=r.n(M);const V=flarum.core.compat["common/components/Tooltip"];var D=r.n(V);const U=flarum.core.compat["forum/components/LogInModal"];var R=r.n(U);const z=flarum.core.compat["forum/components/SignUpModal"];var Y=r.n(z);const H=flarum.core.compat["forum/ForumApplication"];var W=r.n(H);const q=flarum.core.compat["common/extenders"];var J=r.n(q);const K=flarum.core.compat["common/models/User"];var Q=r.n(K);const X=flarum.core.compat["common/Model"];var Z=r.n(X),tt=function(t){function n(){return t.apply(this,arguments)||this}l(n,t);var r=n.prototype;return r.name=function(){return Z().attribute("name").call(this)},r.icon=function(){return Z().attribute("icon").call(this)},r.priority=function(){return Z().attribute("priority").call(this)},r.linked=function(){return Z().attribute("linked").call(this)},r.orphaned=function(){return Z().attribute("orphaned").call(this)},r.identifier=function(){return Z().attribute("identifier").call(this)},r.providerIdentifier=function(){return Z().attribute("providerIdentifier").call(this)},r.firstLogin=function(){return Z().attribute("firstLogin",Z().transformDate).call(this)},r.lastLogin=function(){return Z().attribute("lastLogin",Z().transformDate).call(this)},n}(Z());const nt=[new(J().Model)(Q()).attribute("loginProvider"),(new(J().Store)).add("linked-accounts",tt)];n().initializers.add("fof/oauth",(function(){(0,o.extend)(C(),"initAttrs",(function(t,r){if(n().forum.attribute("fof-oauth.fullscreenPopup"))r.onclick=function(){window.open(n().forum.attribute("baseUrl")+r.path,"logInPopup","fullscreen=yes")};else{var e=n().forum.attribute("fof-oauth.popupWidth")||580,o=n().forum.attribute("fof-oauth.popupHeight")||400,i=$(window);r.onclick=function(){window.open(n().forum.attribute("baseUrl")+r.path,"logInPopup","width="+e+",height="+o+",top="+(i.height()/2-o/2)+",left="+(i.width()/2-e/2)+",status=no,scrollbars=yes,resizable=no")}}})),(0,o.extend)(G().prototype,"items",(function(t){var r=!!n().forum.attribute("fof-oauth.only_icons"),e=n().forum.attribute("fof-oauth").filter(Boolean),o=e.splice(e.indexOf(e.find((function(t){return"google"===t.name}))),1);e.concat(o).forEach((function(e){var o=e.name,i=e.icon,a=e.priority,c="Button FoFLogInButton LogInButton--"+o;r&&"google"!==o&&(c+=" Button--icon"),t.add(o,m("div",{className:"LogInButtonContainer LogInButtonContainer--"+o},m(C(),{className:c,icon:i,path:"/auth/"+o,disabled:n().fof_oauth_loginInProgress},n().translator.trans("fof-oauth.forum.log_in.with_"+o+"_button",{provider:n().translator.trans("fof-oauth.forum.providers."+o)}))),a)}))})),(0,o.override)(C().prototype,"view",(function(t,r){if(!n().forum.attribute("fof-oauth.only_icons"))return t(r);var e=t(r);return m(D(),{text:B()(e.children[1])},e)})),(0,o.extend)(G().prototype,"view",(function(t){n().forum.attribute("fof-oauth.only_icons")&&(t.attrs.className+=" FoFLogInButtons--icons")})),(0,o.extend)(W().prototype,"authenticationComplete",(function(t,r){r.loggedIn&&(n().fof_oauth_loginInProgress=!0,m.redraw())})),W().prototype.linkingComplete=s(h().mark((function t(){var r,e;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n().fof_oauth_linkingInProgress=!0,m.redraw(),t.next=5,this.store.find("linked-accounts");case 5:if(r=t.sent,!(e=this.store.all("linked-accounts").filter((function(t){return null===t.providerIdentifier()})).find((function(t){return r.some((function(n){return n.name()===t.name()}))})))){t.next=11;break}delete this.store.data["linked-accounts"][e.id()],t.next=13;break;case 11:return window.location.reload(),t.abrupt("return");case 13:return t.next=15,this.store.find("users",n().session.user.id());case 15:n().fof_oauth_linkingInProgress=!1,m.redraw(),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(0),n().fof_oauth_linkingInProgress=!1,m.redraw();case 23:case"end":return t.stop()}}),t,this,[[0,19]])}))),(0,o.extend)(R().prototype,"onbeforeupdate",(function(t){n().fof_oauth_loginInProgress&&(this.loading=!0)})),(0,o.extend)(Y().prototype,"onbeforeupdate",(function(t){n().fof_oauth_loginInProgress&&(this.loading=!0)})),(0,o.extend)(Y().prototype,"fields",(function(t){return this.attrs.token&&!this.attrs.username&&t.add("username-help",m("div",null,m("p",null,n().translator.trans("fof-oauth.forum.signup.username_help"))),35),t})),(0,o.extend)(a().prototype,"settingsItems",(function(t){this.user===n().session.user&&t.add("linkedAccounts",m(S,{user:this.user}),5)}))}))})(),module.exports=e})();
//# sourceMappingURL=forum.js.map