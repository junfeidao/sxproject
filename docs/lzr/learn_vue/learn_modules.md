## export 命令
* 模块功能主要由两个命令构成:export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。
* export命令需要处于模块顶层，如果处于块级作用域内就会报错。

## export defult命令
* 为了给用户提供方便，不用阅读文档就能加载模块，就要用到`export default`命令,为模块指定默认输出。
使用`default`将后面的内容赋给default变量，再通过`export`输出出去。