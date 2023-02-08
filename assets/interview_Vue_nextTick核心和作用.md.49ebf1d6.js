import{_ as e,o as t,c,a}from"./app.48448da3.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"nextTick核心和作用","slug":"nexttick核心和作用","link":"#nexttick核心和作用","children":[{"level":3,"title":"核心","slug":"核心","link":"#核心","children":[]},{"level":3,"title":"作用","slug":"作用","link":"#作用","children":[]}]}],"relativePath":"interview/Vue/nextTick核心和作用.md"}'),i={name:"interview/Vue/nextTick核心和作用.md"},o=a('<h2 id="nexttick核心和作用" tabindex="-1">nextTick核心和作用 <a class="header-anchor" href="#nexttick核心和作用" aria-hidden="true">#</a></h2><h3 id="核心" tabindex="-1">核心 <a class="header-anchor" href="#核心" aria-hidden="true">#</a></h3><p>利用了<code>JavaScript</code>的事件循环线程去异步操作</p><p>将用户传入的函数注册到异步任务队列中执行</p><h3 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-hidden="true">#</a></h3><p>由于<code>Vue</code>在更新<code>DOM</code>的时候是异步任务，只要监听到数据变化时，<code>Vue</code>就会开启一个队列将这些数据变更推送到队列中，如果同一个<code>watcher</code>频繁触发，只会推入到队列中一次，避免重复操作<code>DOM</code>和计算，起到性能优化。</p><p>上面说了，<code>Vue</code>在更新<code>DOM</code>时是异步的，所以我们不能直接拿到更新之后的数据，而是需要等待<code>DOM</code>在异步任务中更新完毕后才能拿到最新的数据，这时就需要通过<code>nextTick</code>拿到最新的数据。</p><blockquote><p>在Vue中，异步队列会使用原生的Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替</p></blockquote>',8),d=[o];function n(r,s,_,l,h,p){return t(),c("div",null,d)}const x=e(i,[["render",n]]);export{k as __pageData,x as default};
