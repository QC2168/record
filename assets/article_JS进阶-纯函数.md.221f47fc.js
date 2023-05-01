import{_ as s,c as a,o as n,O as l}from"./chunks/framework.488fce0c.js";const C=JSON.parse('{"title":"JS进阶-纯函数","description":"","frontmatter":{"title":"JS进阶-纯函数","tags":["JavaScript"]},"headers":[],"relativePath":"article/JS进阶-纯函数.md"}'),o={name:"article/JS进阶-纯函数.md"},p=l(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在函数式编程中，有个非常重要的概念叫纯函数，在我们的日常开发中也会经常遇到，今天我们就来讲讲<code>JavaScript</code>中的纯函数，同时本文中也会结合一些案例更好的认识到纯函数</p><h2 id="认识纯函数" tabindex="-1">认识纯函数 <a class="header-anchor" href="#认识纯函数" aria-label="Permalink to &quot;认识纯函数&quot;">​</a></h2><ul><li>在程序设计中，若一个函数符合以下条件，那么这个函数被称为函数 <ul><li>此函数在<strong>相同的输入值时</strong>，需产生相同的<strong>输出</strong></li><li>函数的<strong>输出和输入值以外的其他隐藏信息或状态无关</strong>，也和由<strong>IO设备产生的外部输出无关</strong></li><li>该函数不能<strong>有语义上可观察的函数副作用</strong>，例如“<strong>触发事件</strong>”，使输出设备输出，或更改输出值以外物件的内容等</li></ul></li></ul><h2 id="副作用" tabindex="-1">副作用 <a class="header-anchor" href="#副作用" aria-label="Permalink to &quot;副作用&quot;">​</a></h2><p>上面提到，纯函数不能有语义上可观察的函数副作用，这里副作用指的是执行一个函数时，除了返回函数值之外，还对<strong>调用函数产生了附加的影响</strong></p><ul><li>副作用不限于 <ul><li>网络请求</li><li>输出数据</li><li>修改全局变量、参数、外部存储</li><li><code>DOM</code>查询、操作</li><li><code>Math.random</code></li><li>获取当前时间</li></ul></li></ul><blockquote><p>副作用本身并不是个毒药，但某些情况下是必需的，所以并不是所有函数必须是纯函数</p></blockquote><h2 id="纯函数的例子" tabindex="-1">纯函数的例子 <a class="header-anchor" href="#纯函数的例子" aria-label="Permalink to &quot;纯函数的例子&quot;">​</a></h2><p>下面这个例子它是一个纯函数，符合函数在相同的输入值时，需产生相同的输出。</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="纯函数的重要性" tabindex="-1">纯函数的重要性 <a class="header-anchor" href="#纯函数的重要性" aria-label="Permalink to &quot;纯函数的重要性&quot;">​</a></h2><ul><li>纯函数在函数式编程中被广泛使用，比如react中组件就被要求像是一个纯函数，redux中有一个reducer的概念，也是要求必须是纯函数。</li><li>所以掌握纯函数对于理解很多框架的设计是非常有帮助的</li><li>并非所有函数必须是纯函数，比如发送网络请求、操作DOM元素的按钮的处理函数就不适合纯函数，这种事件处理函数可以调用其他纯函数来处理，以此减少项目中不纯的数量。</li></ul><h2 id="js中的纯函数" tabindex="-1">JS中的纯函数 <a class="header-anchor" href="#js中的纯函数" aria-label="Permalink to &quot;JS中的纯函数&quot;">​</a></h2><p>在<code>JavaScript</code>中内置的<code>API</code>也存在有纯函数，我们拿<code>Array</code>对象中的方法来说</p><p><code>filter</code> 过滤数组中的元素，它不对原数组进行操作是一个纯函数</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> names </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">李四</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">王五</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">赵六</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> newNames1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> names</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(newNames1)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [ &#39;李四&#39;, &#39;王五&#39;, &#39;赵六&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(names)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [ &#39;张三&#39;, &#39;李四&#39;, &#39;王五&#39;, &#39;赵六&#39; ]</span></span></code></pre></div><p><code>splice</code> 截取数组的时候会对原数组进行操作，所以不是一个纯函数。</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> newNames2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> names</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(newNames2)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [ &#39;王五&#39;, &#39;赵六&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(names)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [ &#39;张三&#39;, &#39;李四&#39; ]</span></span></code></pre></div><blockquote><p>在日常开发中，尽量使用纯函数</p></blockquote><h2 id="练习案例" tabindex="-1">练习案例 <a class="header-anchor" href="#练习案例" aria-label="Permalink to &quot;练习案例&quot;">​</a></h2><h2 id="案例一" tabindex="-1">案例一 <a class="header-anchor" href="#案例一" aria-label="Permalink to &quot;案例一&quot;">​</a></h2><ul><li>同样的输入有相同的输出</li></ul><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">num1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">num2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="案例二" tabindex="-1">案例二 <a class="header-anchor" href="#案例二" aria-label="Permalink to &quot;案例二&quot;">​</a></h2><ul><li>修改了外部的变量</li></ul><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> CC </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_island</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bar</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bar其他代码执行</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">CC</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">bar</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(iname)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="案例三" tabindex="-1">案例三 <a class="header-anchor" href="#案例三" aria-label="Permalink to &quot;案例三&quot;">​</a></h2><ul><li>修改了对象外的值</li></ul><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bar</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">info</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hxh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#82AAFF;">bar</span><span style="color:#A6ACCD;">(obj)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="案例四" tabindex="-1">案例四 <a class="header-anchor" href="#案例四" aria-label="Permalink to &quot;案例四&quot;">​</a></h2><ul><li>同样的输入有相同的输出</li></ul><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">info</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    age</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(obj))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="案例五" tabindex="-1">案例五 <a class="header-anchor" href="#案例五" aria-label="Permalink to &quot;案例五&quot;">​</a></h2><ul><li>严格意义上，它不是一个纯函数，因为有输出（<code>console.log</code>）。</li></ul><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printInfo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">info</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,36),e=[p];function t(c,r,D,y,F,i){return n(),a("div",null,e)}const u=s(o,[["render",t]]);export{C as __pageData,u as default};
