# Ajax(一种前后端交互的手段)
## Ajax步骤：
- 首先得告诉告诉浏览器要干什么，open(methods,url,flase) methods指请求方法，一般为get或者post，url为访问的相对路径，false为是否同步
- 浏览器向服务发送请求，send(null),在进行表单验证的时候可能会传入new Formdata
-  浏览器接受到服务器的请求，一般有一个status状态码来表示浏览器是否正确接受到了请求，当status为200，表示请求成功，当status为404时请求失败，当status 为304，表示获取换成你，当status为500时，表示数据库出现问题或者表示服务器代码写错了
-  在接收到了请求之前还有一个state状态码来表示服务器是否准备好了将数据或者部分返回 ，当state为0时，表示数据为进行初始化，open（）还未使用，当state为1时，表示open（）方法已经使用了，但send（)方法未使用，当state为3时，表示数据部分返回，当state为4时表示数据已经全部返回，因此我们只需要关注state为4的时候
- 当数据准备完全后，我们需要获取数据，一般获取的数据主要为text和xml，分别对应responseText和responseXML
### 获取文本(responeseText)
 #### get请求(主要用来查询数据)
```javascript
const hxr=new XMLHttpRequest();
hxr.open('get','zgl.txt',true)
hxr.send(null);
hxr.onreadystatechange=function(){
if(this.readystate===4){
  if(this.status===200||this.status===304){
    const resolut=this.responseText;
console.log(`获取的数据为 ${resolut}`)
}
}else{
alert("数据还未准备好")
}
}
```

```tex
我是来自文本中的数据
```
#### post请求（与get请求，post请求主要用来保存数据)
```javascript
const hxr=new XMLHttpRequest();
hxr.open('get','zgl.txt',true)
hxr.send(null);
hxr.setrequsetHeader('zgl','zgl')//request请求头必须要有，主要
hxr.onreadystatechange=function(){
if(this.readystate===4){
  if(this.status===200||this.status===304){
    const resolut=this.responseText;
console.log(`获取的数据为 ${resolut}`)
}
}else{
alert("数据还未准备好")
}
}
```
### 获取xml文件（xml文件不能直接获取，我们可以操作dom）
```javascript
const hxr=new XMLHttpRequest();
hxr.open('get','zgl.xml',true)
hxr.send(null);
hxr.onreadystatechange=function(){
if(this.readystate===4){
  if(this.status===200||this.status===304){
    const dom=this.responseXML;//这里与text不同，不能直接获取
      let name=dom.getElementsByTagName('name')[0].firstChild.nodeValue;
    let h2Node=dom.createElement('h2');
    let aNode=domt.createElement('a');
    let website=dom.getElementsByTagName('website')[0].firstChild.nodeValue;
    let text=aNode.innerHTML=name;
    aNode.href=website;
    h2Node.appendChild(aNode);
console.log(`获取的数据为 ${h2Node}`)
}
}else{
alert("数据还未准备好")
}
}
```
```xml
<?xml version="1.0" encoding="utf-8"?> 
<details>
<name>zgl </name>
<website>http://https://github.comm</website>
<email>zhugl@citycloud.com.cn</email>
</website>
```
### 获取json格式
```javascript
const hxr=new XMLHttpRequest();
hxr.open('get','zgl.tx',true)
hxr.send(null);
hxr.setrequsetHeader('zgl','zgl')//request请求头必须要有，主要
hxr.onreadystatechange=function(){
if(this.readystate===4){
  if(this.status===200||this.status===304){
let obj=Json.parse(this.responseText) //将json对象转为可操作的js对象
  console.log('tag', obj)
//打开浏览器发现其实能够发现还返回了一个json格式的数据,在文本里面
}
}else{
alert("数据还未准备好")
}
}
```
```json
{"zgl":{
"name":"朱广龙"，
"age":24,
}
```