### 基于adb+Node.js的手机备份小工具

### 前言

随着科技的发展我们日常中拍摄的图片和视频清晰度不断提升，但这也有一个较大的缺点那就是他们的体积也越来越大。还记得以前刚开始使用智能手机的时候那会一张照片只不过才`2-5MB`，而现在一张照片已经达到了`15-20MB`，甚至更大。

![](https://raw.githubusercontent.com/QC2168/note-img/main/202204101535127.png)

而我们手机上的存储空间是有限的，我们怎么把这些照片和视频备份起来，好让手机腾出空间来呢？

于是，在刚开始我是将这些数据都存放在了某相册云端上，虽然解决了存放这些数据的问题，但是也冒出了新的问题，例如上传大小约束、需要一直占后台导致耗电增加、广告。

后面我干脆不使用了，自己撸了一个脚本用于备份这些数据，于是就有了这一篇文章。

我使用了`Node.js`和`adb`制作了这一个脚本，并命名为`MIB`

### 原理

这个小工具是利用手机上的`adb`调试，通过`shell`命令读取手机中的文件信息和复制，移动手机中的文件实现的。

### 执行流程

我画了一个简易流程图，`MIB`首先会从读取配置文件（没有则创建配文件），根据配置文件读取需要备份的节点路径并进行文件备份操作。直到节点结束。

<img src="https://raw.githubusercontent.com/QC2168/note-img/main/202204092358542.png" alt="image-20220409235830477" style="zoom: 40%;" />

### 开发过程

#### 安装所需环境

1. 下载`adb`包，用于执行各种设备操作
2. 下载`Node.js`，这个我相信兄弟们的电脑上都已经有了
3. 安装依赖库
   - `fs-extra`：基于`fs`模块二次封装的`Node`库
   - `prompts`：命令行上交互的`Node`库
   - `winston`：用于记录脚本日志的`Node`库

> 由于项目源码有点过多，我这里只放主要的代码部分
>
> 有兴趣的小伙伴可以去`github`上看项目源码 https://github.com/QC2168/mib

#### 读取配置文件

```typescript
export const getConfig = (): ConfigType => {
  if (existConf()) {
    return readJsonSync(CONFIG_PATH);
  }
  // 找不到配置文件
  return createDefaultConfig();
};
```

在执行脚本时，选择需要备份的设备`ID`。并指定执行`adb`命令时的设备

```typescript
(async () => {
  const device: string | boolean = await selectDevice();
  if (device) MIB();
})();

export const selectDevice = async ():Promise<string|false> => {
  // 获取设备
  const list: devicesType[] = devices();

  if (list.length === 0) {
    log("当前无设备连接，请连接后再执行该工具", "warn");
    return false;
  }

  const result = list.map((i) => ({ title: i.name, value: i.name }));

  const { value } = await prompts({
    type: "select",
    name: "value",
    message: "please select your device",
    choices: result,
  });
  currentDeviceName = value;
  return currentDeviceName;
};
```

#### 遍历备份节点

选择设备之后，进入遍历节点信息，并执行拷贝文件到指定路径（配置文件中的`output`属性）

```typescript
const MIB = () => {
  // 获取配置文件
  const { backups, output } = getConfig();
  // 判断备份节点是否为空
  if (backups.length === 0) {
    log("当前备份节点为空", "warn");
    log("请在配置文件中添加备份节点", "warn");
  }
  if (backups.length > 0) {
    isPath(output);
    // 解析备份路径最后一个文件夹
    backups.forEach((item: SaveItemType) => {
      log(`当前执行备份任务:${item.comment}`);
      const arr = item.path.split("/").filter((i: string) => i !== "");
      const folderName = arr.at(-1);
      const backupDir = pathRepair(item.path);
      // 备份目录
      // 判断节点内是否有备份目录  // 拼接导出路径
      const rootPath = pathRepair(pathRepair(output) + folderName);
      const outputDir = item.output
        ? item.output && pathRepair(item.output)
        : rootPath;
      // 判断备份路径是否存在
      if (!isPathAdb(backupDir)) {
        log(`备份路径:${backupDir} 不存在已跳过`, "error");
      } else {
        // 判断导出路径
        isPath(outputDir);
        backup(backupDir, outputDir, item.full);
      }
    });
  }
  log("程序结束");
};


// 细化需要备份的文件，进入备份队列中
const backup = (target: string, output: string, full: boolean = false) => {
  if (!full) {
    // 备份非备份的文件数据
    // 获取手机中的文件信息,对比本地
    const { backupQueue } = initData(target, output);
    // 计算体积和数量
    computeBackupSize(backupQueue);
    // 执行备份程序
    move(backupQueue, output);
  } else {
    // 不文件对比，直接备份
    moveFolder(target, output);
  }
};


// 移动待备份文件队列中的文件
const move = (backupQueue: FileNodeType[], outputDir: string): void => {
  if (backupQueue.length === 0) {
    log("无需备份");
    return;
  }
  for (const fileN of backupQueue) {
    log(`正在备份${fileN.fileName}`);
    try {
      const out: string = execAdb(
        `pull "${fileN.filePath}" "${outputDir + fileN.fileName}"`,
      );
      const speed: string | null = out.match(speedReg) !== null ? out.match(speedReg)![0] : "读取速度失败";
      log(`平均传输速度${speed}`);
    } catch (e: any) {
      log(`备份${fileN.fileName}失败 error:${e.message}`, "error");
    }
  }
};
```

### 脚本功能

- [x] `USB`连接备份数据
- [x] 无线连接备份数据
- [x] 多设备备份选择
- [x] 单节点全量备份

### 使用

在终端中输入以下命令进行全局安装`mib`。

```bash
npm i @qc2168/mib -g
```

配置脚本文件

首次使用需要在用户目录下新建`.mibrc`文件，并设置对应的参数内容。

```json
{
    "backups": [
        {
            "path": "/sdcard/MIUI/sound_recorder/call_rec",
            "comment": "通话录音"
        },
        {
            "path": "/sdcard/DCIM/Camera",
            "comment": "本地相册"
        },
        {
            "path": "/sdcard/DCIM/Creative",
            "comment": "我的创作"
        },
        {
            "path": "/sdcard/Pictures/weixin",
            "comment": "微信相册"
        },
        {
            "path": "/sdcard/tencent/qq_images",
            "comment": "QQ相册"
        },
        {
            "path": "/sdcard/Pictures/知乎",
            "comment": "知乎"
        },
        {
            "path": "/sdcard/tieba",
            "comment": "贴吧"
        },
        {
            "path": "/sdcard/DCIM/Screenshots",
            "comment": "屏幕截屏"
        },
        {
            "path": "/sdcard/DCIM/screenrecorder",
            "comment": "屏幕录制"
        },
        {
            "path": "/sdcard/MIUI/sound_recorder",
            "comment": "录音"
        },
        {
            "path": "/sdcard/MIUI/sound_recorder/app_rec",
            "comment": "应用录音"
        }
    ],
    "output": "E:/backups/MI10PRO"
}
```

#### 执行备份

在控制台中，直接输入`mib`即可触发脚本，无需其他参数。

```bash
mib
```

控制台会根据配置文件并输出对应的信息。

```
2022-04-09 20:58:11 info 当前执行备份任务:屏幕录制
2022-04-09 20:58:11 info 备份数量1
2022-04-09 20:58:11 info 已获取数据24Mb
2022-04-09 20:58:11 info 备份体积24Mb
2022-04-09 20:58:11 info 正在备份Screenrecorder-2022-04-08-19-45-51-836.mp4
2022-04-09 20:58:12 info 平均传输速度27.7 MB/s
2022-04-09 20:58:12 info 当前执行备份任务:录音
2022-04-09 20:58:12 info 备份数量0
2022-04-09 20:58:12 info 备份体积0Mb
2022-04-09 20:58:12 info 无需备份
2022-04-09 20:58:13 info 程序结束
```

> 如果你想了解这个项目更多的项目，请前往项目代码：https://github.com/QC2168/mib

