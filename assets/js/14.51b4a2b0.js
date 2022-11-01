(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{593:function(t,a,s){"use strict";s.r(a);var n=s(17),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("一起养成写作习惯！这是我参与「掘金日新计划 · 4 月更文挑战」的第7天，"),s("a",{attrs:{href:"https://juejin.cn/post/7080800226365145118",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看活动详情"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"问题描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),s("p",[t._v("给你二叉树的根节点 "),s("code",[t._v("root")]),t._v(" 和一个表示目标和的整数 "),s("code",[t._v("targetSum")]),t._v(" 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 "),s("code",[t._v("targetSum")]),t._v(" 。如果存在，返回 "),s("code",[t._v("true")]),t._v(" ；否则，返回 "),s("code",[t._v("false")]),t._v(" 。")]),t._v(" "),s("blockquote",[s("p",[t._v("叶子节点 是指没有子节点的节点。")])]),t._v(" "),s("h3",{attrs:{id:"解答栗子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解答栗子"}},[t._v("#")]),t._v(" 解答栗子")]),t._v(" "),s("h4",{attrs:{id:"栗子一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栗子一"}},[t._v("#")]),t._v(" 栗子一")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/QC2168/note-img/main/202204091813681.jpeg",alt:"img"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22\n输出：true\n解释：等于目标和的根节点到叶节点路径如上图所示。\n")])])]),s("h4",{attrs:{id:"栗子二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栗子二"}},[t._v("#")]),t._v(" 栗子二")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/QC2168/note-img/main/202204091814821.jpeg",alt:"img"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：root = [1,2,3], targetSum = 5\n输出：false\n解释：树中存在两条根节点到叶子节点的路径：\n(1 --\x3e 2): 和为 3\n(1 --\x3e 3): 和为 4\n不存在 sum = 5 的根节点到叶子节点的路径。\n")])])]),s("h4",{attrs:{id:"栗子三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栗子三"}},[t._v("#")]),t._v(" 栗子三")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：root = [], targetSum = 0\n输出：false\n解释：由于树是空的，所以不存在根节点到叶子节点的路径。\n")])])]),s("h3",{attrs:{id:"问题分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[t._v("#")]),t._v(" 问题分析")]),t._v(" "),s("p",[t._v("这一道我们可以使用递归的方式来进行解答，我们要从头节点的找它的左右节点，递归节点的左右两个子节点，每到一个子节点时将当前剩下的目标数值减去当前节点的值，直到叶节点的时候，如果目标节点和当前节点值一致时返回"),s("code",[t._v("true")]),t._v("，否则返回"),s("code",[t._v("false")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"编码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编码实现"}},[t._v("#")]),t._v(" 编码实现")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("hasPathSum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetSum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" targetSum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasPathSum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetSum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasPathSum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetSum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"跑一下代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跑一下代码"}},[t._v("#")]),t._v(" 跑一下代码")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/QC2168/note-img/main/202204091906809.png",alt:"image-20220409190638748"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);