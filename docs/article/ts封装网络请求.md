#### 前言

本文将使用`typescript`类的方式来封装`axios`，使得在日常开发中减少代码的耦合性，方便后续维护。

阅读本文章你将收获到：

- 如何使用`typescript`类封装`axios`
  - 网络请求封装思想
  - 定义网络请求中的`data`数据类型
  - 如何配置`vite`的环境变量

#### 安装

在项目根目录中执行以下命令，安装`axios`和`antd-mobile`。

使用`npm`安装，请执行以下命令

```
npm install --save antd-mobile@next axios
```

使用`yarn`安装，请执行以下命令

```
yarn add antd-mobile@next axios
```

使用`pnpm`安装，请执行以下命令

```
pnpm add antd-mobile@next axios
```

#### axios基本使用方法

```javascript
axios.request(config)

axios.get(url[, config])

axios.delete(url[, config])

axios.head(url[, config])

axios.options(url[, config])

axios.post(url[, data[, config]])

axios.put(url[, data[, config]])

axios.patch(url[, data[, config]])
```

这样子直接使用是没有问题的，但缺点是耦合度太高了，在使用时相同的配置选项需要多次传入，且后续维护也很不方便。

#### 封装目标

- 将直接常用的参数，使用一个`Api`类进行封装。如果需要日后更换一些常用的配置选项可直接在`Api`中进行修改
- 集中管理`Api`，方便后续管理网络`Api`

![image-20220120005713912](https://raw.githubusercontent.com/QC2168/note-img/main/202201200057328.png)

在项目中新建`network`文件，作为项目的网络请求根文件夹。后续我们会将相关的配置文件放到这里。

```
mkdir network
```

在这个根文件夹中创建`api`、`Interceptors`、`types`文件夹及`request.ts`文件，分别用于存放`api`集中管理、网络请求拦截器、接口返回数据、网络请求类。

```
├─api
├─Interceptors
├─types
└─request.ts
```

#### 编写网络请求库

在`request.ts`中新建一个`Api`类，并导出它。

```
export default class Api{
  
}
```

##### 需求

在编写这个类之前，我们要设计好这个类要帮我们做些什么事。

- 初始化网络请求配置选项（如：`url`前缀、网络超时）
- 网络拦截器（请求与响应）
- 请求时的`loading`

##### 类型接口编写

在`request.ts`中定义接收的参数类型，在原生的`AxiosRequestConfig`接口添加`loading`和`interceptor`属性用于是否显示`loadingToast`和是否配置网络拦截器。

```typescript
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse,} from 'axios';
export interface ApiType extends AxiosRequestConfig{
    loading?:boolean
    interceptor?:Interceptor
}

export interface Interceptor {
    requestInterceptor: (res: AxiosRequestConfig) => (AxiosRequestConfig)
    requestInterceptorErr?: (error: any) => any
    responseInterceptor: (res: AxiosResponse) => (AxiosResponse)
    responseInterceptorErr?: (error: any) => any
}
```

##### 封装常用配置

在`constructor`函数中接收常用的配置项，并初始化`AxiosInstance`。

```typescript
export default class Api {
    instance: AxiosInstance;
    config: AxiosRequestConfig;
    interceptor?: Interceptor;
    loading: boolean;

    constructor(option: ApiType) {
        this.config = option;
        this.interceptor = option.interceptor;
        this.loading=option.loading??true
        // 配置全局参数
        this.instance = axios.create(this.config);
}
```

> ?? 是ES2020中的空值合并运算符，它被用于为变量分配默认值。

##### 封装拦截器

两个拦截器我们不在类中写死，要将处理的函数作为参数传入。

避免你的项目需要两个`axios`实例时，但拦截器处理的内容是不同的此时的话就不能处理我们的业务场景。

```typescript
constructor(option: ApiType) {
    // ...
    // 拦截器
    // 配置请求拦截器
    this.instance.interceptors.request.use(this.interceptor?.requestInterceptor, this.interceptor?.requestInterceptorErr);
    // 配置响应拦截器
    this.instance.interceptors.response.use(this.interceptor?.responseInterceptor, 		this.interceptor?.responseInterceptorErr);
}
```

添加`loading`效果，因为当前项目中我引入了`antd-mobile`UI框架，我就直接使用它本身的`Toast`组件了。

你也可以使用一些`loading`的`css`库，例如：[CSS Loader](https://css-loader.raphaelfabeni.com/)

```typescript
constructor(option: ApiType) {
    // ...
    // 添加loadding
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
        if (this.loading) {
            Toast.show({
                icon: 'loading',
                content: '加载中…',
                duration: 0
            });
        }
        return config;
    });
    this.instance.interceptors.response.use((res: AxiosResponse) => {
        if (this.loading) {
            Toast.clear();
        }
        return res;
    });
}
```

细心的同学可以会发现这里和上次配置的拦截器不是发生了冲突了么？

那传入的拦截器函数会不会被下面的`loading`函数给覆盖？

答案是不会的，`axios`在内部将我们传入的函数再传了一个数组。执行时会依照传入的顺序进行执行。（并不是合并操作）

```javascript
// lib/core/InterceptorManager.js
// https://github.com/axios/axios/blob/master/lib/core/InterceptorManager.js

function InterceptorManager() {
  // 定义了一个存放拦截器的数组
  this.handlers = [];
}

// 依照传入的顺序进行执行指定的函数内容
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
```

基本的网络配置我们已经封装好了，接下来处理网络请求返回的数据。

##### 定义接口返回的数据类型

在前面创建的`types/index.ts`中导出一个`ResponseDataType`类型（这步根据后端返回的数据来定）

```typescript
export interface ResponseDataType<Data = any> {
    body: Data,
    description: string,
    status: number
}
```

`axios`提供了`request`方法，这个函数可以传入指定的类型，这个类型即是到时候网络请求回来的。

我们在`Api`类中再将这个方法封装一下，同样传入返回的数据类型和对应的接口配置，返回一个对应的`Promise`对象。

```
request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
```

```typescript
export default class Api {
    // 添加数据类型约束
    async request<T>(config: AxiosRequestConfig<T>): Promise<T> {
        return this.instance.request<ResponseDataType, T>(config);
    }
}
```

##### 使用API Class

在`api/index.ts`中导入`Api`以及`ApiType`接口。

```typescript
import Api, {ApiType} from '../request';
```

##### 配置环境变量

通常我们会将项目中开发环境和生成环境进行区分，减少在开发过程中进行地址切换，在`src`根目录下创建`.env.development`、`.env.production`、`env.d.ts`文件

> 默认情况下，开发服务器 (`dev` 命令) 运行在 `development` (开发) 模式，而 `build` 以及 `serve` 命令则运行在 `production` (生产) 模式。

```
// .env.development 
VITE_APP_URL=请求的API地址前缀
// .env.production
VITE_APP_URL=请求的API地址前缀
```

```typescript
// env.d.ts
interface ImportMetaEnv {
    readonly VITE_APP_URL: string
}
```
获取环境变量并将它导出。
```typescript
// utilis/index.ts
// 获取变量中的环境
export const BASE_URL = import.meta.env.VITE_APP_URL;
```
定义向`Api Class`传入的参数数据

```typescript
// api/index.ts
import {BASE_URL} from 'utils';
const option: ApiType = {
    baseURL: BASE_URL,
    timeout: 5000,
};
```

将参数传入到`Api Class`中，之后我们请求数据时直接调用`ApiInstance`中的`request`方法即可。

```typescript
const ApiInstance = new Api(option);
```

##### 创建网络数据请求方法

在`types/index.ts`中定义`swiper`接口返回的数据类型

```typescript
// types/index.ts
export interface SwiperDataType {
    alt: string
    id: number
    imgSrc: string
}
```

在`api/index.ts`中定义请求的方法，内部调用`request`方法并将类型传入即可。

```typescript
// api/index.ts
export const getSwiper = () => {
    return ApiInstance.request<SwiperDataType[]>({
        url: /swiper,
        method: 'get'
    });
};
```

在页面中使用`getSwiper`方法。

```typescript
// 引入getSwiper方法
import {getSwiper} from '../../network/api';
// 获取请求回来的数据
const swiperData: SwiperDataType[] = await getSwiper();
```

#### 最后

对于网络请求的封装还有很多，本文简单的对一些功能进行了封装，方便后续在项目中使用。在实际项目中更多的是使用拦截器及搭配其他Api进行使用。后续我也会对这个版本的网络请求再添加一些功能的封装。

