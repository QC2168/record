// for or 场景
const iterableObj = {
  names: ["abc", "cba", "nba"],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] };
        } else {
          return { done: true, value: undefined };
        }
      }
    };
  }
};

const newNames = [...iterableObj];
// object虽然不是可迭代对象，但是可以使用扩展运算符
// ES9 2018中新的一个特性
// obj={...obj}

// 数组解构
names = ["abc", "cba", "nba"];
const [name1, name2] = names;
console.log(name1);
console.log(name2);

const set1 = new Set([1, 2, 3]);
const set2 = new Set(123);
