"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[782],{9459:function(e,s,t){t.d(s,{Z:function(){return r}});var a=t(1413),n=t(4925),i=t(184),c=["children","srcRef","alt","title","desc"];function r(e){var s=e.children,t=e.srcRef,r=e.alt,l=e.title,o=e.desc,d=(0,n.Z)(e,c);return(0,i.jsxs)("figure",(0,a.Z)((0,a.Z)({},d),{},{className:"picture ".concat(null===d||void 0===d?void 0:d.className),children:[(0,i.jsxs)("picture",{className:"picture-img",children:[l&&(0,i.jsx)("h4",{children:l}),(0,i.jsx)("img",{src:t,alt:r,draggable:!1}),s]}),(0,i.jsx)("figcaption",{className:"description",children:o})]}))}},1528:function(e,s,t){t.r(s),t.d(s,{default:function(){return S}});var a=t(885),n=t(2791),i=t(7689),c=t(1087),r=t(6780),l=t(184);function o(){return(0,l.jsx)("picture",{className:"header-logo",children:(0,l.jsxs)(c.rU,{to:"/",children:[(0,l.jsx)("img",{src:r.Z,alt:"RvJonh"}),(0,l.jsx)("span",{className:"logo-text",children:"Jonh"})]})})}var d=t(1413);var u=t(9459);var m=t.p+"static/media/blog.8a0ec738d2da0d842050a2b657770a38.svg";var h=t.p+"static/media/email.dac3477b1b03962e641935644945b3c4.svg";var v=t.p+"static/media/github.4f1c033d33a4814380717857584cfc4e.svg";var x=t.p+"static/media/linkedin.cb49b9a57f0379eebdb34f8a2a158550.svg";var j=[{url:"https://twitter.com/Rvjonh",img:t.p+"static/media/twiter.46bd9cf9f88d2165a15797cdda2519cd.svg",alt:"twiter link",open_tab:!0},{url:"https://github.com/Rvjonh",img:v,alt:"github link",open_tab:!0},{url:"https://www.linkedin.com/in/jonh-gomez-067087250/",img:x,alt:"linkedin link",open_tab:!0},{url:"contact/",img:h,alt:"email link",open_tab:!1},{url:"https://www.google.com/",img:m,alt:"blog link",open_tab:!0}];function f(e){var s=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return(0,l.jsx)("div",(0,d.Z)((0,d.Z)({},s),{},{className:"rss-lista ".concat(s.className),children:j.map((function(e,s){return(0,l.jsx)("a",{href:e.url,target:"".concat(e.open_tab?"_blank":""),rel:"noreferrer",children:(0,l.jsx)(u.Z,{className:"rss",srcRef:e.img,alt:e.alt})},s+"item")}))}))}function b(){var e=(0,n.useState)({x:0,y:0}),s=(0,a.Z)(e,2),t=s[0],i=s[1],c=function(){window.scrollTo(0,0)},r=function(){return(new Date).getFullYear()};return(0,l.jsxs)("footer",{className:"footer",onMouseMove:function(e){var s=e.currentTarget.getBoundingClientRect(),t=e.clientX-s.left,a=e.clientY-s.top;i({x:t/s.width*100,y:a/s.height*100})},children:[(0,l.jsxs)("span",{className:"footer-begin",children:[(0,l.jsx)("div",{onClick:c,className:"toper",children:(0,l.jsx)(o,{})}),(0,l.jsx)(f,{className:"rss-edited"}),(0,l.jsxs)("div",{className:"rss-text",children:[(0,l.jsx)("p",{children:"Designed & created \xae by Rvjonh"}),(0,l.jsxs)("p",{children:["All rights reserved \xa9 ",r()]})]})]}),(0,l.jsxs)("div",{className:"background",style:{clipPath:"polygon(".concat(t.x,"% ").concat(t.y,"%, 0 0, 100% 0%)")},children:[(0,l.jsx)("div",{onClick:c,className:"toper",children:(0,l.jsx)(o,{})}),(0,l.jsx)(f,{className:"rss-edited"}),(0,l.jsxs)("div",{className:"rss-text",children:[(0,l.jsx)("p",{children:"Designed & created \xae by Rvjonh"}),(0,l.jsxs)("p",{children:["All rights reserved \xa9 ",r()]})]})]})]})}function g(e){var s=e.text,t=void 0===s?"Menu":s,a=e.isActive,n=void 0!==a&&a,i=e.onClick,c=void 0===i?function(e){return e}:i,r=e.className,o=void 0===r?"":r;return(0,l.jsxs)("div",{tabIndex:"0",className:"container-button ".concat(o),onClick:c,children:[(0,l.jsx)("h2",{children:t}),(0,l.jsxs)("div",{className:"container-bars ".concat(n?"change":""),children:[(0,l.jsx)("div",{className:"bar1"}),(0,l.jsx)("div",{className:"bar2"}),(0,l.jsx)("div",{className:"bar3"})]})]})}function p(){var e=(0,n.useState)(!1),s=(0,a.Z)(e,2),t=s[0],i=s[1],r=(0,n.useState)({opacity:"0"}),o=(0,a.Z)(r,2),u=o[0],m=o[1],h=function(){i(!t)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{onClick:h,className:"button-menu",isActive:t}),(0,l.jsx)("div",{className:"navbar-container ".concat(t?"active":""),onClick:h,children:(0,l.jsxs)("nav",{className:"navbar",children:[(0,l.jsx)(g,{onClick:h,isActive:t,className:"button-menu"}),(0,l.jsxs)("ul",{className:"navbar-list",onMouseMove:function(e){m((0,d.Z)((0,d.Z)({},u),{},{opacity:"1",left:"".concat(e.target.offsetLeft,"px")}))},onMouseLeave:function(){m((0,d.Z)((0,d.Z)({},u),{},{opacity:"0"}))},children:[(0,l.jsx)("li",{className:"navbar-line",children:(0,l.jsx)("span",{className:"line",style:u})}),(0,l.jsx)("li",{className:"navbar-item",children:(0,l.jsx)(c.rU,{to:"/about",children:"About"})}),(0,l.jsx)("li",{className:"navbar-item",children:(0,l.jsx)(c.rU,{to:"/projects",children:"Projects"})}),(0,l.jsx)("li",{className:"navbar-item",children:(0,l.jsx)(c.rU,{to:"/contact",children:"Contact"})}),(0,l.jsx)("li",{className:"navbar-item",children:(0,l.jsx)(c.rU,{to:"/services",children:"Services"})}),(0,l.jsx)("li",{className:"navbar-item",children:(0,l.jsx)(c.rU,{to:"/blog",children:"Blog"})}),(0,l.jsx)("li",{className:"navbar-item cv-item",children:(0,l.jsx)("a",{href:"https://www.google.com/",children:"Resume"})})]})]})})]})}function N(){return(0,l.jsxs)("header",{className:"header",children:[(0,l.jsx)("h1",{children:(0,l.jsx)(o,{})}),(0,l.jsx)(p,{})]})}var k=t(4925);var w=t.p+"static/media/world.3f20216582e98c9448e42e9ca75b210a.svg",Z=["position"];function C(e){var s=e.position,t=void 0===s?"left":s,i=(0,k.Z)(e,Z),c=(0,n.useState)(!1),r=(0,a.Z)(c,2),o=r[0],u=r[1];return(0,l.jsxs)("div",{className:"float-container ".concat(t),children:[(0,l.jsx)("div",{className:"float-content",children:(0,l.jsx)(f,{className:"float-buttons ".concat(o?"active":"desactive")})}),(0,l.jsx)("button",(0,d.Z)((0,d.Z)({},i),{},{className:"float-button",onClick:function(){u(!o)},children:(0,l.jsx)("img",{className:"float-img",src:w,alt:"Contact with me by"})}))]})}var y=t(7208),R=t(3477);function A(e){var s=e.setCookie;return(0,l.jsxs)("div",{className:"cookie-panel",children:[(0,l.jsx)("h4",{children:"Hello, this website doesn't use cookies, we just wanted to say all cookies are for Cid"}),(0,l.jsx)(y.Z,{onClick:function(){return s(!1)},textColor:"white",bgColor:"rgb(0, 127, 255)",children:"Accept Cookies"}),(0,l.jsx)("img",{src:R,alt:"sid eating the website's cookies"})]})}function S(){var e=(0,n.useState)(!0),s=(0,a.Z)(e,2),t=s[0],c=s[1],r=(0,n.useState)("left"),o=(0,a.Z)(r,2),d=o[0],u=o[1];(0,n.useEffect)((function(){return document.addEventListener("scroll",m),function(){document.removeEventListener("scroll",m)}}),[]);var m=function(e){var s=document.documentElement.scrollTop;u(s>800?"right":"left")};return(0,l.jsx)("div",{className:"layout-limit",children:(0,l.jsxs)("div",{className:"layout",children:[(0,l.jsx)(C,{position:d}),(0,l.jsx)(N,{}),(0,l.jsx)(i.j3,{}),(0,l.jsx)(b,{}),t&&(0,l.jsx)(A,{setCookie:c})]})})}},3477:function(e,s,t){e.exports=t.p+"static/media/sid.c8724c7b368690c42eb7.png"}}]);
//# sourceMappingURL=782.ae922e16.chunk.js.map