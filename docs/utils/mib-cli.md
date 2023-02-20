## mib-cli

::: tip 关于图形化版本 让备份更加简单！

正在开发中，很快到来！

:::

### 介绍

这是一款基于`Node.js`开发的移动数据备份工具，根据用户配置文件自动将移动设备上的数据文件迁移备份至电脑上，支持增量备份。

### 核心

通过`Adb`与移动设备（`Android`）进行通讯，将数据拷贝一份到`PC`上，从而实现备份功能。

### 具体功能

- [x] 指定备份路径
- [x] 单独导出备份路径
- [x] 深层目录结构对比
- [x] 全量/增量备份选择
- [x] 多备份设备 

### 安装
```bash
npm install -g @qc2168/mib
```

### 常见问题
- 如何开启设备ADB
  - [在设备上启用 adb 调试](https://developer.android.com/studio/command-line/adb?hl=zh-cn#Enabling)
  - 建议在使用关闭之后，关闭该功能

### 配置文件

配置文件存放位置在用户目录下的`.mibrc`文件

> 自定义配置文件功能开发中 ~

#### 配置文件示例
```json
{
    "backups": [
        {
            "path": "/sdcard/DCIM/Camera/",
            "comment": "本地相册"
        },
        {
            "path": "/sdcard/DCIM/Screenshots/",
            "comment": "屏幕截屏"
        },
        {
            "path": "/sdcard/MIUI/sound_recorder/",
            "comment": "录音"
        },
        {
            "path": "/sdcard/MIUI/sound_recorder/app_rec/",
            "comment": "应用录音"
        },
        {
            "path": "/sdcard/MIUI/sound_recorder/call_rec/",
            "comment": "通话录音"
        }
        // 添加更多的备份节点
    ],
  // 推荐使用绝对路径
  "output": "E:/files"
}
```

#### 节点选项

| 属性    | 类型    | 描述                 | 是否必选 |
| ------- | ------- | -------------------- | -------- |
| path    | String  | 设备备份路径         | 是       |
| comment | String  | 节点说明             | 是       |
| full    | Boolean | 当前节点全量备份     | 否       |
| output  | Boolean | 指定当前节点导出路径 | 否       |

