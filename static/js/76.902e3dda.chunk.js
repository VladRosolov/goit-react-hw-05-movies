"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var c=n(885),i=n(791),o=n(739),r=n(233),a="Cast_castList__ARoWn",u="Cast_castItem__-Jcfe",s=n(184),f=function(){var t=(0,o.UO)().movieId,e=(0,i.useState)(null),n=(0,c.Z)(e,2),f=n[0],h=n[1];return(0,i.useEffect)((function(){(0,r.PI)(t).then(h)}),[t]),f?(console.log(f.cast),f?(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:a,children:f.cast.map((function(t){return(0,s.jsxs)("li",{className:u,children:[(0,s.jsx)("p",{children:t.name}),(0,s.jsx)("img",{src:t.profile_path?"https://www.themoviedb.org/t/p/w500".concat(t.profile_path):"Poster image",alt:"",width:"200px"})]},t.id)}))})}):void 0):null}},233:function(t,e,n){n.d(e,{Bt:function(){return u},Ch:function(){return r},DC:function(){return i},Mc:function(){return o},PI:function(){return a}});var c="482cc9361740c76457d464ceb31e9691";function i(){return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=482cc9361740c76457d464ceb31e9691").then((function(t){if(t.ok)return t.json()}))}function o(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("482cc9361740c76457d464ceb31e9691","&language=en-US")).then((function(t){if(t.ok)return t.json()}))}function r(t){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t,"&language=en-US&page=1&include_adult=false")).then((function(t){if(t.ok)return t.json()}))}function a(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US")).then((function(t){if(t.ok)return t.json()}))}function u(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US")).then((function(t){if(t.ok)return t.json()}))}}}]);
//# sourceMappingURL=76.902e3dda.chunk.js.map