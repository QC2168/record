(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{649:function(v,t,_){"use strict";_.r(t);var a=_(17),e=Object(a.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h4",{attrs:{id:"浏览器的工作原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的工作原理"}},[v._v("#")]),v._v(" 浏览器的工作原理")]),v._v(" "),_("p",[v._v("在浏览器中"),_("code",[v._v("JavaScript")]),v._v("代码是如何执行的")]),v._v(" "),_("p",[_("code",[v._v("js")]),v._v("可以"),_("code",[v._v("node")]),v._v("里执行，里边有"),_("code",[v._v("v8")]),v._v("引擎")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/QC2168/note-img/main/202112222019125.png",alt:"image-20211222201942856"}})]),v._v(" "),_("ul",[_("li",[v._v("加载"),_("code",[v._v("html")]),v._v("文件（首先）\n"),_("ul",[_("li",[v._v("遇到"),_("code",[v._v("link")]),v._v("标签下载对应的"),_("code",[v._v("css")]),v._v("文件")]),v._v(" "),_("li",[v._v("遇到"),_("code",[v._v("script")]),v._v("标签下载对应的"),_("code",[v._v("css")]),v._v("文件")])])])]),v._v(" "),_("h4",{attrs:{id:"浏览器内核"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核"}},[v._v("#")]),v._v(" 浏览器内核")]),v._v(" "),_("p",[v._v("解析过程是经过浏览器内核处理")]),v._v(" "),_("p",[v._v("不同浏览器是不同的内核组成的，内核也是浏览器非常重要的组成部分")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("内核")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("Gecko")]),v._v(" "),_("td",[v._v("早期"),_("code",[v._v("Netscape")]),v._v("和"),_("code",[v._v("Mozilla FireFox")]),v._v("浏览器使用")])]),v._v(" "),_("tr",[_("td",[v._v("Trident")]),v._v(" "),_("td",[v._v("微软开发，"),_("code",[v._v("IE4-IE11")]),v._v("使用，"),_("code",[v._v("Edge")]),v._v("浏览器现使用"),_("code",[v._v("Blink")])])]),v._v(" "),_("tr",[_("td",[v._v("Webkit")]),v._v(" "),_("td",[v._v("苹果基于"),_("code",[v._v("KHTML")]),v._v("开发、开源，用于"),_("code",[v._v("Safari")]),v._v("，（"),_("code",[v._v("chrome")]),v._v("之前也在使用）")])]),v._v(" "),_("tr",[_("td",[v._v("Blink")]),v._v(" "),_("td",[v._v("是"),_("code",[v._v("Webkit")]),v._v("的一个分支，"),_("code",[v._v("Google")]),v._v("开发，目前应用于"),_("code",[v._v("Google Chrome")]),v._v("、"),_("code",[v._v("Edge")]),v._v("、"),_("code",[v._v("Opera")]),v._v("等")])])])]),v._v(" "),_("h5",{attrs:{id:"排版引擎"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#排版引擎"}},[v._v("#")]),v._v(" 排版引擎")]),v._v(" "),_("p",[_("code",[v._v("layout engine")])]),v._v(" "),_("p",[v._v("内核的另外一个叫法，也有称为浏览器引擎（"),_("code",[v._v("browser engine")]),v._v("），页面渲染引擎（"),_("code",[v._v("rendering engine")]),v._v("），样板引擎")]),v._v(" "),_("h4",{attrs:{id:"浏览器渲染过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程"}},[v._v("#")]),v._v(" 浏览器渲染过程")]),v._v(" "),_("p",[v._v("加载html文件时，遇到script标签之后，会停止解析HTML，去加载执行JavaScript代码")]),v._v(" "),_("p",[v._v("（JavaScript代码由js引擎处理）")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/QC2168/note-img/main/202112222033032.png",alt:"image-20211222203338833"}})]),v._v(" "),_("h4",{attrs:{id:"javascript引擎"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#javascript引擎"}},[v._v("#")]),v._v(" JavaScript引擎")]),v._v(" "),_("ul",[_("li",[v._v("JavaScript是高级语言，最终需要被转成机器指令来执行")]),v._v(" "),_("li",[v._v("我们编写的JavaScript代码无论是给浏览器 / Node执行，最后都是需要被CPU执行的")]),v._v(" "),_("li",[v._v("但CPU只认识自己的指令集，即机器语言，才能被CPU所执行")]),v._v(" "),_("li",[v._v("所以我们需要**"),_("code",[v._v("JavaScript")]),v._v("引擎"),_("strong",[v._v("把")]),_("code",[v._v("JavaScript")]),v._v("代码"),_("strong",[v._v("转化为")]),v._v("CPU指令**来执行")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/QC2168/note-img/main/202112222045233.png",alt:"image-20211222204535128"}})]),v._v(" "),_("p",[v._v("常见的JavaScript引擎")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("名称")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("SpiderMonkey")]),v._v(" "),_("td",[v._v("第一款JavaScript引擎，由Brendan Eich开发（也就是JavaScript作者）")])]),v._v(" "),_("tr",[_("td",[v._v("Chakra")]),v._v(" "),_("td",[v._v("微软开发，用于IE浏览器")])]),v._v(" "),_("tr",[_("td",[v._v("JavaScriptCore")]),v._v(" "),_("td",[v._v("Webkit中的js引擎，小程序中也用到了，apple开发")])]),v._v(" "),_("tr",[_("td",[v._v("V8")]),v._v(" "),_("td",[v._v("Google开发的，也帮助chrome从众多浏览器中脱颖而出")])])])]),v._v(" "),_("h4",{attrs:{id:"浏览器内核和javascript引擎的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核和javascript引擎的关系"}},[v._v("#")]),v._v(" 浏览器内核和JavaScript引擎的关系")]),v._v(" "),_("p",[v._v("（ 以webkit为例 ）")]),v._v(" "),_("p",[v._v("webCore负责HTML CSS解析、布局、渲染等工作")]),v._v(" "),_("p",[v._v("JavaScriptCore 解析、执行JavaScript代码")]),v._v(" "),_("h4",{attrs:{id:"v8引擎的原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v8引擎的原理"}},[v._v("#")]),v._v(" V8引擎的原理")]),v._v(" "),_("p",[v._v("V8是用C++开发的，是一个开源、高性能的JavaScript和WebAssembly引擎")]),v._v(" "),_("p",[v._v("可以在多个平台运行，Win系统，macOS，使用X64、IA-21，ARM或者MIPS处理器的linux系统上运行")]),v._v(" "),_("p",[v._v("V8使用得比较多的有Chrome和Node.js等")]),v._v(" "),_("p",[v._v("V8可以独立运行，嵌套到任何C++程序中")]),v._v(" "),_("h5",{attrs:{id:"v8引擎架构图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v8引擎架构图"}},[v._v("#")]),v._v(" V8引擎架构图")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/QC2168/note-img/main/202112222101126.png",alt:"image-20211222210135934"}})]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("const name = '张三'\n")])])]),_("p",[v._v("V8引擎中的Parse或者"),_("code",[v._v("PreParser")]),v._v("会对这行代码进行词法分析，会生成一个tokens（是一个数组），每个值是一个对象"),_("code",[v._v("tokens:[{type:'keyword',value:'const'},{type:'identidfier',value:'name'} ...]")])]),v._v(" "),_("p",[v._v("划分出不同的类型之后，再进行语法分析生成AST抽象语法树（www.astexplorer.net 推荐一个在线生成AST抽象语法树）之后，经过"),_("code",[v._v("ignition")]),v._v("（V8引擎中一个库）转为"),_("code",[v._v("bytecode")]),v._v("字节码，"),_("code",[v._v("V8")]),v._v("再将组字节码（字节码是跨平台的）转换为"),_("code",[v._v("CPU")]),v._v("的指令集")]),v._v(" "),_("p",[_("code",[v._v("TurboFan")]),v._v("库，收集函数执行的信息，会标签执行次数比较多的函数，并将这个函数优化成机器指令。（后续不再进行转换，提高性能）")]),v._v(" "),_("h5",{attrs:{id:"相关模块说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相关模块说明"}},[v._v("#")]),v._v(" 相关模块说明")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("Parse")]),v._v("是一个解析器会将"),_("code",[v._v("JavaScript")]),v._v("代码转成"),_("code",[v._v("AST")])]),v._v(" "),_("ul",[_("li",[v._v("如果函数没有被调用，那么是不会被转换成"),_("code",[v._v("AST")]),v._v("的")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("PerParse")]),v._v("预解析")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("不是所有JavaScript代码，在一开始就会被执行，如果对所有"),_("code",[v._v("JavaScript")]),v._v("代码进行解析，必然会影响页面运行效率")])]),v._v(" "),_("li",[_("p",[v._v("所以有了**"),_("code",[v._v("lazy Parsing")]),v._v("** 延迟解析方案，它的作用是将不必要的函数进行预解析，只解析暂时需要的代码，而对函数的全量解析是在函数被调用时才会进行")])]),v._v(" "),_("li",[_("p",[v._v("例如以下代码，对"),_("code",[v._v("f2")]),v._v("函数进行预解析处理")]),v._v(" "),_("div",{staticClass:"language-javascript extra-class"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("function")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("f1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n  "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("function")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("f2")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n    "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("var")]),v._v(" name"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),_("span",{pre:!0,attrs:{class:"token string"}},[v._v("'张三'")]),v._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("f1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n")])])])])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("Ignition")]),v._v("是一个解释器，会将"),_("code",[v._v("AST")]),v._v("转换成"),_("code",[v._v("ByteCode")]),v._v("字节码")]),v._v(" "),_("ul",[_("li",[v._v("同时会收集"),_("code",[v._v("TurboFan")]),v._v("优化所需要的信息（例如函数参数的类型信息，有了类型才能进行真实的运算）")]),v._v(" "),_("li",[v._v("如果函数只调用一次，Ignition会执行解析执行"),_("code",[v._v("byteCode")])])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("TurboFan")]),v._v("是一个编译器，可以将字节码编译为CPU可以直接执行的机器码")]),v._v(" "),_("ul",[_("li",[v._v("如果一个函数被多次调用，那么就会被标记为热点函数，并经过"),_("code",[v._v("TurboFan")]),v._v("转换成优化的机器码，提高代码的执行性能")]),v._v(" "),_("li",[v._v("后续如果执行函数过程中，类型发生了变化，之前优化的机器码不能正确处理，就会逆向转换为字节码")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);