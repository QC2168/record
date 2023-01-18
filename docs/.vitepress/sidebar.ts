import path, { join } from "node:path";
import { fstat, readdirSync, statSync } from "node:fs";
import c from "picocolors";
import glob from "glob";
import {
  closeSync,
  openSync,
  utimesSync,
  readFileSync,
  writeFileSync,
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

export function scan(targetPath: string, folder: string) {
  // through path scan and create sidebar a item
  let allNode = readdirSync(path.join(targetPath, folder));
  console.log(allNode);

  for (const fname of allNode) {
    if (statSync(path.join(targetPath, folder, fname)).isDirectory()) {
      // is directory
    } else {
      // file
      const text = fname.replace(/\.md$/, "")
      const item = {
        text,
        link: [folder,`${text}.html`].join('/'),
      };
      console.log(item);
    }
  }
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

    //         "sidebar": {
    //             "/article/": [
    //                 {
    //                     "text": "文章目录",
    //                     "items": [
    //                         {
    //                             "text": "迁移vitePress",
    //                             "link": "/article/迁移vitePress.md"
    //                         }
    //                     ]
    //                 }
    //             ],
    transform(source, id) {
      if (/\/@siteData/.test(id)) {
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
        console.log(allNode);

        scan(docsPath, "log");
        // 扫描docs下面文件夹，创建对应的sidebar组
        console.log(c.green("create sidebar..."));
        console.log(id);
      }
    },
  };
}
