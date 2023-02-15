import{_ as e,o as c,c as d,a as o}from"./app.28cccbd3.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue2和3有什么区别","slug":"vue2和3有什么区别","link":"#vue2和3有什么区别","children":[{"level":3,"title":"CMA","slug":"cma","link":"#cma","children":[]},{"level":3,"title":"创建实例方式不同","slug":"创建实例方式不同","link":"#创建实例方式不同","children":[]},{"level":3,"title":"数据变量定义不一样","slug":"数据变量定义不一样","link":"#数据变量定义不一样","children":[]},{"level":3,"title":"props和emit","slug":"props和emit","link":"#props和emit","children":[]},{"level":3,"title":"响应式方案不同","slug":"响应式方案不同","link":"#响应式方案不同","children":[]}]}],"relativePath":"interview/Vue/Vue2和3有什么区别.md"}'),t={name:"interview/Vue/Vue2和3有什么区别.md"},a=o('<h2 id="vue2和3有什么区别" tabindex="-1">Vue2和3有什么区别 <a class="header-anchor" href="#vue2和3有什么区别" aria-hidden="true">#</a></h2><h3 id="cma" tabindex="-1">CMA <a class="header-anchor" href="#cma" aria-hidden="true">#</a></h3><p><code>Vue3</code>新增<code>composition Api</code>，函数式编程</p><p><code>setup</code>函数在生命周期中处于<code>beforeCreate</code>和<code>created</code>中间</p><p><code>setup</code>函数接受<code>props</code>和<code>context</code>两个属性，同时该函数需要返回一个对象</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Vue3.2新增script setup，无需再return一个对象，组件也无需注册可直接使用</p></div><h3 id="创建实例方式不同" tabindex="-1">创建实例方式不同 <a class="header-anchor" href="#创建实例方式不同" aria-hidden="true">#</a></h3><p><code>Vue2</code>在<code>main</code>文件中，直接引入<code>new</code>一个<code>Vue</code>类即可</p><p><code>Vue3</code>需要使用<code>createApp</code>创建实例</p><h3 id="数据变量定义不一样" tabindex="-1">数据变量定义不一样 <a class="header-anchor" href="#数据变量定义不一样" aria-hidden="true">#</a></h3><p>在<code>OptionApi</code>中，变量数据需要定义在<code>data</code>中</p><p>在<code>CMA</code>中，需要使用<code>ref</code>或<code>reactive</code>定义响应式数据</p><h3 id="props和emit" tabindex="-1">props和emit <a class="header-anchor" href="#props和emit" aria-hidden="true">#</a></h3><p>在<code>Vue2</code>中直接使用<code>this</code>即可直接获取到<code>props</code>和<code>emit</code>对象</p><p>而在<code>Vue3</code>需要使用宏函数<code>defineProps</code>和<code>defineEmits</code>，先声明后使用</p><h3 id="响应式方案不同" tabindex="-1">响应式方案不同 <a class="header-anchor" href="#响应式方案不同" aria-hidden="true">#</a></h3><p><code>Vue2</code>：<code>Object.defineProperty</code><code>Vue3</code>: <code>Proxy</code>和<code>reflect</code></p><p><code>Vue2</code>中<code>Object.defineProperty</code>无法完成对数组方法的监听，所以<code>Vue2</code>还重写了<code>Array</code>中的方法</p><p>除了这个，如果直接向<code>data</code>设置一个新的属性，是无法被监听到的</p><p>这时候<code>Vue</code>提供了<a href="https://v2.cn.vuejs.org/v2/api/#Vue-set" target="_blank" rel="noreferrer"><code>$set</code></a>方法设定一个新的响应式数据</p>',20),r=[a];function i(p,s,n,l,h,u){return c(),d("div",null,r)}const V=e(t,[["render",i]]);export{m as __pageData,V as default};
