"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[285],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),u=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=u(r),m=n,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(g,o(o({ref:e},s),{},{components:r})):a.createElement(g,o({ref:e},s))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},80562:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={slug:"/"},o="\u4e3a\u4ec0\u4e48\u9009\u62e9RocketMQ",i={unversionedId:"\u4ecb\u7ecd/01whychoose",id:"version-5.0/\u4ecb\u7ecd/01whychoose",title:"\u4e3a\u4ec0\u4e48\u9009\u62e9RocketMQ",description:"\u4e3a\u4ec0\u4e48 RocketMQ",source:"@site/versioned_docs/version-5.0/01-\u4ecb\u7ecd/01whychoose.md",sourceDirName:"01-\u4ecb\u7ecd",slug:"/",permalink:"/docs/5.0/",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/01-\u4ecb\u7ecd/01whychoose.md",tags:[],version:"5.0",frontMatter:{slug:"/"},sidebar:"version-5.0/myAutogeneratedSidebar",next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/5.0/\u4ecb\u7ecd/02quickstart"}},p={},u=[{value:"\u4e3a\u4ec0\u4e48 RocketMQ",id:"\u4e3a\u4ec0\u4e48-rocketmq",level:2},{value:"RocketMQ vs. ActiveMQ vs. Kafka",id:"rocketmq-vs-activemq-vs-kafka",level:2}],s={toc:u};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9rocketmq"},"\u4e3a\u4ec0\u4e48\u9009\u62e9RocketMQ"),(0,n.kt)("h2",{id:"\u4e3a\u4ec0\u4e48-rocketmq"},"\u4e3a\u4ec0\u4e48 RocketMQ"),(0,n.kt)("p",null,"\u5728\u963f\u91cc\u5b55\u80b2 RocketMQ \u7684\u96cf\u5f62\u65f6\u671f\uff0c\u6211\u4eec\u5c06\u5176\u7528\u4e8e\u5f02\u6b65\u901a\u4fe1\u3001\u641c\u7d22\u3001\u793e\u4ea4\u7f51\u7edc\u6d3b\u52a8\u6d41\u3001\u6570\u636e\u7ba1\u9053\uff0c\u8d38\u6613\u6d41\u7a0b\u4e2d\u3002\u968f\u7740\u6211\u4eec\u7684\u8d38\u6613\u4e1a\u52a1\u541e\u5410\u91cf\u7684\u4e0a\u5347\uff0c\u6e90\u81ea\u6211\u4eec\u7684\u6d88\u606f\u4f20\u9012\u96c6\u7fa4\u7684\u538b\u529b\u4e5f\u53d8\u5f97\u7d27\u8feb\u3002"),(0,n.kt)("p",null,"\u6839\u636e\u6211\u4eec\u7684\u7814\u7a76\uff0c\u968f\u7740\u961f\u5217\u548c\u865a\u62df\u4e3b\u9898\u4f7f\u7528\u7684\u589e\u52a0\uff0cActiveMQ IO\u6a21\u5757\u8fbe\u5230\u4e86\u4e00\u4e2a\u74f6\u9888\u3002\u6211\u4eec\u5c3d\u529b\u901a\u8fc7\u8282\u6d41\u3001\u65ad\u8def\u5668\u6216\u964d\u7ea7\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f46\u6548\u679c\u5e76\u4e0d\u7406\u60f3\u3002\u4e8e\u662f\u6211\u4eec\u5c1d\u8bd5\u4e86\u6d41\u884c\u7684\u6d88\u606f\u4f20\u9012\u89e3\u51b3\u65b9\u6848Kafka\u3002\u4e0d\u5e78\u7684\u662f\uff0cKafka\u4e0d\u80fd\u6ee1\u8db3\u6211\u4eec\u7684\u8981\u6c42\uff0c\u5176\u5c24\u5176\u8868\u73b0\u5728\u4f4e\u5ef6\u8fdf\u548c\u9ad8\u53ef\u9760\u6027\u65b9\u9762\uff0c\u8be6\u89c1\u8fd9\u91cc\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u51b3\u5b9a\u53d1\u660e\u4e00\u4e2a\u65b0\u7684\u6d88\u606f\u4f20\u9012\u5f15\u64ce\u6765\u5904\u7406\u66f4\u5e7f\u6cdb\u7684\u6d88\u606f\u7528\u4f8b\uff0c\u8986\u76d6\u4ece\u4f20\u7edf\u7684pub/sub\u573a\u666f\u5230\u9ad8\u5bb9\u91cf\u7684\u5b9e\u65f6\u96f6\u8bef\u5dee\u7684\u4ea4\u6613\u7cfb\u7edf\u3002"),(0,n.kt)("p",null,"Apache RocketMQ \u81ea\u8bde\u751f\u4ee5\u6765\uff0c\u56e0\u5176\u67b6\u6784\u7b80\u5355\u3001\u4e1a\u52a1\u529f\u80fd\u4e30\u5bcc\u3001\u5177\u5907\u6781\u5f3a\u53ef\u6269\u5c55\u6027\u7b49\u7279\u70b9\u88ab\u4f17\u591a\u4f01\u4e1a\u5f00\u53d1\u8005\u4ee5\u53ca\u4e91\u5382\u5546\u5e7f\u6cdb\u91c7\u7528\u3002\u5386\u7ecf\u5341\u4f59\u5e74\u7684\u5927\u89c4\u6a21\u573a\u666f\u6253\u78e8\uff0cRocketMQ \u5df2\u7ecf\u6210\u4e3a\u4e1a\u5185\u5171\u8bc6\u7684\u91d1\u878d\u7ea7\u53ef\u9760\u4e1a\u52a1\u6d88\u606f\u9996\u9009\u65b9\u6848\uff0c\u88ab\u5e7f\u6cdb\u5e94\u7528\u4e8e\u4e92\u8054\u7f51\u3001\u5927\u6570\u636e\u3001\u79fb\u52a8\u4e92\u8054\u7f51\u3001\u7269\u8054\u7f51\u7b49\u9886\u57df\u7684\u4e1a\u52a1\u573a\u666f\u3002"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u4e0b\u8868\u663e\u793a\u4e86RocketMQ\u3001ActiveMQ\u548cKafka\u4e4b\u95f4\u7684\u6bd4\u8f83 ")),(0,n.kt)("h2",{id:"rocketmq-vs-activemq-vs-kafka"},"RocketMQ vs. ActiveMQ vs. Kafka"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Messaging Product"),(0,n.kt)("th",{parentName:"tr",align:null},"Client SDK"),(0,n.kt)("th",{parentName:"tr",align:null},"Protocol and Specification"),(0,n.kt)("th",{parentName:"tr",align:null},"Ordered Message"),(0,n.kt)("th",{parentName:"tr",align:null},"Scheduled Message"),(0,n.kt)("th",{parentName:"tr",align:null},"Batched Message"),(0,n.kt)("th",{parentName:"tr",align:null},"BroadCast Message"),(0,n.kt)("th",{parentName:"tr",align:null},"Message Filter"),(0,n.kt)("th",{parentName:"tr",align:null},"Server Triggered Redelivery"),(0,n.kt)("th",{parentName:"tr",align:null},"Message Storage"),(0,n.kt)("th",{parentName:"tr",align:null},"Message Retroactive"),(0,n.kt)("th",{parentName:"tr",align:null},"Message Priority"),(0,n.kt)("th",{parentName:"tr",align:null},"High Availability and Failover"),(0,n.kt)("th",{parentName:"tr",align:null},"Message Track"),(0,n.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,n.kt)("th",{parentName:"tr",align:null},"Management and Operation Tools"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ActiveMQ"),(0,n.kt)("td",{parentName:"tr",align:null},"Java, .NET, C++ etc."),(0,n.kt)("td",{parentName:"tr",align:null},"Push model, support OpenWire, STOMP, AMQP, MQTT, JMS"),(0,n.kt)("td",{parentName:"tr",align:null},"Exclusive Consumer or Exclusive Queues can ensure ordering"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Not Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Not Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Supports very fast persistence using JDBC along with a high performance journal\uff0csuch as levelDB, kahaDB"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported, depending on storage,if using levelDB it requires a ZooKeeper server"),(0,n.kt)("td",{parentName:"tr",align:null},"Not Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"The default configuration is low level, user need to optimize the configuration parameters"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,n.kt)("td",{parentName:"tr",align:null},"Java, Scala etc."),(0,n.kt)("td",{parentName:"tr",align:null},"Pull model, support TCP"),(0,n.kt)("td",{parentName:"tr",align:null},"Ensure ordering of messages within a partition"),(0,n.kt)("td",{parentName:"tr",align:null},"Not Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported, with async producer"),(0,n.kt)("td",{parentName:"tr",align:null},"Not Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported, you can use Kafka Streams to filter messages"),(0,n.kt)("td",{parentName:"tr",align:null},"Not Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"High performance file storage"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported offset indicate"),(0,n.kt)("td",{parentName:"tr",align:null},"Not Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported, requires a ZooKeeper server"),(0,n.kt)("td",{parentName:"tr",align:null},"Not Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Kafka uses key-value pairs format for configuration. These values can be supplied either from a file or programmatically."),(0,n.kt)("td",{parentName:"tr",align:null},"Supported, use terminal command to expose core metrics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RocketMQ"),(0,n.kt)("td",{parentName:"tr",align:null},"Java, C++, Go"),(0,n.kt)("td",{parentName:"tr",align:null},"Pull model, support TCP, JMS, OpenMessaging"),(0,n.kt)("td",{parentName:"tr",align:null},"Ensure strict ordering of messages,and can scale out gracefully"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported, with sync mode to avoid message loss"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported, property filter expressions based on SQL92"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"High performance and low latency file storage"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported timestamp and offset two indicates"),(0,n.kt)("td",{parentName:"tr",align:null},"Not Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported, Master-Slave model, without another kit"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported"),(0,n.kt)("td",{parentName:"tr",align:null},"Work out of box,user only need to pay attention to a few configurations"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported, rich web and terminal command to expose core metrics")))))}d.isMDXComponent=!0}}]);