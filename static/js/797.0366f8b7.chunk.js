"use strict";(self.webpackChunkfilmoteka=self.webpackChunkfilmoteka||[]).push([[797],{160:function(t,e,n){n.d(e,{IQ:function(){return o},Jh:function(){return p},Pg:function(){return i},XT:function(){return u},gy:function(){return f}});var r=n(861),a=n(757),c=n.n(a),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"e46f406ff40897ad9456c1375654d5d9"};var u=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("trending/all/day");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/search/movie",{params:{query:e}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},797:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(861),a=n(439),c=n(757),s=n.n(c),u=n(87),i=n(689),o=n(160),p=n(791),f={list:"cast_list__dKtzs",item:"cast_item__FkLJ9",collapse:"cast_collapse__AtOzo",name:"cast_name__wcjgu"},l=n(184),d=function(){var t=(0,p.useState)({}),e=(0,a.Z)(t,2),n=e[0],c=e[1],d=(0,p.useState)(!1),h=(0,a.Z)(d,2),m=h[0],v=h[1],x=(0,i.UO)().id;return(0,p.useEffect)((function(){function t(){return(t=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.IQ)(x);case 2:e=t.sent,c(e),v(!0),console.log(e);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[x]),(0,l.jsxs)("div",{children:[(0,l.jsx)(u.rU,{to:"/movies/".concat(x),children:(0,l.jsx)("button",{className:f.collapse,children:"Collapse"})}),!m&&(0,l.jsx)("h1",{children:"Loading"}),m&&(0,l.jsx)("div",{children:(0,l.jsx)("ul",{className:f.list,children:n.cast.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile_path;return(0,l.jsxs)("li",{className:f.item,children:[(0,l.jsx)("img",{className:f.img,src:"https://image.tmdb.org/t/p/w780/".concat(a),alt:n,height:"180"}),(0,l.jsx)("p",{className:f.name,children:n}),(0,l.jsxs)("p",{className:f.hero,children:["Character: ",r]})]},e)}))})})]})}}}]);
//# sourceMappingURL=797.0366f8b7.chunk.js.map