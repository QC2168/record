// 创建目录
const { scanMdToCreateSidebarGroup } = require('../.vitepress/createSidebarGroup.js');

const path = require('path');
const fs = require('fs');

const interviewNav = scanMdToCreateSidebarGroup(
  'interview',
  path.join(__dirname, '../interview'),
  false,
  '.html',
);

const articleNav = scanMdToCreateSidebarGroup(
  'log',
  path.join(__dirname, '../article'),
  true,
  '.html',
);

const logNav = scanMdToCreateSidebarGroup(
  'log',
  path.join(__dirname, '../log'),
  true,
  '.html',
);
const result = {
  interviewNav,
  articleNav,
  logNav,
};

fs.writeFile('./nav.json', JSON.stringify(result), err => {
  if (err != null) {
    console.log('写入失败');
    return;
  }
  console.log('文件内容写入成功');
});
