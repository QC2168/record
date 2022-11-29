import{_ as s,c as n,o as a,a as l}from"./app.879b5266.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E24\u6570\u4E4B\u548C","slug":"\u4E24\u6570\u4E4B\u548C","link":"#\u4E24\u6570\u4E4B\u548C","children":[]},{"level":2,"title":"\u95EE\u9898\u63CF\u8FF0","slug":"\u95EE\u9898\u63CF\u8FF0","link":"#\u95EE\u9898\u63CF\u8FF0","children":[]},{"level":2,"title":"\u89E3\u7B54\u6817\u5B50","slug":"\u89E3\u7B54\u6817\u5B50","link":"#\u89E3\u7B54\u6817\u5B50","children":[]},{"level":2,"title":"\u6817\u5B50\u4E00","slug":"\u6817\u5B50\u4E00","link":"#\u6817\u5B50\u4E00","children":[]},{"level":2,"title":"\u6817\u5B50\u4E8C","slug":"\u6817\u5B50\u4E8C","link":"#\u6817\u5B50\u4E8C","children":[]},{"level":2,"title":"\u6817\u5B50\u4E09","slug":"\u6817\u5B50\u4E09","link":"#\u6817\u5B50\u4E09","children":[]},{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF","link":"#\u601D\u8DEF","children":[]},{"level":2,"title":"\u7F16\u7801\u5B9E\u73B0","slug":"\u7F16\u7801\u5B9E\u73B0","link":"#\u7F16\u7801\u5B9E\u73B0","children":[]},{"level":2,"title":"\u67E5\u627E\u8868\u6CD5","slug":"\u67E5\u627E\u8868\u6CD5","link":"#\u67E5\u627E\u8868\u6CD5","children":[]},{"level":2,"title":"\u8DD1\u4E00\u4E0B\u4EE3\u7801","slug":"\u8DD1\u4E00\u4E0B\u4EE3\u7801","link":"#\u8DD1\u4E00\u4E0B\u4EE3\u7801","children":[]},{"level":2,"title":"\u66B4\u529B\u6CD5","slug":"\u66B4\u529B\u6CD5","link":"#\u66B4\u529B\u6CD5","children":[]},{"level":2,"title":"\u8DD1\u4E00\u4E0B\u4EE3\u7801","slug":"\u8DD1\u4E00\u4E0B\u4EE3\u7801-1","link":"#\u8DD1\u4E00\u4E0B\u4EE3\u7801-1","children":[]}],"relativePath":"algorithm/\u4E24\u6570\u4E4B\u548C.md"}'),p={name:"algorithm/\u4E24\u6570\u4E4B\u548C.md"},o=l(`<h2 id="\u4E24\u6570\u4E4B\u548C" tabindex="-1">\u4E24\u6570\u4E4B\u548C <a class="header-anchor" href="#\u4E24\u6570\u4E4B\u548C" aria-hidden="true">#</a></h2><h2 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1">\u95EE\u9898\u63CF\u8FF0 <a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 <code>nums</code> \u548C\u4E00\u4E2A\u6574\u6570\u76EE\u6807\u503C <code>target</code>\uFF0C\u8BF7\u4F60\u5728\u8BE5\u6570\u7EC4\u4E2D\u627E\u51FA \u548C\u4E3A\u76EE\u6807\u503C <code>target</code> \u7684\u90A3 \u4E24\u4E2A \u6574\u6570\uFF0C\u5E76\u8FD4\u56DE\u5B83\u4EEC\u7684\u6570\u7EC4\u4E0B\u6807\u3002</p><p>\u4F60\u53EF\u4EE5\u5047\u8BBE\u6BCF\u79CD\u8F93\u5165\u53EA\u4F1A\u5BF9\u5E94\u4E00\u4E2A\u7B54\u6848\u3002\u4F46\u662F\uFF0C\u6570\u7EC4\u4E2D\u540C\u4E00\u4E2A\u5143\u7D20\u5728\u7B54\u6848\u91CC\u4E0D\u80FD\u91CD\u590D\u51FA\u73B0\u3002</p><p>\u4F60\u53EF\u4EE5\u6309\u4EFB\u610F\u987A\u5E8F\u8FD4\u56DE\u7B54\u6848\u3002</p><h2 id="\u89E3\u7B54\u6817\u5B50" tabindex="-1">\u89E3\u7B54\u6817\u5B50 <a class="header-anchor" href="#\u89E3\u7B54\u6817\u5B50" aria-hidden="true">#</a></h2><h2 id="\u6817\u5B50\u4E00" tabindex="-1">\u6817\u5B50\u4E00 <a class="header-anchor" href="#\u6817\u5B50\u4E00" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Anums = [2,7,11,15], target = 9</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A[0,1]</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA\uFF1A\u56E0\u4E3A nums[0] + nums[1] == 9 \uFF0C\u8FD4\u56DE [0, 1] \u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6817\u5B50\u4E8C" tabindex="-1">\u6817\u5B50\u4E8C <a class="header-anchor" href="#\u6817\u5B50\u4E8C" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Anums = [3,2,4], target = 6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A[1,2]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6817\u5B50\u4E09" tabindex="-1">\u6817\u5B50\u4E09 <a class="header-anchor" href="#\u6817\u5B50\u4E09" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Anums = [3,3], target = 6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A[0,1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u8FD9\u9053\u9898\u53EF\u4EE5\u901A\u8FC7\u8868\u67E5\u627E\u65B9\u6CD5\u6765\u8FDB\u884C\u89E3\u7B54\uFF0C\u5C06\u5F53\u524D\u904D\u5386\u7684\u5143\u7D20\u653E\u5165\u5230\u4E00\u4E2A<code>Map</code>\u4E2D\uFF0C<code>key</code>\u4E3A\u8FD9\u4E2A\u5143\u7D20\u7684\u503C\uFF0C<code>value</code>\u4E3A\u8FD9\u4E2A\u5143\u7D20\u5BF9\u5E94\u7684\u4E0B\u6807\u503C\uFF0C\u5F53\u7B2C\u4E00\u4E2A\u904D\u5386\u65F6Map\u4E2D\u662F\u6CA1\u6709\u5143\u7D20\u7684\uFF0C\u6B64\u65F6\u628A\u7B2C\u4E00\u4E2A\u5143\u7D20\u63A8\u5165<code>Map</code>\u4E2D\uFF0C\u5230\u4E86\u7B2C\u4E8C\u4E2A\u5143\u7D20\u5C06\u76EE\u6807\u503C\uFF08<code>target</code>\uFF09\u51CF\u53BB\u5F53\u524D\u5143\u7D20\u7684\u503C\u5F97\u51FA\u6765\u7684\u7ED3\u679C\u53BB\u67E5\u8BE2<code>Map</code>\u4E2D\u7684<code>key</code>\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u5B58\u5728\u8FD4\u56DE<code>Map</code>\u4E2D\u5BF9\u5E94\u7684\u503C\u548C\u5F53\u524D\u5143\u7D20\u7684\u4E0B\u6807\u503C\u5373\u662F\u6211\u4EEC\u60F3\u8981\u7684\u7ED3\u679C\u3002\u5426\u5219\u7EE7\u7EED\u904D\u5386\u540E\u7EED\u7684\u5143\u7D20\uFF0C\u76F4\u5230\u7B26\u5408\u6761\u4EF6\u4E3A\u6B62\u3002\u8FD9\u6837\u5B50\u7684\u89E3\u6CD5\u53EF\u4EE5\u5C06\u590D\u6742\u5EA6\u964D\u5230<code>O\uFF081\uFF09</code>\u3002</p><h2 id="\u7F16\u7801\u5B9E\u73B0" tabindex="-1">\u7F16\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u7F16\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h2><h2 id="\u67E5\u627E\u8868\u6CD5" tabindex="-1">\u67E5\u627E\u8868\u6CD5 <a class="header-anchor" href="#\u67E5\u627E\u8868\u6CD5" aria-hidden="true">#</a></h2><p>\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO\uFF081\uFF09</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">twoSum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">:{</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}={}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">table</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">table</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">table</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]]</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">i</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">twoSum</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">26</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">twoSum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">map</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">as</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8DD1\u4E00\u4E0B\u4EE3\u7801" tabindex="-1">\u8DD1\u4E00\u4E0B\u4EE3\u7801 <a class="header-anchor" href="#\u8DD1\u4E00\u4E0B\u4EE3\u7801" aria-hidden="true">#</a></h2><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/202204142230525.png" alt="image-20220414223050194"></p><h2 id="\u66B4\u529B\u6CD5" tabindex="-1">\u66B4\u529B\u6CD5 <a class="header-anchor" href="#\u66B4\u529B\u6CD5" aria-hidden="true">#</a></h2><p>\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO\uFF08n2\uFF09</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">twoSum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">([</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8DD1\u4E00\u4E0B\u4EE3\u7801-1" tabindex="-1">\u8DD1\u4E00\u4E0B\u4EE3\u7801 <a class="header-anchor" href="#\u8DD1\u4E00\u4E0B\u4EE3\u7801-1" aria-hidden="true">#</a></h2><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/202204142231145.png" alt="image-20220414223136103"></p>`,26),e=[o];function t(c,r,F,y,D,C){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
