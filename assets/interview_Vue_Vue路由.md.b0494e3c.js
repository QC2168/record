import{_ as e,c as o,o as a,O as t}from"./chunks/framework.488fce0c.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/Vue/Vue路由.md"}'),r={name:"interview/Vue/Vue路由.md"},c=t('<h2 id="路由钩子有哪些" tabindex="-1">路由钩子有哪些 <a class="header-anchor" href="#路由钩子有哪些" aria-label="Permalink to &quot;路由钩子有哪些&quot;">​</a></h2><h3 id="全局守卫" tabindex="-1">全局守卫 <a class="header-anchor" href="#全局守卫" aria-label="Permalink to &quot;全局守卫&quot;">​</a></h3><ul><li><code>router.beforeEach</code>全局前置路由守卫（通常用于进行权限控制）</li><li><code>router.beforeResolve</code>全局解析守卫（通常用于获取meta数据时使用）</li><li><code>router.afterEach</code>全局后置钩子（可以用于修改页面标题，分析数据等）</li><li><code>beforeEnter</code>路由独享守卫，只在进入路由时触发（<code>url</code>参数，锚点改变时不触发）</li></ul><h3 id="组件守卫" tabindex="-1">组件守卫 <a class="header-anchor" href="#组件守卫" aria-label="Permalink to &quot;组件守卫&quot;">​</a></h3><ul><li><code>beforeRouteEnter</code>路由导航成功之前调用</li><li><code>beforeRouteUpdate</code>动态参数更新时调用例如<code>query</code>参数更新</li><li><code>beforeRouteLeave</code>离开路由之前调用</li></ul>',5),i=[c];function d(l,n,_,s,u,h){return a(),o("div",null,i)}const m=e(r,[["render",d]]);export{b as __pageData,m as default};
