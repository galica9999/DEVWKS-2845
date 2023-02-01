"use strict";(self.webpackChunklambda_docs=self.webpackChunklambda_docs||[]).push([[13],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),k=n,u=d["".concat(s,".").concat(k)]||d[k]||h[k]||o;return r?a.createElement(u,i(i({ref:t},c),{},{components:r})):a.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},3413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="Save Meraki Dashboard Information",l={unversionedId:"meraki-docs/meraki",id:"meraki-docs/meraki",title:"Save Meraki Dashboard Information",description:"In this section, we will go through the process of obtaining a Meraki API key and Organizaiotn ID.",source:"@site/docs/meraki-docs/01-meraki.mdx",sourceDirName:"meraki-docs",slug:"/meraki-docs/meraki",permalink:"/DEVWKS-2845/meraki-docs/meraki",draft:!1,editUrl:"https://cisco.com/docs/meraki-docs/01-meraki.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Meraki Setup",permalink:"/DEVWKS-2845/category/meraki-setup"},next:{title:"Using the Meraki API & Webhooks",permalink:"/DEVWKS-2845/meraki-docs/meraki-api"}},s={},p=[{value:"Create Meraki API Key",id:"create-meraki-api-key",level:2},{value:"Save the Organization ID",id:"save-the-organization-id",level:2},{value:"Get the Network ID",id:"get-the-network-id",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"save-meraki-dashboard-information"},"Save Meraki Dashboard Information"),(0,n.kt)("p",null,"In this section, we will go through the process of obtaining a Meraki API key and Organizaiotn ID."),(0,n.kt)("p",null,"First we need to sign in to the Meraki dashboard using ",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.meraki.com"},"dashboard.meraki.com"),"."),(0,n.kt)("p",null,"It should take you to a login page for the Meraki Dashboard. Please sign in using the credentials provided to you. If asked for an Organizaiotn to log into. Please choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"CiscoLive")," organization."),(0,n.kt)("p",null,"After getting logged, we need to generate an API key."),(0,n.kt)("h2",{id:"create-meraki-api-key"},"Create Meraki API Key"),(0,n.kt)("p",null,"Go to the top right where it has your username and select it. A drop should show up and then select ",(0,n.kt)("inlineCode",{parentName:"p"},"My Profile"),". It should look similar to what is below:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"profile",src:r(2421).Z,width:"212",height:"135"})),(0,n.kt)("p",null,"After your profile loads, scroll down to the ",(0,n.kt)("strong",{parentName:"p"},"API access")," section. Then click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Generate new API key"),"."),(0,n.kt)("p",null,"It will bring up a popup that has your API key like in the below image:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"api key",src:r(834).Z,width:"1022",height:"388"})),(0,n.kt)("p",null,"Copy the API key and store it in a file locally. Then check the ",(0,n.kt)("inlineCode",{parentName:"p"},"I have stored my new API key")," box and click on done."),(0,n.kt)("p",null,"Now we need to find our Organizaiotn ID."),(0,n.kt)("h2",{id:"save-the-organization-id"},"Save the Organization ID"),(0,n.kt)("p",null,"While we are in the profile page, scroll all the way to the bottom. In the footer, there will be some text mention the last login from your current IP. Below that information is the Organization ID. Copy that value and save it in the same file as the API key. It should look similar to the below image:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"org id",src:r(7832).Z,width:"582",height:"109"})),(0,n.kt)("h2",{id:"get-the-network-id"},"Get the Network ID"),(0,n.kt)("p",null,"Go to the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.cisco.com/meraki/api-latest/"},"meraki developer")," documentation. Once here, please for ",(0,n.kt)("inlineCode",{parentName:"p"},"Get Organization Networks")," in the search bar on the left. It should bring up the API page for that call. Now click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Configuration")," button on the right side. Replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"APIKey in header")," field with the one you generated earlier. The rest can be left alone, click ",(0,n.kt)("inlineCode",{parentName:"p"},"Save"),"."),(0,n.kt)("p",null,"Still on the right side, please entr the Organization ID we obtained earlier inthe ",(0,n.kt)("inlineCode",{parentName:"p"},"Organization Id")," box. The click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Run"),". It will return the networks associated with your account. Near the bottom, your network should should up. It wil be named after your username. Please save the ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," field."),(0,n.kt)("p",null,"Now we can start working with the Meraki API and a create a custom webhook."))}d.isMDXComponent=!0},834:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/generate-api-key-fb1bac25eb90f75f97f7d18a3a802f58.png"},7832:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ord-id-c1179087de330c43ebf2a74c9234eeb9.png"},2421:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/select-profile-5f847d442841e42fd5a49cb06c1421c3.png"}}]);