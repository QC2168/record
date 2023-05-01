import{_ as s,c as e,o as a,O as t}from"./chunks/framework.488fce0c.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/vitepress自动生成侧边栏vite插件.md"}'),l={name:"article/vitepress自动生成侧边栏vite插件.md"},p=t(`<h2 id="vite-plugin-vitepress-auto-sidebar" tabindex="-1">vite-plugin-vitepress-auto-sidebar <a class="header-anchor" href="#vite-plugin-vitepress-auto-sidebar" aria-label="Permalink to &quot;vite-plugin-vitepress-auto-sidebar&quot;">​</a></h2><h3 id="起因" tabindex="-1">起因 <a class="header-anchor" href="#起因" aria-label="Permalink to &quot;起因&quot;">​</a></h3><p>在前一段时间，我开始将个人博客站点的技术栈从<code>vuepress</code>迁移到了<code>vitepress</code>，迁移的过程还是挺简单的，而且体验效果提升不少，默认是主题也非常好看。</p><p>也就是您当前正在访问的这个版本 ~</p><p>但是其中遇到了个问题，就是<code>vitepress</code>官方目前是不支持侧边栏的生成，这让我有点烦恼，而<code>vuepress</code>是可以自动生成的</p><p>于是我就萌生了一个想法，我能不能写了一个<code>vitepress</code>插件，通过这个插件来帮我实现了侧边栏的生成呢</p><p>后面查了一下，目前官方并没有开放<code>vitepress</code>插件功能</p><p>想了一下，既然<code>vitepress</code>是基于<code>vite</code>的，那我写了个<code>vite</code>插件好了，所以就有了<code>vite-plugin-vitepress-auto-sidebar</code></p><h3 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h3><ul><li>自动创建侧边栏数据</li><li>实时监听文件变动更新侧边栏数据</li></ul><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite-plugin-vitepress-auto-sidebar</span></span></code></pre></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p>在<code>.vitepress/config.ts</code>文件中，追加插件即可。</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> AutoSidebar </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite-plugin-vitepress-auto-sidebar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">vite</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// add plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">AutoSidebar</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><ul><li><p>插件项目地址：<a href="https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar" target="_blank" rel="noreferrer">vite-plugin-vitepress-auto-sidebar</a></p></li><li><p>插件示例代码：<a href="https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar/tree/main/example" target="_blank" rel="noreferrer">example code</a></p></li></ul><div class="tip custom-block"><p class="custom-block-title">INFO</p><p>目前，插件还没有太多的功能，但已经有计划继续追加一些常用的功能上去</p><p>如果您使用过程中遇到了问题或者是有更好的建议，欢迎提issue或pr~ 😊😊</p></div>`,17),n=[p];function o(i,r,c,d,u,v){return a(),e("div",null,n)}const h=s(l,[["render",o]]);export{D as __pageData,h as default};
