import{_ as s,c as a,o as n,O as l}from"./chunks/framework.488fce0c.js";const A=JSON.parse('{"title":"模块化理解","description":"","frontmatter":{"title":"模块化理解","tags":["JavaScript"]},"headers":[],"relativePath":"interview/JavaScript/模块化理解.md"}'),o={name:"interview/JavaScript/模块化理解.md"},e=l(`<h3 id="模块" tabindex="-1">模块 <a class="header-anchor" href="#模块" aria-label="Permalink to &quot;模块&quot;">​</a></h3><p>指的是将一个程序封装成多个模块，再组合起来用，这些模块只做自己负责的事情，并暴露一部分接口和数据进行通信。</p><h3 id="传统模块化" tabindex="-1">传统模块化 <a class="header-anchor" href="#传统模块化" aria-label="Permalink to &quot;传统模块化&quot;">​</a></h3><h4 id="function" tabindex="-1">function <a class="header-anchor" href="#function" aria-label="Permalink to &quot;function&quot;">​</a></h4><p>功能：使用function方式作为封装各种不同的功能 弊端：污染全局命名空间，很容易造成命名冲突问题</p><h4 id="namespace" tabindex="-1">namespace <a class="header-anchor" href="#namespace" aria-label="Permalink to &quot;namespace&quot;">​</a></h4><p>减少了全局变量，解决了命名冲突问题 弊端：数据可能被外部直接修改，不安全</p><h4 id="iife" tabindex="-1">IIFE <a class="header-anchor" href="#iife" aria-label="Permalink to &quot;IIFE&quot;">​</a></h4><p>私有数据，外部只能调用闭包暴露出来的方法和属性进行操作，如果出现模块需要依赖另外一个模块是怎么解决？</p><h3 id="模块化优点" tabindex="-1">模块化优点 <a class="header-anchor" href="#模块化优点" aria-label="Permalink to &quot;模块化优点&quot;">​</a></h3><ul><li>减少命名冲突</li><li>分离数据，按需加载</li><li>复用性和维护性更好</li></ul><h3 id="模块化规范" tabindex="-1">模块化规范 <a class="header-anchor" href="#模块化规范" aria-label="Permalink to &quot;模块化规范&quot;">​</a></h3><h4 id="cjs" tabindex="-1">CJS <a class="header-anchor" href="#cjs" aria-label="Permalink to &quot;CJS&quot;">​</a></h4><p>nodejs的模块化规范，每个文件可以是一个模块（需要声明导出），它们拥有自己的作用域。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 暴露数据</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> value</span></span>
<span class="line"><span style="color:#89DDFF;">exports.</span><span style="color:#A6ACCD;">xxx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> value</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 引入模块</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myModule </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./myModule.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><blockquote><p>如果导入时没有发现模块会报错</p></blockquote><blockquote><p>CJS导入是同步的，因为node模块一般都在本地硬盘，加载很快，无需异步导入 在服务器端模块可以按需加载，需要时才同步加载，而在浏览器中需要提前编译处理</p></blockquote><p><strong>优点</strong></p><ul><li>模块之间的作用域的独立的，不会污染全局</li><li>多次引入模块，只读取第一次，有缓存机制</li><li>根据引入顺序进行加载</li></ul><h3 id="amd" tabindex="-1">AMD <a class="header-anchor" href="#amd" aria-label="Permalink to &quot;AMD&quot;">​</a></h3><p>异步加载模块+回调函数实现实现的，在浏览器中异步加载。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 导出模块</span></span>
<span class="line"><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 导出指定模块</span></span>
<span class="line"><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">m1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">m2</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 引入模块</span></span>
<span class="line"><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">m1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">m2</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//  your code</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="cmd" tabindex="-1">CMD <a class="header-anchor" href="#cmd" aria-label="Permalink to &quot;CMD&quot;">​</a></h3><p>专门用于浏览器，是异步加载的，可以理解为<code>AMD</code>和<code>CJS</code>的结合体</p><h3 id="esm" tabindex="-1">ESM <a class="header-anchor" href="#esm" aria-label="Permalink to &quot;ESM&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 导出默认模块</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> value</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 导出指定数据</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> value</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 引入默认模块</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 引入指定数据</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h3 id="esm和cjs区别" tabindex="-1">ESM和CJS区别 <a class="header-anchor" href="#esm和cjs区别" aria-label="Permalink to &quot;ESM和CJS区别&quot;">​</a></h3><ul><li>CJS输出的是数值拷贝，ESM是值引用</li><li>CJS运行时加载，ESM编译时输出接口</li><li>ESM是静态定义，CJS是加载一个对象<code>module.exports={}</code></li></ul>`,28),p=[e];function t(c,r,i,y,D,C){return n(),a("div",null,p)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
