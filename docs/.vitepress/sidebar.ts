import { join } from "node:path";
import { readdirSync, statSync } from "node:fs";
import c from "picocolors";

import { closeSync, openSync, utimesSync } from "fs";
import { type DefaultTheme } from "vitepress";

const configFile = "./config.ts";

function touch() {
  const time = new Date();

  try {
    utimesSync(configFile, time, time);
  } catch (err) {
    closeSync(openSync(configFile, "w"));
  }
}

export function createSideBarItems(
  targetPath: string,
  ...reset: string[]
): DefaultTheme.SidebarItem[] {
  let node = readdirSync(join(targetPath, ...reset));
  const result: DefaultTheme.SidebarItem[] = [];
  for (const fname of node) {
    if (statSync(join(targetPath, ...reset, fname)).isDirectory()) {
      // is directory
      result.push({
        text: fname,
        items: createSideBarItems(join(targetPath), ...reset, fname),
      });
    } else {
      // file
      const text = fname.replace(/\.md$/, "");
      const item: DefaultTheme.SidebarItem = {
        text,
        link: [...reset, `${text}.html`].join("/"),
      };
      result.push(item);
    }
  }
  return result;
}

export function createSideBarGroups(
  targetPath,
  folder
): DefaultTheme.SidebarGroup[] {
  return [
    {
      items: createSideBarItems(targetPath, folder),
    },
  ];
}

export function createSidebarMulti(
  path,
  ignoreList: string[] = []
): DefaultTheme.SidebarMulti {
  const data: DefaultTheme.SidebarMulti = {};
  let node = readdirSync(path).filter(
    (n) => statSync(join(path, n)).isDirectory() && !ignoreList.includes(n)
  );
  for (const k of node) {
    data[`/${k}/`] = createSideBarGroups(
      path,
      k
    ) as DefaultTheme.SidebarGroup[];
  }

  return data;
}
function insertStr(source, start, newStr) {
  return source.slice(0, start) + newStr + source.slice(start);
}
function injectSidebar(
  source: string,
  data: DefaultTheme.SidebarMulti | DefaultTheme.SidebarGroup[]
) {
  const themeConfigPosition = source.indexOf(
    "{",
    source.indexOf("themeConfig")
  );
  return insertStr(
    source,
    themeConfigPosition + 1,
    `"sidebar": ${JSON.stringify(data)},`.replaceAll('"', '\\"')
  );
}
interface SidebarPluginOptionType {
  ignoreList?: string[];
  path?: string;
}

export default function sidebarPlugin(
  option: SidebarPluginOptionType = {}
) {
  return {
    name: "sidebar",
    configureServer({ watcher }) {
      const fsWatcher = watcher.add("../log/**/*.md");

      fsWatcher.on("all", (event) => {
        if (event !== "change") {
          touch();
        }
      });
    },
    transform(source: string, id: string) {
      if (/\/@siteData/.test(id)) {
        console.log(c.bgGreen(" INFO "), c.green("Creating sidebar data"));
        const { ignoreList = [], path = "/docs" } = option;
        // 忽略扫描的文件
        const ignoreFolder = [
          "scripts",
          "components",
          "assets",
          ".vitepress",
          ...ignoreList,
        ];
        const docsPath = join(process.cwd(), path);
        // 创建侧边栏对象
        const data = createSidebarMulti(docsPath, ignoreFolder);
        // 插入数据
        const code = injectSidebar(source, data);
        console.log(
          c.bgGreen(" INFO "),
          c.green("The sidebar data was successfully injected")
        );
        return { code };
      }
    },
  };
}
