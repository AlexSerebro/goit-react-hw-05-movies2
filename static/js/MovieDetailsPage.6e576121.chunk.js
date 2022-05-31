"use strict";(self.webpackChunkgoit_react_hw_05_movies2=self.webpackChunkgoit_react_hw_05_movies2||[]).push([[971],{4390:function(e,r,n){n.d(r,{Mc:function(){return l},mv:function(){return p},uV:function(){return m},vS:function(){return h},wr:function(){return u}});var t=n(5861),a=n(7757),s=n.n(a),i=n(4569),c=n.n(i)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"0bb2f17198bc606087f9a8f8273748b1"}});function u(e){return o.apply(this,arguments)}function o(){return(o=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={page:r},e.next=3,c.get("/trending/movie/day",{params:n});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return n={query:r},e.next=5,c.get("search/movie",{params:n});case 5:return t=e.sent,e.abrupt("return",t.data.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r,"/credits"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return _.apply(this,arguments)}function _(){return(_=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(r,"/reviews"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},9529:function(e,r,n){n.r(r),n.d(r,{default:function(){return f}});var t=n(8152),a=n(6871),s=n(2791),i=n(4390),c={movieCard:"MovieCard_movieCard__jf5v8",movieCard__poster:"MovieCard_movieCard__poster__ZTDAr"},u=n(184);function o(e){var r=e.movie,n=r.title,t=r.poster_path,a=r.popularity,s=r.overview,i=r.genres;return(0,u.jsxs)("div",{className:c.movieCard,children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w342".concat(t),alt:"poster of ".concat(n),className:c.movieCard__poster}),(0,u.jsxs)("div",{className:c.movieCard__desc,children:[(0,u.jsx)("h2",{className:c.movieCard__title,children:n}),(0,u.jsxs)("span",{className:c.movieCard__score,children:["User score ",Math.round(a)]}),(0,u.jsx)("h3",{className:c.movieCard__title,children:"Overview"}),(0,u.jsx)("p",{className:c.movieCard__overview,children:s}),(0,u.jsx)("h3",{className:c.movieCard__title,children:"Genres"}),(0,u.jsx)("span",{className:c.movieCard__genres,children:i.map((function(e){return e.name})).join(", ")})]})]})}var l=n(3504),d={CastReviewMenu:"CastReviewMenu_CastReviewMenu__zi0iR",list:"CastReviewMenu_list__JFCKY",link:"CastReviewMenu_link__pL38b"};function p(){return(0,u.jsxs)("div",{className:d.CastReviewMenu,children:[(0,u.jsx)("h4",{className:d.title,children:"Additional information"}),(0,u.jsxs)("ul",{className:d.list,children:[(0,u.jsx)("li",{className:d.item,children:(0,u.jsx)(l.OL,{className:d.link,to:"cast",children:"Cast"})}),(0,u.jsx)("li",{className:d.item,children:(0,u.jsx)(l.OL,{className:d.link,to:"reviews",children:"Reviews"})})]})]})}var v=(0,s.lazy)((function(){return n.e(709).then(n.bind(n,9698))})),m=(0,s.lazy)((function(){return n.e(753).then(n.bind(n,3611))}));function f(){var e,r,n,c=(0,s.useState)(null),l=(0,t.Z)(c,2),d=l[0],f=l[1],h=(0,a.UO)(),_=(0,s.useRef)(null!==(e=null===(r=(0,a.TH)())||void 0===r||null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),x=(0,a.s0)();return(0,s.useEffect)((function(){(0,i.Mc)(h.movieId).then((function(e){return f(e)}))}),[h.movieId]),(0,u.jsx)(u.Fragment,{children:d&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("button",{className:"btn",onClick:function(){return x(_.current)},children:"Go back"}),(0,u.jsx)(o,{movie:d}),(0,u.jsx)(p,{}),(0,u.jsx)(s.Suspense,{fallback:(0,u.jsx)("p",{children:"Loading"}),children:(0,u.jsxs)(a.Z5,{children:[(0,u.jsx)(a.AW,{path:"cast",element:(0,u.jsx)(v,{})}),(0,u.jsx)(a.AW,{path:"reviews",element:(0,u.jsx)(m,{})})]})})]})})}}}]);
//# sourceMappingURL=MovieDetailsPage.6e576121.chunk.js.map