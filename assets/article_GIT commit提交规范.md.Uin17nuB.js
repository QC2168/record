import{_ as s,o as i,c as a,R as n}from"./chunks/framework.sdpcv3_n.js";const E=JSON.parse('{"title":"GIT commit提交规范","description":"","frontmatter":{"title":"GIT commit提交规范","tags":["other"]},"headers":[],"relativePath":"article/GIT commit提交规范.md","filePath":"article/GIT commit提交规范.md"}'),e={name:"article/GIT commit提交规范.md"},t=n(`<h1 id="git-commit提交规范" tabindex="-1">GIT commit提交规范 <a class="header-anchor" href="#git-commit提交规范" aria-label="Permalink to &quot;GIT commit提交规范&quot;">​</a></h1><p>阅读本文章你将收获到：</p><ul><li>什么是约定式提交</li><li><code>angular commit</code>规范</li><li>如何在项目中约束<code>commit message</code></li></ul><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在编写这一篇文章时，说明我已经意识到我的每一次<code>git commit</code>应该要有一个规范，明确表达我的每一次<code>commit</code>的目的，且在规范<code>log</code>的同时也有助于他人<code>review</code>，还能有效输出项目的<code>CHANGELOG.md</code>。</p><p>我们看下不太规范的<code>commit</code>，是不是感觉这种<code>commit</code>信息有点乱，且如果这种<code>commit</code>写得再乱一点可能其他人想从这里面的<code>commit</code>获取有效信息有点困难。</p><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/202202081429851.png" alt="image-20220208142940703"></p><p>我们可以看下<code>vue</code>、<code>react</code>这些主流的前端框架在<code>github</code>上的<code>commit message</code>，在每一条<code>commit</code>的前面都会有<code>chore</code>、<code>docs</code>、<code>fix</code>等字段，分别代表修改构建流程或者增加依赖包、修改文档、修复问题。通过这些前缀我们就能直接看出每次<code>commit</code>的类型。后面接上本次提交的描述，更清晰的表达本次修改的内容。</p><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/202202081420558.png" alt="image-20220208142007226"></p><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/202202081420714.png" alt="image-20220208142037549"></p><p>其实，它们都遵循了<code>conventional commits</code>（约定式提交）的一种提交规范，也是本文的主题。</p><h2 id="conventional-commits" tabindex="-1">Conventional Commits <a class="header-anchor" href="#conventional-commits" aria-label="Permalink to &quot;Conventional Commits&quot;">​</a></h2><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/202202081438535.png" alt="image-20220208143859217"></p><p><a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank" rel="noreferrer"><code>Conventional Commits</code></a>是一个提交格式规范，这个规范主要是当你在<code>commit</code>的时候，对我们的提交信息做一个格式规范约束，它提供了一组简单规则来创建清晰的提交历史，通过在提交信息中描述功能、修复、破坏性变更。</p><p>它的<code>message</code>格式如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;type&gt;[optional scope]: &lt;description&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[optional body]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[optional footer(s)]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 译</span></span>
<span class="line"><span>&lt;类型&gt;[可选 范围]: &lt;描述&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[可选 正文]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[可选 脚注]</span></span></code></pre></div><ul><li>它总共分为三个部分 <ul><li>标题行 描述修改的类型、简短的描述 （必填）</li><li>主题内容 描述修改的内容 （可选）</li><li>页脚注释 通常用于放<code>issues</code> （可选）</li></ul></li></ul><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/202202081506627.png" alt="image-20220208150623469"></p><h2 id="angular-commit规范" tabindex="-1">Angular Commit规范 <a class="header-anchor" href="#angular-commit规范" aria-label="Permalink to &quot;Angular Commit规范&quot;">​</a></h2><p>目前，我们用得最多的是<code>Angular</code>规范，同样遵循着<code>conventional commit</code>，可以说是它的一个衍生版本，<code>angular</code>规范的<code>message</code>格式是这样子的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"><span>&lt;BLANK LINE&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;BLANK LINE&gt;</span></span>
<span class="line"><span>&lt;footer&gt;</span></span></code></pre></div><ul><li><p>由以下部分构成</p><ul><li><p><code>type</code> （必选）</p><ul><li><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>feat</code></td><td>新增特性</td></tr><tr><td><code>fix</code></td><td>修复问题</td></tr><tr><td><code>docs</code></td><td>修改文档</td></tr><tr><td><code>style</code></td><td>修改代码格式（非CSS样式修改）</td></tr><tr><td><code>refactor</code></td><td>重构代码</td></tr><tr><td><code>perf</code></td><td>修改提高性能的代码</td></tr><tr><td><code>test</code></td><td>新增、修改测试用例</td></tr><tr><td><code>chore</code></td><td>修改构建流程,、依赖管理</td></tr></tbody></table></li></ul></li><li><p><code>scope</code></p><ul><li>本次<code>commit</code>的修改影响范围</li></ul></li><li><p><code>subject</code></p><ul><li>本次<code>commit</code>的描述信息</li></ul></li><li><p><code>body</code></p><ul><li>本次<code>commit</code>具体的修改内容</li></ul></li><li><p><code>footer</code></p><ul><li>页脚注释 通常用于放<code>issues</code></li></ul></li></ul></li></ul><h2 id="commitlint" tabindex="-1">commitlint <a class="header-anchor" href="#commitlint" aria-label="Permalink to &quot;commitlint&quot;">​</a></h2><p>接下来我们要认识一个新的工具叫<code>commitlint</code>，从它的命名我们就得知它是一个约束提交的工具库。</p><h2 id="安装commitlint" tabindex="-1">安装commitlint <a class="header-anchor" href="#安装commitlint" aria-label="Permalink to &quot;安装commitlint&quot;">​</a></h2><p>项目级安装<code>commitlint</code>和<code>husky</code>，<code>commlint</code>用于对<code>commit message</code>进行格式校验，<code>husky</code>则易用<code>git hook</code>。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/config-conventional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/config-conventional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span></span></code></pre></div><h2 id="配置commitlint" tabindex="-1">配置commitlint <a class="header-anchor" href="#配置commitlint" aria-label="Permalink to &quot;配置commitlint&quot;">​</a></h2><p>在项目根目录中新建一个<code>commitlint.config.js</code>文件，配置<code>commitlint</code>。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 校验angluar commit</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {extends: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@commitlint/config-conventional&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]};</span></span></code></pre></div><blockquote><p><code>commitlint</code>是规范<code>commit message</code>信息，不能约束其内容</p></blockquote><h2 id="激活hooks" tabindex="-1">激活hooks <a class="header-anchor" href="#激活hooks" aria-label="Permalink to &quot;激活hooks&quot;">​</a></h2><p>在终端执行以下命令，初始化<code>git hooks</code>的配置</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm exec husky install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// husky </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Git hooks installed</span></span></code></pre></div><p>执行上面的<code>pnpm exec husky install</code>命令之后，项目根目录会创建一个<code>.husky</code>文件夹（<code>husky hook</code>文件夹）。在这个文件夹中创建一个<code>commit-msg</code>文件，用于开发者在执行<code>commit</code>命令时进行<code>commitllint</code>校验。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// commit-msg</span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pnpm exec commitlint --edit $1</span></span></code></pre></div><p>现在，当你在<code>git commit</code>时，会触发到<code>commit-msg</code>这个<code>hooks</code>，执行<code>commitlint</code>进行<code>commit message</code>校验。当检验不通过时，则不能完成本次<code>commit</code>操作。</p><h2 id="commitizen" tabindex="-1">commitizen <a class="header-anchor" href="#commitizen" aria-label="Permalink to &quot;commitizen&quot;">​</a></h2><p>当我们约束了<code>commit message</code>之后，我们就必须符合它的提交规范才能正常完成提交，但每次提交必须一个一个字手打出来吗？</p><p>这时候，就要用到<code>commitizen</code>了，它是一个交互式创建提交信息的工具，用于规范化<code>git commit message</code>。可以一步一步根据我们的需求创建完整的提交信息。并且<strong>代替你平时使用的<code>git commit</code></strong>。</p><p>我们需要为<code>commitizen</code>提供一个适配器，使<code>commitizen</code>按我们指定的规范生成<code>commit message</code>，这里我们选择<code>cz-conventional-changelog</code>，也是<code>commitizen</code>首选适配器。</p><h2 id="安装commitizen" tabindex="-1">安装commitizen <a class="header-anchor" href="#安装commitizen" aria-label="Permalink to &quot;安装commitizen&quot;">​</a></h2><p>项目级安装<code>commitizen</code>、<code>cz-conventional-changelog</code>。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitizen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cz-conventional-changelog</span></span></code></pre></div><h2 id="配置commitizen" tabindex="-1">配置commitizen <a class="header-anchor" href="#配置commitizen" aria-label="Permalink to &quot;配置commitizen&quot;">​</a></h2><p>在项目根目录中创建一个<code>.czrc</code>文件（<code>commitizen</code>配置文件）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// .czrc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;path&quot;: &quot;cz-conventional-changelog&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>安装之后，你可以通过<code>pnpm exec cz</code>触发它，或者你在<code>package.json</code>中添加一个脚本。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// packages.json</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;commit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cz&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><p>执行<code>pnpm commit / pnpm exec cz</code>命令后，会显示一个交互式的命令行界面，你需要根据实际情况选择对应的选项，最终生成一个<code>commit message</code>并提交。可代替<code>git commit</code>。</p><h2 id="运行commit执行cz" tabindex="-1">运行commit执行cz <a class="header-anchor" href="#运行commit执行cz" aria-label="Permalink to &quot;运行commit执行cz&quot;">​</a></h2><p>也可以在开发者在终端执行<code>git commit</code>命令时调用<code>cz</code>，在项目根目录中的<code>.husky</code>目录下创建<code>prepare-commit-msg</code>文件，用于用户执行<code>commit</code>之前运行<code>cz</code>。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/tty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cz</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hook</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span></code></pre></div><h2 id="最终效果" tabindex="-1">最终效果 <a class="header-anchor" href="#最终效果" aria-label="Permalink to &quot;最终效果&quot;">​</a></h2><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E:\\project\\viteProjects\\hkzf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm commit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hkzf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts@0.0.0 commit E:\\project\\viteProjects\\hkzf</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cli@4.2.4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">conventional</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">changelog@3.2.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Select the type of change that you</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;re committing: feat:     A new feature</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">? What is the scope of this change (e.g. component or file name): (press enter to skip)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">? Write a short, imperative tense description of the change (max 94 chars):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> (6) 新增房屋筛选</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">? Provide a longer description of the change: (press enter to skip)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">? Are there any breaking changes? No</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">? Does this change affect any open issues? No</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[hooks-ts b0d5f2f] feat: 新增房屋筛选</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 17 files changed, 2988 insertions(+), 230 deletions(-)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create mode 100644 .czrc</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create mode 100644 .husky/commit-msg</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create mode 100644 commitlint.config.js</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> // ...</span></span></code></pre></div><p>本质上还是调用了<code>git commit</code>命令只不过是帮我们约束了<code>commit message</code>的格式再<code>commit</code>。我们也可以对<code>commitizen</code>的交互界面做出自定义配置，下面我们将交互界面的语言替换成简体中文版，更符合国人的使用。</p><h2 id="cz-customizable" tabindex="-1">cz-customizable <a class="header-anchor" href="#cz-customizable" aria-label="Permalink to &quot;cz-customizable&quot;">​</a></h2><p><code>cz-customizable</code>也是一个适配器，它可以帮助我们达到你想要的规范效果。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>项目级安装<code>cz-customizable</code>。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm add </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">customizable</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>在项目根目录创建<code>.cz-config.js</code>配置文件，为<code>cz-customizable</code>配置工作模式。官方也提供了一份参考的配置文件：<a href="https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js" target="_blank" rel="noreferrer"><code>cz-config-EXAMPLE.js</code></a>（参考），我们使用汉化版的配置文件。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .cz-config.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;use strict&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    types: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;feat&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,     name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;特性:    一个新的特性&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fix&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;修复:    修复一个Bug&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;docs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,     name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;文档:    变更的只有文档&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;style&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;格式:    空格, 分号等格式修复&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;refactor&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;重构:    代码重构，注意和特性、修复区分开&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;perf&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,     name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;性能:    提升性能&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,     name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;测试:    添加一个测试&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;build&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,     name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;构建:    影响构建系统或外部依赖项的更改&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ci&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,     name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ci:    更改为我们的CI配置文件和脚本&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    messages: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;选择一种你的提交类型:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        scope: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;选择一个scope (可选):&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // used if allowCustomScopes is true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        customScope: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;模块名称:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        subject: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;短描述:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        body: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;长描述，使用&quot;|&quot;换行(可选)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        breaking: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;非兼容性说明 (可选):</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        footer: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;关联关闭的issue，例如：#1, #2(可选):</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        confirmCommit: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;确定提交?&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    allowCustomScopes: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    allowBreakingChanges: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;feat&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fix&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    subjectLimit: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>在项目根目录中的<code>.czrc</code>文件中，将目标适配器修改成<code>cz-customizable</code>即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;path&quot;: &quot;cz-customizable&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="效果" tabindex="-1">效果 <a class="header-anchor" href="#效果" aria-label="Permalink to &quot;效果&quot;">​</a></h2><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/202202092149184.png" alt="image-20220209214905892"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>本文简单介绍了约定式提交，并引入了当前项目中使用最多的<code>angular</code>团队的规范。并将这个规范约束带到项目中应用。<code>commit message</code>规范是非常重要的，约束得每一次<code>commit</code>的格式。</p>`,70),l=[t];function p(h,c,o,k,d,r){return i(),a("div",null,l)}const m=s(e,[["render",p]]);export{E as __pageData,m as default};
