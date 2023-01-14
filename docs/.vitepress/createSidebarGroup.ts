import * as fs from 'node:fs';
import { join } from 'node:path';

function getTitle(content: string): string | null {
  let mdTitle = content.match(/(?<=title:\s).+/gm);
  if (mdTitle === null) return 'mdTitle';
  return mdTitle[1];
}

function getTag(content: string, index?: number): string | string[] | null {
  let tags = content.match(/(?<=tags:\s\[).+?(?=\])/gm);
  if (tags === null) return tags;
  if (!index || index > tags.length) {
    return tags;
  }
  return tags[0].split(',')[index];
}

export function scanMdToCreateSidebarGroup(
  scope: string,
  path: string,
  pure = false,
  suffix: null | string
) {
  const result: any = [];
  const temp: any = [];
  let allFile = fs.readdirSync(path);
  for (const name of allFile) {
    let info = fs.statSync(join(path, name));
    if (info.isDirectory()) {
      result.push({
        text: name,
        items: scanMdToCreateSidebarGroup(join(scope, name)
          .replace('\\', '/'), join(path, name), true, suffix),
      });
    } else if (info.isFile() && /\.md$/.test(name)) {
      temp.push({
        text: name.slice(0, -3),
        link: suffix ? `/${scope}/${name.replace(/\.md/, suffix)}` : `/${scope}/${name}`,
      });
    }
  }
  return pure ? temp : result;
}
