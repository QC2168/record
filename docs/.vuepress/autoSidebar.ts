import fs from 'fs'
export default function getChildren(path, link) {
    var allFile = fs.readdirSync(path);
    // 获取文件名
    allFile = allFile.filter(i => i.includes('.md'))
    return allFile.map(fileName => ({
        title: fileName.slice(0, -3),
        path: `/${link}/${fileName.slice(0, -3)}`,
    }))// 过滤readme文件，否则会出错无法渲染出列表
    .filter(i=>i.title!=='readme')
}