"use strict";(self.webpackChunkfilmoteka=self.webpackChunkfilmoteka||[]).push([[846],{2018:function(t,e,n){n.d(e,{Z:function(){return a}});var s="notFound_notfound__kFEWF",i=n(184),a=function(t){var e=t.text;return(0,i.jsx)("div",{className:s,children:(0,i.jsx)("p",{children:e})})}},6419:function(t,e,n){n.d(e,{Z:function(){return f}});var s=n(1087),i=n(9126),a=n(8820),c="watchingList_mylist__tXrMM",r="watchingList_mylist__item__YsMJK",l="watchingList_mylist__img__ZAZbd",o="watchingList_mylist__btns__VpGAQ",u="watchingList_mylist__btn__AgHfC",_="watchingList_mylist__svg__ibbHR",m="watchingList_mylist__title__Q5vR3",h=n(184),f=function(t){var e=t.movies,n=t.onDeleteClick;return(0,h.jsx)("ul",{className:c,children:e.map((function(t){var e=t.id,c=t.title,f=t.poster_path;return(0,h.jsxs)("li",{className:r,children:[(0,h.jsx)("img",{className:l,src:"https://image.tmdb.org/t/p/w780/".concat(f),alt:c}),(0,h.jsx)("p",{className:m,children:c}),(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("button",{className:u,children:(0,h.jsx)(s.rU,{to:"/movie/".concat(e),children:(0,h.jsx)(i.Vjl,{size:30,className:_})})}),(0,h.jsx)("button",{className:u,onClick:function(){return n(e)},children:(0,h.jsx)(a.VPh,{size:22,className:_})})]})]},e)}))})}},4846:function(t,e,n){n.r(e);var s=n(5861),i=n(9439),a=n(4687),c=n.n(a),r=n(2791),l=n(9834),o=n(6268),u=n(2018),_=n(6419),m=n(1412),h=n(184);e.default=function(){var t=(0,r.useState)([]),e=(0,i.Z)(t,2),n=e[0],a=e[1],f=(0,r.useState)(!1),g=(0,i.Z)(f,2),d=g[0],x=g[1],p=(0,r.useState)(!1),v=(0,i.Z)(p,2),j=v[0],w=v[1];(0,r.useEffect)((function(){var t=localStorage.getItem("watchingList"),e=t?JSON.parse(t):[],n=function(){var t=(0,s.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),t.next=4,Promise.all(e.map((function(t){return(0,l.TP)(t)})));case 4:n=t.sent,a(n),w(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0443\u043b\u044e\u0431\u043b\u0435\u043d\u0438\u0445 \u0444\u0456\u043b\u044c\u043c\u0456\u0432:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();n()}),[d]);return(0,h.jsx)(h.Fragment,{children:j?(0,h.jsx)(m.Z,{}):(0,h.jsxs)("div",{className:o.Z.container,children:[(0,h.jsx)("h1",{className:o.Z.title,children:"Watching list"}),0===n.length?(0,h.jsx)(u.Z,{text:"Firstly add movies to your watching list"}):(0,h.jsx)(_.Z,{movies:n,onDeleteClick:function(t){var e=localStorage.getItem("watchingList"),n=(e?JSON.parse(e):[]).filter((function(e){return e!==parseInt(t)}));a(n),localStorage.setItem("watchingList",JSON.stringify(n)),console.log(t),x(!d)}})]})})}},6268:function(t,e){e.Z={container:"myList_container__wGjPG",title:"myList_title__0Gxpf"}}}]);
//# sourceMappingURL=846.2e531de0.chunk.js.map