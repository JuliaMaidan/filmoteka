"use strict";(self.webpackChunkfilmoteka=self.webpackChunkfilmoteka||[]).push([[694],{160:function(t,e,r){r.d(e,{IQ:function(){return o},Jh:function(){return f},Pg:function(){return i},XT:function(){return c},gy:function(){return p}});var n=r(861),a=r(757),u=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"e46f406ff40897ad9456c1375654d5d9"};var c=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("trending/all/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/search/movie",{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},694:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(861),a=r(439),u=r(757),s=r.n(u),c=r(87),i=r(689),o=r(160),f=r(791),p={author:"reviews_author__DgZ5S",text:"reviews_text__gii8a",collapse:"reviews_collapse__F9D5b"},l=r(184),h=function(){var t=(0,f.useState)({}),e=(0,a.Z)(t,2),r=e[0],u=e[1],h=(0,f.useState)(!1),d=(0,a.Z)(h,2),v=d[0],x=d[1],m=(0,i.UO)().id;return(0,f.useEffect)((function(){function t(){return(t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Jh)(m);case 2:e=t.sent,u(e),x(!0);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[m]),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.rU,{to:"/movies/".concat(m),children:(0,l.jsx)("button",{className:p.collapse,children:"Collapse"})}),!v&&(0,l.jsx)("h1",{children:"Loading"}),v&&(0,l.jsx)("div",{children:(0,l.jsxs)("ul",{className:p.list,children:[0===r.results.length&&(0,l.jsx)("p",{children:"We don't have any reviews for this movie."}),r.results.map((function(t){var e=t.id,r=t.author,n=t.content;return(0,l.jsxs)("li",{className:p.link,children:[(0,l.jsxs)("p",{className:p.author,children:["Author: ",r]}),(0,l.jsx)("p",{className:p.text,children:n})]},e)}))]})})]})}}}]);
//# sourceMappingURL=694.55eb86dd.chunk.js.map