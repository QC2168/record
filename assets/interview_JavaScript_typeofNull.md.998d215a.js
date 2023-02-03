import{_ as l,o as t,c as e,a}from"./app.08243bc5.js";const f=JSON.parse('{"title":"typeofNull","description":"","frontmatter":{"title":"typeofNull","tags":["JavaScript"]},"headers":[{"level":2,"title":"typeof null","slug":"typeof-null","link":"#typeof-null","children":[{"level":3,"title":"历史上的BUG","slug":"历史上的bug","link":"#历史上的bug","children":[]},{"level":3,"title":"曾经有个将null的提案...","slug":"曾经有个将null的提案","link":"#曾经有个将null的提案","children":[]},{"level":3,"title":"判断是否null","slug":"判断是否null","link":"#判断是否null","children":[]},{"level":3,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}]}],"relativePath":"interview/JavaScript/typeofNull.md"}'),s={name:"interview/JavaScript/typeofNull.md"},n=a(`<h2 id="typeof-null" tabindex="-1">typeof null <a class="header-anchor" href="#typeof-null" aria-hidden="true">#</a></h2><p>先说结果，是<code>Object</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// object</span></span>
<span class="line"></span></code></pre></div><h3 id="历史上的bug" tabindex="-1">历史上的BUG <a class="header-anchor" href="#历史上的bug" aria-hidden="true">#</a></h3><p>这是<code>JavaScript</code>中的是一个<code>Bug</code></p><p>在第一个版本的时候，所有值都储存在32位的单元中，每个单元包含一个小的类型标签（占<code>1-3bits</code>），剩下的位表示真实值。</p><table><thead><tr><th>值</th><th>类型</th></tr></thead><tbody><tr><td>000</td><td>Object</td></tr><tr><td>001</td><td>int</td></tr><tr><td>010</td><td>float</td></tr><tr><td>100</td><td>string</td></tr><tr><td>110</td><td>boolean</td></tr></tbody></table><p><strong>null是机器码，引用了一个空的对象，标记为0，最终类型是Object</strong></p><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/20230203165743.png" alt="20230203165743"></p><h3 id="曾经有个将null的提案" tabindex="-1">曾经有个将null的提案... <a class="header-anchor" href="#曾经有个将null的提案" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">null</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p><a href="https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null" target="_blank" rel="noreferrer">历史讨论快照</a></p><h3 id="判断是否null" tabindex="-1">判断是否null <a class="header-anchor" href="#判断是否null" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [object Null]</span></span>
<span class="line"></span></code></pre></div><h3 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-hidden="true">#</a></h3><ul><li><a href="https://2ality.com/2013/10/typeof-null.html" target="_blank" rel="noreferrer">The history of “typeof null”</a></li><li><a href="https://262.ecma-international.org/5.1/#sec-11.4.3" target="_blank" rel="noreferrer">The typeof Operator</a></li></ul>`,16),o=[n];function p(r,c,i,d,h,u){return t(),e("div",null,o)}const g=l(s,[["render",p]]);export{f as __pageData,g as default};
