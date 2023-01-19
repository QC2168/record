import path, { join } from "node:path";
import { fstat, readdirSync, statSync } from "node:fs";
import c from "picocolors";

import {
  closeSync,
  openSync,
  utimesSync,
} from "fs";
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

export function scan(
  targetPath: string,
  folder: string,
  isChild = false
): DefaultTheme.SidebarGroup[] | DefaultTheme.SidebarItem[] {
  // through path scan and create sidebar a item
  let allNode = readdirSync(path.join(targetPath, folder));
  const result: DefaultTheme.SidebarItem[] = [];
  for (const fname of allNode) {
    if (statSync(path.join(targetPath, folder, fname)).isDirectory()) {
      // is directory
      result.push({
        text: fname,
        items: scan(
          path.join(targetPath, folder),
          fname,
          true
        ) as DefaultTheme.SidebarItem[],
      });
    } else {
      // file
      const text = fname.replace(/\.md$/, "");
      const item: DefaultTheme.SidebarItem = {
        text,
        link: [folder, `${text}.html`].join("/"),
      };
      result.push(item);
    }
  }
  return isChild
    ? result
    : [
        {
          items: result,
        },
      ];
}

function insertStr(source, start, newStr) {
  return source.slice(0, start) + newStr + source.slice(start);
}

interface SidebarPluginOptionType {
  ignoreList?: string[];
}

export default function sidebarPlugin(
  data: DefaultTheme.Sidebar | null = null,
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
    transform(source: string, id:string) {
      if (/\/@siteData/.test(id)) {
        console.log(c.bgGreen(" INFO "), c.green("Creating sidebar data"));
        const docsPath = path.join(process.cwd(), "/docs");
        const { ignoreList = [] } = option;
        const ignoreFolder = [
          "scripts",
          "components",
          "assets",
          ".vitepress",
          ...ignoreList,
        ];
        // get all folder in docs folder,ignore specify folder name
        let allNode = readdirSync(docsPath).filter(
          (n) =>
            statSync(path.join(docsPath, n)).isDirectory() &&
            !ignoreFolder.includes(n)
        );

        const sidebarData: DefaultTheme.SidebarMulti = {};
        for (const k of allNode) {
          sidebarData[`/${k}/`] = scan(
            docsPath,
            k
          ) as DefaultTheme.SidebarGroup[];
        }
        // 扫描docs下面文件夹，创建对应的sidebar组
        const themeConfigPosition = source.indexOf(
          "{",
          source.indexOf("themeConfig")
        );
        const code = insertStr(
          source,
          themeConfigPosition + 1,
          `"sidebar": ${JSON.stringify(sidebarData)},`.replaceAll(
            '"',
            '\\"'
          )
        );
        console.log(
          c.bgGreen(" INFO "),
          c.green("The sidebar data was successfully injected")
        );
        return { code };
      }
    },
  };
}
