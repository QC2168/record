### refreshToken

### 业务需求
在用户登录应用后，服务器会返回一组数据，其中就包含了`accessToken`和`refreshToken`，每个`accessToken`都有一个固定的有效期，如果携带一个过期的`token`向服务器请求时，服务器会返回401的状态码来告诉用户此`token`过期了，此时就需要用到登录时返回的`refreshToken`调用刷新`Token`的接口（`Refresh`）来更新下新的`token`再发送请求即可。

### Coding ！
### 工具
`axios`作为最热门的`http`请求库之一，我们本篇文章就借助它的错误响应拦截器来实现token无感刷新功能。
### 具体实现
基于 https://github.com/QC2168/axios-bz

利用`interceptors.response`，在业务代码获取到接口数据之前进行状态码`401`判断当前携带的accessToken是否失效。
下面是关于interceptors.response中异常阶段处理内容。当响应码为401时，响应拦截器会走中第二个回调函数`onRejected`
```typescript
// 最大重发次数
const MAX_ERROR_COUNT = 5;
// 当前重发次数
let currentCount = 0;
// 缓存请求队列
const queue: ((t: string) => any)[] = [];
// 当前是否刷新状态
let isRefresh = false;

export default async (error: AxiosError<ResponseDataType>) => {
  const statusCode = error.response?.status;
  const clearAuth = () => {
    console.log('身份过期，请重新登录');
    window.location.replace('/login');
    // 清空数据
    sessionStorage.clear();
    return Promise.reject(error);
  };
  // 为了节省多余的代码，这里仅展示处理状态码为401的情况
  if (statusCode === 401) {
    // accessToken失效
    // 判断本地是否有缓存有refreshToken
    const refreshToken = sessionStorage.get('refresh') ?? null;
    if (!refreshToken) {
      clearAuth();
    }
    // 提取请求的配置
    const { config } = error;
    // 判断是否refresh失败且状态码401，再次进入错误拦截器
    if (config.url?.includes('refresh')) {
    clearAuth();
    }
    // 判断当前是否为刷新状态中（防止多个请求导致多次调refresh接口）
    if (isRefresh) {
      // 设置当前状态为刷新中
      isRefresh = true;
      // 如果重发次数超过，直接退出登录
      if (currentCount > MAX_ERROR_COUNT) {
        clearAuth();
      }
      // 增加重试次数
      currentCount += 1;

      try {
        const {
          data: { access },
        } = await UserAuthApi.refreshToken(refreshToken);
        // 请求成功，缓存新的accessToken
        sessionStorage.set('token', access);
        // 重置重发次数
        currentCount = 0;
        // 遍历队列，重新发起请求
        queue.forEach((cb) => cb(access));
        // 返回请求数据
        return ApiInstance.request(error.config);
      } catch {
        // 刷新token失败，直接退出登录
        console.log('请重新登录');
        sessionStorage.clear();
        window.location.replace('/login');
        return Promise.reject(error);
      } finally {
        // 重置状态
        isRefresh = false;
      }
    } else {
      // 当前正在尝试刷新token，先返回一个promise阻塞请求并推进请求列表中
      return new Promise((resolve) => {
        // 缓存网络请求，等token刷新后直接执行
        queue.push((newToken: string) => {
          Reflect.set(config.headers!, 'authorization', newToken);
          // @ts-ignore
          resolve(ApiInstance.request<ResponseDataType<any>>(config));
        });
      });
    }
  }

  return Promise.reject(error);
};
```

抽离代码

把上面关于调用刷新`token`的代码抽离成一个`refreshToken`函数，单独处理这一情况，这样子做有利于提高代码的可读性和维护性，且让看上去代码不是很臃肿
```typescript
// refreshToken.ts
export default async function refreshToken(error: AxiosError<ResponseDataType>) {
    /* 
    将上面 if (statusCode === 401) 中的代码贴进来即可，这里就不重复啦
    代码仓库地址: https://github.com/QC2168/axios-bz/blob/main/Interceptors/hooks/refreshToken.ts
    */
}
```
经过上面的逻辑抽离，现在看下拦截器中的代码就很简洁了，后续如果要调整相关逻辑直接在`refreshToken.ts`文件中调整即可。
```typescript
import refreshToken from './refreshToken.ts'
export default async (error: AxiosError<ResponseDataType>) => {
  const statusCode = error.response?.status;

  // 为了节省多余的代码，这里仅展示处理状态码为401的情况
  if (statusCode === 401) {
    refreshToken()
  }

  return Promise.reject(error);
};
```