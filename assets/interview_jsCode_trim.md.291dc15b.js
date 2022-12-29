import{_ as s,c as a,o as n,a as l}from"./app.55b83c28.js";const A=JSON.parse('{"title":"trim\u51FD\u6570","description":"","frontmatter":{"title":"trim\u51FD\u6570","tags":["JavaScript\u624B\u5199\u9898"]},"headers":[{"level":2,"title":"trim\u51FD\u6570","slug":"trim\u51FD\u6570","link":"#trim\u51FD\u6570","children":[{"level":3,"title":"\u6D4B\u8BD5","slug":"\u6D4B\u8BD5","link":"#\u6D4B\u8BD5","children":[]}]}],"relativePath":"interview/jsCode/trim.md"}'),o={name:"interview/jsCode/trim.md"},p=l(`<h2 id="trim\u51FD\u6570" tabindex="-1">trim\u51FD\u6570 <a class="header-anchor" href="#trim\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u7528\u4E8E\u79FB\u9664\u5B57\u7B26\u4E32\u4E24\u7AEF\u7684\u7A7A\u767D\u5B57\u7B26</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> trim</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">str</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">^</span><span style="color:#C3E88D;">\\s</span><span style="color:#89DDFF;">+|</span><span style="color:#C3E88D;">\\s</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6D4B\u8BD5" tabindex="-1">\u6D4B\u8BD5 <a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">  123</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str2</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">  123   </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">trim</span><span style="color:#A6ACCD;">(str))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 123</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">trim</span><span style="color:#A6ACCD;">(str2))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 123</span></span>
<span class="line"></span></code></pre></div>`,5),e=[p];function t(r,c,D,i,y,F){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
