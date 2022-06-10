import fs from 'fs'
import path from 'path'
export default function getChildren(path, link) {
    var allFile = fs.readdirSync(path);
    // 获取文件名
    allFile = allFile.filter(i => i.includes('.md'))
    // { title: "class", path: "/article/class" },
    // { title: 'class', path: '/article/class.md' },
    return allFile.map(fileName => ({
        title: fileName.split('.')[0],
        path: (link[link.length - 1] === '/' ? link : `${link}/`) +  fileName.split('.')[0],
    }))

}