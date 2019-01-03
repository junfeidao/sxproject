## Module 的加载实现

---

### 传统方法

- 加载传统的 js 脚本

> HTML 网页中，浏览器通过\<script\>标签加载 JavaScript 脚本。

```javascript
<!-- 页面内嵌的脚本 -->
<script>
  // module code
</script>

<!-- 外部脚本 -->
<script src="path/to/myModule.js"></script>
```

浏览器加载 js 脚本可以使用内嵌式，也可以使用外部脚本，由于浏览器脚本的默认语言是 JavaScript，因此 type="application/javascript" 可以省略。

默认情况下，浏览器是同步加载 JavaScript 脚本，即渲染引擎遇到<script>标签就会停下来，等到执行完脚本，再继续向下渲染。如果是外部脚本，还必须加入脚本下载的时间。

也可以用以下两种方式指定让浏览器异步加载

```javascript
<script src="path/to/myModule.js" defer></script>
<script src="path/to/myModule.js" async></script>
```

上面代码中上面代码中，```<script>``` 标签打开 defer 或 async 属性，脚本就会异步加载。渲染引擎遇到这一行命令，就会开始下载外部脚本，但不会等它下载和执行，而是直接执行后面的命令。

- defer 和 async 的区别：

> * defer 要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行，所以有脚本是按顺序执行的。
> * async 一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。所以谁先下载完就先执行谁

### es6 加载规则
- 相同点：es6 和传统方式一样，es6 也可以使用内嵌式和引用式
- 不同点：览器加载 ES6 模块，```<script>``` 标签里要加入 type="module" 属性。

```javascript
<script type="module" src="./foo.js"></script>
```

浏览器对于带有 type="module" 的 ```<script>``` ，都是异步加载，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于打开了<script>标签的 defer 属性。所以说 es6 加载时默认使用 defer 属性。

也可以给 es6 指定 async 属性

```javascript
<script type="module" src="./foo.js" async></script>
```

上面代码使用了 async 属性， ```<script type="module">``` 就不会按照在页面出现的顺序执行，而是只要该模块加载完成，就执行该模块。

- 注意：

> * 代码是在模块作用域之中运行，而不是在全局作用域运行。模块内部的顶层变量，外部不可见。
> * 模块脚本自动采用严格模式，不管有没有声明use strict。
> * 模块之中，可以使用import命令加载其他模块（.js后缀不可省略，需要提供绝对 URL 或相对 URL），也可以使用export命令输出对外接口。
> * 模块之中，顶层的this关键字返回undefined，而不是指向window。也就是说，在模块顶层使用this关键字，是无意义的。
> * 同一个模块如果加载多次，将只执行一次。