import{_ as s,o as i,c as a,R as t}from"./chunks/framework.sdpcv3_n.js";const g=JSON.parse('{"title":"伪元素和伪类的区别","description":"","frontmatter":{"title":"伪元素和伪类的区别","tags":["CSS"]},"headers":[],"relativePath":"interview/CSS/伪元素和伪类的区别.md","filePath":"interview/CSS/伪元素和伪类的区别.md"}'),n={name:"interview/CSS/伪元素和伪类的区别.md"},e=t(`<h2 id="伪元素和伪类的区别" tabindex="-1">伪元素和伪类的区别 <a class="header-anchor" href="#伪元素和伪类的区别" aria-label="Permalink to &quot;伪元素和伪类的区别&quot;">​</a></h2><h3 id="伪元素" tabindex="-1">伪元素 <a class="header-anchor" href="#伪元素" aria-label="Permalink to &quot;伪元素&quot;">​</a></h3><p>在一个元素的前/后入一个额外的元素，这些元素并不会在HTML中生成，只在外部显示可见，也不能在源代码中找到它们。所以称之为伪元素。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;el&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    .el:before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;我是伪元素&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="preview" tabindex="-1">preview <a class="header-anchor" href="#preview" aria-label="Permalink to &quot;preview&quot;">​</a></h4><div class="vp-raw"><iframe srcdoc="
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
</iframe></div><h3 id="伪类" tabindex="-1">伪类 <a class="header-anchor" href="#伪类" aria-label="Permalink to &quot;伪类&quot;">​</a></h3><p>将带有特殊效果的关键字添加到样式选择器中，例如常见的<code>hover</code>，<code>active</code>，<code>first-child</code>...</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.el:hover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="preview-1" tabindex="-1">preview <a class="header-anchor" href="#preview-1" aria-label="Permalink to &quot;preview&quot;">​</a></h4><div class="vp-raw"><iframe srcdoc="
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
</iframe></div>`,11),l=[e];function h(p,r,d,k,o,E){return i(),a("div",null,l)}const y=s(n,[["render",h]]);export{g as __pageData,y as default};
