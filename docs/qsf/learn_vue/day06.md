# es6 的 Module（模块） 语法

---

## 概念

&emsp;&emsp;**javascript 一直没有模块体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。所以社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览。 es6 实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范**

---

## 语法

> * 一个模块就是一个独立的文件。
> * ES6 模块不是对象，而是通过 expor 命令显式指定输出的代码，再通过import命令输入。
> * 模块功能主要由两个命令构成：export 和 import。export 命令用于规定模块的对外接口，import 命令用于载入其他模块提供的功能。

- **export 命令**

&emsp;&emsp; 一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。下面是个 js 文件，里面用 export 命令输出变量。

```javascript
// student.js
export var name = '李白'
export var titlename = '青莲居士'
export var age = '61'
```
&emsp;&emsp;上面代码是student.js文件，保存了学生信息。ES6 将其视为一个模块，里面用 export 命令对外部输出了三个变量。

export 的写法，除了像上面这样，还有如下写法。

```javascript
// student.js
var name = '李白';
var titlename = '青莲居士';
var age = '61';

export {name, titlename, age};
```

&emsp;&emsp;上面两种写法是对等的，优先使用第二种，因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。

export命令除了输出变量，还可以输出函数或类（class）。

```javascript
export function sum(x, y) {
  return x + y;
};
```

上面代码对外输出一个函数sum

&emsp;&emsp;通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。

```javascript
function f1() { ... }
function f2() { ... }

export {
  v1 as sumf1,
  v2 as sumf2,
  v2 as sumf3
};
```

&emsp;&emsp;上面代码使用 as 关键字，重命名了函数 v1 和 v2 的对外接口。重命名后， v2 可以用不同的名字输出两次。

&emsp;&emsp;export 语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。

```javascript
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
```

上面代码输出变量 foo ，值为 bar ，500 毫秒之后变成 baz 

- **import** 命令

&emsp;&emsp;使用 export 命令定义了模块的对外接口以后，其他 JS 文件就可以通过 import 命令加载这个模块。

```javascript
// main.js
import {name, titlename, age} from './student.js';

function setName(element) {
  element.textContent = name + ' ' + titlename;
}
```

&emsp;&emsp;上面代码的 import 命令，用于加载 profile.js 文件，并从中输入变量。 import 命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。

和 export 一样， import 也可以使用 as 关键字给输入的变量重命名。

```javascript
import {name as namelb} from './student.js';
```

上面代码将输入的 name 重命名为 namelb

&emsp;&emsp;import 命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口
>注意：

> * 如果加载的这个变量是一个对象，则可以改变这个对象的属性。
> * 除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。但是和上面不同的是这个对象的属性不能改变

- export default 命令

&emsp;&emsp;使用 import 命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。 而 export default 命令，为模块指定默认输出，用户可以不用知道所要加载的变量名或函数名。

```javascript
// export-default.js
export default function () {
  console.log('hello world');
}
```

上面代码是一个模块文件 export-default.js ，它的默认输出是一个函数。

其他模块加载该模块时， import 命令可以为该匿名函数指定任意名字。这时 import 命令后面，不使用大括号。

```javascript
// import-default.js
import customName from './export-default';
customName(); // 'hello world'
```

>注意：

> * 使用 export default 时，对应的 import 语句不需要使用大括号；不使用 export default 时，对应的 import 语句需要使用大括号。
> * export default 命令用于指定模块的默认输出。一个模块只能有一个默认输出，因此 export default 命令只能使用一次。所以， import 命令后面才不用加大括号，因为对应的是唯一的 export default 命令。
> * **本质上， export default 就是输出一个叫做 default 的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。**

```javascript
// modules.js
function add(x, y) {
  return x * y;
}
export {add as default};
// 等同于
// export default add;

// app.js
import { default as foo } from 'modules';
// 等同于
// import foo from 'modules';
```

因为 export default 命令的本质是输出一个叫 default 变量，所以可以直接将一个值写在 export default 之后。

```javascript
// 正确
export default 42;

// 报错
export 42;
```

- **模块的继承**

假设有一个 sun 模块，继承了 father 模块。

```javascript
// sun.js

export * from 'father';
```

&emsp;&emsp;上面代码是 export 和 import 的复合写法，就是把 father 模块输入再输出，export *，表示再输出 father 模块的所有属性和方法。

```尤其注意：这时 sun 模块并没有导入 father 模块的接口，只是转发了 father 模块的接口，所以当前模块不能使用 father 接口变量```

> 注意：export * 命令会忽略 father 模块的 default 方法。然后，上面代码又输出了自定义的 e 变量和默认方法。

## **严格模式**

- es6 自动使用严格模式，不管你有没有在模块头部加上 "use strict"

> 注意：export 和 import 命令可以出现在模块的任何位置，但必须处于模块顶层。如果处于块级作用域内，就会报错。因为 es6 模块加载是 “编译时加载” （静态加载），即 ES6 可以在编译时就完成模块加载，而条件代码块是运行时加载，所以处于条件代码块之中，就没法做静态优化了。



