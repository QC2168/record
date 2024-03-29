# 数据结构

常用数据结构

- 每一种都有其对应的应用场景，不同的数据结构的不同操作性能是不同的
- 有的查询性能很快，有的插入性能很快，有的是插入头和尾速度很快
- 有的范围查找很快，有的允许元素重复，有的不允许重复等等
- 根据实际开发具体需求来选择

注意：数据结构和语言无关系，常见的编程语言都有**直接或间接**的使用上述常见的数据结构

简单的使用不能让我们更加灵活的使用它们，了解真相，你才能获得真正的自由

# 算法认识algorithm

**algorithm**解决问题的办法/步骤逻辑

数据结构的实现，离不开算法

| 符号           | 名称           |
| -------------- | -------------- |
| O（1）         | 常数的         |
| O（log（n））  | 对数的         |
| O（n）         | 线性的         |
| O（nlog（n）） | 线性和对数乘积 |
| O（n二次方）   | 平方           |
| O（2n次方）    | 指数的         |

# javascript数组结构

主要概念，数组的扩容 性能是比较低的，新建一个数组需要确认他的大小，比如现在定了一个长度4的数组，有一天添加到`5`，他需要新建一个长度`5`的数组，将原有的数组迁移到这个新数组，这个性能是非常低的

在数组前面插入或删除元素：元素位移，数组需要将里边一个一个元素进行往后移一位，这个性能是非常低的，但实际开发使用到的次数非常少

数据放到数组中之后，查找数组是靠`index`，`O（1）`这个是非常快的

#  栈结构

- 栈也是一种非常常见的数据结构，并且在程序中的应用非常广泛

![栈的模型](https://raw.githubusercontent.com/QC2168/note-img/main/202204021835510.jpeg)

- 栈`stack`，它是一种受限的线性表 **后进先出`LIFO last in frist out`**
  - 其限制是仅允许在 **表的一端** 进行插入和删除运算。这一端被称为 **栈顶** ，相对地，另一端称为 **栈底**
  - `LIFO`（`last in first out`）后进入的元素，第一个弹出栈空间，类似于自动餐托盘，最后的盘子，都是最先出的
  - 向一个栈插入新元素称为 **进栈、入栈、压栈**，它新元素放在栈顶元素上面
  - 从一个栈删除元素称为 **出栈、退栈** 它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素

## 栈的常见的操作

- `push`（`element`）添加一个新元素到栈顶位置
- `pop` 移除栈顶的元素，同时返回被移除的元素
- `peek` 返回栈顶的元素，不对栈做任何修改
- `isEmpty` 如果栈里没有任何元素就返回`true`，否则返回`false`
- `size` 返回栈里的元素个数，这个方法和数组的`length`属性很像
- `toString` 将栈结构的内容以字符形式返回

## 实现栈结构

```javascript
export class Stack {
    constructor(){
    // 栈中属性
        this.items=[]
    }
// - push（element）添加一个新元素到栈顶位置
 push(element){
    this.items.push(element);
 }

// - pop 移除栈顶的元素，同时返回被移除的元素
 pop(){
     return this.items.pop();
 }

// - peek 返回栈顶的元素，不对栈做任何修改
peek(){
    if(this.isEmpty())return null;
    return this.items[this.items.length-1];
}

// - isEmpty 如果栈里没有任何元素就返回true，否则返回false
isEmpty(){
    return this.items.length === 0;
}

// - size 返回栈里的元素个数，这个方法和数组的length属性很像
size(){
    return  this.items.length;
}

// - toString 将栈结构的内容以字符形式返回
}

export function dec2binary(number){
    // 创建stack
    const stack = new Stack();

    // 循环取余数
    while(number>0){
        let remainder = number%2;
        number=Math.floor(number /2)
        stack.push(remainder);
    }

    // 拼接字符串
    let binString = "";
    while(!stack.isEmpty()){
        binString+=stack.pop()
    }
    return binString;
}
```

## 测试代码

```javascript
const stack =new Stack();

stack.push("abc");
stack.push("cba");
stack.push("npc");
stack.push("mba");
console.log(stack); // Stack items: (3) ['abc', 'cba', 'npc']
console.log(stack.items); // ['abc', 'cba', 'npc', 'mba']
console.log(stack.pop()); // mba
console.log(stack.items); // ['abc', 'cba', 'npc']
console.log(stack.peek()); // npc
console.log(stack.isEmpty()); // false
console.log(stack.size()); // 3
```

## 栈常见的面试题

## 题目一

实现一个特殊的栈，在基本功能的基础上，再实现返回栈中最小元素的功能

1. pop push getMin操作的时间复杂度都是O（1）
2. 设计的栈类型可以使用现成的栈结构

```javascript
export class MinStack extends Stack {
  constructor() {
    super();
    this.minItem = [];
  }
  getMinPop() {
    return this.minItem[this.minItem.length - 1];
  }
  push(element) {
    this.items.push(element);
    if (this.minItem.length === 0) {
      this.minItem.push(element);
    } else if (element > this.getMinPop()) {
      this.minItem.push(this.getMinPop());
    } else {
      let min = this.peek();
      this.minItem.push(min);
    }
  }
  pop() {
    this.minItem.pop();
    return this.items.pop();
  }
}
```

## 题目二

如何用栈结构实现队列结构，两个栈结构拼队列，创建两个栈，分别是data和help，利用data进去的数据导到help中实现队列

```
export class TowStackQueue {
  constructor() {
    this.stack = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(item) {
    this.stack.push(item);
  }
  dequeue() {
    while (!this.stack.isEmpty()) {
      this.stack2.push(this.stack.pop());
    }
    this.stack2.pop();
  }
}
```

如何用队列结构实现栈结构

```

```



# 队列 Queue

> 栈和队列实际是通过双向链表、数组实现

- 队列，它是一种受限的线性表，**先进先出`FIFO first in first out`**
  - 受限之处在于它只允许在表的前端进行删除操作
  - 而在后端进行插入操作
- `enqueue（element）`向队列尾部添加一个（或多个）新的项
- `dequeue（）`移除队列的第一项，并返回被移除的元素
- `front（）`返回队列中第一个元素，队列不做任何变动
- `isEmpty（）`判断队列是否有数据
- `size（）` 返回队列包含的元素个数，与数组的length属性类似

## 实现队列

```javascript
export class Queue {
    constructor(){
        this.items=[];
    }
//     - enqueue（element）向队列尾部添加一个（或多个）新的项
enqueue(element){
    this.items.push(element)
}

// - dequeue（）移除队列的第一项，并返回被移除的元素
dequeue(){
    return  this.items.shift()
}
// - front（）返回队列中第一个元素，队列不做任何变动
front(){
    if(this.isEmpty())return null;
    return this.items[0]
}
// - isEmpty（）判断队列是否有数据
isEmpty(){
    return this.items.length===0;
}
// - size（） 返回队列包含的元素个数，与数组的length属性类似
size(){
    return this.items.length;
}
}
```

## 测试代码

```javascript
const queue = new Queue();
queue.enqueue("abc");
queue.enqueue("ccb");
queue.enqueue("def");
queue.enqueue("666");
console.log(queue.items); // ['abc', 'ccb', 'def', '666']
console.log(queue.dequeue()); // abc
console.log(queue.items); // ['ccb', 'def', '666']
console.log(queue.front()); // ccb
```

# 链表

链表和数组一样，可以用于储存一系列的元素，但是链表和数组的实现机制完全不同

## 链表的优势

- 要储存多个元素，另外一个选择就是**链表**
- 但不同于数组，链表中的元素在内存中**不必是连续的空间**
- 链表的每个元素由一个储存**元素本身的节点**和一个**指向下一个元素的引用**（指针/连接）组成

- 相对于数组，链表有一些**优点**
  - 内存空间不是必须连续的，可以利用计算机的内存，实现灵活的内存动态管理
  - 链表不必在创建时就**确定大小**，且大小可以无限延伸
  - 链表在插入和删除数据时，**时间复杂度可以达到O（1）**，相对于数组效率高很多
- 相对于数组，链表有一些缺点
  - 链表访问任何一个位置的元素时，都需要**从头开始访问**（无法直接访问）
  - **无法通过下标直接访问元素**，需要从头一个一个访问，直到找到元素

## 什么是链表

类似火车，有一个火车头，火车头连接一个节点，节点上有乘客（数据（item，next）），且这个节点会连接下一个节点

## 列表常见操作

- append（element） 向列表尾部添加一个新的项
- insert（position，element）向列表的特定位置插入一个新的项
- get（position）获取对应位置的元素
- indexOf（element）返回元素在列表中的索引。如果列表中没有该元素返回-1
- update（position，element）修改某个位置的元素
- removeAt（position）从列表的特定位置移除一项
- remove（element）从列表中移除一项
- isEmpty（）判断是否为空
- size（） 返回链表包含的元素个数，与数组的length属性类似
- toString 由于列表项使用node类，就需要重写继承JavaScript对象默认的toString方法，让其输出数据的值

```javascript
class Node {
  constructor(el) {
      // 保存元素
    this.element = el;
    // 指向下一个节点
    this.next = null;
  }
}

export class LinkedList{
    constructor(){
        this.head=null;
        this.length=0;
    }

// - append（element） 向列表尾部添加一个新的项
append(el){
// 根据elmeenet创建node对象
const newNode =new Node(el);

// 追加到最后
if(!this.head){
    this.head=newNode;
}else{
    let current = this.head;
    while(current.next){
        current=current.next;
    }
    current.next=newNode;
}
this.length++;
}
// - insert（position，element）向列表的特定位置插入一个新的项
insert(position,el){
    //判断越界问题
    if(position<0||position>this.length)return false;
    // 根据elmeenet创建node对象
const newNode =new Node(el);
// 插入元素
if(position===0){
    newNode.next=this.head;
    this.head=newNode;
}else{
    let index=0;
    // 当前
    let current=this.head;
    // 上一个元素
    let pervious=null;
    while(index++<position){
        pervious=current;
        current=current.next;

    }
    pervious.next=newNode;
    newNode.next=current;
}
this.length++;
return true;
}
// - get（position）获取对应位置的元素
get(position){
     //判断越界问题
     if(position<0||position>this.length-1)return null;
    // 查询该位置的元素
    let current=this.head;
let index=0
    while(index++ <position){
    current=current.next;
    }
    return current.element
}
// - indexOf（element）返回元素在列表中的索引。如果列表中没有该元素返回-1
indexOf(element){
let index=0;
let current =this.head;
while(current){
    if(current.element === element){
        return index;
    }
    index++;
    current=current.next
}
return -1;
}
// - update（position，element）修改某个位置的元素
update(position,element){
    // 1.删除position的元素
    const result=this.removeAt(position)
    // 2.插入
    this.insert(element)
    return result
}
// - removeAt（position）从列表的特定位置移除一项
removeAt(position){
    // 1 判断越界问题
    if(position<0||position>this.length-1)return null;
    // 2 删除元素
    let current =this.head;
    // 3 上一个
    let pervious=null;
    let index =0;
    if(position === 0){
        this.head=current.next;
    }else{
        while(index++ <position){
                pervious=current;
                current=current.next;
        }
        pervious.next=current.next;
    }
    this.length--;
    return current.element;

}
// - remove（element）从列表中移除一项
remove(element){
    // 1.获取元素
    const index=this.indexOf(element);
    if(index=== -1)return;

    // 2 删除该元素位置
    this.removeAt(index)
}
// - isEmpty（）判断是否为空
isEmpty(){
    return this.length===0
}
// - size（） 返回链表包含的元素个数，与数组的length属性类似
size(){
    return this.length;
}
// - toString 由于列表项使用node类，就需要重写继承JavaScript对象默认的toString方法，让其输出数据的值
}

```

## 双向链表

```javascript
// doublyLinkedList
import { LinkedList,Node } from "./linkedList";
class DoublyNode extends Node{
    constructor(element){
        super(element);
        this.prev=null;
    }
}

export class doublyLinkedList extends LinkedList{
    constructor(){
        super();
        this.tail=null;
    }

    // - append（element） 向列表尾部添加一个新的项
    append(element){
        // 1.创建元素
        const newNode = new DoublyNode(element);
        // 2.追加元素
        if(this.length===0 && this.head===null){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.length++;
    }
    // - insert（position，element）向列表的特定位置插入一个新的项
    insert(position,element){
        // 1.判断越界
        if(position<0||position>this.length)return false;

        // 2.创建node
        const newNode = new DoublyNode(element)

        // 3 判断插入多种情况
        if(position===0){
            if(this.head===null){
                this.head=newNode
                this.tail=newNode
            }else{
                // 原来有元素
                newNode.next=this.head;
                this.head.prev=newNode;
                this.head=newNode;
            }
            
        }else if(position===this.length){
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }else{
            // position 不等于0 和最大
            let index=0
            let current=this.head;
            let previous=null;
            while(index++ < position){
                previous=current;
                current=current.next;
            }
            // 交换节点信息
            previous.next=newNode;
            newNode.prev=previous;
            newNode.next=current;
            current.prev=newNode;
        }
        this.length++;
        return true;

    }
    // - get（position）获取对应位置的元素
    // - indexOf（element）返回元素在列表中的索引。如果列表中没有该元素返回-1
    // - update（position，element）修改某个位置的元素
    // - removeAt（position）从列表的特定位置移除一项
    removeAt(position){
        //
        if(position<0 || position===this.length-1)return null;
        // 不同情况
        let current=this.head;
        if(position===0){
            if(this.length===1){
                // 只有一个元素
                this.head=null;
                this.tail=null;
            }else{
                this.head=this.head.next;
                this.head.prev=null;
            }
        }else if(position===this.length-1){
            current=this.tail;
            this.tail.prev.next=null;
            this.tail=this.tail.prev;
           
        }else{
            // 中间
            let index=0;
            let current=this.head;
            let previous=null;
            while(index++ <position){
                previous=current;
                current=current.next;

            }
            previous.next=current.next;
            current.next.prev=previous;
          
        }
        return current.element;
    }
    // - remove（element）从列表中移除一项
    // - isEmpty（）判断是否为空
    // - size（） 返回链表包含的元素个数，与数组的length属性类似
    // - toString 由于列表项使用node类，就需要重写继承JavaScript对象默认的toString方法，让其输出数据的值
}
```

## 反转单项链表

```javascript
export const reverseList = (head) => {
  let next = null;
  let pre = null;
  while (head !== null) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};
```

## 反转双项链表

```javascript
export const reverseDoubleList = (head) => {
  let next = null;
  let pre = null;
  while (head !== null) {
    next = head.next;
    head.next = pre;
    head.last = next;
    pre = head;
    head = next;
  }
  return pre;
};
```

## 删除单项链表中的某一项

```javascript
// 删除链表中某一个数组
export const removeVal = (head, val) => {
  // 判断是不是头部删除
  while (head !== null) {
    if (head.element !== val) {
      break;
    }
    head = head.next;
  }
  let pre = head;
  let cur = head;
  while (cur !== null) {
    if (cur.element === val) {
      pre.next = cur.next;
    } else {
      pre = cur;
    }
    cur = cur.next;
  }
  return head;
};

```

## 快慢指针

## 回文链表

> 遍历链表，将链表中的每一个元素推入到一个栈里，遍历完成之后，将栈顶元素弹出来与链表的第一个元素相比（此时是逆序排序），如果其中有一个元素和栈中元素匹配不到就不是回文。（笔试时使用该方法）

整体实现思路，通过快慢指针先定位到链表的中心位置，把链表分成左右两段，右边的链表进行反转操作。定义两个指针，分别指向左右链表的第一个节点，一直往下判断判断，当节点中的元素不一致时则不是回文链表，返回`false`，如果右指针一直到`null`时，说明是回文链表。由于刚刚把链表分成了两段，我们需要把链表恢复回来。

> 这里需要注意的是，此过程会修改链表，在并发时，需要锁定链表的访问。

```typescript
export default function isPalindrome(head: ListNode | null) {
    if (head === null) return true
    // 获取链表中心位置
    let slow: ListNode = head
    let fast: ListNode | null = head
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next
        slow = (slow.next) as ListNode
    }
    // 找到前半部分链表的尾节点。
    let mid = slow
    // 反转后面的链表
    let reList = reverseList(mid.next)
    let n1 = head
    let n2 = reList
    while (n2 !== null) {
        if (n1.element !== n2.element) {
            return false
        }
        n1 = n1.next as ListNode
        n2 = n2.next
    }

    // 恢复链表
    mid.next = reverseList(reList)
    console.log(head);
    return true
};
```

## 链表排序

![image-20220402113529601](https://raw.githubusercontent.com/QC2168/note-img/main/202204021135754.png)



## 常见面试题

1. 给定两个可能有环也可能无环的单链表，头节点head1和head2.请实现一个函数，如果两个链表相交，请返回相交的第一个节点，如果不相交，返回null

   - 要求：如果两个链表长度之和为N，时间复杂度要求达到O（N），额外空间复杂度要求达到O（1）

   - ```typescript
     // https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/xiang-jiao-lian-biao-by-leetcode-solutio-a8jn/
     function getIntersectionNode(headA: Node | null, headB: Node | null): Node | null {
         if (headA == null || headB == null) {
             return null;
         }
         // 指针
         let n1: Node | null = headA
         let n2: Node | null = headB
         while (n1 !== n2) {
             n1 = n1 === null ? n2 : n1.next
             n2 = n2 === null ? n1 : n2.next
         }
         console.log(n1);
         return n1;
     };
     ```

2. 能不能不给单链表的头节点，只给想要删除的节点，就能做到在链表上把这个点删掉？

   - 答：**无解，考的是内存管理方面，必须给头节点才能准确的删除节点**

# 哈希hash

只基于数组实现

- 优势
  - 非常快速的插入删除查找操作
  - 无论多少数据，插入和删除值需要接近常量的时间O（1）
  - 哈希表的数据比树还要快，基本可以瞬间查找到想要元素
  - 哈希比树的编码容易很多
- 缺点
  - 哈希表的数据没有顺序的，不能以一种固定的方式（如 从小到大）来遍历其中的元素
  - 通常，key是不允许重复的，不能放置相同key，用于保存不同的元素
- 哈希表到底是什么
  - 这是一个不好理解的地方，不像数组、链表、树一样直接画出来就知道它的结构了
  - 它的结构就是数组，但是它神奇的地方在于对下标值的一种转换，这种变换我们可以称之为哈希函数，通过哈希函数可以获取hashCode
- 哈希化
  - 将大数字转化成数组范围内下标的过程，我们就称之为 哈希化
- 哈希函数
  - 通常我们会将单词转成大数字，大数字在进行哈希化的代码实现放在一个函数中，这个函数我们称为哈希函数
- 哈希表
  - 最终将数据插入到这个数组，对整个结构的封装，我们称为哈希表
- 冲突
  - 链地址法
  - 开放地址法  寻找空白的单元格来添加重复的数据
    - 解决方案
      - 新插入的32本来应该插入到82的位置，但是这个位置已经有了数据
      - 我们发现3和5和9的没有任何数据的
      - 这个时候就可以寻找对应的空白位置来放这个数据
- 线性探测问题
  - 严重问题：聚集
  - 比如没有任何数据的时候，插入，23，24，25，26，意味2-3-4-5-6的位置都是空的
  - 这种一连串填充单元就叫做聚集
  - 聚集影响哈希表的**性能**， 无论 插入 查询 删除 都会影响
  - 解决： 二次探测 可以解决一部分这个问题
- 二次探测
  - 线性探测是连续插入的，在插入一个数据可能探测很长的距离
  - 二次探测主要优化的是探测时的步长
  - 线性探测：步长1的探测 比如下标值X开始，线性测试就是X+1、X+2 ... ...
  - 二次探测：对步长优化，下标值X开始，X+1²、X+2³ ... ...
- 再哈希法（常见解决方案）
  - 二次探测的算法的产生的探测序列步长是固定的 1、4、9、16 以此类推
  - 需要一种方法：产生一种依赖关键字的探测序列，而不是每一个都一样
  - 不同的关键字即使映射到相同的数组下标，也可以使用不同的探测序列
  - 再哈希法：关键字用另外一个哈希函数，再进行哈希化，用这次哈希化的结果作为步长
  - 对于指定的关键字，步长在整个探测中是不变的，不过不同的关键字使用不同的步长
- 二次哈希化具备如下特点
  - 和第一个哈希函数不同（**不要再使用上次的哈希函数，不然结果还是原来位置**）
  - **不能输出为0**（将没有步长，每次探测都是原地踏步，进入死循环）
- 设计出工作很好的哈希函数
  - stepSize = constant - （key % constant）
  - 其中constant是质数，且小于数组的容量
  - 例如 stepSize = 5 - （key % 5） ，满足需求，并且结果不可能是0
- 哈希化的效率
  - 执行插入和搜索操作效率是非常高的
    - 如果没有冲突 效率更高
    - 发生冲突 存取时间就依赖后来的探测长度
    - 平均探测长度以及平均存取时间，取决于**填装因子**，随着填装因子变大，探测长度也越来越大
    - 随着填装因子变大，效率下降的情况，在不同开放地方法方案中比链地址更严重。
  - 概念：装填因子
    - 装填因子  =  已经存放的数据量 / 总长度
    - 装填因子表示当前哈希表中已经**包含的数据项**和**整个哈希表长度**的**比值**
    - 装填因子 = 总数据项 / 哈希表长度
    - 开放地址法的装填因子最大是**1**，因为它必须寻找空白单元才能将元素放入
    - 链地址的装填因子 可以大于 1 ，因为拉链法可以无限的延伸下去 只要你愿意（当然后面效率就变低了）

## 优秀的哈希函数

- 一个好的哈希函数应该尽可能让计算的过程变得简单，提高计算的效率
  - 哈希表主要优点是它的速度，所以在速度上不能满足，那么就达不到设计的目的了
  - 提高速度的一个办法就是让哈希函数中尽量少有乘法和除法，因为他们的性能比较低
- 设计好的哈希函数具备优点
  - 快速计算
    - 优势在于效率 快速获取到hashCode 很重要
    - 通过快速的计算获取到元素对应的hashCode
  - 均匀分别
    - 无论是链地方法还是开放地方法，当多个元素映射同一个位置的时候，都会影响效率
    - 所以，优秀的哈希函数应该尽可能将元素映射到不同位置，让元素在哈希表中均匀的分布
  

## 霍纳法则

## 哈希扩容的思想

## 扩容

- 目前，我们是将所有的数据项放在长度 8的数组中的
- 因为我们使用**链地址法**，loadFactor可以大于1，所以这个表可以无限制插入新数据
- 随数据的增多，每个index对应的bucket会越来越长，效率降低（线性查找）
- 所以，合适的情况下要对数组进行**扩容**double

## 如何扩容

- 扩容可以简单的将容量增大两倍
- 但，所有数据项一定要同时进行修改（重新调用哈希函数，获取不同的位置）
- 比如hashCode=12的数据项，在length=8时候，index=4，在长度为6的时候呢？index=12
- 这是一个耗时过程，如果数组需要扩容，这个过程是必要的



## 扩容函数

- step 1：先将之前数组保存起来，因为我们等会将stroage =[]
- step 2： 之前的属性值需要重置
- step 3：遍历所有的数据项，重新插入到哈希表中
- 什么时候需要调用扩容函数
  - 每次put完，判断是否调用



## 什么情况下扩容呢

- 比较常见的情况是**loadFactor>0.75**的时候进行扩容
- 比如java的哈希表就是在装填因子大于0.75的时候，对哈希表进行扩容的

## 容量质数

- 虽然，在链地址法中将容量设置为质数，没有在开房地址法中重要
- 但在链地址法中质数作为容量也更利于数据的均匀分别，所以，这一步还是要完成的
- 也是一个常见的面试题  **判断一个是不是质数**
- 质数的特点
  - 质数 也称为素数
  - 表示大于1的自然数种，只能被1和自己整除的数



```javascript
const MAX_LOAD_FACTOR = 0.75;
const MIX_LOAD_FACTOR = 0.25;

export function hashFunc(str, max) {
  // 定义hashCode
  let hashCode = 0;

  // 霍纳
  // ((2n+5)31+1)31+6=3=31
  for (let i = 0; i < str.length; i++) {
    hashCode = 31 * hashCode + str.charCodeAt(i);
  }
  hashCode = hashCode % max;
  return hashCode;
}
// 判断是不是质数
// 性能较低
// export function isPrime(number){
// for(let i=2;i<number;i++){
//   if(number%i===0){
//     return false
//   }
// }
// return true
// }
export function isPrime(number) {
  // 获取 number 平方根
  let temp = Math.ceil(Math.sqrt(number));
  for (let i = 2; i < temp; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export class HashTable {
  constructor() {
    this.storage = []; //数组储存元素
    this.conut = 0; // 当前储存多少元素
    this.limit = 7; // 总个数  容量
  }

  // 哈希函数
  hashFunc(str, max) {
    // 定义hashCode
    let hashCode = 0;

    // 霍纳
    // ((2n+5)31+1)31+6=3=31
    for (let i = 0; i < str.length; i++) {
      hashCode = 31 * hashCode + str.charCodeAt(i);
    }
    hashCode = hashCode % max;
    return hashCode;
  }

  // 放入/修改元素 HashMap -> {key:value}
  put(key, value) {
    // 1. 根据key 映射index
    const index = this.hashFunc(key, this.limit);

    // 2. 取出数组
    let bucket = this.storage[index];
    // 判断这个位置是不是一个数组
    if (bucket === undefined) {
      bucket = [];
      this.storage[index] = bucket;
    }

    // 3.查询原有值
    // 插入 / 修改
    // 判断有没有被覆盖
    let overide = false;
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        overide = true;
      }
    }

    //4. 没有覆盖  操作新增
    if (!overide) {
   bucket.push([key, value]);
   this.conut++;
      if (this.conut > this.limit * MAX_LOAD_FACTOR) {
        let newLimit = this.limit * 2;
        newLimit = this.getPrime(newLimit);
        this.resize(newLimit);
      }
    }

    // !overide && this.conut > this.limit * MAX_LOAD_FACTOR;
    // let newLimit = this.limit * 2;
    // newLimit = this.getPrime(newLimit);
    // this.resize(newLimit);
  }

  // 根据key 获取value
  get(key) {
    // 通过key 获取下标值 （index）
    const index = this.hashFunc(key, this.limit);

    // 2. bucket
    const bucket = this.storage[index];
    if (bucket === undefined) return null;

    //3. 找数据
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i];
      }
    }
    return null;
  }

  // 根据key 删除element
  remove(key) {
    // 通过key 获取下标值 （index）
    const index = this.hashFunc(key, this.limit);
    // 2. bucket
    const bucket = this.storage[index];
    if (bucket === undefined) return null;

    // 3. 删除
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this.conut--;
        if (this.limit > 8 && this.conut < this.limit * MIX_LOAD_FACTOR) {
          let newLimit = Math.floor(this.limit / 2);
          newLimit = this.getPrime(newLimit);
          this.resize(newLimit);
        }
        return tuple;
      }
      return null;
    }
  }

  isEmpty() {
    return this.conut === 0;
  }

  size() {
    return this.conut;
  }

  // 扩容函数 or 缩小容量
  resize(newLimit) {
    // 1.保存原先的数组中的内容
    let oldStorage = this.storage;
    // 2. 重置属性
    this.limit = newLimit;
    this.storage = [];
    this.conut = 0;
    // 3. 取出oldStorage所有元素
    oldStorage.forEach((bucket) => {
      if (bucket === null || bucket === undefined) return;
      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i];
        this.put(tuple[0], tuple[1]);
      }
    });
  }
  isPrime(number) {
    // 获取 number 平方根
    let temp = Math.ceil(Math.sqrt(number));
    for (let i = 2; i < temp; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  getPrime(number) {
    while (!isPrime(number)) {
      number++;
    }
    return number;
  }
}
```

# tree

## 树的特点

- 树通常一个**根**，链接着根的是**树干**
- 树干到上面之后会进行分叉成**树枝**，树枝还会分叉成更小的**树枝**
- 在树枝的最后是**叶子**

## 树结构术语

1. 节点的度（Degree）节点的**子树个数**
2. 树的度：树的所有节点中**最大的度数**
3. 叶节点（Leaf）：**度为0的节点**（也称为叶子节点）
4. 父节点（Parent）：有子树的节点是其子树的根节点的父节点
5. 子节点（Child）：若a节点是b节点的父节点，则称b节点是a节点的子节点；子节点也称孩子节点
6. 兄弟节点（Sibling）：具有同一父节点的各节点彼此是兄弟节点
7. 路径和路径长度：从节点n1到nk的路径为一个节点序列n1,n2, …ni是ni+1的父节点。路径所包含边的个数为路径长度
8. 节点的层次（Level）：规定**根节点在一层**，其他任一节点的层数是其父节点的**层数加1**
9. 数的深度（depth）树中所有节点中的**最大层次**是这棵树的深度



## 二叉树的概念

- 如果树种每个节点最多只能有2个子节点，这样的树就成为”二叉树“
  - 前面，我们已经提到二叉树的重要性，不仅仅是因为简单，也因为几乎上所有的树都可以表示成二叉树的形式
- 二叉树的定义
  - 二叉树可以为空，也就是没有节点
  - 若不为空，则它是由根节点和称为其左子树TL和右子树TR的两个不相交的二叉树组成
- 二叉树五种形态
- 二叉树有几个比较重要的特性，在笔试题中比较常见
  - 一个二叉树第i层的最大节点数为2^（i-1），i>=1；
  - 深度为k的二叉树有最大节点总数为2^k-1,k>=1
  - 对任何非空二叉树T，若n0表示叶节点的个数，n2是度为2的非叶节点那么两者满足关系n0=n2+1
- 完美二叉树 perfect binary tree  也称为 满二叉树full binary tree
  - 在二叉树中，除了最下一层的叶节点外，每层节点都有2个子节点，就构成了满二叉树
- 链表存储
  - 二叉树最常见的方式还是使用链表存储
  - 每个节点封装成一个node，里边包含存储的数据，左节点的引用，右节点的引用

## 二叉搜索/排序/查找树 BST binary search tree

- 二叉搜索树是一颗二叉树，可以为空
- 如果不为空，满足以下性质
  - 非空左子树的所有键值小于其根节点的键值
  - 非空右子树的所有键值大于其根节点的键值
  - 左、右子树本身也都是二叉搜索树
- 二叉搜索树的特点
  - 相对较小的值总是保存在**左节点**上，相对**较大的值**总是保存在**右节点**上
  - 查找效率非常高，这也是二叉搜索树中，搜索的来源

## 常见操作

- insert（key）向树种插入一个新的键
- search（key）在树中查找一个键，如果节点存在，则返回true，否则false
- inOrderTraverse 通过中序遍历方式遍历所有节点
- preOrderTraverse 通过先序遍历方式遍历所有节点
- postOrderTraverse 通过后序遍历方式遍历所有节点
- min 返回树中最小的值、键
- max 返回树中最大的值、键
- remove（key）从树中移除某个键

## 遍历二叉搜索树

- 树的遍历

  - 遍历一棵树是指**访问树的每个节点**，也可以对**每个节点进行某些操作**

  - 但是**树和线性结构不太一样**，线性结构我们通常按照从前到后的顺序遍历，但是树？

    应该从树的顶端还是底端？？左开始还是右开始

- 二叉树的遍历常见**三种方式**

  - 先序遍历
    - 遍历过程
      - 访问根节点
      - 先序遍历其左子树
      - 先序遍历其右子树
  - 中序遍历 （从大到小）
  - 后序遍历
  - 层序遍历 …

## 递归实现二叉树的遍历

- 递归实现二叉树的先序、中序、后序遍历

- 先序、中序、后序都可以在递归序的基础上加工出来
- 第一个到达一个节点就打印就是先序，第二个是中序，第三次是后序

## 非递归实现二叉树的遍历

- 如何递归函数都可以改成非递归方式
- 自己设计压栈来实现

实现二叉树的按层遍历

- 宽度优先遍历，用队列
- 通过设置flag变量的方式，来发现某一层的结束

## 二叉搜索树的删除

- 删除节点要从查找要删的节点开始，找到节点后，需要考虑三种情况：
  - 该节点是叶节点（没有子节点，比较简单）
    - 这种情况相对比较简单，我们需要检测current的left以及right是否都为null
    - 都为null之后还要检测一个东西，就是是否current就是root，都是为null，并且为根，那么就相当于清空二叉树
    - 否则就把父节点的left或者right字段设置为null即可
    - 如果只有一个单独的根，直接删除即可
  - 该节点有一个子节点（简单）
  - 该节点有两个子节点（复杂）
    - 规律
      - 如果删除的节点有两个子节点，甚至子节点还有子节点，这种情况下我们需要从下面的子节点中找到一个节点，来替换当前的节点
      - 但是找到这个节点的特征是被删除的节点下面所有节点中最接近被删除节点的
        - 这个节点怎么找
          - 比current小一点的节点，一定是current左子树的最大值
          - 比current大一点的节点，一定是current右子树的最小值
      - 前驱 and 后继
        - 这两个特别的节点，也有两个特别的名字
          - 比current小一点点的节点，称为current节点的前驱
          - 比current大一点点的节点，称为current节点的后继
- 先从查找要删除的节点入手
  1. 先找到要删除的节点，如果没有找到，不需要删除
  2. 找到要删除的节点
     1. 删除叶子节点
     2. 删除只有一个子节点的节点
     3. 删除有两个子节点的节点

```javascript
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // - insert（key）向树种插入一个新的键
  insert(key) {
    // 1.根据key创建node节点
    const newNode = new Node(key);

    // 2.如果树的空的，
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key > node.key) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    } else {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
  }
  // - search（key）在树中查找一个键，如果节点存在，则返回true，否则false
  search(key) {
    return this.searchNode(this.root, key);
  }
  search2(key) {
    let node = this.root;
    while (node !== null) {
      if (node.key > key) {
        node = node.left;
      } else if (node.key < key) {
        node = node.right;
      } else if (node.key === key) {
        return true;
      }
    }
    return false;
  }
  searchNode(node, key) {
    if (node === null) return false;
    if (node.key > key) {
      this.searchNode(node.left, key);
    } else if (node.key < key) {
      this.searchNode(node.right, key);
    } else if (node.key === key) {
      return true;
    }
  }

  // - preOrderTraverse 通过先序遍历方式遍历所有节点
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }
  preOrderTraverseNode(node) {
    if (node === null) return;
    console.log(node);
    this.preOrderTraverseNode(node.left);
    this.preOrderTraverseNode(node.right);
  }
  // - inOrderTraverse 通过中序遍历方式遍历所有节点
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }
  inOrderTraverseNode(node) {
    if (node === null) return;
    this.inOrderTraverseNode(node.left);
    console.log(node);
    this.inOrderTraverseNode(node.right);
  }

  // - postOrderTraverse 通过后序遍历方式遍历所有节点
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }
  postOrderTraverseNode(node) {
    if (node === null) return;
    this.postOrderTraverseNode(node.left);
    this.postOrderTraverseNode(node.right);
    console.log(node);
  }
  // - min 返回树中最小的值、键
  min() {
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
  // - max 返回树中最大的值、键
  max() {
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }
  // - remove（key）从树中移除某个键
  // 最复杂的
  remove(key) {
    //  找到要删除的节点
    //  记录状态
    // 当前
    let current = this.root;
    // 上一个
    let parent = null;
    // 是否左子节点
    let isLeftChild = true;

    // 2. 开始查找要删除的节点
    // 如果当前的key的值不等于目标值 继续循环
    // debugger;
    while (current.key !== key) {
      
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }
      // 没有找到
      if (current === null) return false;
    }

    // 3.找到节点 current
    // 情况一  删除的节点是叶子节点 没有子节点
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    // 情况二 删除节点只有一个子节点
    // 只有左子节点
    else if (current.right === null) {
      if (current === this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.right;
      }
      // 只有右子节点
    } else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.right;
      }
    }else{
      // 两个节点
      // 获取后继节点
      let successor = this.getSuccessor(current);

      // 2 判断是否根节点
      if(this.root === current){
        this.root=successor;

      }else if(isLeftChild){
        parent.left=successor;
      }else{
        parent.right=successor
      }

      successor.left=current.left;
    }

    return true;
  }

  getSuccessor(delNode){
    // sign data
    let successerParent=delNode;
    let successer=delNode;
    let current=delNode.right;


    // 2 seek node
    while(current!==null){
      successerParent=successer;
      successer=current;
      current=current.left;
    }


    // 3.如果后继节点不是删除节点的右节点
    if(successer!=delNode.right){
      successerParent.left=successer.right;
      successer.right=delNode.right
    }
    return successer;
  }
}

```

## 二叉树的序列化

## 分先序 中序 后序



## 堆

> 在JavaScript中没有内置堆，也没有优先队列，需要自己实现

堆结构是使用数组实现的在完全二叉树结构，堆分有**大根堆**（每一颗子树，最大值都是自己头节点的值，例如[6，5，3，0，1]），**小根堆** （任何一个节点，头节点都是最小的值，例如[6，1，3，0，5]）

堆结构分有`heapInset`和`heapify`操作，优先级队列结构即是堆结构

在堆中使用`heapSize`记录当前堆的大小，同时也记录下一个数据的插入时的下标。

## 堆排序

1. 先让整个数组都变成大根堆结构，建立堆的过程：
   1. 从上往下的方法，时间复杂度为`O(N*logN)`
   2. 从下往上的方法，时间复杂度为`O（N）`
2. 把堆的最大值和堆末尾的值交换，然后减少堆的大小之后，再去调整堆，一直周而复始，时间复杂度为`O(N*logN)`
3. 堆的大减小成0之后，排序完成

## 堆节点公式

获取一个节点的子左/右节点可通过  `2*i+1`、  `2*i+2`获取，获取一个节点的父节点可通过`（i-1）/2`获取（如果当前节点已经是父节点时，例如`（0-1）/2`，结果还是`0`，即本身节点）

| 节点位置 | i 为堆数组的下标值 |
| -------- | ------------------ |
| 子左节点 | `2*i+1`            |
| 子右节点 | `2*i+2`            |
| 父节点   | `（i-1）/2`        |

## 创建堆的方式

常见的方法有插入创建和原地创建

- 插入创建即是再每一次插入一个节点时，调用相关方法实现一个大根堆/小根堆
- 原地创建即是给定一组节点，调用相关方法实现一个大根堆/小根堆

## 插入式创建

- 和push数组一样，将插入的节点插入到堆的尾部，将插入的节点和他的父节点比较（从后往前一直交换到根节点），如果不符合大根堆/小根堆条件时进行替换。

## 代码相关

```typescript
push(item: number) {
  this.heap.push(item);
  this.heapSize++;
  this.heapify(this.heap);
}
heapify(heap: number[]) {
  //   时间复杂度 O(logn)
  // 获取当前尾部位置
  let i = heap.length - 1;
  let p = (i - 1) >> 1;
  while (p > 0 && heap[i] > heap[p]) {
    this.swap(heap, i, p);
    i = p;
  }
}
```

## 原地建堆

这个方法有两种方案实现，一种是从前往后建堆，将节点和父节点进行对比，另外一种是从后往前建堆，将当前节点和左右子节点进行对比。

## 相关代码

```typescript
//   原地建堆
buildMax(heap: number[]) {
  let i = 0;
  let heapSize = heap.length;
  while (i < heapSize) {
    this.heapify(heap);
    i++;
  }
  return heap;
}
```

## 堆排序

堆排序思路如下

1. 先将当前堆转换为一个大根堆，将当前堆最顶元素（第一个元素）与最后一个有效子元素（未排序之前的）交换位置，并将当前有效排序位置减一，重复以上步骤，直到有效序列值1时完成。

```javascript
//  堆排序
sort(heap: number[]) {
  // 构建大顶堆
  this.buildMax(heap);
  // 设置堆的初始有效序列长度为 items.length - 1
  let heapSize = heap.length - 1;
  for (let i = heap.length - 1; i > 0; i--) {
    // 交换堆顶元素与最后一个有效子元素
    this.swap(heap, 0, i);
    // 有效序列长度减 1
    heapSize--;
    // 堆化有效序列(有效序列长度为 currentHeapSize，抛除了最后一个元素)
    this.buildMax(heap, heapSize);
  }
  return heap;
}

// heap.sort([6,5,4,1,3,2,8])
// [1, 2, 3, 4, 5, 6, 8]
```

# 比较器

1. 比较器的实质就是重载比较运算符
2. 比较器可以很好的应用在特殊标准的排序上
3. 比较器可以很好的应用在根据标准排序的结构上
4. 写代码变得异常容易，还用于范型编程

# 前缀树

`trie`，前缀树、又称字典树，他是一种有序的树，是一个数组，里面存放着对象，健通常为字符串，每一个对象即是一个节点，而节点的位置由树的位置决定。

<img src="https://raw.githubusercontent.com/QC2168/note-img/main/202204012223125.png" alt="image-20220401222307068" style="zoom:67%;" />

## 应用场景

大多数情况下，他被应用到搜索提示中，匹配搜索前缀、字符串检索、字符串最长公共前缀。

利用公共的前缀来减少查询的时间，减少重复的查询和字符串比较。

## 实现前缀树

前缀树节点分为pass，end，next，分别存放着当前节点有多少个单词经过这个节点，这个节点是否为一个单词的结尾，下一个节点的路。

## 实现前缀树节点

next这里我使用Map记录，即`Map<string, TNode>`

```typescript
class TNode {
  pass: number;
  end: number;
  next: Map<string, TNode>;
  constructor() {
    this.pass = 0;
    this.end = 0;
    this.next = new Map();
  }
}
```

## 实现前缀树

```typescript
export default class Trie {
  root: TNode;
  constructor() {
    this.root = new TNode();
  }
}
```

## insert

```typescript
// 插入
insert(word: string): void {
  if (word.length === 0) {
    return;
  }
  let cur: TNode = this.root;
  for (let i: number = 0; i < word.length; i++) {
    // 判断当前节点是否有 word i的路
    if (!cur.next.has(word[i])) {
      cur.next.set(word[i], new TNode());
    }
    let node = cur.next.get(word[i]) as TNode;
    node.pass++;
    if (i === word.length - 1) node.end++;
    cur = node;
  }
}
```

## search

```typescript
// 查找
search(word: string): boolean {
  let cur: TNode = this.root;
  for (let i: number = 0; i < word.length; i++) {
    if (cur.next.get(word[i])) {
      cur = cur.next.get(word[i]) as TNode;
      if (i === word.length - 1 && cur.end > 0) return true;
    }
  }
  return false;
}
```

## startsWith

```typescript
// 查找是否有指定字符串开头的
startsWith(word: string): boolean {
  let cur: TNode = this.root;
  for (let i: number = 0; i < word.length; i++) {
    if (!cur.next.get(word[i])) return false;
    cur = cur.next.get(word[i]) as TNode;
  }
  return true;
}
```

## 线段树

线段树是一种[二叉搜索树](https://baike.baidu.com/item/二叉搜索树)，与[区间树](https://baike.baidu.com/item/区间树)相似，它将一个区间划分成一些单元区间，每个单元区间对应线段树中的一个叶结点。它有可能是不完全二叉树，但一定是平衡二叉树
> 堆也是平衡二叉树
> 最经典的线段树问题：区间染色，区间查询（查询一个区间最大值，最小值，区间数字和）





## 计数排序

计算排序是一种线性时间复杂度的排序，计算排序要求输入的数据必须有确定范围的整数。输入的数据会另外申请一块新的空间进行计数统计。



## 基数排序

每个数都是十进制

# 补充 2022/3/19

## 时间复杂度

评估算法优势的核心指标

1. 时间复杂度 流程决定
2. 额外空间复杂度 流程决定
3. 常数项时间 实现细节决定

## 常数操作

指执行时间固定的操作即是常数时间的操作.反之都不是常数操作

常见的常数操作是有加减乘除、位移、赋值、比较、自增、自减、数组寻址

## 算法流程的时间复杂度

当表达式建立完成后，只要把**最高阶项留下**即可，低阶项都去掉，高阶项的系数也去掉

记为　O（忽略掉系数的高阶项）

> 时间复杂度只是一个很重要的指标而已
>
> 假设两个时间复杂度一样的算法，你还想继续拼下去，就进入拼常数时间的阶段了 （简称 **拼常数项**）

## 常见的时间复杂度

> O（1）
>
> O（logN）
>
> O（N）
>
> O（N*logN）
>
> O（N^2） O（N^3）  ... O（N^K）
>
>  O（2^N） O（3^N）  ... O（K^N）
>
> O（N!）

## 实践时间复杂度估算

## 选择排序

```typescript
let arr:number[]=[1,3,4,5,2,6]

let temp:number
for(let i :number=0;i<arr.length-1;i++){
    let minIndex=i
    for(let j=i+1;j<arr.length;j++){
       if(arr[j]<arr[minIndex]){
        minIndex=j
       }
    }
    temp=arr[i];
    arr[i]=arr[minIndex]
    arr[minIndex]=temp
}
```

## 冒泡排序

```typescript
let arr: number[] = [1, 3, 4, 5, 2, 6];

for (let i: number = arr.length - 1; i > 0; i--) {
  for (let j: number = 0; j <= i; j++) {
    let temp: number;
    if (arr[j] > arr[j + 1]) {
      temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
```

## 插入排序

```typescript
let arr: number[] = [1, 5, 6, 4, 8];

for (let i: number = 0; i < arr.length; i++) {
  for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
    let temp = arr[j + 1];
    arr[j + 1] = arr[j];
    arr[j] = temp;
  }
}
console.log(arr);
```

## 排序算法总结

| 排序     | 时间复杂度  | 额外空间复杂度 | 稳定性 |
| -------- | ----------- | -------------- | ------ |
| 选择排序 | O（N^2）    | O（1）         | 无     |
| 冒泡排序 | O（N^2）    | O（1）         | 有     |
| 插入排序 | O（N^2）    | O（1）         | 有     |
| 归并排序 | O（N*Logn） | O（N）         | 有     |
| 随机快排 | O（N*Logn） | O（LogN）      | 无     |
| 堆排序   | O（N*Logn） | O（1）         | 无     |
| 计数排序 | O（N）      | O（M）         | 有     |
| 基数排序 | O（N）      | O（N）         | 有     |

1. 不基于比较的排序，对数据有严格要求，不容易改写
2. 基于比较的排序，只要设定好两个数据之间怎么排序即可，还可以直接复用
3. 基于比较的排序，时间复杂度的极限是`O（N*logN）`
4. 时间复杂度`O（N*logN）`、额外空间复杂度低于`O（N）`、且稳定的基于比较的排序是不存在的
5. 为了绝对的速度选择**快排排序**，为了省空间选择**堆排序**，为了稳定选择归并排序

## 常见的坑

1. 归并排序的额外空间复杂度可以变成`O（1）`，归并排序内部缓存法，但是将变得不再稳定
2. 原地归并排序是垃圾贴，会让时间复杂度变成`O（N^2）`
3. 快速排序稳定性改进，但需要01稳定排序，但是会对数据要求提高很多

## 额外空间复杂度

在实现算法过程中，你需要开辟一些空间来支持你的算法流程，作为输入参数、输出结果的不算额外空间，因为这些都是必要的

除此之外，你的流程如果还需要开辟空间才能让你流程继续下去，这部分空间就是额外空间

如果只需要开辟有限几个变量，额外空间复杂度就是O（1）

拿上面冒泡排序来讲，其中的temp在每次循环创建后销毁，他是复杂度就是O（1）

```typescript
let arr: number[] = [1, 3, 4, 5, 2, 6];

for (let i: number = arr.length - 1; i > 0; i--) {
  for (let j: number = 0; j <= i; j++) {
    let temp: number;
    if (arr[j] > arr[j + 1]) {
      temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
```

## 归并排序

`T(N)=2*T(N/2)+O(N^1)`，根据`master`公式可得到时间复杂度是`O（N*logN）`，`merge`过程需要辅助数组，所以空间复杂度为`O（N）`，归并排序的实质是把比较行为变成了有序信息并传递，比`O（N^2）`的排序快

```typescript
static merge<T = number>(leftArr: T[], rightArr: T[]): T[] {
  let help: T[] = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      help.push(leftArr.shift() as T);
    } else {
      help.push(rightArr.shift() as T);
    }
  }
  return [...help, ...leftArr, ...rightArr];
}
static mergeSort<T = number>(arr: T[]): T[] {
  if (arr.length === 1) {
    return arr;
  }
  let mid: number = arr.length >> 1;
  let leftArr: T[] = arr.slice(0, mid);
  let rightArr: T[] = arr.slice(mid);
  return Sort.merge(Sort.mergeSort(leftArr), Sort.mergeSort(rightArr));
}
```

在一般刷题或者比赛中，一道算法题最优解是在**先时间复杂度尽可能低，后再使用最低的空间复杂度**这就是最优解。

## 二分算法



## 打表法 找规律

当一道题是**输入参数和输出参数只有一个时**，可以使用打表法，先使用暴力法跑一遍题目，再从过程中取”规律“，按照规则来解答

> 如果想严格判断规律是否正确，写一个对数器跑到Max_value即可，先自测一遍

## 栗子 

```typescript
function largestPalindrome(n: number): number {
  if (n == 1) return 9;
  if (n == 2) return 987;
  if (n == 3) return 123;
  if (n == 4) return 597;
  if (n == 5) return 677;
  if (n == 6) return 1218;
  if (n == 7) return 877;
  if (n == 8) return 475;
  if (n == 9) return 121;
}
```

## 矩阵处理技巧

zigzag矩阵

转圈打印矩阵

## 异或运算

异或运算 相同为0 不同为1

同或运算 相同为1 不同为0

异或运算的性质：`0^N=N`  `N^N=0`

**异或运算满足交换律和结合律**

**更快捷**的一种记法：无进位相加，例如5^7，对应二进制数是101^111，从个位开始算，1+1需要进位，把进位数去掉，保留本身的0，接下来是0+1=1，所以是1，1+1=10，保留个位数，最终010，等于2

## 异或运算题目

## 题目一

两个数的交换，不产生额外的内存空间

```typescript
let arr=[1,2,3]

arr[0]=arr[0]^arr[1]
arr[1]=arr[0]^arr[1]
arr[0]=arr[0]^arr[1]

console.log(arr); // [2, 1, 3]
```

## 题目二

一个数组中有一种数出现了奇数次，其他数都出现了偶数次，怎么找到并打印这种数

```typescript
let arr = [1, 1, 1, 1, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5];
let eor = 0;
for (let i = 0; i < arr.length; i++) {
  eor ^= arr[i];
}

console.log(eor);
```

## 题目三

怎么将一个数最左侧的1提取出来

```typescript
let num: number = 20;
num = num & (~num + 1);
console.log(num); // 4
```

## 题目四

一个数组中有两种数出现了奇数次，其他数都出现了偶数次，怎么找到并打印这两种数

```typescript
let arr = [1, 1, 1, 1, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5];
let eor = 0;
for (let i = 0; i < arr.length; i++) {
  eor ^= arr[i];
}
let right = eor & (~eor + 1);
let oneAddTimes = 0;
for (let i = 0; i < arr.length; i++) {
  if ((right & arr[i]) != 0) {
    oneAddTimes ^= arr[i];
  }
}
console.log(oneAddTimes); // 3
console.log(oneAddTimes^eor); // 5
```

## 题目五

计算一个数中，出现1的次数

```typescript
const bit1Count = (num: number): number => {
  let count: number = 0;
  while (num !== 0) {
    // 先取最右边一位
    let rightOne = num & (~num + 1);
    count++;
    num ^= rightOne;
  }
  return count;
};

bit1Count(3); // 2
```



## 贪心算法

1. 最自然智慧的算法
2. 用一种局部最功利的标准，总是做出在当前最好的选择
3. 难点在于证明局部最功利的标准可以得到全局最优解
4. 对于贪心算法的学习主要以增加阅历和经验为主
