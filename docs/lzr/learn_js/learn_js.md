# 什么是JavaScript
* JavaScript是一种运行于JavaScript解释器/引擎中的解释性（运行前不需要编译的，运行前不会检查错误的，知道碰到错误为止）脚本语言
## 运算符
* 给定x=10和y=5
```
运算符|例子 |等价于|结果
   = | x=y |     |x=5
  += |x+=y |x=x+y|x=15
  -= |x-=y |x=x-y|x=5
  *= |x*=y |x=x*y|x=50
  /= |x/=y |x=x/y|x=2
  %= |x%=y |x=x%y|x=0
```
## 自增自减
* i++;  //相当于i=i+1;
* i--;  //相当于i=i-1;
* i=1;j=i++;  //i结果为2，j结果为1
* i=1;j=++i;  //i结果为2，j结果为2
## 逻辑运算符
* && 逻辑与
* || 逻辑或
```
var score = 55//66//88 ;
var result = score>=60 && score<=80;
console.log(result);
```
*  输出结果：false//true//false
## 三目运算符
```
var score = 88//66//55;
var result = score >=80? "优秀" :(
  score>=60? "合格" : "不合格"
)；
console.log(result);
```
* 输出结果：优秀//合格//不合格
# 1.什么是函数
* 函数（function），也可以被称为方法（method），或者过程（procedure）
## 2.函数的声明
* 语法：
```
function 函数名(){
  可执行语句；
}
```
## 3.函数的调用
* 语法;
```
函数名称()
```
## 4.参数
```
function printInfo(userName,userPwd){
  console.log('用户名:'+userName + '密码:'+userPwd);
}
printInfo('Tom','123');
```
* 形参：需要传递过去信息，但是没有具体的值(userName,userPwd)
* 实参：调用时有具体的值(Tom,123)
## 5.带返回值的函数
```
function add(num1,num2){
  return num1 + num2;
}
var result = add(10,20);
console.log(result);
```
* 执行结果：30 (将10,20赋值给num1,num2;并执行num1+num2)
## 6.作用域
* 作用域就是变量或函数的可访问范围。它控制着变量或函数的可加性和生命周期（在JS中作用域可分为：1.函数作用域，只在当前函数内可访问；2.全局作用域，一经定义，代码的任何位置都能访问）
```
var n=100;//全局变量n
function fun(n){//参数变量也是局部变量
  n-=3;//修改的是局部变量n
  console.log(n);//输出的是局部变量n
}
fun(n);//按值传递，方法内输出97;
console.log(n);//输出全局变量的值:100
```

## 7.循环语句
### (1)while循环
* 语法：
```
while(boolean表达式){
  循环体语句;
}
```
//先判断再执行（最少一次循环都不执行）
### (2)do...while循环
* 语法:
```
do{
  可执行语句;
}while(boolean表达式);
```
//先执行循环操作，再判断循环条件（至少执行一次循环操作）
### (3)for循环
* 语法:
```
for (表达式1;表达式2;表达式3){
  循环体语句;
}
```
* 表达式1：在循环（代码块）开始前执行
* 表达式2：定义运行循环（代码块）的条件
* 表达式3：在循环（代码块）已被执行之后执行
## 8.数组
* 内存中连续存储多个数据的数据结构，再起一个统一的名字
### (1)索引数组
* 创建方式
```
var arr1 = [];  //定义一个不含元素的数组
var arr2 = [1,2,3];  //定义一个包含3个元素的数组
var arr3 = new Array();  //定义一个不包含元素的数组
var arr4 = new Array("a","b","c");  //定义一个三个字符串的数组
```
* 遍历数组：依次访问数组中的每个元素，对每个元素执行相同的操作
```
for(var i=0;i<arr.length;i++){
  arr[i]//当前正在遍历的元素
}
```
* 三个不限制：1.不限制数组的元素个数；2.不限制下标越界；3.不限制元素的数据类型
### (2)关联数组
* 可自己定义下标名称的数组
* 创建方式：1.创建一个空数组；2.向空数组中添加新元素，并自定义下标名称
* 遍历关联数组:for in循环
```
for(var key in hash){
  key  //只是元素的下标名
  hash[key]  //当前元素值
}
```
### (3)索引数组与关联数组的对比
* 索引数组：1.以字符串输出；2.下标是数字；3.length属性有效；4.访问元素用数组名["下标"]；5.可用for循环遍历；6.查找需要遍历；7.查找受存储位置影响，速度受数组元素个数影响
* 关联数组:1.不能用字符串输出；2.下标是自定义的字符串；3.length属性失效；4.访问元素用数组名["下标"]；5.不能用for循环遍历——for in；6.查找不需遍历，只用找到对应名字；7.查找和存储位置无关，速度和数组元素个数无关
## 9.数组API函数
### (1)数组转字符
* 固定套路：
```
1.将字符组成单词:chars.join("")
2.将单词组成句子:word.join(" ")
```
### (2)拼接:
不直接修改原数组，而返回新数组
concat()拼接两个或者更多的数组，并返回结果
`var new Arr=arr1.concat(值1,值2,arr2,值3,...)`
### (3)选取：
slice()返回现有数组的一个子数组
`var subArr=arr.slice(starti,endi+1)`
选取arr中starti位置开始，到endi结束的所有元素组成新数组返回——原数组不变
* 强调：凡是两个参数都是下标的函数，都有一个特性：含头部不含尾
### (4)删除
`var deletes = arr.splice(starti,n);`
删除arr中starti位置开始的n个元素不考虑含头不含尾
### (5)插入
`arr.splice(starti,0,值1,值2,...)`
在arr中starti位置，插入新值1，值2，...原starti位置的值及其之后的值被向后顺移
### (6)替换
`arr.splice(starti,n,值1,值2,...)`
先删除再添加新值，添加与删除的个数可以不同
### (7)颠倒
`arr.reverse()`
### (8)排序
`arr.sort()`
默认将所有元素转为字符串再排列
* 问题：只能排列字符串类型的元素
* 解决：使用自定义比较器函数
## 10.条件语句
* if语句:只有当指定条件为true时执行
* if...else语句:当满足if的条件时，就执行if下的代码，反之就执行else下的代码
* if...else if...else语句:当满足if的条件时执行if下的代码，满足else if条件时执行else if下的代码,都不满足就执行else下的代码
## 11.数字属性和方法
* MAX VALUE:MAX_VALUE 属性是 JavaScript 中可表示的最大的数。它的近似值为 1.7976931348623157 e308。()
* MIN VALUE:MIN_VALUE 属性是 JavaScript 中可表示的最小的数（接近 0 ，但不是负数）。它的近似值为 5 e-324。
* Number.POSITIVE_INFINITY:正无穷
* Number.NEGATIVE_INFINITY:负无穷
* NaN:NaN 属性是代表非数字值的特殊值。该属性用于指示某个值不是数字。可以把 Number 对象设置为该值，来指示其不是数字值。
* prototype:使用prototype属性向对象添加属性和方法(原型)
* constructor:constructor 属性返回对创建此对象的数组函数的引用。（构造器）
## 12.引用类型
### 1.Object类型
#### 创建Object实例的方法：
* 使用new操作符后跟Object构造函数
```
var person = new Objecet ();
person.name = "Micholas";
person.age = 29;
```
* 使用对象字面量表示法（对象定义的一种简写方式，简化了创建包含大量属性的对象的过程）
```
var person = {
  name : "Nicholas",
  age : 29
};
