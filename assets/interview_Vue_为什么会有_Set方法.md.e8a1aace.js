import{_ as t,c as a,o as r,z as e,a as s}from"./chunks/framework.488fce0c.js";const $=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/Vue/为什么会有$Set方法.md"}'),o={name:"interview/Vue/为什么会有$Set方法.md"},n=e("h2",{id:"为什么会有-set方法",tabindex:"-1"},[s("为什么会有$Set方法 "),e("a",{class:"header-anchor",href:"#为什么会有-set方法","aria-label":'Permalink to "为什么会有$Set方法"'},"​")],-1),_=e("p",null,"这是因为Vue2的响应式数据采用的是Object.defineProperty进行数据拦截的，但这个方案无法对Array进行处理。Vue2中还额外重写了数组中常用的方法",-1),c=[n,_];function i(d,l,p,h,u,f){return r(),a("div",null,c)}const S=t(o,[["render",i]]);export{$ as __pageData,S as default};
