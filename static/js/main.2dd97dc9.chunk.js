(this["webpackJsonprandom-quotes"]=this["webpackJsonprandom-quotes"]||[]).push([[0],[,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var c=a(1),s=a.n(c),n=a(5),o=a.n(n),r=(a(10),a(11),a(2)),i=a(4),u="LOADING",b="ERROR",l="SUCCESS",h=(a(12),a(0));function j(t){var e=Object(c.useState)(""),a=Object(r.a)(e,2),n=a[0],o=a[1],j=Object(c.useState)(""),d=Object(r.a)(j,2),f=d[0],m=d[1],O=function(t){var e=Object(c.useState)({state:u,error:"",data:[]}),a=Object(r.a)(e,2),s=a[0],n=a[1],o=function(t){return n(Object(i.a)(Object(i.a)({},s),t))};return Object(c.useEffect)((function(){o({state:u}),fetch(t).then((function(t){return t.json()})).then((function(t){o({state:l,data:t})})).catch((function(){o({state:b,error:"fetch failed"})}))}),[]),s}("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"),p=O.state,w=O.data,x=O.error,g=function(){if("SUCCESS"===p){var t=function(t){return Math.floor(Math.random()*t.quotes.length)}(w),e=w.quotes[t];o(e.quote),m(e.author)}},q="";switch(Object(c.useEffect)((function(){g()}),[p]),p){case b:q=Object(h.jsxs)("p",{className:"error",children:["ERROR: ",x||"General error"]});break;case l:q=Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsxs)("div",{className:"quote-text",children:[Object(h.jsx)("i",{className:"fa fa-quote-left"}),Object(h.jsx)("span",{id:"text",children:n})]}),Object(h.jsxs)("div",{className:"quote-author",children:["-",Object(h.jsx)("span",{id:"author",children:f})]})]});break;default:q=Object(h.jsx)("p",{className:"loading",children:"Loading..."})}return Object(h.jsxs)("div",{id:"quote-box",children:[q,Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("a",{className:"button",id:"tweet-quote",title:"Tweet this quote!",target:"_top",href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Every%20child%20is%20an%20artist.%20%20The%20problem%20is%20how%20to%20remain%20an%20artist%20once%20he%20grows%20up.%22%20Pablo%20Picasso",children:Object(h.jsx)("i",{className:"fa fa-twitter"})}),Object(h.jsx)("a",{className:"button",id:"tumblr-quote",title:"Post this quote on tumblr!",target:"_blank",href:"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Pablo%20Picasso&content=Every%20child%20is%20an%20artist.%20%20The%20problem%20is%20how%20to%20remain%20an%20artist%20once%20he%20grows%20up.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button",children:Object(h.jsx)("i",{className:"fa fa-tumblr"})}),Object(h.jsx)("button",{className:"button",id:"new-quote",onClick:g,children:"New quote"})]})]})}var d=function(){return Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsx)(j,{})})},f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(e){var a=e.getCLS,c=e.getFID,s=e.getFCP,n=e.getLCP,o=e.getTTFB;a(t),c(t),s(t),n(t),o(t)}))};o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root")),f()}],[[14,1,2]]]);
//# sourceMappingURL=main.2dd97dc9.chunk.js.map