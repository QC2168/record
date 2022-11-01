## eval和new functioin的区别

## eval
相信很多同学都知道eval函数，它是将一个字符串转化为JavaScript表达式的函数。

### 问题

但在日常开发中，切记不要使用eval函数，一旦eval函数中传入的代码是被篡改的，攻击者可以窃取当前环境下的数据。
使用eval函数也会让代码的可读性变得很差
性能差，在现代js引擎会对代码进行优化，如果使用eval的函数会破坏这个过程，js引擎将无法对eval函数中的值进行优化。



### eval用法
```javascript
eval('1+1+2'); // 4
```
### eval作用域

## function