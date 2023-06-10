---
title: typescript中的module和namespace有什么区别
tags: [interview]
---


### module

`module`指将代码封装成模块化的结构，使得代码更加易于维护和重用

### namespace

`namespace`是一种逻辑上的组织方式，用于将代码分组，防止命名冲突

### declare

`declare`关键字用于声明已经存在的变量、函数、类或命名空间等，这些声明一般来自于第三方库或模块。使用`declare`关键字可以告诉`TypeScript`编译器，这些变量、函数、类或命名空间已经存在，并且告知其类型信息，从而避免编译器报错