# 什么是JavaScript
* JavaScript是一种运行于JavaScript解释器/引擎中的解释性（运行前不需要编译的，运行前不会检查错误的，知道碰到错误为止）脚本语言
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