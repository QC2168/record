import { closeSync, openSync, utimesSync } from "fs";
const configFile = "./config.ts";

function touch() {
  const time = new Date();

  try {
    utimesSync(configFile, time, time);
  } catch (err) {
    closeSync(openSync(configFile, "w"));
  }
}

export default function sidebarPlugin() {
  return {
    name: "sidebar",
    configResolved(config){
        console.log(config);
    },
    configureServer({ watcher }) {
      const fsWatcher = watcher.add("../log/**/*.md");

      fsWatcher.on("all", (event) => {
        if (event !== "change") {
          touch();
        }
      });
    },
  };
}
