**这是我参与8月更文挑战的第27天，活动详情查看：[8月更文挑战](https://juejin.cn/post/6987962113788493831)**

#### 前言

百度地图`JavaScript API`是一套由`JavaScript`语言编写的应用程序接口，可帮助您在网站中构建功能丰富、交互性强的地图应用，支持`PC`端和移动端基于浏览器的地图应用开发，且支持`HTML5`特性的地图开发。

#### 文档地址

百度地图`JavaScript SDK`：https://lbsyun.baidu.com/index.php?title=jspopular

#### 使用方法

##### 申请密钥

百度地图应用管理平台：https://lbsyun.baidu.com/apiconsole/key?application=key#/home

##### 创建应用

如下图，点击创建应用，为你的项目创建一个应用。用于使用百度地图`API`。

![1](https://raw.githubusercontent.com/QC2168/note-img/main/202203161638550.png)

##### 应用信息

设置你的应用名称，以及应用的类型（浏览端）。

![2](https://raw.githubusercontent.com/QC2168/note-img/main/202203161638551.png)

创建之后，我们就可以拿到AK了，后面我们引入需要使用到它。

![3](https://raw.githubusercontent.com/QC2168/note-img/main/202203161638552.png)

##### 引入API

在项目的`index.html`中，添加以下代码引入百度地图`API`。

方法一：

```html
<!--引入百度地图api-->
<script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=你的密钥"></script>
<script>
  window.BMap = BMap
</script>
```

方法二：（ 如果你是使用`vite`构建的`react`项目，推荐使用以下方式进行引入`BMap` ）

```html
<!--引入百度地图api-->
<script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=XIYLPKQE2G1jXeKXlplm0kH0x3hqPYpO"></script>
```

安装`yarn add rollup-plugin-external-globals -D`，并配置`vite.config.js`文件。

```javascript
build:{
    rollupOptions:{
        external: ['BMap'],
        plugins: [
            externalGlobals({
                BMap: 'BMap',
            }),
        ],
    }
},
```

方法三：（ 如果你是使用`webpack`构建的`react`项目，推荐使用以下方式进行引入`BMap` ）

```html
<!--引入百度地图api-->
<script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=XIYLPKQE2G1jXeKXlplm0kH0x3hqPYpO"></script>
```

在`webpack`配置文件中加入以下代码，将`BMap`全局暴露出来。

```javascript
externals: {
    "BMap": "BMap"
},
```

接下面在项目中就可以直接使用啦！

##### 渲染地图

创建一个container容器，用于渲染地图。

```html
<div className="Map">
    <div id="container">
    </div>
</div>
```

给容器设置样式，让地图容器占满整个页面。


```scss
.Map{
  height: 100%;
  width: 100%;
  #container{
    height: 100%;
  }
}
```

通过`BMap.Map`传入要渲染的容器，通过`navigator.geolocation.getCurrentPosition`中的回调函数获取当前位置，通过`BMap.Point`设定中心点坐标即可。

```javascript
// 获取地理位置信息
navigator.geolocation.getCurrentPosition((position => {
    const map = new BMap.Map("container");
    const latitude=position.coords.latitude
    const longitude=position.coords.longitude
    map.centerAndZoom((new BMap.Point(longitude,latitude)), 15);
}))
```

关于百度地图API更多使用方法请查阅：https://lbsyun.baidu.com/index.php?title=jspopular

