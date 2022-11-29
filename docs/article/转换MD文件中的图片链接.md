---
title: Python批量替换markdown文件中的图片的URL
tags: [utils]
---

## Python批量替换markdown文件中的图片的URL

创建一个`.py`文件，将下面代码复制到该文件，并修改对应内容后跑起来即可。
```python
import os

def updateUrl(path):
    with open(path, 'r+', encoding='utf8') as f:
        ctn = f.read()
        # 将你要替换的地址替换以下内容即可
        ctn = ctn.replace('https://gitee.com/QC2168/note-img/raw/master','https://raw.githubusercontent.com/QC2168/note-img/main')
        f.truncate(0)
        f.seek(0)
        f.write(ctn)


files= os.listdir('./') #得到文件夹下的所有文件名称
print(files)
for item in files:
    if item == 'index.py':
        continue
    updateUrl(item)

```