import{_ as s,o as n,c as a,a as l}from"./app.2c1033c6.js";const h=JSON.parse('{"title":"伪元素和伪类的区别","description":"","frontmatter":{"title":"伪元素和伪类的区别","tags":["CSS"]},"headers":[{"level":2,"title":"伪元素和伪类的区别","slug":"伪元素和伪类的区别","link":"#伪元素和伪类的区别","children":[{"level":3,"title":"伪元素","slug":"伪元素","link":"#伪元素","children":[]},{"level":3,"title":"伪类","slug":"伪类","link":"#伪类","children":[]}]}],"relativePath":"interview/CSS/伪元素和伪类的区别.md"}'),e={name:"interview/CSS/伪元素和伪类的区别.md"},o=l(`<h2 id="伪元素和伪类的区别" tabindex="-1">伪元素和伪类的区别 <a class="header-anchor" href="#伪元素和伪类的区别" aria-hidden="true">#</a></h2><h3 id="伪元素" tabindex="-1">伪元素 <a class="header-anchor" href="#伪元素" aria-hidden="true">#</a></h3><p>在一个元素的前/后入一个额外的元素，这些元素并不会在HTML中生成，只在外部显示可见，也不能在源代码中找到它们。所以称之为伪元素。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">el</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">el</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我是伪元素</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h4 id="preview" tabindex="-1">preview <a class="header-anchor" href="#preview" aria-hidden="true">#</a></h4><div class="vp-raw"><iframe srcdoc="
&lt;body&gt;
    &lt;div class=&quot;box&quot;&gt;
        &lt;div class=&quot;el&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;style&gt;
    .box{
        border: 1px solid #eee;
        padding: 10px;
        border-radius: 10px;
        margin:10px 0;
    }
    .el:before{
        content:&quot;我是伪元素&quot;;
        color:red;
    }
&lt;/style&gt;">
&lt;p&gt;Your browser does not support iframes.&lt;/p&gt;
</iframe></div><h3 id="伪类" tabindex="-1">伪类 <a class="header-anchor" href="#伪类" aria-hidden="true">#</a></h3><p>将带有特殊效果的关键字添加到样式选择器中，例如常见的<code>hover</code>，<code>active</code>，<code>first-child</code>...</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">el</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="preview-1" tabindex="-1">preview <a class="header-anchor" href="#preview-1" aria-hidden="true">#</a></h4><div class="vp-raw"><iframe srcdoc="
&lt;body&gt;
    &lt;div class=&quot;box&quot;&gt;
        &lt;div class=&quot;el2&quot;&gt;鼠标移到这里试试&lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;style&gt;
    .box{
        border: 1px solid #eee;
        padding: 10px;
        border-radius: 10px;
        margin:10px 0;
    }
    .el2:hover{
        color:red;
    }
&lt;/style&gt;">
&lt;p&gt;Your browser does not support iframes.&lt;/p&gt;
</iframe></div>`,11),t=[o];function p(r,c,i,d,D,F){return n(),a("div",null,t)}const g=s(e,[["render",p]]);export{h as __pageData,g as default};
