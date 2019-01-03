# JavaScript 核心：object(对象)

## 什么是对象

需要保存多个变量或者方法时使用的一种引用变量

## 对象的创建

- 工厂模式
  - 通过构造函数创建一个对象，然后将函数的形参赋值给变量
  - 代码演示

```javascript
function createPreon(name, age) {
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.setName = function() {
    alert(name);
  };
}
var p = new preson("zgl", 25);
```

- 构造函数
  - 通过一个构造函数进行创建一个对象
  - 代码演示

```javascript
functuon Preson(name,age){
this.name=name;
this.age=age;
this.setName=function(){
alert(name);
}
}
let adult=new Preson("zgl",25);
```

- 原型模式
  - 什么是原型
    每一个构造函数在创建时都会产生一个 prototype 属性(指针)，这个指针指向了原型对象，而实例也会产生一个[[prototype]],这个属性通常不能直接获取，需要使用**proto**进行读取，而他们所指向的公共区域就是原型对象(原型对象本来就存在，与构造函数是否实例或者创建没有关系)，而原型对象也会产生一个 construct 属性指向构造函数
  - 画图解释(这样比较清晰)
  - 代码演示

```javascript
function preson() {
  preson.name = name;
  preson.age = age;
  preson.setName = function() {
    alert(name);
  };
}
var p = new preson("zgl", 25);
```

- 缺点：原型模式直接修改的是原型对象，当用对象字面量修改原型对象时会导致 construct 指针指向 Object，而并非 preson，所以一般都会加一句 construct：preson，由于原型模式直接访问的是原型对象，存在了一个安全隐患，比如我想访问自己的东西，由于属性名或者方法名相同而屏蔽了原型对象的属性或者方法 - 原型加构造函数（组合创建对象,最常用） - 自己特有的属性放在构造函数里，共有的方法放在原型对象里（切记不能会用字面量添加，否则会发生 construct 指针指向了 object） - 代码演示
  ```javascript
  function Preson（name，age）{
  this.name=name;
  this.age=age;
  preson.prototype.setName=function(){
  alere(name);
  }
  }

- 对象寄生构造函数模式
  - 与构造函数十分类似,只不过是对象是寄生在构造函数中
  - 代码演示

```bash
function createPreon(name,age){
var obj=new Object();
obj.name=name;
obj.age=age;
obj.setName=function(){
alert(name)
}
return obj //与工厂模式相比就多了一个返回对象
}
```

- 稳态模式(既不采用 this 也不采用 new 关键词)
- 代码演示

```bash
function createPreon(name,age){
var obj={
obj.name=name;
obj.age=age;
obj.setName=function(){
alert(name)
}
}
}
var p=preson("zgl",25);
```
