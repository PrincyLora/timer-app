(this["webpackJsonptimer-app"]=this["webpackJsonptimer-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(3),o=n.n(s),a=n(4),u=n(1),i=function(){var e=Object(r.useRef)(null),t=Object(r.useState)("00:00:00"),n=Object(a.a)(t,2),c=n[0],s=n[1],o=function(e){var t=function(e){var t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),r=Math.floor(t/1e3/60%60);return{total:t,hours:Math.floor(t/1e3*60*60%24),minutes:r,seconds:n}}(e),n=t.total,r=t.hours,c=t.minutes,o=t.seconds;n>=0&&s((r>9?r:"0"+r)+":"+(c>9?c:"0"+c)+":"+(o>9?o:"0"+o))},i=function(t){s("00:00:10"),e.current&&clearInterval(e.current);var n=setInterval((function(){o(t)}),1e3);e.current=n},l=function(){var e=new Date;return e.setSeconds(e.getSeconds()+10),e};Object(r.useEffect)((function(){i(l())}),[]);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h2",{children:c}),Object(u.jsx)("button",{onClick:function(){i(l())},children:"Reset"})]})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(i,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.675cbe4f.chunk.js.map