(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6213],{6213:(e,t,o)=>{"use strict";o.d(t,{Z:()=>D});var n=o(7462),s=o(7294),r=o(6010);const l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a={Prism:o(7410).default,theme:l};function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i.apply(this,arguments)}var p=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var o=e.length;return o>0&&e[o-1]===t?e:e.concat(t)},d=function(e,t){var o=e.plain,n=Object.create(null),s=e.styles.reduce((function(e,o){var n=o.languages,s=o.style;return n&&!n.includes(t)||o.types.forEach((function(t){var o=i({},e[t],s);e[t]=o})),e}),n);return s.root=o,s.plain=i({},o,{backgroundColor:null}),s};function g(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(o[n]=e[n]);return o}const h=function(e){function t(){for(var t=this,o=[],n=arguments.length;n--;)o[n]=arguments[n];e.apply(this,o),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var o=e.theme?d(e.theme,e.language):void 0;return t.themeDict=o})),c(this,"getLineProps",(function(e){var o=e.key,n=e.className,s=e.style,r=i({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==s&&(r.style=void 0!==r.style?i({},r.style,s):s),void 0!==o&&(r.key=o),n&&(r.className+=" "+n),r})),c(this,"getStyleForToken",(function(e){var o=e.types,n=e.empty,s=o.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===s&&"plain"===o[0])return n?{display:"inline-block"}:void 0;if(1===s&&!n)return r[o[0]];var l=n?{display:"inline-block"}:{},a=o.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(a))}})),c(this,"getTokenProps",(function(e){var o=e.key,n=e.className,s=e.style,r=e.token,l=i({},g(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==s&&(l.style=void 0!==l.style?i({},l.style,s):s),void 0!==o&&(l.key=o),n&&(l.className+=" "+n),l})),c(this,"tokenize",(function(e,t,o,n){var s={code:t,grammar:o,language:n,tokens:[]};e.hooks.run("before-tokenize",s);var r=s.tokens=e.tokenize(s.code,s.grammar,s.language);return e.hooks.run("after-tokenize",s),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,o=e.language,n=e.code,s=e.children,r=this.getThemeDict(this.props),l=t.languages[o];return s({tokens:function(e){for(var t=[[]],o=[e],n=[0],s=[e.length],r=0,l=0,a=[],c=[a];l>-1;){for(;(r=n[l]++)<s[l];){var i=void 0,d=t[l],g=o[l][r];if("string"==typeof g?(d=l>0?d:["plain"],i=g):(d=y(d,g.type),g.alias&&(d=y(d,g.alias)),i=g.content),"string"==typeof i){var h=i.split(p),m=h.length;a.push({types:d,content:h[0]});for(var f=1;f<m;f++)u(a),c.push(a=[]),a.push({types:d,content:h[f]})}else l++,t.push(d),o.push(i),n.push(0),s.push(i.length)}l--,t.pop(),o.pop(),n.pop(),s.pop()}return u(a),c}(void 0!==l?this.tokenize(t,n,l,o):[n]),className:"prism-code language-"+o,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(s.Component);var m=o(7594),f=o.n(m);const b={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var k=o(5350),v=o(941);const j=()=>{const{prism:e}=(0,v.LU)(),{isDarkTheme:t}=(0,k.Z)(),o=e.theme||b,n=e.darkTheme||o;return t?n:o};var x=o(4973);const N="codeBlockContainer_K1bP",T="codeBlockContent_hGly",C="codeBlockTitle_eoMF",E="codeBlock_23N8",B="copyButton_Ue-o",L="codeBlockLines_39YC",P=/{([\d,-]+)}/,S=["js","jsBlock","jsx","python","html"],_={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},O=["highlight-next-line","highlight-start","highlight-end"],w=function(e){void 0===e&&(e=S);const t=e.map((e=>{const{start:t,end:o}=_[e];return"(?:"+t+"\\s*("+O.join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function D(e){let{children:t,className:o,metastring:l,title:c}=e;const{prism:i}=(0,v.LU)(),[p,u]=(0,s.useState)(!1),[y,d]=(0,s.useState)(!1);(0,s.useEffect)((()=>{d(!0)}),[]);const g=(0,v.bc)(l)||c,m=(0,s.useRef)(null);let b=[];const k=j(),S=Array.isArray(t)?t.join(""):t;if(l&&P.test(l)){const e=l.match(P)[1];b=f()(e).filter((e=>e>0))}let _=null==o?void 0:o.replace(/language-/,"");!_&&i.defaultLanguage&&(_=i.defaultLanguage);let O=S.replace(/\n$/,"");if(0===b.length&&void 0!==_){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}})(_),o=S.replace(/\n$/,"").split("\n");let n;for(let s=0;s<o.length;){const r=s+1,l=o[s].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=r+",";break;case"highlight-start":n=r;break;case"highlight-end":e+=n+"-"+(r-1)+","}o.splice(s,1)}else s+=1}b=f()(e),O=o.join("\n")}const D=()=>{!function(e,t){let{target:o=document.body}=void 0===t?{}:t;const n=document.createElement("textarea"),s=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),o.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}n.remove(),l&&(r.removeAllRanges(),r.addRange(l)),s&&s.focus()}(O),u(!0),setTimeout((()=>u(!1)),2e3)};return s.createElement(h,(0,n.Z)({},a,{key:String(y),theme:k,code:O,language:_}),(e=>{let{className:t,style:o,tokens:l,getLineProps:a,getTokenProps:c}=e;return s.createElement("div",{className:N},g&&s.createElement("div",{style:o,className:C},g),s.createElement("div",{className:(0,r.Z)(T,_)},s.createElement("pre",{tabIndex:0,className:(0,r.Z)(t,E,"thin-scrollbar"),style:o},s.createElement("code",{className:L},l.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const o=a({line:e,key:t});return b.includes(t+1)&&(o.className+=" docusaurus-highlight-code-line"),s.createElement("span",(0,n.Z)({key:t},o),e.map(((e,t)=>s.createElement("span",(0,n.Z)({key:t},c({token:e,key:t}))))))})))),s.createElement("button",{ref:m,type:"button","aria-label":(0,x.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,r.Z)(B,"clean-btn"),onClick:D},p?s.createElement(x.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):s.createElement(x.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},7594:(e,t)=>{function o(e){let t,o=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))o.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,s,r]=t;if(n&&r){n=parseInt(n),r=parseInt(r);const e=n<r?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(r+=e);for(let t=n;t!==r;t+=e)o.push(t)}}return o}t.default=o,e.exports=o}}]);