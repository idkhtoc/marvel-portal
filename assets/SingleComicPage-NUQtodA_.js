import{b as g,r as m,j as s,L as p}from"./index-DA4AbAyB.js";import{u,P as e}from"./MarvelService-D-f8CMb0.js";import{s as _}from"./setContent-k0CsiY4d.js";import"./ErrorMessage-DXRTcyHz.js";const f=()=>{const{comicId:c}=g(),[i,r]=m.useState(null),{process:n,setProcess:a,getComic:o,clearError:l}=u();m.useEffect(()=>{d()},[c]);const d=()=>{l(),o(c).then(r).then(()=>a("confirmed"))};return s.jsx(s.Fragment,{children:_(n,t,i)})},t=({title:c,description:i,pageCount:r,thumbnail:n,language:a,price:o})=>s.jsxs("div",{className:"single-comic",children:[s.jsx("img",{src:n,alt:c,className:"single-comic__img"}),s.jsxs("div",{className:"single-comic__info",children:[s.jsx("h2",{className:"single-comic__name",children:c}),s.jsx("p",{className:"single-comic__descr",children:i}),s.jsx("p",{className:"single-comic__descr",children:r}),s.jsxs("p",{className:"single-comic__descr",children:["Language: ",a]}),s.jsx("div",{className:"single-comic__price",children:o})]}),s.jsx(p,{to:"/comics",className:"single-comic__back",children:"Back to all"})]});t.propTypes={title:e.string.isRequired,description:e.string,pageCount:e.number,thumbnail:e.string.isRequired,language:e.string.isRequired,price:e.number.isRequired};export{f as default};