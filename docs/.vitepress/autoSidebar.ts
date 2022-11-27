import fs from 'fs'
export default function getChildren(path:string, link:string) {
    let allFile = fs.readdirSync(path);
    // 获取文件名
    allFile = allFile.filter(i => i.includes('.md'))
    return allFile.map(fileName => ({
        text: fileName.slice(0, -3),
        link: `/${link}/${fileName.slice(0, -3)}`,
    }))// 过滤readme文件，否则会出错无法渲染出列表
    .filter(i=>i.text!=='readme')
}