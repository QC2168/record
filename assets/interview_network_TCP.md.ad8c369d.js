import{_ as e,o as a,c as i,a as t}from"./app.28cccbd3.js";const N=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"TCP","slug":"tcp","link":"#tcp","children":[{"level":3,"title":"为什么需要三次握手","slug":"为什么需要三次握手","link":"#为什么需要三次握手","children":[]},{"level":3,"title":"ISN是固定的么","slug":"isn是固定的么","link":"#isn是固定的么","children":[]},{"level":3,"title":"为什么握手不能是两次","slug":"为什么握手不能是两次","link":"#为什么握手不能是两次","children":[]},{"level":3,"title":"三次握手的时候可以携带数据吗","slug":"三次握手的时候可以携带数据吗","link":"#三次握手的时候可以携带数据吗","children":[]},{"level":3,"title":"洪泛攻击","slug":"洪泛攻击","link":"#洪泛攻击","children":[]},{"level":3,"title":"为什么需要四次挥手","slug":"为什么需要四次挥手","link":"#为什么需要四次挥手","children":[]}]}],"relativePath":"interview/network/TCP.md"}'),l={name:"interview/network/TCP.md"},r=t('<h2 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-hidden="true">#</a></h2><h3 id="为什么需要三次握手" tabindex="-1">为什么需要三次握手 <a class="header-anchor" href="#为什么需要三次握手" aria-hidden="true">#</a></h3><p><strong>通俗一点来讲：</strong></p><p>第一次握手是验证客户端可以正常发送信息</p><p>第二次握手是验证服务器端可以发送信息</p><p>第三次是客户端向服务器发送信息，确保双方可以正常通讯</p><p>目前是为了确定双方可以正常的接收信息和发送信息，避免其中一方出现了问题</p><p><strong>其实不止是为了确定双方是否可以正常通讯</strong></p><p>还可以利用数据包的选项来传输特殊信息，交换初始序列号ISN</p><ol><li>客户端发送一个SYN（SYN=1），和seq指定客户端的初始序列号seq=x（此时客户端处于synSend状态）</li><li>服务器端在接收到SYN之后，也发送一个自己SYN（SYN=1），并指定一个自己的初始序列号seq=y，同时会将客户端的SYN+1作为ACK回传，表示已经收到客户端的信息了（服务器进入synReced）</li><li>客户端收到服务器响应的SYN后，把服务器的SYN码+1作为ACK和seq=x+1回传给服务器端，表示收到服务器的SYN了，期望下一次收到的数据是seq=y+1</li><li>当服务器接收了ACK之后，双方都进入established状态，创建TCP链接</li></ol><h3 id="isn是固定的么" tabindex="-1">ISN是固定的么 <a class="header-anchor" href="#isn是固定的么" aria-hidden="true">#</a></h3><p>ISN是客户端和服务器端交互数据比较重要的功能之一，用户让对方知道接下来要接收数据时如何按序列号组织数据</p><p>ISN不是固定的，是自动选择的，每个连接都有不同的ISN</p><p>如果是固定的值，很容易被攻击者猜出来后续的确认码</p><blockquote><p>确定双方的是ACK码</p></blockquote><h3 id="为什么握手不能是两次" tabindex="-1">为什么握手不能是两次 <a class="header-anchor" href="#为什么握手不能是两次" aria-hidden="true">#</a></h3><p>如果只有两次握手，只能确定客户端有发送能力，服务器则有接收能力</p><p>需要有第三次握手，才能确保服务器端有发送能力和客户端有接收能力。</p><h3 id="三次握手的时候可以携带数据吗" tabindex="-1">三次握手的时候可以携带数据吗 <a class="header-anchor" href="#三次握手的时候可以携带数据吗" aria-hidden="true">#</a></h3><p>第1，2次绝不能携带数据，因为如果有人攻击服务器的话，服务器在接收数据的时候会花费更多时间来接收这些报文</p><p>第3次可以携带数据，因为双方都确定了发送、接收能力</p><h3 id="洪泛攻击" tabindex="-1">洪泛攻击 <a class="header-anchor" href="#洪泛攻击" aria-hidden="true">#</a></h3><p>SYN攻击指的是客户端在短时间内，伪造大量不存在的IP地址，向服务器发送SYN包</p><p>服务器收到之后，会回复确认包并等待客户端响应，但由于IP是不存在的，服务器会进行重发直到超时</p><p>这些伪造的SYN包会占用半连接队列，导致正常的SYN请求因为队列满而被移除，导致网络堵塞，系统瘫痪</p><h3 id="为什么需要四次挥手" tabindex="-1">为什么需要四次挥手 <a class="header-anchor" href="#为什么需要四次挥手" aria-hidden="true">#</a></h3><p>因为TCP都是双向（一发一收）的，必须通过四次数据传输才能让双方完全停止数据发送。</p>',27),n=[r];function s(d,h,p,c,o,_){return a(),i("div",null,n)}const u=e(l,[["render",s]]);export{N as __pageData,u as default};
