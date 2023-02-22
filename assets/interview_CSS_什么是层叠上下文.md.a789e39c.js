import{_ as s,o as n,c as a,a as l}from"./app.87690054.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是层叠上下文","slug":"什么是层叠上下文","link":"#什么是层叠上下文","children":[]},{"level":2,"title":"什么是层叠等级","slug":"什么是层叠等级","link":"#什么是层叠等级","children":[]},{"level":2,"title":"什么是层叠顺序","slug":"什么是层叠顺序","link":"#什么是层叠顺序","children":[{"level":3,"title":"层叠准则","slug":"层叠准则","link":"#层叠准则","children":[]}]},{"level":2,"title":"产生层叠上下文","slug":"产生层叠上下文","link":"#产生层叠上下文","children":[{"level":3,"title":"preview","slug":"preview","link":"#preview","children":[]}]},{"level":2,"title":"Css3属性对层叠上下文影响","slug":"css3属性对层叠上下文影响","link":"#css3属性对层叠上下文影响","children":[]}],"relativePath":"interview/CSS/什么是层叠上下文.md"}'),p={name:"interview/CSS/什么是层叠上下文.md"},o=l(`<h2 id="什么是层叠上下文" tabindex="-1">什么是层叠上下文 <a class="header-anchor" href="#什么是层叠上下文" aria-hidden="true">#</a></h2><p>层叠上下文，是HTML中的一个三维概念，当一个元素中包含有多个元素，且这些元素都在同一个坐标位置上，这就称之为层叠上下文。</p><h2 id="什么是层叠等级" tabindex="-1">什么是层叠等级 <a class="header-anchor" href="#什么是层叠等级" aria-hidden="true">#</a></h2><p>也称层叠级别、层叠水平</p><p>指的是同一个层叠上下文中，当前层叠元素在<strong>Z轴</strong>的上下顺序，而在普通元素上，描述普通元素在<strong>Z轴</strong>上的上下顺序</p><p>这里要解释下，为什么要区别普通元素的层叠上下文中的元素，因为普通元素的层叠等级优先级由层叠上下文决定，因此，层叠登记的比较只有在当前层叠上下文元素中才有意义</p><p>::: warn</p><p>需要注意的是，需要把层叠登记和CSS的z-index混乱了，z-index是可以影响层叠水平，前提是元素必须是定位元素/flex子元素，而层叠等级是只有元素都存在的</p><p>:::</p><h2 id="什么是层叠顺序" tabindex="-1">什么是层叠顺序 <a class="header-anchor" href="#什么是层叠顺序" aria-hidden="true">#</a></h2><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/20230222113514.png" alt="20230222113514"> 当元素发生层叠时，层叠顺序会遵循图中的顺序显示。</p><p>需要注意的是 inline/inline-block元素的层叠顺序是要高于block和float元素的 z-index属性是auto/0时，它们是在同一个层级的，此时就遵循先来后到准则</p><blockquote><p>inline元素比block和float元素要高是有原因的，通常inline元素（p标签，span标签这些都是inline元素）都是用来渲染文字内容的，而文字是一个页面中最重要的内容之一，当发生层叠关系时，文字当然要在前面让用户优先看到。</p></blockquote><h3 id="层叠准则" tabindex="-1">层叠准则 <a class="header-anchor" href="#层叠准则" aria-hidden="true">#</a></h3><p>层叠领域的覆盖关系主要遵循以下两条</p><ul><li>z-index较大的一方覆盖小的</li><li>层叠水平和顺序一致时，在DOM中处于后面的元素会覆盖前面的元素</li></ul><h2 id="产生层叠上下文" tabindex="-1">产生层叠上下文 <a class="header-anchor" href="#产生层叠上下文" aria-hidden="true">#</a></h2><p>在产生层叠上下文的前提需要一些特定的CSS属性创建，一般有3种方法</p><ul><li>HTML元素是根层叠上下文</li><li>普通元素需要设置非static值并且设定z-index数值才能产生层叠上下文</li><li>使用Css3中的新属性也可以产生层叠上下文</li></ul><p>例如下面这个例子，通过元素的先后顺序，产生了元素层叠上下文</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">b</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">pink</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">70px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">70px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">c</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">130px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">130px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="preview" tabindex="-1">preview <a class="header-anchor" href="#preview" aria-hidden="true">#</a></h3><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/20230222112706.png" alt="20230222112706"></p><p>在修改一下，把<code>b</code>元素的的<code>zIndex</code>属性修改下比其他元素要高。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">b</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">pink</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">70px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">70px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>可以看到，<code>zIndex</code>属性影响到了其他层叠上下文元素。</p><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/20230222113249.png" alt="20230222113249"></p><h2 id="css3属性对层叠上下文影响" tabindex="-1">Css3属性对层叠上下文影响 <a class="header-anchor" href="#css3属性对层叠上下文影响" aria-hidden="true">#</a></h2><p>TODO</p>`,30),e=[o];function t(c,r,D,F,i,y){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};
