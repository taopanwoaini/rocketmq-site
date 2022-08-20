"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3970],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var c=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,c,n=function(e,t){if(null==e)return{};var r,c,n={},o=Object.keys(e);for(c=0;c<o.length;c++)r=o[c],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)r=o[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=c.createContext({}),p=function(e){var t=c.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return c.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},u=c.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,k=u["".concat(i,".").concat(h)]||u[h]||m[h]||o;return r?c.createElement(k,a(a({ref:t},s),{},{components:r})):c.createElement(k,a({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return c.createElement.apply(null,a)}return c.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var c=r(87462),n=(r(67294),r(3905));const o={title:"Release Notes - Apache RocketMQ Client CPP- Version 2.2.0",categories:["Release_Notes"],tags:["RocketMQ_Client_CPP"]},a=void 0,l={permalink:"/third-blog/2020/04/02/release-notes-rocketmq-client-cpp-2.2.0",source:"@site/third-blog/2020-04-02-release-notes-rocketmq-client-cpp-2.2.0.md",title:"Release Notes - Apache RocketMQ Client CPP- Version 2.2.0",description:"* Source: rocketmq-client-cpp-2.2.0-source-release.tar.gz [PGP] [SHA512]",date:"2020-04-02T00:00:00.000Z",formattedDate:"2020\u5e744\u67082\u65e5",tags:[{label:"RocketMQ_Client_CPP",permalink:"/third-blog/tags/rocket-mq-client-cpp"}],readingTime:.565,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Client CPP- Version 2.2.0",categories:["Release_Notes"],tags:["RocketMQ_Client_CPP"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.7.1",permalink:"/third-blog/2020/06/29/4.7.1"},nextItem:{title:"Release Notes - Apache RocketMQ Client Go- Version 2.0.0",permalink:"/third-blog/2020/03/31/release-notes-rocketmq-client-go-2.0.0"}},i={authorsImageUrls:[]},p=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,c.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Download",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Source: ",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/rocketmq-client-cpp/2.2.0/rocketmq-client-cpp-2.2.0-source-release.tar.gz"},"rocketmq-client-cpp-2.2.0-source-release.tar.gz")," [",(0,n.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.2.0/rocketmq-client-cpp-2.2.0-source-release.tar.gz.asc"},"PGP"),"] [",(0,n.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.2.0/rocketmq-client-cpp-2.2.0-source-release.tar.gz.sha512"},"SHA512"),"]"),(0,n.kt)("li",{parentName:"ul"},"Binary: ",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/rocketmq-client-cpp/2.2.0/rocketmq-client-cpp-2.2.0-bin-release.tar.gz"},"rocketmq-client-cpp-2.2.0-bin-release.tar.gz")," [",(0,n.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.2.0/rocketmq-client-cpp-2.2.0-bin-release.tar.gz.asc"},"PGP"),"] [",(0,n.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.2.0/rocketmq-client-cpp-2.2.0-bin-release.tar.gz.sha512"},"SHA512"),"]"))),(0,n.kt)("p",null,"Below is a summary of the issues addressed in the version 2.2.0 release of RocketMQ Client CPP. For full documentation of the release, a guide to get started, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-client-cpp"},"Quick Start"),"."),(0,n.kt)("h2",{id:"improvement"},"Improvement"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/273"},"ISSUE-273"),"] -  Use OpenSSL to add support for SSL communication with the server ."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/291"},"ISSUE-291"),"] -  Use separate factory for trace producer of push consumer.")),(0,n.kt)("h2",{id:"bug"},"Bug"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/284"},"ISSUE-284"),"] -  Fix the issue that sometime the log in rebalance will cause core dump."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/286"},"ISSUE-286"),"] -  Add null pointer check before push consumer shutdown.")))}m.isMDXComponent=!0}}]);