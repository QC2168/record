import{_ as s,o as e,c as a,R as i}from"./chunks/framework.sdpcv3_n.js";const g=JSON.parse('{"title":"记录一次开发utools插件依赖丢失问题","description":"","frontmatter":{"title":"记录一次开发utools插件依赖丢失问题","tags":["JavaScript","HTML","electron","utools"]},"headers":[],"relativePath":"article/记录一次开发utools插件依赖丢失问题.md","filePath":"article/记录一次开发utools插件依赖丢失问题.md"}'),o={name:"article/记录一次开发utools插件依赖丢失问题.md"},t=i(`<h2 id="记录一次开发utools插件依赖丢失问题" tabindex="-1">记录一次开发utools插件依赖丢失问题 <a class="header-anchor" href="#记录一次开发utools插件依赖丢失问题" aria-label="Permalink to &quot;记录一次开发utools插件依赖丢失问题&quot;">​</a></h2><p>事情是这样子的，我打开我的插件评论页面时，突然看到一条评论</p><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/20231101150024.png" alt="20231101150024"></p><blockquote><p>正常情况下应该是当屏幕捕获完成之后，会弹出一个编辑窗口并且加载用户的屏幕截取区域</p><p>但现在是窗口弹出来了，图片数据并没有加载成功</p></blockquote><p>于是，我在我自己电脑上尝试复现这个问题</p><p>发现这个问题，只存在于生产环境，开发环境下载是没有问题的</p><p>但是问题又来了，我在生产环境下我应该如何去进行<code>debug</code>，寻找问题的源头？</p><p>因为在<code>utools</code>插件中，我不能像平时一样呼唤出<code>devTools</code>工具面板，也不能在<code>terminal</code>中查看相关的输出日志</p><h2 id="定位问题" tabindex="-1">定位问题 <a class="header-anchor" href="#定位问题" aria-label="Permalink to &quot;定位问题&quot;">​</a></h2><h3 id="翻阅commit" tabindex="-1">翻阅Commit <a class="header-anchor" href="#翻阅commit" aria-label="Permalink to &quot;翻阅Commit&quot;">​</a></h3><p>由于在线上无法使用<code>devTools</code>，我使用了一个笨办法来排查这个<code>Bug</code></p><p>我在我发布的这个版本的<code>commit</code>之前一条一条进行打包测试</p><p>经过条条测试，终于在某一条<code>commit</code>中，发现了这个问题</p><p>我大海捞针的开始翻阅这些变动的文件...</p><h3 id="debug-app" tabindex="-1">Debug App <a class="header-anchor" href="#debug-app" aria-label="Permalink to &quot;Debug App&quot;">​</a></h3><p>我开始向社区寻求帮助</p><h3 id="eruda" tabindex="-1">eruda <a class="header-anchor" href="#eruda" aria-label="Permalink to &quot;eruda&quot;">​</a></h3><blockquote><p><code>eruda</code>是一个用于在移动网页上进行前端开发和调试的轻量级工具，提供控制台、网络请求监控、元素查看、性能分析等功能</p></blockquote><p>尝试了使用<code>eruda</code>工具进行排查</p><p>你猜怎么着，遇到了类似的问题</p><p>当我在开发环境下，<code>eruda</code>是可以正常使用的，但是到了生产环境无法正常显示出<code>eruda</code>的控制按钮</p><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/20231102162741.png" alt="20231102162741"></p><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/20231102162448.png" alt="20231102162448"></p><h3 id="debugtron" tabindex="-1">debugtron <a class="header-anchor" href="#debugtron" aria-label="Permalink to &quot;debugtron&quot;">​</a></h3><blockquote><p><code>debugtron</code>是一个用于调试生产环境的electron应用工具</p></blockquote><p>突然，社群里的出现了一位大佬，让我使用<code>debugtron</code>进行调试看看是出现了什么问题</p><p>于是，下载了最新版本的<code>debugtron</code>，进行调试</p><p>不出意外的话，就出意外了~</p><p>我使用debugtron进行调试utools的时候，出现了闪退的情况</p><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/debug-utools-failed.gif" alt="debug-utools-failed"></p><p>经过和大佬一番交流，得知<code>debugtron</code>调试，是在启动应用的时候添加上命令行参数触发<code>debug</code>功能的，而<code>utools</code>内部可能阻止的进程调试方面的功能导致我们无法使用<code>debugtron</code>进行调试</p><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/20231102135933.png" alt="20231102135933"></p><p>感谢大佬，还帮我<code>patch</code>了一个调试<code>utools</code>的版本</p><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/20231102152925.png" alt="20231102152925"></p><p>我又进行了跑一遍插件，这次终于找到问题的源头了</p><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/20231102160833.png" alt="20231102160833"></p><p>原来问题出在项目里的<code>preload.js</code>中，我使用了第三方的依赖库(<code>fs-extra</code>)，在打包成插件的时候没有将它打包进去所导致的</p><p>而开发环境中，代码是在项目<code>/dist</code>文件夹里，是可以直接访问到<code>node_modules</code>文件夹里的依赖包的，所以在跑的时候没有出现问题</p><h3 id="关于patch版本" tabindex="-1">关于Patch版本 <a class="header-anchor" href="#关于patch版本" aria-label="Permalink to &quot;关于Patch版本&quot;">​</a></h3><p>后面和大佬交流后，原来是启动<code>electron</code>应用的时候，可以添加上相应的<code>debug</code>参数，使应用呼出<code>devTools</code>面板，在生产环境中也能调试应用</p><p>而这个版本改动了启用应用的代码，将<code>inspect</code>参数取消</p><blockquote><p>不过这会导致我们无法对主线程进行调试，但是问题也不大，因为我们是要调试插件（子窗口的数据）渲染进程</p></blockquote><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/20231102133301.png" alt="20231102133301"></p><p>这是<code>debugtron</code>项目中的源码，代码位置在<a href="https://github.com/pd4d10/debugtron/blob/main/src/main/actions.ts#L53" target="_blank" rel="noreferrer">main/src/main/actions.ts</a></p><h3 id="解决问题" tabindex="-1">解决问题 <a class="header-anchor" href="#解决问题" aria-label="Permalink to &quot;解决问题&quot;">​</a></h3><p>现在已经得知是<code>preload.js</code>中没有依赖包所导致的错误，我们可以使用构建工具将<code>preload.js</code>中所需的依赖打包进<code>preload.js</code>即可</p><p>这里我选中了<code>rollup</code>作为打包工具，安装它和一些相关插件</p><blockquote><p>也可以直接将第三方库的<code>min.js</code>移动到项目里，但是这样子做的话，后续增加依赖会比较麻烦些</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rollup/plugin-commonjs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rollup/plugin-node-resolve</span></span></code></pre></div><p>在项目根目录中，新建<code>rollup.config.mjs</code>文件，作为<code>rollup</code>的配置文件</p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { nodeResolve } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@rollup/plugin-node-resolve&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> commonjs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@rollup/plugin-commonjs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  input: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./electron/preload.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    file: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./dist/electron/preload.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cjs&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nodeResolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">commonjs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  external:[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;electron&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>这段代码的功能是将项目中的<code>electron/preload.js</code>文件进行一个打包操作，在打包的时候将我们所引用的依赖库也同时打包进去</p><p>在这里，我们不要把<code>electron</code>也打包进去，因为它到时要使用到的是<code>utools</code>中的<code>electron</code>，所以我们用<code>external</code>字段将它排除</p><p>修改后，当我们要构建插件的时候，需要多跑一下<code>rollup</code>指令进行处理</p><p>经过打包后的<code>preload.js</code>，依赖丢失的问题也就解决了😊</p>`,55),p=[t];function n(l,d,c,r,h,k){return e(),a("div",null,p)}const m=s(o,[["render",n]]);export{g as __pageData,m as default};
