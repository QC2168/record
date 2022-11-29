import{_ as s,c as a,o as n,a as l}from"./app.879b5266.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u95EE\u9898\u63CF\u8FF0","slug":"\u95EE\u9898\u63CF\u8FF0","link":"#\u95EE\u9898\u63CF\u8FF0","children":[]},{"level":2,"title":"\u89E3\u7B54\u6817\u5B50","slug":"\u89E3\u7B54\u6817\u5B50","link":"#\u89E3\u7B54\u6817\u5B50","children":[]},{"level":2,"title":"\u6817\u5B50\u4E00","slug":"\u6817\u5B50\u4E00","link":"#\u6817\u5B50\u4E00","children":[]},{"level":2,"title":"\u6817\u5B50\u4E8C","slug":"\u6817\u5B50\u4E8C","link":"#\u6817\u5B50\u4E8C","children":[]},{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF","link":"#\u601D\u8DEF","children":[]},{"level":2,"title":"\u95EE\u9898\u5206\u6790","slug":"\u95EE\u9898\u5206\u6790","link":"#\u95EE\u9898\u5206\u6790","children":[]},{"level":2,"title":"\u7F16\u7801\u5B9E\u73B0","slug":"\u7F16\u7801\u5B9E\u73B0","link":"#\u7F16\u7801\u5B9E\u73B0","children":[]},{"level":2,"title":"\u5199\u6CD5\u4E00","slug":"\u5199\u6CD5\u4E00","link":"#\u5199\u6CD5\u4E00","children":[]},{"level":2,"title":"\u8DD1\u4E00\u4E0B\u4EE3\u7801","slug":"\u8DD1\u4E00\u4E0B\u4EE3\u7801","link":"#\u8DD1\u4E00\u4E0B\u4EE3\u7801","children":[]},{"level":2,"title":"\u5199\u6CD5\u4E8C","slug":"\u5199\u6CD5\u4E8C","link":"#\u5199\u6CD5\u4E8C","children":[]},{"level":2,"title":"\u8DD1\u4E00\u4E0B\u4EE3\u7801","slug":"\u8DD1\u4E00\u4E0B\u4EE3\u7801-1","link":"#\u8DD1\u4E00\u4E0B\u4EE3\u7801-1","children":[]},{"level":2,"title":"\u5199\u6CD5\u4E09","slug":"\u5199\u6CD5\u4E09","link":"#\u5199\u6CD5\u4E09","children":[]},{"level":2,"title":"\u8DD1\u4E00\u4E0B\u4EE3\u7801","slug":"\u8DD1\u4E00\u4E0B\u4EE3\u7801-2","link":"#\u8DD1\u4E00\u4E0B\u4EE3\u7801-2","children":[]}],"relativePath":"algorithm/\u4E8C\u5206\u67E5\u627E.md"}'),p={name:"algorithm/\u4E8C\u5206\u67E5\u627E.md"},o=l(`<h2 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1">\u95EE\u9898\u63CF\u8FF0 <a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A <code>n</code> \u4E2A\u5143\u7D20\u6709\u5E8F\u7684\uFF08\u5347\u5E8F\uFF09\u6574\u578B\u6570\u7EC4 <code>nums</code> \u548C\u4E00\u4E2A\u76EE\u6807\u503C <code>target</code> \uFF0C\u5199\u4E00\u4E2A\u51FD\u6570\u641C\u7D22 <code>nums</code> \u4E2D\u7684 <code>target</code>\uFF0C\u5982\u679C\u76EE\u6807\u503C\u5B58\u5728\u8FD4\u56DE\u4E0B\u6807\uFF0C\u5426\u5219\u8FD4\u56DE <code>-1</code>\u3002</p><h2 id="\u89E3\u7B54\u6817\u5B50" tabindex="-1">\u89E3\u7B54\u6817\u5B50 <a class="header-anchor" href="#\u89E3\u7B54\u6817\u5B50" aria-hidden="true">#</a></h2><h2 id="\u6817\u5B50\u4E00" tabindex="-1">\u6817\u5B50\u4E00 <a class="header-anchor" href="#\u6817\u5B50\u4E00" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165: nums = [-1,0,3,5,9,12], target = 9</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA: 4</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA: 9 \u51FA\u73B0\u5728 nums \u4E2D\u5E76\u4E14\u4E0B\u6807\u4E3A 4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6817\u5B50\u4E8C" tabindex="-1">\u6817\u5B50\u4E8C <a class="header-anchor" href="#\u6817\u5B50\u4E8C" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165: nums = [-1,0,3,5,9,12], target = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA: -1</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA: 2 \u4E0D\u5B58\u5728 nums \u4E2D\u56E0\u6B64\u8FD4\u56DE -1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u6570\u7EC4\u5FC5\u987B\u662F\u4E00\u4E2A\u6709\u5E8F\u6570\u7EC4\uFF0C\u800C\u4E14\u8FD9\u4E2A\u6570\u7EC4\u4E2D\u4E0D\u80FD\u6709\u91CD\u590D\u5143\u7D20\u7684\u51FA\u73B0\u5426\u5219\u4F1A\u5BFC\u81F4\u4E0B\u6807\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\uFF0C\u8FD9\u4E9B\u662F\u4E8C\u5206\u67E5\u627E\u6CD5\u7684\u524D\u63D0\u6761\u4EF6</p><h2 id="\u95EE\u9898\u5206\u6790" tabindex="-1">\u95EE\u9898\u5206\u6790 <a class="header-anchor" href="#\u95EE\u9898\u5206\u6790" aria-hidden="true">#</a></h2><p>\u8BE5\u95EE\u9898\u53EF\u4EE5\u4F7F\u7528\u4E8C\u5206\u67E5\u627E\u7684\u65B9\u6848\u5C06\u4E00\u4E2A\u6570\u7EC4\u4E2D\u8FDB\u884C\u4E00\u4E2A\u4E2D\u95F4\u5207\u5272\u65B9\u6CD5\uFF0C\u6839\u636E\u4E2D\u70B9\u5143\u7D20\u7684\u6570\u503C\u5224\u65AD\u76EE\u6807\u5143\u7D20\u5728\u53F3\u8FB9\u8FD8\u662F\u5728\u5DE6\u8FB9\uFF0C\u5982\u679C\u4E0B\u6807\u4E2D\u70B9\u7684\u5143\u7D20\u6B63\u662F\u76EE\u6807\u5143\u7D20\uFF0C\u76F4\u63A5\u8FD4\u56DE\u5373\u53EF\uFF0C\u5426\u5219\u518D\u5206\u5272\u8FDB\u884C\u67E5\u627E\uFF0C\u56E0\u6B64\u4E8C\u5206\u67E5\u627E\u7684\u65F6\u95F4\u590D\u6742\u5EA6<code>O\uFF08logN\uFF09</code>\u3002</p><h2 id="\u7F16\u7801\u5B9E\u73B0" tabindex="-1">\u7F16\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u7F16\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h2><h2 id="\u5199\u6CD5\u4E00" tabindex="-1">\u5199\u6CD5\u4E00 <a class="header-anchor" href="#\u5199\u6CD5\u4E00" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> search </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8DD1\u4E00\u4E0B\u4EE3\u7801" tabindex="-1">\u8DD1\u4E00\u4E0B\u4EE3\u7801 <a class="header-anchor" href="#\u8DD1\u4E00\u4E0B\u4EE3\u7801" aria-hidden="true">#</a></h2><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/202204092135315.png" alt="image-20220409213558250"></p><h2 id="\u5199\u6CD5\u4E8C" tabindex="-1">\u5199\u6CD5\u4E8C <a class="header-anchor" href="#\u5199\u6CD5\u4E8C" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> search </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8DD1\u4E00\u4E0B\u4EE3\u7801-1" tabindex="-1">\u8DD1\u4E00\u4E0B\u4EE3\u7801 <a class="header-anchor" href="#\u8DD1\u4E00\u4E0B\u4EE3\u7801-1" aria-hidden="true">#</a></h2><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/202204092159512.png" alt="image-20220409215923456"></p><h2 id="\u5199\u6CD5\u4E09" tabindex="-1">\u5199\u6CD5\u4E09 <a class="header-anchor" href="#\u5199\u6CD5\u4E09" aria-hidden="true">#</a></h2><p>\u4F60\u4E0D\u7528\u81EA\u5E26\u7684<code>API</code>\u561B\uFF1F \u72D7\u5934\u54C8\u54C8</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> search </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findIndex</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8DD1\u4E00\u4E0B\u4EE3\u7801-2" tabindex="-1">\u8DD1\u4E00\u4E0B\u4EE3\u7801 <a class="header-anchor" href="#\u8DD1\u4E00\u4E0B\u4EE3\u7801-2" aria-hidden="true">#</a></h2><p><img src="https://raw.githubusercontent.com/QC2168/note-img/main/202204092142601.png" alt="image-20220409214239550"></p>`,25),e=[o];function t(c,r,F,y,D,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
