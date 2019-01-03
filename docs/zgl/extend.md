任何面向对象的语言都离不开一个继承问题,继承分为接口继承和实现继承，由于 js 的函数名不代表任何意义（签名），所以严格来讲 js 不不存在接口继承

### js 是怎么实现继承的

- 原型链的继承
  - 原理 :在使用原型链时我们发现构造函数的 prototype 和实例的--proto--指向的都是构造函数的原型对象，所以我们可以利用原型链来进行实现继承，只要更改原型链即可
  - 代码演示

```javascript
   function parent (name.age){
     this.name=name;
      this.age=age;
      this.setName=function(){
        alert(name);
        }
   }
   var child.prototype=new prent()//实现继承的核心
var friend=new child();
```

- 缺点:子函数不能传递形参，不能实现父函数特有的属性和方法继承

---

- 借助构造函数实现继承

```javascript
      function parent (name.age){
     this.name=name;
      this.age=age;
      this.setName=function(){
        alert(name);
        }
   }
  functon child(){
parent.call(this,name,age)
}
var friend=new child();
```

- 缺点不能实现父函数原型里面的属性及方法的继承

---

- 组合继承
- 将父函数特有的属性或者方法通过借助构造函数继承，父函数原型里的方法或者属性通过原型链继承
- 代码演示

```javascript
function parent(name, age) {
  (this.age = age), (this.name = name);
}
function child() {
  parent.call(this, name, age);
}
child.prototype = new parent();

child.prototype.getAge = function() {
  alert(this.age);
};
```

- 原型式继承(借用 object()函数，在以有的对象的基础上创建一个新的对象)
- 借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型
- 代码演示

```bash
function object(o){
function F(){}
F.prototype = o;
return new F();
}
```

- 先在 object 内部建立了一个临时性的函数，然后将该临时的构造函数的原型属性指向了 object()函数内部的变量 o,然后返回了 F，在 ES5 中规范了这个方法的使用为 Object.create()
- 寄生式继承

```javascript
function createAnother(o) {
  var obj = object(o);
  obj.sayHi = function() {
    alert("hi");
  };
  return obj;
}
```

- 任何能有返回新对象的函数都适用
- 寄生式组合继承
  借助 inheritPrototype()方法实现继承，该方法传 2 个参数，第一个为子函数，第二个为父函数（主要用于实现原型方法的继承
