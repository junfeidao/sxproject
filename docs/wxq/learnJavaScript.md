# 这里记录javaScript相关知识

## 箭头函数

```var f = v => v;```f是函数名，中间的v是参数，箭头后面的v是返回值.有多个参数或者没有参数时参数要用括号括起来。

### 箭头函数与普通函数的区别

* 更加简洁
* 简化回调函数
例如:

```javascript

// 正常函数写法
[1,2,3].map(function (x) {
  return x * x;
});

// 箭头函数写法
[1,2,3].map(x => x * x);

// 正常函数写法
var result = values.sort(function (a, b) {
  return a - b;
});

// 箭头函数写法
var result = values.sort((a, b) => a - b);

```
* this是固定的，定义时就确定
* 箭头函数不可以使用new
* 不可以用arguments对象
* 不可以用yield命令

## 值传递和引用传递

* 值传递：如果一个基本的数据类型绑定到某个变量，我们可以认为该变量包含这个基本数据类型的值。当我们使用=将这些变量赋值到另外的变量，实际上是将对应的值拷贝了一份，然后赋值给新的变量。我们把它称作值传递。
* 引用传递：如果一个变量绑定到一个非基本数据类型(Array, Function, Object)，那么它只记录了一个内存地址，该地址存放了具体的数据。对象是通过引用传递，而不是值传递。也就是说，变量赋值只会将地址传递过去。

## == 和 ===

对于引用类型的变量，==和===只会判断引用的地址是否相同，而不会判断对象具体里属性以及值是否相同。因此，如果两个变量指向相同的对象，则返回true。  

如果是不同的对象，及时包含相同的属性和值，也会返回false。  

如果想判断两个不同的对象是否真的相同，一个简单的方法就是将它们转换为字符串然后判断。
```javascript

var arr1str = JSON.stringify(arr1);
var arr2str = JSON.stringify(arr2);

console.log(arr1str === arr2str); // true

```

## 纯函数

对于一个函数，给定一个输入，返回一个唯一的输出。除此之外，不会对外部环境产生任何附带影响。我们机会称该函数为纯函数。
```javascript

function changeAgePure(person) {
    var newPersonObj = JSON.parse(JSON.stringify(person));
    newPersonObj.age = 25;
    return newPersonObj;
}
var alex = {
    name: 'Alex',
    age: 30
};
var alexChanged = changeAgePure(alex);
console.log(alex); // { name: 'Alex', age: 30 }
console.log(alexChanged); // { name: 'Alex', age: 25 }

```
通过JSON.sringify将对象变为一个字符串，然后再通过JSON.parse将字符串变回对象。通过该操作会生成一个新的对象。深拷贝的常用方式。

### 一段代码解读

```javascript

function changeAgeAndReference(person) {//2.地址传入函数
    person.age = 25;  //更改地址存放的对象的属性
    person = {    // person接收了一个新的地址,与之前的地址断了联系，不会受到之前地址的影响了
        name: 'John',
        age: 50
    };
    return person;
}
var personObj1 = {  //1.定义personObj1，地址
    name: 'Alex',
    age: 30
};
var personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); //name:ALEX age25
console.log(personObj2);  //name:John age:50

```
每一个对象对应一个地址，当一个变量赋值“{}”时就会新的地址建立关系。总结出下边这段代码：

```javascript

var obj1 = { a: 1 };
var obj2 = obj1; //浅拷贝,在给obj2用{}赋值之前，操作可以影响到obj1
obj2.a = 3  //此时obj2的地址还是和obj一样的
obj2 = {b:1};  //有大括号，接收新地址，所以不会影响到obj1了
console.log(obj1) //a:3
console.log(obj2)  //b:1

```

