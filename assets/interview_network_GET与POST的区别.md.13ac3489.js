import{_ as t,c as e,o as a,O as r}from"./chunks/framework.488fce0c.js";const d=JSON.parse('{"title":"GET与POST的区别","description":"","frontmatter":{"title":"GET与POST的区别","tags":["network"]},"headers":[],"relativePath":"interview/network/GET与POST的区别.md"}'),i={name:"interview/network/GET与POST的区别.md"},o=r('<h2 id="get与post的区别" tabindex="-1">GET与POST的区别 <a class="header-anchor" href="#get与post的区别" aria-label="Permalink to &quot;GET与POST的区别&quot;">​</a></h2><ul><li>GET是明文传输，POST是加密传输</li><li>GET一般是获取服务器的资源，POST可以发出一些更改数据请求</li><li>GET请求的参数只能是ASCII字符（这个说法来自<a href="https://www.ietf.org/rfc/rfc1738.txt" target="_blank" rel="noreferrer">rfc1738</a>），POST对数据类型没有要求，也允许二进制数据</li><li>GET请求携带数据会有url长度限制，POST请求可以放请求体里不会有限制</li><li>GET请求会被浏览器历史记录缓存下来，POST的参数不会被保存，安全性相对较高</li></ul><h3 id="用get还是post" tabindex="-1">用GET还是POST <a class="header-anchor" href="#用get还是post" aria-label="Permalink to &quot;用GET还是POST&quot;">​</a></h3><ul><li><p>提交用户信息使用POST</p></li><li><p>查询数据或者是分享链接使用GET</p></li></ul>',4),l=[o];function T(_,n,s,c,S,p){return a(),e("div",null,l)}const h=t(i,[["render",T]]);export{d as __pageData,h as default};
