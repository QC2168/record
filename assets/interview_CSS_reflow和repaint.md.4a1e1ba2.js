import{_ as e,o as a,c as l,a as s}from"./app.3448b97c.js";const F=JSON.parse('{"title":"reflow和repaint","description":"","frontmatter":{"title":"reflow和repaint","tags":["CSS"]},"headers":[{"level":2,"title":"reflow和repaint","slug":"reflow和repaint","link":"#reflow和repaint","children":[{"level":3,"title":"重排","slug":"重排","link":"#重排","children":[]},{"level":3,"title":"重绘","slug":"重绘","link":"#重绘","children":[]},{"level":3,"title":"优化重排重绘","slug":"优化重排重绘","link":"#优化重排重绘","children":[]},{"level":3,"title":"浏览器渲染队列","slug":"浏览器渲染队列","link":"#浏览器渲染队列","children":[]}]}],"relativePath":"interview/CSS/reflow和repaint.md"}'),n={name:"interview/CSS/reflow和repaint.md"},t=s(`<h2 id="reflow和repaint" tabindex="-1">reflow和repaint <a class="header-anchor" href="#reflow和repaint" aria-hidden="true">#</a></h2><h3 id="重排" tabindex="-1">重排 <a class="header-anchor" href="#重排" aria-hidden="true">#</a></h3><p>如果元素的几何信息受到改变（元素位置，宽高...），浏览器就会触发重新计算元素在视图内的几何属性，这个过程叫做重排</p><h3 id="重绘" tabindex="-1">重绘 <a class="header-anchor" href="#重绘" aria-hidden="true">#</a></h3><p>当元素外观发生改变，但没有改变布局的情况下，重新绘画这个元素就是重绘</p><p>常见会引起重绘的属性有color、border、visibility、background、outline</p><h3 id="优化重排重绘" tabindex="-1">优化重排重绘 <a class="header-anchor" href="#优化重排重绘" aria-hidden="true">#</a></h3><ul><li>集中添加样式，使用添加类样式会比一次次<code>style.xx</code>添加更好</li><li>不要使用table布局，table中某个元素变动会导致reflow，如果必须使用，可以设置table-layout:auto;或者是table-layout:fixed这样可以让table一行一行的渲染，这种做法也是为了限制reflow的影响范围</li><li>如果CSS里面有计算表达式，每次都会重新计算一遍，触发一次reflow</li><li>批量修改DOM，如使用<code>createDocumentFragment</code>处理节点，之后再一起插入到指定的位置</li><li>GPU加速，利用CSS中的transform属性改变元素位置，比起left、top会更加高效</li></ul><h3 id="浏览器渲染队列" tabindex="-1">浏览器渲染队列 <a class="header-anchor" href="#浏览器渲染队列" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">top </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">20px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>理论上，上面的代码会触发3次重排和重绘，因为元素的几何属性都发生了改变，但实际上它只触发了一次，这是因为浏览器有一个叫渲染队列机制的特性</p><p>在修改元素样式后，浏览器会将重排重绘的操作放到一个队列里，之后等待到一段时间或者到了一定的数量之后，再执行这些操作。</p><blockquote><p>推荐文章 <a href="https://juejin.cn/post/6844903779700047885" target="_blank" rel="noreferrer">腾讯IVWEB团队-你真的了解回流和重绘吗</a></p></blockquote>`,13),o=[t];function r(p,i,c,d,D,h){return a(),l("div",null,o)}const C=e(n,[["render",r]]);export{F as __pageData,C as default};
