(this.webpackJsonpdesafio_marvel=this.webpackJsonpdesafio_marvel||[]).push([[0],{145:function(e,t,c){},146:function(e,t,c){},147:function(e,t,c){},169:function(e,t){},171:function(e,t){},181:function(e,t){},183:function(e,t){},210:function(e,t){},212:function(e,t){},213:function(e,t){},218:function(e,t){},220:function(e,t){},239:function(e,t){},251:function(e,t){},254:function(e,t){},284:function(e,t,c){},286:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(22),s=c.n(i),r=(c(145),c(146),c(23)),o=(c(147),c(139)),j=c.n(o),d=c(140),l=c.n(d),b=Math.floor(Date.now()/1e3),u=l.a.MD5(b+"0da6efb140fbb420811af22f041b8c98681eecbad06c2cbee8ef14e74aa4561e1f135090").toString(),h=j.a.create({baseURL:"https://gateway.marvel.com/v1/public/",params:{apikey:"d06c2cbee8ef14e74aa4561e1f135090",hash:u,ts:b}}),O=c(44),f=c(43),x=c(52),m=c(51),p=c(79),v=c(34),g=c(4);function S(e){var t=e.showModal,c=e.closeModal,a=e.id,i=Object(n.useState)([]),s=Object(r.a)(i,2),o=s[0],j=s[1],d=Object(n.useState)(""),l=Object(r.a)(d,2),b=l[0],u=l[1],O=Object(n.useState)(""),x=Object(r.a)(O,2),m=x[0],p=x[1];return Object(n.useEffect)((function(){h.get("comics",{params:{id:a}}).then((function(e){j(e.data.data.results[0]),u(e.data.data.results[0].thumbnail.path+"."+e.data.data.results[0].thumbnail.extension),p(e.data.data.results[0].prices[0].price)})).catch((function(e){console.error(e)}))}),[a]),Object(g.jsxs)(v.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:t,onHide:c,children:[Object(g.jsx)(v.a.Header,{children:Object(g.jsx)(v.a.Title,{id:"contained-modal-title-vcenter",children:o.title})}),Object(g.jsxs)(v.a.Body,{style:{textAlign:"center"},children:[Object(g.jsx)("img",{src:b,alt:"thumbnail",style:{width:"350px",marginBottom:"1em"}}),Object(g.jsx)("h4",{children:"Description"}),Object(g.jsx)("p",{children:o.description}),Object(g.jsxs)("p",{children:[Object(g.jsx)("b",{children:"Price:"})," $",m,Object(g.jsx)("br",{}),Object(g.jsx)("b",{children:"Page count:"})," ",o.pageCount,Object(g.jsx)("br",{})]})]}),Object(g.jsx)(v.a.Footer,{children:Object(g.jsx)(f.a,{onClick:c,children:"Fechar"})})]})}function y(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),s=Object(r.a)(i,2),o=s[0],j=s[1],d=Object(n.useState)(""),l=Object(r.a)(d,2),b=l[0],u=l[1];return Object(n.useEffect)((function(){h.get("comics").then((function(e){a(e.data.data.results)})).catch((function(e){console.error(e)}))}),[]),Object(g.jsx)("div",{className:"cardExterno",children:Object(g.jsxs)("div",{className:"cardInterno",children:[Object(g.jsxs)(p.a,{children:[Object(g.jsx)("div",{className:"buscaComics",children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)(x.a.Prepend,{children:Object(g.jsx)(x.a.Text,{children:"Search"})}),Object(g.jsx)(m.a,{id:"buscaComics",onChange:function(e){h.get("comics",{params:{titleStartsWith:e.target.value}}).then((function(e){a(e.data.data.results)})).catch((function(e){console.error(e)}))}})]})}),Object(g.jsxs)("div",{className:"listaComics",children:[c.map((function(e){return Object(g.jsx)("div",{children:Object(g.jsxs)(O.a,{style:{width:"18rem"},children:[Object(g.jsx)(O.a.Img,{variant:"top",src:e.thumbnail.path+"."+e.thumbnail.extension}),Object(g.jsxs)(O.a.Body,{children:[Object(g.jsx)(O.a.Title,{children:e.title}),Object(g.jsx)(f.a,{variant:"dark",onClick:function(){u(e.id),j(!0)},children:"Details"})]}),Object(g.jsx)(p.a.Check,{type:"checkbox",id:"sendCheckBox".concat(e.id),label:"Send?"})]})},e.id)})),Object(g.jsx)(f.a,{type:"submit",variant:"success",children:"Send Comics"})]})]}),Object(g.jsx)(S,{id:b,showModal:o,closeModal:function(){return j(!1)}})]})})}c(284);function C(){return Object(g.jsx)("div",{className:"barraHeader",children:Object(g.jsx)("h2",{children:"Marvel Comics"})})}function k(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(C,{}),Object(g.jsx)(y,{})]})}c(285);s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root"))}},[[286,1,2]]]);
//# sourceMappingURL=main.fe544be7.chunk.js.map