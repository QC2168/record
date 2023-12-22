import{_ as l,o as i,c as o,R as t}from"./chunks/framework.sdpcv3_n.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"log/NPM版本区别.md","filePath":"log/NPM版本区别.md"}'),r={name:"log/NPM版本区别.md"},n=t('<h2 id="npm版本区别" tabindex="-1">NPM版本区别 <a class="header-anchor" href="#npm版本区别" aria-label="Permalink to &quot;NPM版本区别&quot;">​</a></h2><p><strong>语义化版本控制（Semantic Versioning）图解指南关键点：</strong></p><ol><li><p><strong>引言：</strong></p><ul><li>语义版本控制用于管理依赖关系，确保模块化软件开发中的平滑更新。</li><li>强调遵循版本规则的重要性，以避免意外行为。</li></ul></li><li><p><strong>松散的依赖关系：</strong></p><ul><li>允许使用最新版本的模块而无需手动更新的松散依赖是常见的。</li><li>语义版本控制有助于有效管理这些依赖关系。</li></ul></li><li><p><strong>通过Joe解释语义版本控制：</strong></p><ul><li><p><strong>补丁更新（例如，Joe Shmoe 1.0.1）：</strong></p><ul><li>可互换的更新，包括内部修复（错误修复、性能改进）。</li><li>向后兼容，鼓励消费者毫不犹豫地进行更新。</li></ul></li><li><p><strong>次要更新（例如，Joe Shmoe 1.1.0）：</strong></p><ul><li>向后兼容的更新，包括新功能或宣告过时的元素。</li><li>消费者可以自由升级，不会发生任何故障。</li></ul></li><li><p><strong>主要更新（例如，Joe Shmoe 2.0.0）：</strong></p><ul><li>不兼容的更新，对API进行了破坏性更改。</li><li>消费者在更新后需要进行广泛测试，并可能需要迁移文档。</li></ul></li></ul></li><li><p><strong>扩展：</strong></p><ul><li><p><strong>预发布版本：</strong></p><ul><li>Alpha、Beta等版本被视为不稳定，不遵循版本规定。</li><li>发布候选版本表示正在考虑发布的版本。</li></ul></li><li><p><strong>构建编号：</strong></p><ul><li>构建版本是具有可工作代码的内部版本发布。</li><li>构建元数据包括时间戳或后续数字，不影响版本的先后关系。</li></ul></li></ul></li><li><p><strong>何时不更新：</strong></p><ul><li>不需要因可读性或文档修复、私有变量/方法重命名或技术约定性的更改而进行版本更新。</li></ul></li><li><p><strong>例外情况：</strong></p><ul><li>在版本1.0.0以下不能保证公共API的稳定性。</li></ul></li><li><p><strong>标记和支持旧版本：</strong></p><ul><li>标记对支持旧版本进行修补很有用。</li><li>标签名称对应于发布编号，便于返回并发布旧版本的修补程序。</li></ul></li><li><p><strong>关于可读性或文档修复的建议：</strong></p><ul><li>仅用于维护者或指导如何更好使用程序的更改不会触发版本更新。</li></ul></li><li><p><strong>公共API稳定性：</strong></p><ul><li>在版本1.0.0以下不应认为公共API是稳定的。</li></ul></li><li><p><strong>资源：</strong></p><ul><li>参考语义版本控制库和网站以获取更多信息。</li></ul></li></ol><blockquote><p>文章地址：<a href="https://medium.com/fiverr-engineering/major-minor-patch-a5298e2e1798" target="_blank" rel="noreferrer">Major.Minor.Patch</a></p></blockquote>',4),e=[n];function s(p,a,g,u,_,c){return i(),o("div",null,e)}const d=l(r,[["render",s]]);export{h as __pageData,d as default};
