# eslint 学习笔记

- 全局安装

```
$ npm install -g eslint
```

- 本地安装

```
$ npm install eslint --save-dev
```

- .eslintrc 文件里有许多像这样的规则：

```javascript
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

```semi``` 和 ```quotes``` 是 ESLint 中 规则 的名称。第一个值是错误级别，可以使下面的值之一：
 
> * "off" or 0 - 关闭规则
> * "warn" or 1 - 将规则视为一个警告（不会影响退出码）
> * "error" or 2 - 将规则视为一个错误 (退出码为1)

- 配置 eslint 的两种方式

> * Configuration Comments - 使用 JavaScript 注释把配置信息直接嵌入到一个代码源文件中。
> * Configuration Files - 使用 JavaScript、JSON 或者 YAML 文件为整个目录（处理你的主目录）和它的子目录指定配置信息。可以配置一个独立的 .eslintrc.* 文件，或者直接在 package.json 文件里的 eslintConfig 字段指定配置，ESLint 会查找和自动读取它们，再者，可以在命令行运行时指定一个任意的配置文件。

- 基本配置信息

>Environments - 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。
>Globals - 脚本在执行期间访问的额外的全局变量。
>Rules - 启用的规则及其各自的错误级别。