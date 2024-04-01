
相信大多数前端开发者，都听说过Vben这个管理后台模板吧

这是一个很棒的管理后台模板，无论是组件，hooks，通用的工具函数分得非常精细

我认为它很适合一些刚学习完Vue2，想学习Vue3的同学，或者学习完Vue的初学者想从一个实战项目里学习Vue的同学

我从vben中发现了一些比较常用且实用的，接下来我们来看看这些函数是什么

### is.ts

判断一个值是否为XX值的工具函数，这里面都是一些日常开发中用于判断值类型，值是否存在的工具函数，使用频率也是比较高的

例如，我们要判断一个值是否为`undefined`，我们可以写成`if(isDef(foo)){}`

```typescript
// 判断值是否为XX类型
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

// 判断值是否被定义
export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined';
}

// 判断值是否未定义
export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val);
}

// 判断值是否一个对象
export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}

// 判断是否为不为空
export function isNotEmpty(val: any): boolean {
  return !isNil(val) && !isEmpty(val);
}

// 判断是否为空（null值）
export function isEmpty<T = unknown>(val: T): val is T {
  if (isNil(val)) {
    return true;
  }

  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
}

// 判断是否为时间对象
export function isDate(val: unknown): val is Date {
  return is(val, 'Date');
}


// 判断是否为null
export function isNull(val: unknown): val is null {
  return val === null;
}

// 判断是否未定义并且为null
export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val);
}

// 判断是否未定义或者为null
export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val);
}

// 判断是否为数字对象
export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}

// 判断是否为Promise对象
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

// 判断是否为string对象
export function isString(val: unknown): val is string {
  return is(val, 'String');
}

// 判断值是否为函数
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

// 判断是否为布尔对象
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

// 判断是否正则表达式
export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp');
}

// 判断是否为数组
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

// 判断是否为浏览器环境
export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window');
}

// 判断是否为html标签
export function isElement(val: unknown): val is Element {
  return isObject(val) && !!val.tagName;
}

// 判断是否为map类型（ES6）
export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map');
}

// 是否为node环境
export const isServer = typeof window === 'undefined';

// 是否为浏览器环境
export const isClient = !isServer;

// 匹配是否URL
export function isUrl(path: string): boolean {
  const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/;
  return reg.test(path);
}

```

文件位置：`src\utils\is.ts`

在线浏览：[]()

### UUID

创建`UUID`值工具函数，当你想要给某个元素赋值一个唯一标识的时候可以使用它用于创建唯一标识

```ts
const hexList: string[] = [];
for (let i = 0; i <= 15; i++) {
  hexList[i] = i.toString(16);
}

export function buildUUID(): string {
  let uuid = '';
  for (let i = 1; i <= 36; i++) {
    if (i === 9 || i === 14 || i === 19 || i === 24) {
      uuid += '-';
    } else if (i === 15) {
      uuid += 4;
    } else if (i === 20) {
      uuid += hexList[(Math.random() * 4) | 8];
    } else {
      uuid += hexList[(Math.random() * 16) | 0];
    }
  }
  return uuid.replace(/-/g, '');
}

let unique = 0;
export function buildShortUUID(prefix = ''): string {
  const time = Date.now();
  const random = Math.floor(Math.random() * 1000000000);
  unique++;
  return prefix + '_' + random + unique + String(time);
}

```

### setObjToUrlParams

用于将对象参数转化为URL参数

```ts
/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
}

```

### Env 环境判断

通过`import.meta.env`属性，判断当前项目运行的环境

```ts
/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnv(): string {
  return import.meta.env.MODE;
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD;
}

```

### Log

简单二次封装console对象中的warn，error函数，在显示信息时，前缀显示当前项目名称

```ts
const projectName = import.meta.env.VITE_GLOB_APP_TITLE;

export function warn(message: string) {
  console.warn(`[${projectName} warn]:${message}`);
}

export function error(message: string) {
  throw new Error(`[${projectName} error]:${message}`);
}
```