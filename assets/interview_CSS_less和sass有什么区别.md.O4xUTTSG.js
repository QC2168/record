import{_ as s,o as e,c as a,R as d}from"./chunks/framework.sdpcv3_n.js";const k=JSON.parse('{"title":"less和sass有什么区别","description":"","frontmatter":{"title":"less和sass有什么区别","tags":["CSS"]},"headers":[],"relativePath":"interview/CSS/less和sass有什么区别.md","filePath":"interview/CSS/less和sass有什么区别.md"}'),o={name:"interview/CSS/less和sass有什么区别.md"},t=d(`<h2 id="less和scss有什么区别" tabindex="-1">less和scss有什么区别 <a class="header-anchor" href="#less和scss有什么区别" aria-label="Permalink to &quot;less和scss有什么区别&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>这里不会描述它们之间的详细用法</p></div><p>它们两者都是<code>CSS</code>预处理器，它们都在<code>CSS</code>的基础上，追加了动态语言的特性，诸如变量，继承，运算，循环等，在节省代码的同时，而增加了<code>CSS</code>代码的可读性。</p><blockquote><p>在浏览器中，只认识<code>CSS</code>文件，并不认识<code>less</code>、<code>sass</code>文件，所以需要有一个编译过程，将这些文件转成浏览器可读的<code>CSS</code>文件才能正常运行，例如<code>webpack</code>的<code>loader</code></p></blockquote><h2 id="不同之处" tabindex="-1">不同之处 <a class="header-anchor" href="#不同之处" aria-label="Permalink to &quot;不同之处&quot;">​</a></h2><table><thead><tr><th>类型</th><th><code>Sass</code></th><th><code>Less</code></th></tr></thead><tbody><tr><td>变量</td><td><code>$</code>开头</td><td><code>@</code>开头</td></tr><tr><td>文件后缀</td><td><code>.sass</code>、<code>.scss</code></td><td><code>.less</code></td></tr><tr><td>处理方式</td><td>服务端处理</td><td>客户端处理</td></tr><tr><td>实现不同</td><td><code>Ruby</code>、<code>dart</code>、<code>lib</code></td><td><code>JavaScript</code></td></tr></tbody></table><blockquote><p><code>Sass</code>3支持不用花括号，使用缩进（像<code>Python</code>，<code>stylus</code>也是这样的）</p></blockquote><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#box</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width: 100px;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  height: 100px;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#red;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">sass和scss的区别</p><ul><li>文件后缀名： <ul><li><code>sass</code>版本<code>3.0</code>之前为<code>.sass</code></li><li>版本<code>3.0</code>之后为.<code>scss</code>。</li></ul></li></ul></div><h2 id="补充下sass" tabindex="-1">补充下SASS <a class="header-anchor" href="#补充下sass" aria-label="Permalink to &quot;补充下SASS&quot;">​</a></h2><p><code>SASS</code>一共有三个版本，具体如下</p><h3 id="ruby-sass" tabindex="-1">ruby sass <a class="header-anchor" href="#ruby-sass" aria-label="Permalink to &quot;ruby sass&quot;">​</a></h3><p><code>sass</code>的第一个版本，但在<code>2019/3/26</code>已经停止了维护支持，因为前端<code>Node</code>无处不在，且<code>SASS</code>在性能上的需求已经超过了<code>RUby</code>的能力</p><h3 id="dart-sass" tabindex="-1">dart sass <a class="header-anchor" href="#dart-sass" aria-label="Permalink to &quot;dart sass&quot;">​</a></h3><p>后来，<code>SASS</code>团队使用了<code>DART</code>对<code>SASS</code>进行了重写，在这个版本中，它可以被编译成纯<code>JavaScript</code>文件，可以快速简单的集成到<code>Web</code>开发中</p><h3 id="lib-sass" tabindex="-1">lib sass <a class="header-anchor" href="#lib-sass" aria-label="Permalink to &quot;lib sass&quot;">​</a></h3><p><code>libSASS</code>是采用<code>C</code>/<code>C++</code>实现的，主要目的是简单、快速、易于集成</p>`,17),c=[t];function i(l,r,h,n,p,S){return e(),a("div",null,c)}const u=s(o,[["render",i]]);export{k as __pageData,u as default};
