import{_ as s,o as n,c as a,a as l}from"./app.2c1033c6.js";const C=JSON.parse('{"title":"apply","description":"","frontmatter":{"title":"apply","tags":["JavaScript手写题"]},"headers":[{"level":2,"title":"实现apply函数","slug":"实现apply函数","link":"#实现apply函数","children":[{"level":3,"title":"代码","slug":"代码","link":"#代码","children":[]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]}]}],"relativePath":"interview/jsCode/apply.md"}'),p={name:"interview/jsCode/apply.md"},o=l(`<h2 id="实现apply函数" tabindex="-1">实现apply函数 <a class="header-anchor" href="#实现apply函数" aria-hidden="true">#</a></h2><h3 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">myApply </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">myApply</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 用于缓存目标作用域中的fn，避免被替换</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Symbol</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 传入的作用域如果是null/undefined时，将context指定window</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 这里使用的是symbol 不会导致fn属性被覆盖</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 缓存调用myApply的this</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">fn</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 判断参数并返回数据</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">fn</span><span style="color:#F07178;">](</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">fn</span><span style="color:#F07178;">]()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">global</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">fn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test fn</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getVal</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">getVal</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">myApply</span><span style="color:#A6ACCD;">(foo) </span><span style="color:#676E95;font-style:italic;">// foo value</span></span>
<span class="line"><span style="color:#A6ACCD;">getVal</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#A6ACCD;">(foo) </span><span style="color:#676E95;font-style:italic;">// foo value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">getVal</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">myApply</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// global</span></span>
<span class="line"><span style="color:#A6ACCD;">getVal</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// global</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getVal</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// global</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(foo)</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function t(c,r,y,F,D,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};