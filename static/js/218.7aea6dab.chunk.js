"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[218],{9467:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(7689),o=t(6296),i=t(6168),a=t(184);function c(n){var e=n.id,t=n.title,c=n.name,u=n.backdrop_path,s=n.release_date,p=(0,r.TH)(),l=new Date(s);return(0,a.jsx)(i.H2,{children:(0,a.jsxs)(i.jJ,{to:"/movies/".concat(e),state:{from:p},children:[u?(0,a.jsx)(i.Xb,{src:"https://image.tmdb.org/t/p/w300".concat(u),alt:""}):(0,a.jsx)(i.Xb,{src:o,alt:""}),(0,a.jsxs)(i.$4,{children:[(0,a.jsx)(i.sj,{children:t||c}),(0,a.jsx)(i.MW,{children:l.toLocaleDateString()})]})]})},e)}},2218:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r=t(5861),o=t(885),i=t(7757),a=t.n(i),c=t(2791),u=t(6731),s=t(4952),p=t(5218),l=t(9135),f=t(9467),x=t(6168),d=t(184);function h(n){var e=n.searchFilms;return(0,d.jsx)(x.eW,{children:e.map((function(n){var e=n.id,t=n.title,r=n.release_date,o=n.name,i=n.backdrop_path;return(0,d.jsx)(f.Z,{id:e,release_date:r,title:t,name:o,backdrop_path:i},e)}))})}var m,g,b,v=t(168),w=t(6444),Z=w.ZP.form(m||(m=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 100%;\n"]))),y=w.ZP.input(g||(g=(0,v.Z)(["\n  display: inline-block;\n  font-size: 20px;\n  padding: 10px;\n  margin-right: 10px;\n  border: none;\n  border-radius: 20px;\n  background-color: ",";\n  box-shadow: inset 2px 2px 5px ",",\n    inset -5px -5px 10px ",";\n  transition: all 0.2s ease-in-out;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n  &:hover {\n    box-shadow: inset 1px 1px 2px var(--color-shadow),\n      inset -1px -1px 2px var(--color-white);\n  }\n"])),(function(n){return n.theme.colors.buttonBg}),(function(n){return n.theme.colors.colorShadow}),(function(n){return n.theme.colors.white})),j=w.ZP.button(b||(b=(0,v.Z)(["\n  background-color: ",";\n  width: 40px;\n  height: 40px;\n  border: 0;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  cursor: pointer;\n  outline: none;\n  appearance: none;\n  transition: all 0.2s ease-in-out;\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: inset 1px 1px 2px ",",\n      inset -1px -1px 2px ",";\n  }\n  &:focus {\n    opacity: 2;\n  }\n"])),(function(n){return n.theme.colors.buttonBg}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.active}));function k(){var n=(0,c.useState)(""),e=(0,o.Z)(n,2),t=e[0],i=e[1],f=(0,c.useState)(""),x=(0,o.Z)(f,2),m=x[0],g=x[1],b=(0,c.useState)([]),v=(0,o.Z)(b,2),w=v[0],k=v[1],_=(0,u.lr)(),P=(0,o.Z)(_,2),S=P[0],q=P[1];(0,c.useEffect)((function(){return S.has("query")&&g(S.get("query")),function(){k([])}}),[S]),(0,c.useEffect)((function(){if(""!==m){var n=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Ai)(m).then((function(n){if(!(n.results.length>0))throw Error();k(n.results)})).catch((function(n){p.ZP.error("Movie not found"),console.log(n)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[m]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.x7,{}),(0,d.jsxs)(Z,{onSubmit:function(n){n.preventDefault(),g(t),""!==t?(q({query:t}),i("")):p.ZP.error("Enter what you want to find please")},children:[(0,d.jsx)(y,{onChange:function(n){i(n.target.value)},value:t,placeholder:"Search movies..."}),(0,d.jsx)(j,{type:"submit",children:(0,d.jsx)(l.U41,{})})]}),w&&(0,d.jsx)(h,{searchFilms:w})]})}},4952:function(n,e,t){t.d(e,{Ai:function(){return d},Bt:function(){return g},KJ:function(){return x},Y5:function(){return h},y:function(){return m}});var r=t(5861),o=t(7757),i=t.n(o),a=t(1044),c=t(2007),u=t.n(c),s="https://api.themoviedb.org/3/",p="592f788186491be4ee714869feb8dcec";function l(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(i().mark((function n(){var e,t,r,o=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",t=o.length>1&&void 0!==o[1]?o[1]:{},n.next=4,a.ZP.get(e,t);case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function x(){return l("".concat(s,"/trending/movie/day?api_key=").concat(p))}function d(n){return l("".concat(s,"search/movie?api_key=").concat(p,"&query=").concat(n,"&language=en-US&include_adult=false"))}function h(n){return l("".concat(s,"movie/").concat(n,"?api_key=").concat(p,"&language=en-US"))}function m(n){return l("".concat(s,"movie/").concat(n,"/credits?api_key=").concat(p,"&language=en-US&"))}function g(n){return l("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(p,"&language=en-US&"))}d.propTypes={search:u().string.isRequired},h.propTypes={id:u().number.isRequired},g.propTypes={id:u().number.isRequired},m.propTypes={id:u().number.isRequired}},6168:function(n,e,t){t.d(e,{$4:function(){return v},Dx:function(){return g},Ei:function(){return _},H2:function(){return j},MW:function(){return k},US:function(){return w},Xb:function(){return P},eW:function(){return y},jJ:function(){return b},sj:function(){return Z}});var r,o,i,a,c,u,s,p,l,f,x,d=t(168),h=t(6444),m=t(6731),g=(h.ZP.section(r||(r=(0,d.Z)(["\n  display: flex;\n  margin-top: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  justify-content: center;\n"]))),h.ZP.h1(o||(o=(0,d.Z)(["\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 10px;\n  color: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(n){return n.theme.colors.primaryText}))),b=(0,h.ZP)(m.OL)(i||(i=(0,d.Z)(["\n  text-decoration: none;\n"]))),v=h.ZP.div(a||(a=(0,d.Z)(["\n  padding: 0 10px;\n"]))),w=h.ZP.h2(c||(c=(0,d.Z)(["\n  font-size: 26px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryText})),Z=h.ZP.h3(u||(u=(0,d.Z)(["\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(n){return n.theme.colors.primaryText})),y=h.ZP.ul(s||(s=(0,d.Z)(["\n  display: grid;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  grid-gap: 24px;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n"]))),j=h.ZP.li(p||(p=(0,d.Z)(["\n  width: 100%;\n  display: block;\n  padding: 5px;\n  background-color: ",";\n  transform: scale(1);\n  transition: transform 250ms linear;\n  border-radius: 15px 15px 0 0;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.colors.buttonBg})),k=h.ZP.p(l||(l=(0,d.Z)(["\n  margin-bottom: 10px;\n  color: ",";\n  font-size: 14px;\n  font-weight: bold;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(n){return n.theme.colors.grey})),_=h.ZP.img(f||(f=(0,d.Z)(["\n  border-radius: 15px 15px 0 0;\n  max-width: 300px;\n"]))),P=h.ZP.img(x||(x=(0,d.Z)(["\n  border-radius: 15px 15px 0 0;\n  width: 100%;\n"])))},6296:function(n,e,t){n.exports=t.p+"static/media/noFilm.810972a1e8e7804a3ef2.jpeg"}}]);
//# sourceMappingURL=218.7aea6dab.chunk.js.map