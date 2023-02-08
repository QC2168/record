import{_ as a,o as s,c as n,a as e}from"./app.06edf763.js";const C=JSON.parse('{"title":"isNaN和Number.isNaN的区别","description":"","frontmatter":{"title":"isNaN和Number.isNaN的区别","tags":["JavaScript"]},"headers":[{"level":2,"title":"isNaN和Number.isNaN的区别","slug":"isnan和number-isnan的区别","link":"#isnan和number-isnan的区别","children":[{"level":3,"title":"关于NaN","slug":"关于nan","link":"#关于nan","children":[]}]}],"relativePath":"interview/JavaScript/isNaN和Number.isNaN的区别.md"}'),l={name:"interview/JavaScript/isNaN和Number.isNaN的区别.md"},i=e(`<h2 id="isnan和number-isnan的区别" tabindex="-1">isNaN和Number.isNaN的区别 <a class="header-anchor" href="#isnan和number-isnan的区别" aria-hidden="true">#</a></h2><ul><li><code>isNaN</code>会将传入的值转换为数值，如果不能被转换就返回<code>true</code>，反之返回false</li><li><code>Number.isNaN</code>会先判断是否为数字类型，如果是继续判断，否则直接返回<code>false</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">isNaN(&#39;1&#39;)； // false</span></span>
<span class="line"><span style="color:#A6ACCD;">Number.isNaN(&#39;1&#39;)； // false</span></span>
<span class="line"><span style="color:#A6ACCD;">isNaN(NaN)； // true</span></span>
<span class="line"><span style="color:#A6ACCD;">Number.isNaN(NaN)； // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="关于nan" tabindex="-1">关于NaN <a class="header-anchor" href="#关于nan" aria-hidden="true">#</a></h3><p>NaN是一个警戒值，代表在进行数字类型中运算失败时返回的结果</p><p>它也不等于自身</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div>`,7),t=[i];function p(o,c,r,N,d,u){return s(),n("div",null,t)}const y=a(l,[["render",p]]);export{C as __pageData,y as default};
