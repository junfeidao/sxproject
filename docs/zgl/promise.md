# promise
## 什么是promise
  - promise主要是用来处理异步操作的
  - resolve：promise对象的状态变为resolve，会执行resolve里面的回调函数
  - reject ：promise对象的状态变为reject，会执行reject里面的回调函数
  - 一旦primsie执行了状态是不可更改的
  - 一般通过then来使用promise执行成功的回调或者失败的回调
    - then（）里面传2 个参数一个是data，一个error（可以不写）
    - 如果resolve或者reject里面有参数的话，就会把里面的参数传给then里面的data和error
- promise封装ajax
 ```javascript
   function getJson(url,sr){
        return new Promise((callback, reject) => {
             let request=new XMLHttpRequest()
             request.open('get',url,false)
             request.send()
             request.onreadystatechange=()=>{
              if(this.status===4){
                  if(this.readystate===200||304){
                  resolve(this.response)
                  }
                  return reject(this.readystate)
              }
            return false
          }
          });
          
      }
 ```
      
```javascript
      getJson('/post.json').then((data)=>{
        console.log('tag',data)
         },error=>{
        console.log('tag', error)
      })
```
- 在执行以上函数的时候，如果执行成功将会执行resolve里面的方法，如果失败将会执行reject里面的方法
- error里面只能接受参数，而data里面则可以接受来自resolve的参数或者也可以是一个promise对象
```javascript
   let p1=new promise((resolve,reject)=>{
     return resolve(p2）
   })
  let p2=new promise((resolve,reject)=>{
     return resolve(console（'zgl'））
   })
   
  //在执行的时候p1会依赖于p2，为了让更加明显的看出区别改下代码
 let pl =new Promise( (resolve, reject) =>{
  setTimeout ( () => reject (new Error (' fail ') ) , 3000) 
}) 
let p3 =new Promise((resolve, reject) =>{ 
 setTimeout ( () => resolve (pl), 1000
p3.then(result => console.log(result)) .catch(error => console .log(error)) 
//执行结果：ERROR：fail
```
- 这是因为在执行的时候，首先过了1秒以后p3的状态会变resolve，此时p1的状态还未发生改变，由于p3依赖于p1此时就会执行p3失败，过2s以后p1的状态变为reject,此时就会被后面的catch捕获到异常
- promise的then（）方法
1.可以传2个参数一个是data，一个是error
2.then（）调用的结果返回的仍然是一个promise对象，但是并不是最开始的promise对象，而是一个新的promise，因此then（）可以链式调用then（）.then(）
- promsie 的all（）方法
 1.只有当所有的promise的状态为resolve时，promise.all()才会为resolve
 2.若果有一个为reject时，promise.all（）就会为reject
```
   let arr=[1,2,3,4]
   arr.map(item=>{
      return item=new Promise（{
        return resolve()
        return reject()
      }）
   })
   ```
- promise的catch（）方法
1.reject具有冒泡事件，最终会冒泡到catch里面
2.catch的执行结果是一个新的promise对象，因此可以继续使用then（）
3.catch与java的 throw new Error（）+try{}catch（e）{}异曲同工
4.只要promise对象的状态变为reject就会被catch捕获，因此catch（）通常放在最后，用于捕获前面产生的异常