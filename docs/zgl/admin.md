### 实现一个后台用户管理系统
 #### 技术栈：vue+bootstrap+postman+json-serevr+vue-resource+vue-router
- postman主要用来发送post请求
- json-server用来模仿后台发送的数据
- vue-resource用来请求数据
#### 实现思路分析
     - 首先先用bootsrap搭建好前端页面
     - 然后通过vue-resource获取来自json-server的请求
     - 然后将请求到的内容渲到页面
#### 在实现项目中遇到的问题 
1. $router和$route的区别
 - $router是vue-router的一个实例，主要是控制全局路由，如路由的跳转等，比如$rouert.push({path:"/pathname"})就会跳转到指定的路由放的是路由对象其本质是向history中添加了一个栈方法，可以向路由中添加path，query，params等信息
 - $route是获取当前跳转的路由对象（只能获取）
   - path:用来获取url的绝对路径
   - host:域名
   - query：主要用来获取get请求（？)
   - params：主要用来获取post请求（：）
   - protrol：用来获取url的协议
   - prot：端口号
2. 怎么才能实现点击详情时跳转到各自所对应的内容
- 通过给id进行跳转，首先在路由中配置path
- 这里一定要to使用v-bind进行绑定因为id为一个变量(注意点)
- 然后通过$route.pramas.id进行获取响相应的id在created中
3 .json-server 不能发送psot请求
 - 使用postman发送post请求
 - post请求一定要有请求头 且一定要写 content-Type
