## 前端路由与后端路由有啥区别？
  前端路由主要指是是单页面应用中，以hash路由为例，进行切换时，前面的部分url保持不变，后端路由指的是path进行不断的切换
   ## vue-router是怎么进行使用的
  1. 有2种方式一种是通过cnd导入script标签（不建议）,第二种是采用npm ，执行npm install vue-router --save(-S)
  1. 导入路由，建议使用es6语法 import VueRouter from "vue-router" ，然后 Vue.use(VueRouter)
  1. 配置路由:
  ```javascript
     routes:[
  path:"/index.vue,
  components:
requre(./view/about.vue)
]
 const router=new VueRouter({
 router:routes// 默认采用hash
})
```
4. 需要给路由添加一个容器 <view-router></view-router>
1.  需要使用 <router-link></router-link>实现路由跳转
 - 可以传递一个参数 to ，表示路由将跳转到哪，
 -  可以指定参数tag，路由默认跳转形成一个a标签，可以通过tag属性进行指定为其他html元素，如 tag="span"
 - name 可以指定为 表示需要将对应的路由添加到容器中
 -  与component同级的还有一个chelidern，用来指定子路由
 -  .LinkActiveClass可以用来修改路由发生跳转时的默认状态
关于路由跳转中的parms和query
 - 如果是在path里面添加的，需要通过$route.prams.name来获取
 -  如果是在<router-link>中指定的话，需要通过$route.query.name来获取