import{g as C,r as h}from"./index-DA4AbAyB.js";var g={exports:{}},T="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",E=T,$=E;function d(){}function b(){}b.resetWarningCache=d;var P=function(){function t(c,o,l,n,i,a){if(a!==$){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function s(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:s,element:t,elementType:t,instanceOf:s,node:t,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:b,resetWarningCache:d};return r.PropTypes=r,r};g.exports=P();var _=g.exports;const A=C(_),v=()=>{const[t,s]=h.useState("waiting"),r=h.useCallback(async(o,l="GET",n=null,i={"Content-Type":"application/json"})=>{s("loading");try{const a=await fetch(o,{method:l,body:n,headers:i});if(!a.ok)throw new Error(`Could not fetch ${o}, status: ${a.status}`);return await a.json()}catch(a){throw s("error"),a}},[]),c=h.useCallback(()=>s("waiting"),[]);return{process:t,setProcess:s,request:r,clearError:c}},m="https://gateway.marvel.com:443/v1/public/",f="apikey=5feaf92d234eb7f2aa5a014a2bd2e75d",w=210,y=0,R=()=>{const{process:t,setProcess:s,request:r,clearError:c}=v(),o=w,l=y,n=e=>({id:e.id,name:e.name,description:e.description?`${e.description.slice(0,210)}...`:"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items.splice(0,10)}),i=e=>({id:e.id,title:e.title||"Title is not available",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices[0].price?e.prices[0].price+"$":"Price is not available",pageCount:e.pageCount?`${e.pageCount} pages`:"No information about the number of pages",language:e.textObjects.language||"en-us",description:e.description||"There is no description"});return{process:t,setProcess:s,getAllCharacters:async(e=o)=>(await r(`${m}characters?limit=9&offset=${e}&${f}`)).data.results.map(n),getCharacter:async e=>{const p=await r(`${m}characters/${e}?${f}`);return n(p.data.results[0])},getComic:async e=>{const p=await r(`${m}comics/${e}?${f}`);return i(p.data.results[0])},clearError:c,getAllComics:async(e=y)=>(await r(`${m}comics?limit=8&offset=${e}&${f}`)).data.results.map(i),baseOffset:o,baseComicOffset:l}};export{A as P,R as u};
