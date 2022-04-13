Redis

Remote DIctionary Server C语言开发的开源高性能键值对数据库

特征：

1. 数据间没有必然的关联关系
2. 内部采用单线程机制进行工作
3. 高性能---
4. 多数据类型支持
   1. 字符串string
   2. 列表list
   3. 散列类型hash
   4. 集合类型set
   5. 有序集合类型 sorted_set
5. 持久化支持，可以进行数据灾难恢复



应用：

1. 为热点数据加速查询，如热点商品，热点新闻，推广类等高访问量信息等
2. 任务队列，如秒杀，抢购，购票排队等
3. 即时信息查询，如网站访问统计，在线人数，设备信息等
4. 时效性信息控制，如验证码控制，投票控制等
5. 分布式数据共享，如分布式群架构中的session分离
6. 消息队列
7. 分布式锁



核心文件：

redis-server.exe  服务器启动命令

redis-cli.exe  命令行客户端

redis.windows.conf redis核心配置文件

redis.benchmark.exe 性能测试工具

redis-check-aof.exe Aof文件修复工具

redia-check-dump.exe  RDB文件检查工具（快照持久化文件）



命令



功能：设置key value 数据

命令

set key value

规范

set name itheima



信息查询

功能：根据key查询对应的value，如果不存在，返回null

命令：

get key

规范

get name



清除屏幕信息

功能：清除屏幕中的信息

命令

clear



帮助

功能：获取命令帮助

命令

help 命令名



退出客户端

功能：退出

命令

quit  |  exit



redis数据存储格式

- redis自身是一个map，其中所有的数据都是采用key - value 的形式存储
- 数据类型指的是存储的数据的类型，也就是calue部分的类型，key部分永久都是字符串

#### 数据类型

string

存储的数据：单个数据，最简单的数据存储类型，也是最常用的数据存储类型

数据存储格式：一个存储空间保存一个数据

存储内容：通常使用字符串，如果字符串以整数形式展示，可以作为数字操作使用

##### string类型数据的基本操作

- 添加/修改数据  set key   value
- 获取数据  get key
- 删除数据   del  key
- 添加/修改多个数据  mset key1 value1  key2 value
- 获取多个数据  mget  key1 key2
- 获取数据字符个数（字符串长度）  strlen  key
- 追加信息到原色信息后部（如果原始信息存在就追加，否则新建） append key value

```sql
C:\Users\qiancheng>redis-cli.exe -h 127.0.0.1 -p 6379
127.0.0.1:6379> set v1 123
OK
127.0.0.1:6379> get v1
"123"
127.0.0.1:6379> mget 1,2,3
1) (nil)
127.0.0.1:6379> mget b1,b2,b3
1) (nil)
127.0.0.1:6379> mget b1 b2 b3
1) (nil)
2) (nil)
3) (nil)
127.0.0.1:6379> mset b b1 c c2 d d3
OK
127.0.0.1:6379> mget b c d
1) "b1"
2) "c2"
3) "d3"
127.0.0.1:6379> append b 100
(integer) 5
127.0.0.1:6379> get b
"b1100"
127.0.0.1:6379>
```



#### string类型数据的扩展操作

##### 解决方案

设置数值数据增加指定范围的值

- incr key   自增
- incrby key increment  自增指定数
- incrbyfloat key increment   自增指定浮点数

设置数值数据减少指定范围的值

- decr  key  自减

- decrby key increment  自减指定数



##### string作为数值操作

- string在redis内部存的是字符串，当遇到增减类操作incr，decr时会转成数值型计算
- redis所有的操作都是原子性的，采用单线程处理所有业务，命令是一个一个执行的，因此无需考虑并发带来的数据影响
- 注意：按数组进行操作的数据，如果原始数据无法转成数值，或者超越redis数值上限范围，将报错
- 9223372036854775807（java，long型数据最大值，long Max_VALUE）



- 设置数据具有指定的生命周期
- setex  key  seconds  value
- psetex  key  milliseconds  value

- ```sql
  127.0.0.1:6379> setex t 5 1
  OK
  127.0.0.1:6379> get t
  "1"
  127.0.0.1:6379> get t
  "1"
  127.0.0.1:6379> get t
  (nil)
  127.0.0.1:6379> get t
  # 5秒过去  消失
  ```

string类型数据操作的注意事项

- 数据操作不成功的反馈与数据正常操作之间的差异
  - 表示运行结果是否成功
    - （integer）0  》 false 失败
    - （integer）1 》 true  成功
  - 表示运行结果值
    - （integer）3 》3    3个
    - （integer） 1 》 1  1个
  - 数据未获取到
    - 	(nil) 等同于null
  - 数据最大存储量
    - 512MB
  - 数值计算最大范围  （java 中的 long 的最大值）
    - 9223372036854775807



##### key的设置约定

数据库中的热点数据key命名惯例

|      | 表名  | 主键名 | 主键值 | 字段名 |
| ---- | ----- | ------ | ------ | ------ |
| eg1  | order | id     | 211333 | name   |
| eg2  | equip | id     | 332323 | type   |
| eg3  | news  | id     | 42343  | title  |



#### hash类型

- 新的存储需求：对一系列存储的数据进行编组，方便管理，典型应用存储对象信息
- 需要的存储结构：一个存储空间保存多个键值对数据
- hash类型：底层使用哈希表结构实现数据存储
- hash存储结构优化
  - 如果field数量较少，存储结构优化为类数组结构
  - 如果field数量较多，存储结构使用HashMap结构



##### hash类型数据的基本操作

- 添加修改数据
- `hset key field value`
- 获取数据
- `hget key field`
- `hgetall key`
- 删除数据
- `hdel key field1 ...`
- 添加修改 多个数据
- `hmset key field1 value1 field2 value2 ...`
- 获取多个数据
- `hmget key field`
- 获取哈希表中字段的数量
- `hlen key`
- 获取哈希表中是否存在指定字段
- `hexists key field`
- 获取哈希表中所有字段名或字段值
- `hkeys key`
- `hvals key`
- 设置指定字段的数值数据增加指定范围的值
- `hincrby key field increment`
- `hincrbyfloat key field increment`

##### hash类型数据操作的注意事项

- hash类型下的value只能存储字符串，不允许存储其他数据类型，不存在嵌套现象。如果数据未获取到，对应的值为Null
- 每个hash可以存储2 的三十二次方-1个键值对
- hash类型十分贴近对象的数据存储形式，并且可以灵活添加删除对象属性。但hash设计初衷不是为了储存大量对象而设计的，切记不可滥用，更不可以将hash作为对象列表使用
- hgetall操作可以获取全部属性，如果内部field过多，遍历整体数据效率就会很低，有可能成为数据访问瓶颈



#### list类型

- 数据存储需求：存储多个数据，并对数据进入存储空间的顺序进行区分
- 需要的存储结构：一个存储空间保存多个数据，且通过数据可以体现进入顺序
- list类型：保存多个数据，底层使用双向链表存储结构实现

##### list类型数据基本操作

- 添加/修改数据
- `lpush key value1 [value2]`
- `rpush key value1 [value2]`
- 获取数据
- `lrange key start stop`
- `lindex key index`
- `llen key`
- 获取并移除数据
- `lpop key`
- `rpop key`
- 规定时间内获取并移除数据
- `blpop key1 [key2] timeout`
- `brpop key1 [key2] timeout`
- 移除指定数据
- `lrem key count value`

##### list类型数据操作注意事项

- list中保存的数据都是string类型的，数据总容量是有限的，最多4294967295
- list具有索引的概念，但是操作数据时通常以队列的形式进行入队出队操作，或以栈的形式进行入栈出栈操作
- 获取全部数据操作结束索引设置为 -1
- list可以对数据进行分页操作，通常第一页的信息来自于list，第二页及更多的信息通过数据库的形式加载



#### set类型

- 新的存储需求：存储大量的数据，在查询方面提供更高的效率
- 需要的存储结构：能够保存大量的数据，高效的内部存储机制，便于查询
- set类型 与hash存储结构完全相同，仅存储键，不存储值（nil），并且值是不允许查重复的

##### set类型数据基本操作

- 添加数据
- `sadd key member1 [member2]`
- 查询数据
- `smembers key`
- 删除数据
- `srem key`
- 获取集合数据总量
- `scard key`
- 判断集合中是否包含指定数据
- `sismember key member`
- 随机获取集合中指定数量的数据
- `srandmember key [count]`
- 随机获取集合中的某个数据并将该数据移除集合
- `spop key`
- 求两个集合的交，并，差集
- `sinter key [key2]`
- `sunion key1 [key2]`
- `sdiff key1 [key2]`
- 求两个集合的交，并，差集并存储到指定集合中
- `sinterstore destination key1 [key2]`
- `sunionstore destination key1 [key2]`
- `sdiffstore destination key1 [key2]`
- 将指定数据从原始集合中移动到目标集合中
- `smove source destination member`

##### set类型数据操作的注意事项

- set类型不允许数据重复，如果添加的数据在set中已经存在，将只保留一份
- set虽然与hash的存储结构相同，但是无法启动hash中存储值的空间

#### sorted_set

- 新的存储需求：数据排序有利于数据的有效展示，需要提供一种可以根据自身特征进行排序的方式
- 需要的储存结构：新的存储模型，可以保存可排序的数据
- sorted_set类型：在set的存储结构基础上添加可排序字段

##### sorted_set类型数据基本操作

- 添加数据
- `zadd key value member1 [score2 menber2]`
- 获取全部数据
- `zrange key start stop [withscores]`
- `zrevrange key start stop [withscores]`
- 删除数据
- `zrem key member [member ...]`
- 按条件获取数据
- `zrangebyscore key min max [withscores] [limit]`
- `zrevrangebyscore key max min [withscores]`
- 条件删除数据
- `zremrangebyrank key start stop`
- `zremrangebyscore key min max`
- 获取集合数据总量
- `zcard key`
- `zcount key min max`
- 集合交，并操作
- `zinterstore destination numkeys key [key ...]`
- `zunionstore destination numkeys key [key ...]`
- 获取数据对应的索引  排名
- `zrank key member`
- `zrevrank key member`
- score值获取与修改
- `zscore key member`
- `zincrby key increment member`

##### 注意的地方

1. min与max用于限定搜索查询的条件
2. start与stop用于限定查询范围，作为于索引，表示开始和结束索引
3. offset与count用于限定查询范围，作用于查询结果，表示开始位置和数据总量

##### sorted_set类型数据操作注意事项

- score保存的数据存储空间是64位，如果是整数范围是-9007199254740992 - 99007199254740992
- score保存的数据也可以是一个双精度的double值，基于双精度浮点数的特征，可能会丢失精度，使用时慎重
- sorted_set底层存储还是基于set结构的，因此数据不能重复，如果重复添加相同的数据，score值将被反复覆盖，保留最后一次修改的结果

#### key通用操作

##### key的特征

- key是一个字符串，通过key获取获取redis中保存的数据
- 对于key自身状态的相关操作，例如：有效期设定，判定是否有效，有效状态的切换等
- 对于key快速查询，例如：按指定策略查询key

##### key基本操作

- 删除指定key
- `del key`
- 获取key是否存在
- `exists key`
- 获取key的类型
- `type key`

##### key扩展操作

- 为指定key设定有效期
- `expire key seconds`
- `pexpire key milliseconds`
- 获取key的有效期
- `ttl key`
- `pttl key`
- 时效性转为永久性
- `persist key`

##### key查询操作

- 查询key
- `keys pattern`
  - 查询模式规则
  - *匹配任意数量的任意符号
  - ？配合一个任意符号
  -  [] 匹配一个指定符号

##### key其他操作

- 为key改名
- `rename key newkey`
- 对所有key排序
- `sort`
- 其他key通用操作
- `help @generic`



#### 数据库通用指令

##### key重复问题

- key是由程序员定义的
- redis在使用过程中，伴随着操作数据量的增加，会出现大量的数据以及对应的key
- 数据不区分种类，类别混杂在一起，极易出现重复或冲突

##### 解决方案

- redis为每个服务提供有16个数据库，编号从0到15
- 每个数据库之间的数据互相独立

##### db基本操作

- 切换数据库
- `select index`
- 其他操作
- `quit`
- `ping`
- `echo message`

##### db数据清除

- 数据移动
- `move key db`
- 数据清除
- `dbsize`
- `flushdb`
- `flushall`

#### 持久化过程保存什么

- RDB 将当前数据状态进行保存，快照形式，存储数据结果，存储格式简单，关注点在于数据
- AOF 将数据的操作过程进行保存，日志形式，存储操作过程，存储格式复杂，关注点在数据的操作过程

#### RDB

##### RDB启动方式 —— save命令

- 命令
- `save`
- 作用 手动执行一次操作，会在redis目录中生成一个点rdb文件,快照保存

##### RDB启动 save指令配置

- dbfilename dump.rdb
  - 说明 设置本地数据库文件名，默认dump.rdb
  - 经验 通常设置为dump 端口号.rdb
- dir
  - 说明：设置储存rdb文件的路径
  - 经验：通常设置成存储空间比较大的目录，目录名称data
- rdbcompression yes
  - 说明：设置储存到本地是否压缩，LZF压缩
  - 经验：通常默认开启，如果关闭，可以减少cpu运行时间，但储存文件变大
- rdbchecksum yes
  - 说明：是否进行对RDB文件格式经验，该校验过程在写和读文件过程进行
  - 经验：默认开启，如果关闭，可以节省10%时间消耗，但数据可能有损坏风险



##### 杀掉进程

ps -ef | grep redis-
kill -s 9 进程号

##### save 指令不建议使用，可能会导致阻塞



##### RDB启动方式 —— bgsave命令

- 命令
- bgsave
- 作用
- 手动启动后台保存操作，但不是立即执行

```
127.0.0.1:6379> bgsave
Background saving started
```
![image-20200518165224346](C:\Users\qiancheng\AppData\Roaming\Typora\typora-user-images\image-20200518165224346.png)

注意：bgsave是使用fork函数生成子进程来完成任务的，save是马上执行

##### bgsave相关配置

- stop-writes-on-bgsave-error   yes
  - 说明：后台储存过程中如果出现错误现象，是否停止保存操作
  - 经验：默认是开启的

##### RDB启动方式 —— save配置

- 配置

- ```
  save second changes
  ```

- 作用

  - 满足限定时间范围内key的变化数量达到指定数量即进行持久化

- 参数

  - second 监控时间范围  单位minute
  - changes 监控key的变化数量

- 设置文件

  - conf文件夹中

- 注意

  - 必须对数据产生影响
  - 不进行数据对比
  - 真正产生了影响
  - 要根据实际业务进行设置，频度过高或过低会出现性能问题，结果是灾难性的
  - save配置中对于second与changes设置通常具有互补对应关系，尽量不要设置成包含性关系
  - save配置启动后执行的是bgsave，不必担心阻塞问题

| 方式           | save指令 | bgsave指令 | save配置 |
| -------------- | -------- | ---------- | -------- |
| 读写           | 同步     | 异步       |          |
| 阻塞客户端指令 | 是       | 否         |          |
| 额外内存消耗   | 否       | 是         |          |
| 启动新进程     | 否       | 是         |          |

RDB优点

- RDB是一个紧凑压缩的二进制文件，存储效率较高
- RDB内部存储的是redis在某个时间点的数据快照，非常合适用于数据备份，全量复制等场景
- RDB恢复数据的速度要比AOF快很多
- 应用：服务器中每X小时执行bgsave备份，并将RDB文件拷贝到远程机器中，用于灾难恢复

RDB缺点

- RDB方式无论是执行指令还是利用配置，无法实时持久化，会有丢失数据的可能
- bgsave指令每次都需要执行fork操作创建子进程，要牺牲一些性能
- redis版本不同，生成出来的RDB文件无法使用，不兼容



#### AOF

##### RDB存储的弊端

- 存储数据较大，效率低
  - 基于快照思想，每次读取都是全部数据
- 大数据量下IO性能较低
- 基于fork创建子进程，内存产生额外消耗
- 宕机到来的数据丢失风险

##### 解决思路

- 不写全数据，仅记录部分数据
- 改记录数据为记录操作过程
- 对所有操作均进行记录，排除丢失数据的风险

##### AOF概念

- append only file 持久化 以独立日志的方式记录每次写命令，重启时再重新执行AOF文件中命令达到恢复数据的目的，与RDB相比可以简单描述为改数据为记录数据产生的过程
- AOF的主要作用是解决了数据持久化的实时性，目前已经是Reids持久化的主流方式

##### AOF写数据过程

![image-20200518174853162](C:\Users\qiancheng\AppData\Roaming\Typora\typora-user-images\image-20200518174853162.png)

##### AOF写数据三种策略

- always  每次
  - 每次写入操作均同步到AOF文件中，数据零误差，性能较低
- everysec 每秒
  - 每秒将缓冲区中的指令同步都AOF文件中，准确性较高，性能较高
  - 在系统突然宕机的情况下丢失1秒内数据，**（建议使用）也是默认配置**
- no  系统控制
  - 由操作系统控制每次同步到AOF文件的周期，整体过程不可控

##### AOF功能开启

##### 配置

```
appendonly yes|no
```

##### 作用

是否开启AOF持久化功能，默认为不开启状态

##### 配置

```
appendfsync always|everysec|no
```

##### 作用

AOF写数据策略

##### 配置

```
appendfilename filename
```

##### 作用

AOF持久化文件名，默认文件名为appendonly.aof 

##### 配置

```
dir
```

##### 作用

AOF持久化文件保存路径，与RDB持久化文件保持一致即可

##### AOF会遇到的问题

比如多个set，只恢复最后一个

##### AOF重写

简单说就是将对同一个数据的若干条命令执行结果转化成最终结果数据对应的指令进行记录，也解决了压缩文件的体积

##### AOF重写作用

- 降低磁盘占用量，提高磁盘利用率
- 提高持久化效率，降低持久化时间，提高IO性能
- 降低数据恢复用时，提高数据恢复效率

##### AOF重写规则

- 进程内已超时的数据不再写入文件
- 忽略无效指令，重写时使用进程内数据直接生成，这样新的AOF文件只保留最终数据的写入命令
  - 如del key1 hdel key2 srem key3 set key4 111等等
- 对同一数据的多条写命令合并为一条命令
  - 如lpush list1 a、lpush list1 b、等等可转为lpush list a b
  - 为防止数据量过大造成客户端缓冲区溢出，对list、set，hash、zset 等类型，每条指令最多写入64个元素

##### AOF重写方式

- 手动重写

- ```
  bgrewriteaof
  ```

- 自动重写

- ```
  auto-aof-rewrite-min-size  size
  auto-aof-rewrite-percentage percentage
  ```

  

