module.exports = {
  rules: {
    // Header
    'header-max-length': [2, 'always', 200],
    // <type> 类型
    'type-enum': [
      2,
      'always',
      [
        'feat', // 增加新功能
        'fix', // 修复bug
        'style', // 代码样式修改
        'merge', // 合并分支
        'perfect', // 功能完善
        'docs', // 添加/修改文档
        'refactor', // 代码重构
        'test', // 单元测试
        'ci', // 持续继承
        'release', // 发布
        'deploy', // 部署
        'chore', // 更改配置文件
        'revert', // 版本回退
        'interview', // 面试题
        'article', // 文章
        'snippets', // 片段
        'log', // 记录
        'code', // 开源、代码、工具
      ],
    ],
    // <type> 不能为空
    'type-empty': [2, 'never'],
    // <type> 格式 小写
    'type-case': [2, 'always', 'camel-case'],
    // <scope> 可以为空
    'scope-empty': [0, 'always'],
    // <scope> 格式 小写
    'scope-case': [2, 'always', 'camel-case'],
    // <subject> 不能为空
    'subject-empty': [2, 'never'],
    // <subject> 以.为结束标志
    'subject-full-stop': [2, 'never', '.'],
    // <subject> 格式
    // 可选值
    // 'lower-case' 小写 lowercase
    // 'upper-case' 大写 UPPERCASE
    // 'camel-case' 小驼峰 camelCase
    // 'kebab-case' 短横线 kebab-case
    // 'pascal-case' 大驼峰 PascalCase
    // 'sentence-case' 首字母大写 Sentence case
    // 'snake-case' 下划线 snake_case
    // 'start-case' 所有首字母大写 start-case
    'subject-case': [2, 'never', []],
    // <body> 以空行开头
    'body-leading-blank': [1, 'always'],
    // <footer> 以空行开头
    'footer-leading-blank': [1, 'always'],
  },
};
