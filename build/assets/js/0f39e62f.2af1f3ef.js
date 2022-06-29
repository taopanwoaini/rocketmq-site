"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3018],{6742:(e,a,t)=>{t.d(a,{Z:()=>h});var r=t(7294),c=t(3727),g=t(2263),i=t(3919),s=t(412);const n=(0,r.createContext)({collectLink:()=>{}});var l=t(4996),d=t(8780);const h=function(e){let{isNavLink:a,to:t,href:h,activeClassName:m,isActive:v,"data-noBrokenLinkCheck":p,autoAddBaseUrl:o=!0,...j}=e;var u;const{siteConfig:{trailingSlash:E,baseUrl:f}}=(0,g.Z)(),{withBaseUrl:w}=(0,l.C)(),k=(0,r.useContext)(n),b=t||h,y=(0,i.Z)(b),A=null==b?void 0:b.replace("pathname://","");let x=void 0!==A?(q=A,o&&(e=>e.startsWith("/"))(q)?w(q):q):void 0;var q;x&&y&&(x=(0,d.applyTrailingSlash)(x,{trailingSlash:E,baseUrl:f}));const z=(0,r.useRef)(!1),_=a?c.OL:c.rU,C=s.Z.canUseIntersectionObserver;let U;(0,r.useEffect)((()=>(!C&&y&&null!=x&&window.docusaurus.prefetch(x),()=>{C&&U&&U.disconnect()})),[x,C,y]);const O=null!==(u=null==x?void 0:x.startsWith("#"))&&void 0!==u&&u,I=!x||!y||O;return x&&y&&!O&&!p&&k.collectLink(x),I?r.createElement("a",{href:x,...b&&!y&&{target:"_blank",rel:"noopener noreferrer"},...j}):r.createElement(_,{...j,onMouseEnter:()=>{z.current||null==x||(window.docusaurus.preload(x),z.current=!0)},innerRef:e=>{var a,t;C&&e&&y&&(a=e,t=()=>{null!=x&&window.docusaurus.prefetch(x)},U=new window.IntersectionObserver((e=>{e.forEach((e=>{a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(U.unobserve(a),U.disconnect(),t())}))})),U.observe(a))},to:x||"",...a&&{isActive:v,activeClassName:m}})}},3919:(e,a,t)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!r(e)}t.d(a,{Z:()=>c,b:()=>r})},4996:(e,a,t)=>{t.d(a,{C:()=>g,Z:()=>i});var r=t(2263),c=t(3919);function g(){const{siteConfig:{baseUrl:e="/",url:a}={}}=(0,r.Z)();return{withBaseUrl:(t,r)=>function(e,a,t,r){let{forcePrependBaseUrl:g=!1,absolute:i=!1}=void 0===r?{}:r;if(!t)return t;if(t.startsWith("#"))return t;if((0,c.b)(t))return t;if(g)return a+t;const s=t.startsWith(a)?t:a+t.replace(/^\//,"");return i?e+s:s}(a,e,t,r)}}function i(e,a){void 0===a&&(a={});const{withBaseUrl:t}=g();return t(e,a)}},8802:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){const{trailingSlash:t,baseUrl:r}=a;if(e.startsWith("#"))return e;if(void 0===t)return e;const[c]=e.split(/[#?]/),g="/"===c||c===r?c:(i=c,t?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(c,g)}},8780:function(e,a,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.uniq=a.applyTrailingSlash=void 0;var c=t(8802);Object.defineProperty(a,"applyTrailingSlash",{enumerable:!0,get:function(){return r(c).default}});var g=t(9964);Object.defineProperty(a,"uniq",{enumerable:!0,get:function(){return r(g).default}})},9964:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return Array.from(new Set(e))}},1892:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var r=t(7294);t(6742);class c extends r.Component{render(){return r.createElement("div",{class:"logocontainer"},r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h3fqcx14kvj20e80e874i.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h3fqcx14kvj20e80e874i.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://pic.stackoverflow.wiki/uploadImages/223/102/83/221/2022/06/21/20/08/a218eb02-a7fd-4893-89d4-99209a552da5.svg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://pic.stackoverflow.wiki/uploadImages/223/102/83/221/2022/06/21/20/08/a218eb02-a7fd-4893-89d4-99209a552da5.svg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h3g4m3d9zrj205k05k744.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h3g4m3d9zrj205k05k744.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://pic.stackoverflow.wiki/uploadImages/223/102/83/221/2022/06/21/20/18/70a9cc63-6db3-4053-a301-e5418f1d00ff.svg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://pic.stackoverflow.wiki/uploadImages/223/102/83/221/2022/06/21/20/18/70a9cc63-6db3-4053-a301-e5418f1d00ff.svg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g4vm72jxj2050050q2r.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g4vm72jxj2050050q2r.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g4wq8y9pj2069069jr9.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g4wq8y9pj2069069jr9.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g4zbu6abj20jx0jwdgw.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g4zbu6abj20jx0jwdgw.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g50bimdsj20sg0sgmyd.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g50bimdsj20sg0sgmyd.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g52r58mzj2069069747.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g52r58mzj2069069747.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g53xb8bbj20ak0akdfw.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g53xb8bbj20ak0akdfw.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g56nxlqcj20ak0akglg.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g56nxlqcj20ak0akglg.jpg",width:"100",height:"100"}))," ",r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5880op2j204w04wwea.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5880op2j204w04wwea.jpg",width:"100",height:"100"}))," ",r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h3eskzhtqqj204g04gwee.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h3eskzhtqqj204g04gwee.jpg",width:"100",height:"100"}))," ",r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5b0l7l3j2069069mx0.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5b0l7l3j2069069mx0.jpg",width:"100",height:"100"}))," ",r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5cflcqxj2068069dfs.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5cflcqxj2068069dfs.jpg",width:"100",height:"100"}))," ",r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5eu1ek9j20fm0cxjs3.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5eu1ek9j20fm0cxjs3.jpg",width:"100",height:"100"}))," ",r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5gbxxp9j209r07bmwz.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5gbxxp9j209r07bmwz.jpg",width:"100",height:"100"}))," ",r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5hxcyflj20ak0akjr8.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5hxcyflj20ak0akjr8.jpg",width:"100",height:"100"}))," ",r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5j8raevj20go0h30sx.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5j8raevj20go0h30sx.jpg",width:"100",height:"100"}))," ",r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5k883jyj20lg0mmaan.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5k883jyj20lg0mmaan.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g60z0706j2069069q2r.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g60z0706j2069069q2r.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5k883jyj20lg0mmaan.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5zfpv1ej2069069dfp.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5y3c88wj206l05wt90.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5y3c88wj206l05wt90.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5wf22b7j2069069wef.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5wf22b7j2069069wef.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5uxgd34j20qo0qh755.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5uxgd34j20qo0qh755.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5tmlkslj205v06m745.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5tmlkslj205v06m745.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5sp6vx7j2068068dft.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5sp6vx7j2068068dft.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5qaf3gcj206d06f0sm.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5qaf3gcj206d06f0sm.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5osssoij207b07aq2r.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5osssoij207b07aq2r.jpg",width:"100",height:"100"})),r.createElement("div",{class:"avatar"},r.createElement("img",{alt:"","aria-hidden":!0,src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5malmpzj2069069aa5.jpg",class:"background"}),r.createElement("img",{alt:"Avatar",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5malmpzj2069069aa5.jpg",width:"100",height:"100"})))}}}}]);