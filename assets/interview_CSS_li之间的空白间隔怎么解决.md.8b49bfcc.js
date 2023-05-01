import{_ as s,c as a,o as l,O as e}from"./chunks/framework.488fce0c.js";const h=JSON.parse('{"title":"li之间的空白间隔怎么解决","description":"","frontmatter":{"title":"li之间的空白间隔怎么解决","tags":["CSS"]},"headers":[],"relativePath":"interview/CSS/li之间的空白间隔怎么解决.md"}'),o={name:"interview/CSS/li之间的空白间隔怎么解决.md"},n=e(`<h2 id="li之间的空白间隔怎么解决" tabindex="-1">li之间的空白间隔怎么解决 <a class="header-anchor" href="#li之间的空白间隔怎么解决" aria-label="Permalink to &quot;li之间的空白间隔怎么解决&quot;">​</a></h2><h3 id="原因" tabindex="-1">原因 <a class="header-anchor" href="#原因" aria-label="Permalink to &quot;原因&quot;">​</a></h3><p>这是浏览器把<code>inline</code>元素之间的空白字符（例如空格，换行）渲染成一个空格导致的，因为我们通常会把一个<code>li</code>标签放在一行上，这就导致了换行字符占位。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h3><ul><li>将<code>ul</code>和<code>li</code>写在一行上，不美观</li><li><code>li</code>设置<code>line-height:1;</code></li><li><code>ul</code>设置<code>font-size:0</code>，<code>li</code>需重新设置<code>font-size</code></li></ul>`,6),t=[n];function c(p,i,r,d,_,D){return l(),a("div",null,t)}const y=s(o,[["render",c]]);export{h as __pageData,y as default};
