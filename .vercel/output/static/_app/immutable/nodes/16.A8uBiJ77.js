import{s as se,n as ae,A as B,e as A,b as I,f as q,d as p,Q as W,i as g,u as le,o as oe,p as ue,y as Y,B as K,a as x,h as fe,c as S,g as L,j as ie,K as Q,R as ce,t as O,q as E,k as z,l as P,m as me,w as j,G as pe,Z as $e,I as G,J as H}from"../chunks/scheduler.BAVTa1Hq.js";import{S as ne,i as re,t as h,b as v,c as b,a as w,m as C,e as _e,d as y,j as de,g as ge,f as D}from"../chunks/index.CW0Vd2qk.js";import{g as U}from"../chunks/entry.Tw9XipQx.js";import{L as he}from"../chunks/LoadingBanner.Jek-2faF.js";import{s as V}from"../chunks/stores.mjMy36J9.js";import{S as Z}from"../chunks/synergy.ls6UH3Av.js";import{A as ve,a as be}from"../chunks/AccordionItem.o1p-JkpD.js";import{A as we,I as Ce}from"../chunks/InfoCircleOutline.DeVF9Zmo.js";import{a as ye}from"../chunks/index.DLEsunrB.js";import{B as xe}from"../chunks/Button.8xWdUa9e.js";import{C as Se}from"../chunks/Card.BGdpp2qi.js";import{E as ke,L as M,I as J}from"../chunks/ExclamationCircleSolid.DbPTDHd8.js";import{t as X,g as Ae}from"../chunks/bundle-mjs.BZBo1Xsd.js";import{E as Ie}from"../chunks/EyeSlashOutline.BoPx8Rsj.js";function Ee(u){let e,r,t;const n=u[6].default,a=ae(n,u,u[5],null);let l=[u[3],{class:r=X(u[0],u[2][u[1]],u[4].class)}],f={};for(let o=0;o<l.length;o+=1)f=B(f,l[o]);return{c(){e=A("p"),a&&a.c(),this.h()},l(o){e=I(o,"P",{class:!0});var s=q(e);a&&a.l(s),s.forEach(p),this.h()},h(){W(e,f)},m(o,s){g(o,e,s),a&&a.m(e,null),t=!0},p(o,[s]){a&&a.p&&(!t||s&32)&&le(a,n,o,o[5],t?ue(n,o[5],s,null):oe(o[5]),null),W(e,f=Ae(l,[s&8&&o[3],(!t||s&19&&r!==(r=X(o[0],o[2][o[1]],o[4].class)))&&{class:r}]))},i(o){t||(h(a,o),t=!0)},o(o){v(a,o),t=!1},d(o){o&&p(e),a&&a.d(o)}}}function Pe(u,e,r){const t=["helperClass","color"];let n=Y(e,t),{$$slots:a={},$$scope:l}=e,{helperClass:f="text-xs font-normal text-gray-500 dark:text-gray-300"}=e,{color:o="gray"}=e;const s={gray:"text-gray-900 dark:text-gray-300",green:"text-green-700 dark:text-green-500",red:"text-red-700 dark:text-red-500",disabled:"text-gray-400 dark:text-gray-500 grayscale contrast-50"};return u.$$set=i=>{r(4,e=B(B({},e),K(i))),r(3,n=Y(e,t)),"helperClass"in i&&r(0,f=i.helperClass),"color"in i&&r(1,o=i.color),"$$scope"in i&&r(5,l=i.$$scope)},e=K(e),[f,o,s,n,e,l,a]}class ee extends ne{constructor(e){super(),re(this,e,Pe,Ee,se,{helperClass:0,color:1})}}function te(u){let e,r,t,n;return r=new we({props:{color:"red",$$slots:{icon:[Ne],default:[Le]},$$scope:{ctx:u}}}),{c(){e=A("div"),b(r.$$.fragment),this.h()},l(a){e=I(a,"DIV",{class:!0});var l=q(e);w(r.$$.fragment,l),l.forEach(p),this.h()},h(){L(e,"class","fixed w-full p-4 top-0 left-0 flex justify-center")},m(a,l){g(a,e,l),C(r,e,null),n=!0},p(a,l){const f={};l&2064&&(f.$$scope={dirty:l,ctx:a}),r.$set(f)},i(a){n||(h(r.$$.fragment,a),a&&(t||ce(()=>{t=de(e,ye,{y:-50,duration:200}),t.start()})),n=!0)},o(a){v(r.$$.fragment,a),n=!1},d(a){a&&p(e),y(r)}}}function Le(u){let e,r="Couldn't log in",t,n,a;return{c(){e=A("span"),e.textContent=r,t=x(),n=A("p"),a=O(u[4]),this.h()},l(l){e=I(l,"SPAN",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-1v639bj"&&(e.textContent=r),t=S(l),n=I(l,"P",{});var f=q(n);a=z(f,u[4]),f.forEach(p),this.h()},h(){L(e,"class","font-bold")},m(l,f){g(l,e,f),g(l,t,f),g(l,n,f),P(n,a)},p(l,f){f&16&&me(a,l[4])},d(l){l&&(p(e),p(t),p(n))}}}function Ne(u){let e,r;return e=new ke({props:{slot:"icon"}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){C(e,t,n),r=!0},p:j,i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function qe(u){let e,r="Username",t,n,a,l;function f(s){u[7](s)}let o={type:"text",id:"username",placeholder:"student@school.net",required:!0};return u[0]!==void 0&&(o.value=u[0]),n=new J({props:o}),G.push(()=>D(n,"value",f)),{c(){e=A("span"),e.textContent=r,t=x(),b(n.$$.fragment)},l(s){e=I(s,"SPAN",{"data-svelte-h":!0}),E(e)!=="svelte-9difb2"&&(e.textContent=r),t=S(s),w(n.$$.fragment,s)},m(s,i){g(s,e,i),g(s,t,i),C(n,s,i),l=!0},p(s,i){const d={};!a&&i&1&&(a=!0,d.value=s[0],H(()=>a=!1)),n.$set(d)},i(s){l||(h(n.$$.fragment,s),l=!0)},o(s){v(n.$$.fragment,s),l=!1},d(s){s&&(p(e),p(t)),y(n,s)}}}function je(u){let e,r,t;return e=new Ie({props:{size:"sm",class:"mr-2 focus:outline-none"}}),{c(){b(e.$$.fragment),r=O(`
					Your device connects directly to StudentVue. We can't see your password or your grades.`)},l(n){w(e.$$.fragment,n),r=z(n,`
					Your device connects directly to StudentVue. We can't see your password or your grades.`)},m(n,a){C(e,n,a),g(n,r,a),t=!0},p:j,i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){n&&p(r),y(e,n)}}}function Ve(u){let e,r,t,n=`If you&#39;ve never used GradeVue or SynergyPlus before, you may need to
						<a href="/signup" class="text-primary-600 underline">create a password</a>.`,a;return e=new Ce({props:{size:"sm",class:"mr-2 focus:outline-none"}}),{c(){b(e.$$.fragment),r=x(),t=A("span"),t.innerHTML=n},l(l){w(e.$$.fragment,l),r=S(l),t=I(l,"SPAN",{"data-svelte-h":!0}),E(t)!=="svelte-1u7qbql"&&(t.innerHTML=n)},m(l,f){C(e,l,f),g(l,r,f),g(l,t,f),a=!0},p:j,i(l){a||(h(e.$$.fragment,l),a=!0)},o(l){v(e.$$.fragment,l),a=!1},d(l){l&&(p(r),p(t)),y(e,l)}}}function Be(u){let e,r="Password",t,n,a,l,f,o,s,i;function d(c){u[8](c)}let k={type:"password",id:"password",class:"mb-2",required:!0};return u[1]!==void 0&&(k.value=u[1]),n=new J({props:k}),G.push(()=>D(n,"value",d)),f=new ee({props:{class:"text-xs flex items-center",$$slots:{default:[je]},$$scope:{ctx:u}}}),s=new ee({props:{class:"text-xs flex items-center",$$slots:{default:[Ve]},$$scope:{ctx:u}}}),{c(){e=A("span"),e.textContent=r,t=x(),b(n.$$.fragment),l=x(),b(f.$$.fragment),o=x(),b(s.$$.fragment)},l(c){e=I(c,"SPAN",{"data-svelte-h":!0}),E(e)!=="svelte-1kvjhoz"&&(e.textContent=r),t=S(c),w(n.$$.fragment,c),l=S(c),w(f.$$.fragment,c),o=S(c),w(s.$$.fragment,c)},m(c,m){g(c,e,m),g(c,t,m),C(n,c,m),g(c,l,m),C(f,c,m),g(c,o,m),C(s,c,m),i=!0},p(c,m){const $={};!a&&m&2&&(a=!0,$.value=c[1],H(()=>a=!1)),n.$set($);const _={};m&2048&&(_.$$scope={dirty:m,ctx:c}),f.$set(_);const N={};m&2048&&(N.$$scope={dirty:m,ctx:c}),s.$set(N)},i(c){i||(h(n.$$.fragment,c),h(f.$$.fragment,c),h(s.$$.fragment,c),i=!0)},o(c){v(n.$$.fragment,c),v(f.$$.fragment,c),v(s.$$.fragment,c),i=!1},d(c){c&&(p(e),p(t),p(l),p(o)),y(n,c),y(f,c),y(s,c)}}}function Me(u){let e,r="Domain",t,n,a,l;function f(s){u[9](s)}let o={type:"text",id:"domain",required:!0};return u[2]!==void 0&&(o.value=u[2]),n=new J({props:o}),G.push(()=>D(n,"value",f)),{c(){e=A("span"),e.textContent=r,t=x(),b(n.$$.fragment)},l(s){e=I(s,"SPAN",{"data-svelte-h":!0}),E(e)!=="svelte-oazy66"&&(e.textContent=r),t=S(s),w(n.$$.fragment,s)},m(s,i){g(s,e,i),g(s,t,i),C(n,s,i),l=!0},p(s,i){const d={};!a&&i&4&&(a=!0,d.value=s[2],H(()=>a=!1)),n.$set(d)},i(s){l||(h(n.$$.fragment,s),l=!0)},o(s){v(n.$$.fragment,s),l=!1},d(s){s&&(p(e),p(t)),y(n,s)}}}function Oe(u){let e,r;return e=new M({props:{class:"space-y-2",$$slots:{default:[Me]},$$scope:{ctx:u}}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){C(e,t,n),r=!0},p(t,n){const a={};n&2052&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function ze(u){let e,r="Advanced";return{c(){e=A("span"),e.textContent=r,this.h()},l(t){e=I(t,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),E(e)!=="svelte-cw8w50"&&(e.textContent=r),this.h()},h(){L(e,"slot","header"),L(e,"class","text-sm dark:text-gray-300")},m(t,n){g(t,e,n)},p:j,d(t){t&&p(e)}}}function Ge(u){let e,r;return e=new be({props:{paddingFlush:"mb-2",borderBottomClass:"",class:"text-white",$$slots:{header:[ze],default:[Oe]},$$scope:{ctx:u}}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){C(e,t,n),r=!0},p(t,n){const a={};n&2052&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function He(u){let e;return{c(){e=O("Log in")},l(r){e=z(r,"Log in")},m(r,t){g(r,e,t)},d(r){r&&p(e)}}}function De(u){let e,r,t="Sign in to GradeVue",n,a,l,f,o,s,i,d,k,c,m;return a=new M({props:{class:"space-y-2 mb-4",$$slots:{default:[qe]},$$scope:{ctx:u}}}),f=new M({props:{class:"space-y-2 mb-4",$$slots:{default:[Be]},$$scope:{ctx:u}}}),s=new ve({props:{flush:!0,class:"mb-4",$$slots:{default:[Ge]},$$scope:{ctx:u}}}),d=new xe({props:{type:"submit",class:"w-full",$$slots:{default:[He]},$$scope:{ctx:u}}}),{c(){e=A("form"),r=A("h1"),r.textContent=t,n=x(),b(a.$$.fragment),l=x(),b(f.$$.fragment),o=x(),b(s.$$.fragment),i=x(),b(d.$$.fragment),this.h()},l($){e=I($,"FORM",{});var _=q(e);r=I(_,"H1",{class:!0,"data-svelte-h":!0}),E(r)!=="svelte-1n2m0me"&&(r.textContent=t),n=S(_),w(a.$$.fragment,_),l=S(_),w(f.$$.fragment,_),o=S(_),w(s.$$.fragment,_),i=S(_),w(d.$$.fragment,_),_.forEach(p),this.h()},h(){L(r,"class","text-xl mb-4 dark:text-white")},m($,_){g($,e,_),P(e,r),P(e,n),C(a,e,null),P(e,l),C(f,e,null),P(e,o),C(s,e,null),P(e,i),C(d,e,null),k=!0,c||(m=pe(e,"submit",$e(u[6])),c=!0)},p($,_){const N={};_&2049&&(N.$$scope={dirty:_,ctx:$}),a.$set(N);const F={};_&2050&&(F.$$scope={dirty:_,ctx:$}),f.$set(F);const R={};_&2052&&(R.$$scope={dirty:_,ctx:$}),s.$set(R);const T={};_&2048&&(T.$$scope={dirty:_,ctx:$}),d.$set(T)},i($){k||(h(a.$$.fragment,$),h(f.$$.fragment,$),h(s.$$.fragment,$),h(d.$$.fragment,$),k=!0)},o($){v(a.$$.fragment,$),v(f.$$.fragment,$),v(s.$$.fragment,$),v(d.$$.fragment,$),k=!1},d($){$&&p(e),y(a),y(f),y(s),y(d),c=!1,m()}}}function Je(u){let e,r,t,n,a,l,f;r=new he({props:{show:u[5],loadingMsg:"Logging you in..."}});let o=u[3]&&te(u);return l=new Se({props:{$$slots:{default:[De]},$$scope:{ctx:u}}}),{c(){e=x(),b(r.$$.fragment),t=x(),o&&o.c(),n=x(),a=A("div"),b(l.$$.fragment),this.h()},l(s){fe("svelte-o85p1x",document.head).forEach(p),e=S(s),w(r.$$.fragment,s),t=S(s),o&&o.l(s),n=S(s),a=I(s,"DIV",{class:!0});var d=q(a);w(l.$$.fragment,d),d.forEach(p),this.h()},h(){document.title="Log In - Gradevue",L(a,"class","flex items-center justify-center min-h-screen")},m(s,i){g(s,e,i),C(r,s,i),g(s,t,i),o&&o.m(s,i),g(s,n,i),g(s,a,i),C(l,a,null),f=!0},p(s,[i]){const d={};i&32&&(d.show=s[5]),r.$set(d),s[3]?o?(o.p(s,i),i&8&&h(o,1)):(o=te(s),o.c(),h(o,1),o.m(n.parentNode,n)):o&&(ge(),v(o,1,1,()=>{o=null}),_e());const k={};i&2055&&(k.$$scope={dirty:i,ctx:s}),l.$set(k)},i(s){f||(h(r.$$.fragment,s),h(o),h(l.$$.fragment,s),f=!0)},o(s){v(r.$$.fragment,s),v(o),v(l.$$.fragment,s),f=!1},d(s){s&&(p(e),p(t),p(n),p(a)),y(r,s),o&&o.d(s),y(l)}}}function Fe(u,e,r){let t;if(ie(u,V,m=>r(10,t=m)),localStorage.getItem("token")){if(!t){const{username:m,password:$,domain:_}=JSON.parse(localStorage.getItem("token")??"{}");Q(V,t=new Z(_,m,$),t)}U("/grades")}let n,a,l="ca-pleas-psv.edupoint.com",f=!1,o,s=!1;async function i(){if(s)return;r(5,s=!0);const m=new Z(l,n,a);try{await m.checkLogin()}catch($){r(5,s=!1),r(3,f=!0),r(4,o=$ instanceof Error?$.message:"An unknown error occurred");return}Q(V,t=m,t),localStorage.setItem("token",JSON.stringify({username:n,password:a,domain:l})),r(5,s=!1),U("/grades")}function d(m){n=m,r(0,n)}function k(m){a=m,r(1,a)}function c(m){l=m,r(2,l)}return[n,a,l,f,o,s,i,d,k,c]}class at extends ne{constructor(e){super(),re(this,e,Fe,Je,se,{})}}export{at as component};