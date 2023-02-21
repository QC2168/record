import{_ as s,o as a,c as n,a as l}from"./app.87690054.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"ES8语法","slug":"es8语法","link":"#es8语法","children":[]},{"level":2,"title":"Object values","slug":"object-values","link":"#object-values","children":[]},{"level":2,"title":"Object entries","slug":"object-entries","link":"#object-entries","children":[]},{"level":2,"title":"字符串填充","slug":"字符串填充","link":"#字符串填充","children":[]},{"level":2,"title":"padStart","slug":"padstart","link":"#padstart","children":[]},{"level":2,"title":"padEnd","slug":"padend","link":"#padend","children":[]},{"level":2,"title":"函数参数的逗号","slug":"函数参数的逗号","link":"#函数参数的逗号","children":[]},{"level":2,"title":"Object getOwnPropertyDescriptors","slug":"object-getownpropertydescriptors","link":"#object-getownpropertydescriptors","children":[]},{"level":2,"title":"async function","slug":"async-function","link":"#async-function","children":[]}],"relativePath":"article/ES8.md"}'),o={name:"article/ES8.md"},e=l(`<h2 id="es8语法" tabindex="-1">ES8语法 <a class="header-anchor" href="#es8语法" aria-hidden="true">#</a></h2><p><code>ES8</code>又称<code>ES2017</code>，在<code>ES6</code>之后的语法我们都统称为<code>ES6+</code>，下面我们来看看<code>ES8</code>中新增的新语法。它们都是一些非常实用的功能：</p><ul><li><code>Object.values</code></li><li><code>Object.entries</code></li><li>字符串填充</li><li>函数参数的逗号</li><li><code>Object.getOwnPropertyDescriptors</code></li><li><code>async function</code></li></ul><h2 id="object-values" tabindex="-1">Object values <a class="header-anchor" href="#object-values" aria-hidden="true">#</a></h2><p>该方法可以获取对象中所有的<code>value</code>值。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_island</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">values</span><span style="color:#A6ACCD;">(obj))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [ &#39;_island&#39;, 18 ]</span></span>
<span class="line"></span></code></pre></div><h2 id="object-entries" tabindex="-1">Object entries <a class="header-anchor" href="#object-entries" aria-hidden="true">#</a></h2><p>该方法用于将一个对象的可枚举健值转换为一个数组。方便后续遍历数据。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_island</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将一个对象转为一个数组，方便后续遍历</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#A6ACCD;">(obj))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [ [ &#39;name&#39;, &#39;_island&#39; ], [ &#39;age&#39;, 18 ] ]</span></span>
<span class="line"></span></code></pre></div><h2 id="字符串填充" tabindex="-1">字符串填充 <a class="header-anchor" href="#字符串填充" aria-hidden="true">#</a></h2><h2 id="padstart" tabindex="-1">padStart <a class="header-anchor" href="#padstart" aria-hidden="true">#</a></h2><p><code>padStart</code>方法用于从起始开始补全字符串。返回补全之后的字符串，不会修改原字符串。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str4 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str4</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">padStart</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 000100</span></span>
<span class="line"></span></code></pre></div><h2 id="padend" tabindex="-1">padEnd <a class="header-anchor" href="#padend" aria-hidden="true">#</a></h2><p><code>endsWith</code>方法用于从尾部补全字符串。返回补全之后的字符串，不会修改原字符串。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str5 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str5</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">padEnd</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 200000</span></span>
<span class="line"></span></code></pre></div><blockquote><p><code>padStart</code> / <code>padEnd</code> 如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。</p></blockquote><h2 id="函数参数的逗号" tabindex="-1">函数参数的逗号 <a class="header-anchor" href="#函数参数的逗号" aria-hidden="true">#</a></h2><p>ES8之后，可以在函数的参数后面尾随逗号。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">m</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">,){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="object-getownpropertydescriptors" tabindex="-1">Object getOwnPropertyDescriptors <a class="header-anchor" href="#object-getownpropertydescriptors" aria-hidden="true">#</a></h2><p>该方法用来获取一个对象的所有自身属性的描述符。</p><p>返回是描述符的有以下子集的组成：</p><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td><code>value</code></td><td>属性值</td></tr><tr><td><code>writable</code></td><td>该属性是否可写</td></tr><tr><td><code>configurable</code></td><td>该属性是否可配置（是否可读写、删除该属性）</td></tr><tr><td><code>enumerable</code></td><td>该属性是否可枚举</td></tr><tr><td><code>set</code></td><td>设置属性时调用的函数</td></tr><tr><td><code>get</code></td><td>获取属性时调用的函数</td></tr></tbody></table><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_island</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getOwnPropertyDescriptors</span><span style="color:#A6ACCD;">(obj))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   name: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     value: &#39;_island&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     writable: true,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     enumerable: true,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     configurable: true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span></code></pre></div><h2 id="async-function" tabindex="-1">async function <a class="header-anchor" href="#async-function" aria-hidden="true">#</a></h2><p><code>async</code>函数是一个异步函数，且可以搭配<code>await</code>关键字使用。它可以使<code>Promise</code>的异步执行的像同步代码一样执行。</p><p><code>async</code>函数一定会返回一个<code>promise</code>对象，如果一个<code>async</code>函数的返回值看起来不是<code>promise</code>，那么它将会被隐式地包装在一个<code>promise</code>中。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">res</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ok</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ok</span></span>
<span class="line"></span></code></pre></div>`,29),p=[e];function t(c,r,i,y,d,D){return a(),n("div",null,p)}const A=s(o,[["render",t]]);export{C as __pageData,A as default};