"use strict";(self.webpackChunklambda_docs=self.webpackChunklambda_docs||[]).push([[991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,h=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:0},i="Getting Started",l={unversionedId:"lambda-docs/getting-started",id:"lambda-docs/getting-started",title:"Getting Started",description:"The major steps for making a Lambda function that can receive webhooks are below:",source:"@site/docs/lambda-docs/00-getting-started.mdx",sourceDirName:"lambda-docs",slug:"/lambda-docs/getting-started",permalink:"/DEVWKS-2845/lambda-docs/getting-started",draft:!1,editUrl:"https://cisco.com/docs/lambda-docs/00-getting-started.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Lambda Function",permalink:"/DEVWKS-2845/category/lambda-function"},next:{title:"Create the Lambda Function",permalink:"/DEVWKS-2845/lambda-docs/create-lambda"}},s={},c=[{value:"AWS Login",id:"aws-login",level:2},{value:"Change the AWS Region",id:"change-the-aws-region",level:3},{value:"Open AWS Lambda Page",id:"open-aws-lambda-page",level:3}],d={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"The major steps for making a Lambda function that can receive webhooks are below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AWS Login"),(0,r.kt)("li",{parentName:"ul"},"Create a Lambda Function"),(0,r.kt)("li",{parentName:"ul"},"Code the Lambda Function"),(0,r.kt)("li",{parentName:"ul"},"Lambda Function Testing"),(0,r.kt)("li",{parentName:"ul"},"Create an API Endpoint"),(0,r.kt)("li",{parentName:"ul"},"Full Test with the Meraki webhook")),(0,r.kt)("h2",{id:"aws-login"},"AWS Login"),(0,r.kt)("p",null,"Please sign into AWS using your own credentials or the credentials provided. Here is a link to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://aws.amazon.com/"},"AWS login")),". Click on the ",(0,r.kt)("strong",{parentName:"p"},"Sign In")," button on the top right to sign in. Please sign in as a ",(0,r.kt)("inlineCode",{parentName:"p"},"IAM")," user using the credentials provided."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use your own account for the entire workshop. There is nothing being done in AWS that requires the login we give you.")),(0,r.kt)("h3",{id:"change-the-aws-region"},"Change the AWS Region"),(0,r.kt)("p",null,"After getting signed in, change the region you are into the region specified on the login sheet unless you are using your own account. To change the region, look to the top right of the page and to the left of where it has your username, there will be a location name. Select it and then change the region to the one on the sheet. It should look like this image below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Region Change",src:n(3588).Z,width:"1096",height:"922"})),(0,r.kt)("p",null,"After the region has been changed, we can now work on our Lambda function without impacting anyone else."),(0,r.kt)("h3",{id:"open-aws-lambda-page"},"Open AWS Lambda Page"),(0,r.kt)("p",null,"To open the AWS Lambda page, we need to search for ",(0,r.kt)("strong",{parentName:"p"},"Lambda")," in the search bar on the top left and select it. The search should look like this screenshot:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Lambda Search",src:n(7265).Z,width:"2240",height:"536"})))}p.isMDXComponent=!0},7265:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lambda-search-3e07e2e4c20b7fecb5003cf408ccda11.png"},3588:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/region-change-e46cc50b7d425ae228141d67585db2ba.png"}}]);