"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[888],{888:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var i=t(885),o=t(791),r=t(731),s=t(739),c={btn_link:"MovieDetails_btn_link__mGTfm",movieCard:"MovieDetails_movieCard__LWJIF",content_right:"MovieDetails_content_right__CeDWF",movies_data:"MovieDetails_movies_data__IcDH4",movies_text:"MovieDetails_movies_text__qnr7v",moreInfo:"MovieDetails_moreInfo__aYhGr",moreInfoList:"MovieDetails_moreInfoList__9i-fq",moreInfoLink:"MovieDetails_moreInfoLink__9FToP",hideLink:"MovieDetails_hideLink__tmpDb",moreInfoTitle:"MovieDetails_moreInfoTitle__OO-gI",moreInfoItem:"MovieDetails_moreInfoItem__cODSs"},a=t(233),l=t(184),m=function(){var e,n,t=(0,s.UO)().movieId,m=(0,o.useState)(null),h=(0,i.Z)(m,2),d=h[0],f=h[1],u=(0,s.TH)();if((0,o.useEffect)((function(){(0,a.Mc)(t).then(f)}),[t]),!d)return null;console.log(u.state);var _=null!==(e=null===(n=u.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("main",{children:[(0,l.jsx)("button",{type:"button",children:(0,l.jsx)(r.rU,{to:_,className:c.btn_link,children:"Go back"})}),(0,l.jsxs)("div",{className:c.movieCard,children:[(0,l.jsx)("div",{className:c.content_left,children:(0,l.jsx)("img",{src:"https://www.themoviedb.org/t/p/w500".concat(d.poster_path),alt:d.original_title,width:"300px"})}),(0,l.jsxs)("div",{className:c.content_right,children:[(0,l.jsx)("h1",{children:d.title}),(0,l.jsxs)("p",{children:["Genres: ",d.genres.map((function(e){return e.name})).join(", ")]}),(0,l.jsx)("p",{className:c.movies_text,children:d.overview}),(0,l.jsxs)("ul",{className:c.movies_data,children:[(0,l.jsx)("li",{children:(0,l.jsxs)("p",{children:["Release date: ",d.release_date]})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:d.homepage,children:d.homepage})})]})]})]}),(0,l.jsx)("div",{className:c.moreInfoTitle,children:(0,l.jsx)("h3",{className:c.moreInfoItem,children:"Additional information"})}),(0,l.jsx)("div",{className:c.moreInfo,children:(0,l.jsx)("div",{className:c.moreInfoLeft,children:(0,l.jsxs)("ul",{className:c.moreInfoList,children:[(0,l.jsx)("li",{children:(0,l.jsx)(r.rU,{to:"cast",state:{from:_},className:c.moreInfoLink,children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.rU,{to:"reviews",state:{from:_},className:c.moreInfoLink,children:"Reviews"})})]})})}),(0,l.jsx)(o.Suspense,{children:(0,l.jsx)(s.j3,{})})]})})}},233:function(e,n,t){t.d(n,{Bt:function(){return a},Ch:function(){return s},DC:function(){return o},Mc:function(){return r},PI:function(){return c}});var i="482cc9361740c76457d464ceb31e9691";function o(){return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=482cc9361740c76457d464ceb31e9691").then((function(e){if(e.ok)return e.json()}))}function r(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("482cc9361740c76457d464ceb31e9691","&language=en-US")).then((function(e){if(e.ok)return e.json()}))}function s(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&page=1&include_adult=false")).then((function(e){if(e.ok)return e.json()}))}function c(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US")).then((function(e){if(e.ok)return e.json()}))}function a(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US")).then((function(e){if(e.ok)return e.json()}))}}}]);
//# sourceMappingURL=888.ae7d5369.chunk.js.map