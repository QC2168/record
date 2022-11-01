(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{631:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"如何获取node命令行中参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何获取node命令行中参数"}},[s._v("#")]),s._v(" 如何获取node命令行中参数")]),s._v(" "),a("p",[s._v("在开发"),a("code",[s._v("cli")]),s._v("工具时，往往离不开获取指令中各种参数信息，接下来本文将带着你如何在"),a("code",[s._v("Node.js")]),s._v("中获取执行时的参数")]),s._v(" "),a("h2",{attrs:{id:"认识process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认识process"}},[s._v("#")]),s._v(" 认识process")]),s._v(" "),a("p",[a("code",[s._v("process")]),s._v("是"),a("code",[s._v("nodejs")]),s._v("内置的一个对象，该对象提供了当前有关"),a("code",[s._v("nodejs")]),s._v("进程的信息。（例如获取当前进程id，执行平台等与当前执行进程相关的对象和方法）")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://nodejs.org/api/process.html#process",target:"_blank",rel:"noopener noreferrer"}},[s._v("node process文档"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"process-arg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-arg"}},[s._v("#")]),s._v(" process.arg")]),s._v(" "),a("p",[s._v("在该对象中，有一个"),a("code",[s._v("argv")]),s._v("属性，它可以获取当前"),a("code",[s._v("node")]),s._v("执行时传入各个参数数据。")]),s._v(" "),a("p",[s._v("我们创建一个"),a("code",[s._v("index.js")]),s._v("文件，先打印下"),a("code",[s._v("process.argv")]),s._v("里面是什么东西")]),s._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// node index.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'D:\\\\software\\\\nodejs\\\\node.exe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'D:\\\\project\\\\script\\\\src\\\\index.js'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("从上面的输出结果，可以得到当前执行的"),a("code",[s._v("node")]),s._v("程序路径(也就是"),a("code",[s._v("process.execPath")]),s._v("返回值)和执行的文件（"),a("code",[s._v("index.js")]),s._v("）路径，我们像使用其他"),a("code",[s._v("cli")]),s._v("工具一样添加一些参数试试")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" index.js "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zhangsan "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("age")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n")])])]),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'D:\\\\software\\\\nodejs\\\\node.exe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'D:\\\\project\\\\script\\\\src\\\\index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name=zhangsan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'age=18'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("可以看到我们传入的"),a("code",[s._v("name")]),s._v("参数与"),a("code",[s._v("age")]),s._v("参数也被获取到了")]),s._v(" "),a("blockquote",[a("p",[s._v("需要注意的是argv中的参数是通过空格来分割的")])]),s._v(" "),a("p",[s._v("通常，我们会在命令行每个参数前面添加"),a("code",[s._v("--")]),s._v("字符，用来识别传入的各个参数。（这种是"),a("code",[s._v("GNU")]),s._v("风格的命令行参数，以"),a("code",[s._v("--")]),s._v("开头，也是比较常见的）")]),s._v(" "),a("p",[s._v("例如在"),a("code",[s._v("esbuild")]),s._v("构建工具中")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("esbuild app.jsx --bundle --outfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("out.js\n")])])]),a("p",[s._v("例如在"),a("code",[s._v("vite")]),s._v("构建工具中")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("vite --config my-config.js\n")])])]),a("p",[s._v("除了上面的"),a("code",[s._v("GNU")]),s._v("风格，常见的还有"),a("code",[s._v("UNIX")]),s._v("风格，以"),a("code",[s._v("-")]),s._v("开头的，例如下面命令获取当前目录下文件，文件夹详情。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l\n")])])]),a("p",[s._v("你是不是会想到了最常用的"),a("code",[s._v("npm")]),s._v("了？\n没错，它即是使用"),a("code",[s._v("UNIX")]),s._v("风格")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm i -d esbuild\n")])])]),a("p",[s._v("继续我们步骤，修改一下上面的命令为")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" index.js --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zhangsan --age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n")])])]),a("p",[s._v("将会得到如下输出结果")]),s._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'D:\\\\software\\\\nodejs\\\\node.exe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'D:\\\\project\\\\script\\\\src\\\\index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--name=zhangsan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--age=18'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h2",{attrs:{id:"封装获取参数函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封装获取参数函数"}},[s._v("#")]),s._v(" 封装获取参数函数")]),s._v(" "),a("p",[s._v("从上面两个例子和官方文档中，我们可以得知argv的前两个参数都是固定的，在获取用户传入的参数我们需要"),a("code",[s._v("process.argv.slice(2)")]),s._v("一下,只获取从下标2开始的元素。\n也即是")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--name=zhangsan'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--age=18'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("有了这些数据之后，我们需要再进一步解构里面的参数，将前面的"),a("code",[s._v("--")]),s._v("去除掉，把"),a("code",[s._v("key=value")]),s._v("改变成"),a("code",[s._v("{key:value}")]),s._v("方便我们在开发中进行参数获取。\n最终我们得到了这样子的函数：")]),s._v(" "),a("ul",[a("li",[s._v("获"),a("code",[s._v("process.argv")]),s._v("数组，并切片从下标2开始")]),s._v(" "),a("li",[s._v("判断数组中的每个值是否为"),a("code",[s._v("--")]),s._v("开头，是则视为用户传入参数")]),s._v(" "),a("li",[s._v("同样进行切片操作，获取下标2开始的字符，再通过"),a("code",[s._v("=")]),s._v("区分出对应的"),a("code",[s._v("key")]),s._v("和"),a("code",[s._v("value")]),s._v("，其返回的是"),a("code",[s._v("[key,value]")])]),s._v(" "),a("li",[s._v("最后，将这个二维数组传入到"),a("code",[s._v("Object.fromEntries")]),s._v("转换为一个对象")])]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" arguments "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" params "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fromEntries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("startsWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { name: 'zhangsan', age: '18' }")]),s._v("\n")])])]),a("p",[s._v("当然，上面这个只是简单的获取参数的函数，也没有一些边界情况（例如出现"),a("code",[s._v("foo=bar=baz")]),s._v("参数等情况）。")]),s._v(" "),a("h3",{attrs:{id:"相关的解析库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关的解析库"}},[s._v("#")]),s._v(" 相关的解析库")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("github")]),s._v("上也有一些成熟的命令行参数解析库，感兴趣的同学也可以看看源码🍔🍔")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/lukeed/mri",target:"_blank",rel:"noopener noreferrer"}},[s._v("mri"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/yargs/yargs-parser",target:"_blank",rel:"noopener noreferrer"}},[s._v("yargs-parser"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/minimistjs/minimist",target:"_blank",rel:"noopener noreferrer"}},[s._v("minimist"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("😊 如果您觉得这一篇文章对您有所帮助，请点个👍 🌹🌹")])])}),[],!1,null,null,null);t.default=e.exports}}]);