import{_ as s,o as a,c as n,a as l}from"./app.a4feed42.js";const A=JSON.parse('{"title":"JS进阶-柯里化","description":"","frontmatter":{"title":"JS进阶-柯里化","tags":["JavaScript"]},"headers":[{"level":2,"title":"认识柯里化","slug":"认识柯里化","link":"#认识柯里化","children":[]},{"level":2,"title":"柯里化应用场景","slug":"柯里化应用场景","link":"#柯里化应用场景","children":[]},{"level":2,"title":"柯里化函数实现","slug":"柯里化函数实现","link":"#柯里化函数实现","children":[]},{"level":2,"title":"解析写法","slug":"解析写法","link":"#解析写法","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"知识点","slug":"知识点","link":"#知识点","children":[]},{"level":2,"title":"柯里化的性能","slug":"柯里化的性能","link":"#柯里化的性能","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"article/JavaScript柯里化.md"}'),p={name:"article/JavaScript柯里化.md"},o=l(`<h2 id="认识柯里化" tabindex="-1">认识柯里化 <a class="header-anchor" href="#认识柯里化" aria-hidden="true">#</a></h2><p>柯里化（英文：<code>Currying</code>），又称之为卡瑞化、加里化。柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。</p><p>它能<strong>减少代码冗余</strong>，<strong>增加代码的可读性</strong></p><p>这样子说可能没太明白，我们看个例子</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">c</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">d</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 100</span></span>
<span class="line"></span></code></pre></div><p>上面<code>sum</code>函数是将传入的参数进行相加，如果把<code>sum</code>函数改成柯里化函数：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">c</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">d</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>按照上面的写法，这个<code>sum</code>调用方式将是</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)(</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">)(</span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;">)(</span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> add</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">)(</span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;">)(</span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 100</span></span>
<span class="line"></span></code></pre></div><p><strong>通过这个例子你可以知道，柯里化即时是把较多参数的函数转为可以分段传入函数参数的函数，可以减少对函数备份参数的传入。</strong></p><h2 id="柯里化应用场景" tabindex="-1">柯里化应用场景 <a class="header-anchor" href="#柯里化应用场景" aria-hidden="true">#</a></h2><p>在实际场景上的一个例子，<code>MyURL</code>函数用于生成一个拼接之后的<code>url</code>链接，它需要传入三个参数，分别是<code>protocol</code>, <code>domain</code>, <code>path</code>。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyURL</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">protocol</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">domain</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">path</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">protocol</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">://</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">domain</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">MyURL</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">juejin.cn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user/2858385965322935</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// https://juejin.cn/user/2858385965322935</span></span>
<span class="line"><span style="color:#82AAFF;">MyURL</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">juejin.cn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">post/7055941374687838216</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// https://juejin.cn/post/7055941374687838216</span></span>
<span class="line"><span style="color:#82AAFF;">MyURL</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">juejin.cn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">post/7054594359206871053</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// https://juejin.cn/post/7054594359206871053</span></span>
<span class="line"></span></code></pre></div><p>从上面三个调用<code>MyURL</code>函数中，会发现前两个参数一直保持不变。我们可能会想要把这个函数封装下，成为下面这种方式。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getUrl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">path</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">MyURL</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">juejin.cn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>这样子改对上面的调用只需要修改<code>path</code>参数即可，但是万一某一天需要改<code>domain</code>参数呢？</p><p>我们可以把上面<code>MyURL</code>函数进行柯里化操作，同样只需要传入<code>path</code>。这即是函数柯里化是目的，减少代码冗余、增加代码可读性。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> justinPost</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">MyURL</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">juejin.cn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">justinPost</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">post/7055941374687838216</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// https://juejin.cn/post/7055941374687838216</span></span>
<span class="line"><span style="color:#82AAFF;">justinPost</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">post/7054594359206871053</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// https://juejin.cn/post/7054594359206871053</span></span>
<span class="line"></span></code></pre></div><h2 id="柯里化函数实现" tabindex="-1">柯里化函数实现 <a class="header-anchor" href="#柯里化函数实现" aria-hidden="true">#</a></h2><p>在上面的例子，我们需要手动将一个函数转为柯里化函数，我们可以手写实现将函数转换为柯里化函数的函数</p><p>下面即是柯里化函数实现的函数，一看就懂！</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 柯里化函数的实现</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyCurrying</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">fn</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">curried</span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">curried2</span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;font-style:italic;">args2</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">curried</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args2</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">curried2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">curried</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="解析写法" tabindex="-1">解析写法 <a class="header-anchor" href="#解析写法" aria-hidden="true">#</a></h2><ol><li>在一开始，函数接收一个函数，将这个函数进行柯里化处理。</li><li>先进行判断当前函数传入的参数数量是否大于原函数参数的数量，如果大于：通过<code>apply</code>方式调用函数</li><li>如果没有达到原函数参数的数量：将返回一个函数继续接收剩余的参数</li><li>调用返回的函数，当参数达到原函数参数的数量时，通过<code>apply</code>方式调用函数</li></ol><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-hidden="true">#</a></h2><p>利用闭包的原理，将每次传递进来的参数存起来，当参数不符合预期时，返回一个新的函数接收剩余参数，继续调用，不符合则再递归。</p><h2 id="知识点" tabindex="-1"><strong>知识点</strong> <a class="header-anchor" href="#知识点" aria-hidden="true">#</a></h2><ol><li><code>Function.prototype.length</code>是获取函数参数的个数</li><li>如果不使用<code>apply</code>方式调用原函数，会发生<code>this</code>指向不正确</li></ol><h2 id="柯里化的性能" tabindex="-1">柯里化的性能 <a class="header-anchor" href="#柯里化的性能" aria-hidden="true">#</a></h2><p>在使用柯里化意味着有额外的内存开销</p><ul><li>使用<code>arguments</code>对象比直接操作命名参数慢</li><li>作用域，闭包对内存的开销，性能下降</li><li>使用<code>call</code>、<code>apply</code>调用函数比直接调用函数会慢些，而且产生嵌套关系</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>柯里化主要是以闭包为基本，利用闭包将函数的参数存起来，等到参数达到一定数量时执行函数。使用柯里化会让代码更加有灵活度，但也有一定的弊端，它用到了<code>arguments</code>、递归、闭包等会带来性能影响。在日常开发中，请结合实际情况使用柯里化函数。</p>`,34),e=[o];function t(c,r,y,F,D,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
