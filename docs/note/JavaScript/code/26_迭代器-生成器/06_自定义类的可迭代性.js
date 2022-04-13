class Person {}
const p1 = new Person();
const p2 = new Person();
const p3 = new Person();

// 创建一个教室类，创建出来的对象都是可迭代对象
class Classroom {
  constructor(address, name, students) {
    this.address = address;
    this.name = name;
    this.students = students;
  }
  entry(newStudent) {
    this.students.push(newStudent);
  }
  [Symbol.iterator]() {
    const index = 0;
    return {
      next: () => {
        if (index < this.students.length) {
          return { done: false, value: this.students[index++] };
        } else {
          return { done: true, value: undefined };
        }
      },
      return: () => {
        console.log("迭代器提前停止了");
        return { done: true, value: undefined };
      }
    };
  }
}

const classroom = new Classroom("明兴楼", "机房1", ["QC2125", "_island"]);
classroom.entry("jj1");
classroom.entry("jj2");
console.log(classroom);
