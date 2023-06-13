"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[551],{7341:function(e,r,n){var t=n(5671),a=n(3144),c=n(136),s=n(7277),i=n(2791),o=n(9613),l=n(184),u=function(e){(0,c.Z)(n,e);var r=(0,s.Z)(n);function n(){var e;(0,t.Z)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=r.call.apply(r,[this].concat(c))).state={error:!1},e}return(0,a.Z)(n,[{key:"componentDidCatch",value:function(e,r){console.log(e,r),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(console.log(1),(0,l.jsx)(o.Z,{})):this.props.children}}]),n}(i.Component);r.Z=u},9613:function(e,r,n){n.d(r,{Z:function(){return c}});var t=n.p+"static/media/error.42292aa12b6bc303ce99.gif",a=n(184),c=function(){return(0,a.jsx)("img",{src:t,alt:"Error gif",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})}},227:function(e,r,n){n.r(r),n.d(r,{default:function(){return N}});var t=n(9439),a=n(2791),c=n(3394),s=n(9613),i=n(4304),o=n.p+"static/media/mjolnir.61f31e1809f12183a524.png",l=n(184),u=function(e){var r=e.character,n=r.thumbnail,t=r.name,a=r.description,c=r.homepage,s=r.wiki,i="randomchar__img ".concat(n.includes("image_not_available")?"randomchar__img_un":null);return(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{src:n,alt:"Random character",className:i}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:t}),(0,l.jsx)("p",{className:"randomchar__descr",children:a}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(){var e=(0,a.useState)(null),r=(0,t.Z)(e,2),n=r[0],h=r[1],d=(0,i.Z)(),m=d.loading,f=d.error,p=d.getCharacter,_=d.clearError;(0,a.useEffect)((function(){v()}),[]);var v=function(){_();var e=Math.floor(400*Math.random()+1011e3);p(e).then(h).catch((function(e){throw e.message}))},j=f?(0,l.jsx)(s.Z,{}):null,x=m?(0,l.jsx)(c.Z,{}):null,b=m||f||!n?null:(0,l.jsx)(u,{character:n});return(0,l.jsxs)("div",{className:"randomchar",children:[j,x,b,(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{className:"button button__main",onClick:v,children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},d=n(8683),m=n(1087),f=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,l.jsxs)("div",{className:"skeleton",children:[(0,l.jsxs)("div",{className:"pulse skeleton__header",children:[(0,l.jsx)("div",{className:"pulse skeleton__circle"}),(0,l.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"})]})]})},p=function(e){var r=e.name,n=e.description,t=e.thumbnail,a=e.homepage,c=e.wiki,s=e.comics;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{className:t.includes("image_not_available")?"un":"",src:t,alt:r}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:r}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:a,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:c,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:n}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsxs)("ul",{className:"char__comics-list",children:[s.length?null:"There are no comics for this character",s.map((function(e,r){return(0,l.jsx)("li",{className:"char__comics-item",children:(0,l.jsx)(m.rU,{to:"/MarvelPortal/comics/".concat(e.resourceURI.match(/[^/]+$/)),children:e.name})},r)}))]})]})},_=function(e){var r=e.charId,n=(0,a.useState)(null),o=(0,t.Z)(n,2),u=o[0],h=o[1],m=(0,i.Z)(),_=m.loading,v=m.error,j=m.getCharacter,x=m.clearError;(0,a.useEffect)((function(){b()}),[r]);var b=function(){r&&(x(),j(r).then(h))},g=u||_||v?null:(0,l.jsx)(f,{}),Z=v?(0,l.jsx)(s.Z,{}):null,N=_?(0,l.jsx)(c.Z,{}):null,k=_||v||!u?null:(0,l.jsx)(p,(0,d.Z)({},u));return(0,l.jsxs)("div",{className:"char__info",children:[g,Z,N,k]})},v=n(3433),j=n(6983),x=n(5660),b=function(e){var r=(0,i.Z)(),n=r.loading,o=r.error,u=r.getAllCharacters,h=r._baseOffset,d=(0,a.useState)([]),m=(0,t.Z)(d,2),f=m[0],p=m[1],_=(0,a.useState)(!1),b=(0,t.Z)(_,2),g=b[0],Z=b[1],N=(0,a.useState)(h),k=(0,t.Z)(N,2),y=k[0],w=k[1],C=(0,a.useState)(!1),O=(0,t.Z)(C,2),E=O[0],S=O[1];(0,a.useEffect)((function(){D(y,!0)}),[]);var P,D=function(e,r){Z(!r),u(e).then(T).catch((function(e){throw e.message}))},T=function(e){var r=!1;e.length<9&&(r=!0),p((function(r){return[].concat((0,v.Z)(r),(0,v.Z)(e))})),Z(!1),w((function(e){return e+9})),S(r)},A=(0,a.useRef)([]),F=function(e){A.current.forEach((function(e){return e.classList.remove("char__item_selected")})),A.current[e].classList.add("char__item_selected"),A.current[e].focus()},I=o?(0,l.jsx)(s.Z,{}):null,R=n&&!g?(0,l.jsx)(c.Z,{}):null;return(0,l.jsxs)("div",{className:"char__list",children:[I,R,(P=f,P=P.map((function(r,n){var t=r.id,a=r.thumbnail,c=r.name;return(0,l.jsx)(j.Z,{classNames:"char__item",timeout:400,children:(0,l.jsxs)("li",{tabIndex:0,ref:function(e){return A.current[n]=e},onClick:function(){e.onCharSelected(t),F(n)},onKeyPress:function(r){" "!==r.key&&"Enter"!==r.key||(e.onCharSelected(t),F(n))},className:"char__item",children:[(0,l.jsx)("img",{className:a.includes("image_not_available")?"un":"",src:a,alt:"character"}),(0,l.jsx)("div",{className:"char__name",children:c})]})},t)})),(0,l.jsx)("ul",{className:"char__grid",children:(0,l.jsx)(x.Z,{component:null,children:P})})),(0,l.jsx)("button",{className:"button button__main button__long",onClick:function(){return D(y)},disabled:g,style:{display:E?"none":"block"},children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})},g=n(7341),Z=n.p+"static/media/vision.067d4ae1936d64a577ce.png",N=function(){var e=(0,a.useState)(null),r=(0,t.Z)(e,2),n=r[0],c=r[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.Z,{a:"1",children:(0,l.jsx)(h,{})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(g.Z,{children:(0,l.jsx)(b,{onCharSelected:function(e){c(e)}})}),(0,l.jsx)(g.Z,{children:(0,l.jsx)("div",{className:"char__info-wrapper",children:(0,l.jsx)(_,{charId:n})})})]}),(0,l.jsx)("img",{className:"bg-decoration",src:Z,alt:"vision"})]})}},4304:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(4165),a=n(5861),c=n(9439),s=n(2791),i=function(){var e=function(){var e=(0,s.useState)(!1),r=(0,c.Z)(e,2),n=r[0],i=r[1],o=(0,s.useState)(null),l=(0,c.Z)(o,2),u=l[0],h=l[1],d=(0,s.useCallback)(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a,c,s,o,l=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},i(!0),e.prev=4,e.next=7,fetch(r,{method:n,body:a,headers:c});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return o=e.sent,i(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),i(!1),h(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(r){return e.apply(this,arguments)}}(),[]);return{loading:n,request:d,error:u,clearError:(0,s.useCallback)((function(){return h(null)}),[])}}(),r=e.loading,n=e.request,i=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=5feaf92d234eb7f2aa5a014a2bd2e75d",h=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items.splice(0,10)}},d=function(e){return{id:e.id,title:e.title||"Title is not available",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices[0].price?e.prices[0].price+"$":"Price is not available",pageCount:e.pageCount?"".concat(e.pageCount," pages"):"No information about the number of pages",language:e.textObjects.language||"en-us",description:e.description||"There is no description"}},m=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var r,a,c=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:210,e.next=3,n("".concat(l,"characters?limit=9&offset=").concat(r,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(h));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(l,"characters/").concat(r,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",h(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var r,a,c=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:0,e.next=3,n("".concat(l,"comics?limit=8&offset=").concat(r,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(d));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(l,"comics/").concat(r,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",d(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return{loading:r,error:i,getAllCharacters:m,getCharacter:f,_baseOffset:210,_baseComicOffset:0,getComic:_,clearError:o,getAllComics:p}}},8683:function(e,r,n){n.d(r,{Z:function(){return s}});var t=n(9142);function a(e,r,n){return(r=(0,t.Z)(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}}}]);
//# sourceMappingURL=551.05af51a2.chunk.js.map