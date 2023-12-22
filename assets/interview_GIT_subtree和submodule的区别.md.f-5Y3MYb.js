import{_ as e,o,c as s,R as d}from"./chunks/framework.sdpcv3_n.js";const n=JSON.parse('{"title":"subtree和submodule的区别","description":"","frontmatter":{"title":"subtree和submodule的区别","tags":["GIT"]},"headers":[],"relativePath":"interview/GIT/subtree和submodule的区别.md","filePath":"interview/GIT/subtree和submodule的区别.md"}'),c={name:"interview/GIT/subtree和submodule的区别.md"},t=d('<h2 id="subtree和submodule的区别" tabindex="-1">subtree和submodule的区别 <a class="header-anchor" href="#subtree和submodule的区别" aria-label="Permalink to &quot;subtree和submodule的区别&quot;">​</a></h2><h3 id="subtree" tabindex="-1">subtree <a class="header-anchor" href="#subtree" aria-label="Permalink to &quot;subtree&quot;">​</a></h3><ul><li><code>subtree</code>目录是没有带<code>.git</code>文件夹的，因为它是直接把子项目的代码合并到父级仓库中的，所以它不是一个独立的仓库，而是一个子目录。编辑的时候，直接在父级仓库中编辑就可以了，不需要进入子项目中编辑</li><li>使用<code>subtree</code>会在创建目录时生成<code>commit</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>虽然，<code>subtree</code>的子项目没有了<code>.git</code>文件夹，但是还是可以使用<code>pull</code>和<code>push</code>命令的，需要借助<code>subtree</code>命令来操作<code>git subtree pull/push</code></p></div><div class="info custom-block"><p class="custom-block-title">subtree是怎么记录当前是否有新的commit记录</p><p>它是利用<code>git subtree add</code>的时候生成的<code>commit</code>，然后在这个<code>commit</code>中将这个记录有变动的文件/文件夹的<code>hash</code>记录下来，然后在<code>pull</code>和<code>push</code>的时候，会对比这个<code>hash</code>，如果不一样，就说明有新的<code>commit</code>，就会进行<code>pull</code>和<code>push</code>操作</p></div><h3 id="submodule" tabindex="-1">submodule <a class="header-anchor" href="#submodule" aria-label="Permalink to &quot;submodule&quot;">​</a></h3><ul><li>用于在一个项目中添加另外一个项目，会生成一个<code>.gitmodules</code>的文件，用来记录子项目的信息</li><li>父级仓库只会记录<code>submodules</code>中的<code>URL</code>和最新的<code>COMMIT</code>，而不会记录子项目的代码</li><li><code>submodule</code>和<code>submodule</code>之间可以嵌套，形成一个树状结构的<code>submodule</code></li><li><code>submodule</code>可以单独使用<code>pull</code>、<code>push</code>、<code>checkout</code>等命令</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在拉去含有<code>submodule</code>的项目时，可以使用<code>git clone --recurse-submodules</code>命令，这样就会将子项目的代码也一并拉取下来</p><p>这等价于</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recursive</span></span></code></pre></div></div><h3 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h3><ul><li><code>subtree</code>是将子项目的代码合并到父级仓库中，而<code>submodule</code>是将子项目的代码作为一个子目录存在于父级仓库中</li></ul>',10),l=[t];function i(u,a,r,b,h,p){return o(),s("div",null,l)}const k=e(c,[["render",i]]);export{n as __pageData,k as default};
