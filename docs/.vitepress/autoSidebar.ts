import { DefaultTheme } from "vitepress/theme";
import fs from "node:fs";
import path from "node:path";
export default function getChildren(path: string, link: string) {
  let allFile = fs.readdirSync(path);
  // 获取文件名
  allFile = allFile.filter((i) => i.includes(".md"));
  return allFile
    .map((fileName) => ({
      text: fileName.slice(0, -3),
      link: `/${link}/${fileName.slice(0, -3)}`,
    })) // 过滤readme文件，否则会出错无法渲染出列表
    .filter((i) => i.text !== "readme");
}

export function autoTagChildren(scope: string, spath: string) {
  // 读取每个文件收集第一个tag
  let allFile = fs.readdirSync(spath).filter((i) => i.includes(".md"));
  const bucket = new Map();
  for (let fileName of allFile) {
    let content = fs.readFileSync(path.join(spath, fileName)).toString();

    let paramsStr = content.match(/(?<=tags:\s\[).+?(?=\])/gm);
    // 匹配不到数据时进入下一次
    if (paramsStr === null) continue;
    let params = paramsStr[0].split(",")[0];
    if (bucket.has(params)) {
      let menu = bucket.get(params);
      menu.push({
        text: fileName.slice(0, -3),
        link: `/${scope}/${fileName.slice(0, -3)}`,
      });
    } else {
      bucket.set(params, [
        {
          text: fileName.slice(0, -3),
          link: `/${scope}/${fileName.slice(0, -3)}`,
        },
      ]);
    }
  }
  //   将数据导出
  let obj: any = [];
  for (let text of bucket.keys()) {
    let temp = {
      text,
      items: bucket.get(text),
    };
    obj.push(temp);
  }
  return obj;
}