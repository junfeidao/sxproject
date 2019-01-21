## webpack是什么东西，与glup有啥区别？
- webpack是前端自动化构建工具是基于node的，更多的注重是整个项目
- glup也是前端自动化工具，更多注重的是项目中的某一部分。
-  把整个项目当作地球来对待，webpack就相当于卫星，可以俯瞰整个地球，而glup相当于地球上的东西，只能看到某时某地地球上的东西
## webpack概念
1. 由于webpack是基于node的，所以一定要安装node，才能运行webpack
1. webpack核心概念
   - entry
   - output
   - loader
   - plugins
1. webpack最难理解的一个词就是编译

## webpack使用方法
1. 先进行webpack的全局安装(npm install webpack -g)
1. webpack的初始化(npm init -y),文件命名不要出现中文字，否则webpack会提示报错，解决方法(npm init),将package改为英文名
1. 在前面已经说过了webpack最难理解的就是编译
   - 对于浏览器来说只认识html，至于js，css都是在加载html加载之后才加载的，这样就存在了二次加载对浏览器的性能有一定的损耗，而webpack就能能够有效的解决此问题，避免了二次编译
   - 我们通过 webpack命令 指定所要编译的js文件然后到指定的js文件，这其实和在ruby中把scss编译成css十分类似（webpack  ./src/main,js ./dist/bundle.js(在编译中如果找不到dist和bundle.js,webpack会替我们自动生成,在webpack4.0以上该功能受到限制)

   - 每一次编译的时候我们都需要重新编译webpack ,这就和node一样，每次代码进行修改就要重新运行node，为解决此问题，node引入了nodemon，webpack叶引入了类似的工具 webpack-dev-serve(npm install webpack-dev-serve --save-dev)
   - 我们先建立建立一个webpack.config.js
```javascript
       let path=require('path');
         aliaslet config={
              entry:{
                 main:path.join(__dirname,'/main.js')//指定了文的入口
                 },
              output:{
               //指定出口文件
                 path: path.join(__dirname,'/main.js')
                 filename:'main.js'
                 }
           }
```


   
   - 然后在package.json找到scripts标签,在里面加上"dev":"--webpack.config.js --open --port 3000 --ContentBase src --hot"
     1. --open 自动打开
     2. -- port 端口号
     3. --ContentBse webpack所托管的文件所在
     4. --hot  热更新，表示修改了以后不会进行代码的重新构筑，而是知识重新构筑修改的那部分代码
    - 运行webpack-dev-serve(npm run dev)
    - 由于webpack只能打包js文件，所以css等文件是无法通过编译的，此时我们需要用到loader
     1. npm install loader-css  loader-style --save-dev
     2. 在与entry同级下创建一个moudle
```javascript
  entry:{
},
moudle:{
 rules:[
  test:/.\css$/,
   user:[style-loader,css-loader]//执行顺序是从右往左执行的
 ]
}
```
- 在实际生产过程中，其他的loader配置也遵循以上规则，只是有的需要依赖其他插件(以babel为例)
  
     1. 先安装babel所需要的插件 npm install babel-core babel-loader babel-plguins-transform-runtime -save
     1. 安装babel语法解析器 npm install babel-preset-env babel-preset-strag-0 --save-dev
     1. 在moudle中进行配置 
```javascript
   rules:[
     test:/.\js$/,
     user:babel-loader,
     exclude:/node_moudles/
  ]
```
 - 配置一个名为.babelrc的文件名
 ```javasrcipt
    "plugins":["transform-runtime"]
    "preset":["env","strage-0"]
```