# DOM 操作总结

### 1. node 类型

- nodeType 节点类型。
- nodeName 和 nodeValue 节点的具体信息。

### 2. 节点关系

- childNodes 这个属性里面保存着一个 NodeList 对象，它不是 Array 的实例，而是基于 DOM 结构动态执行查询的结果，因此 DOM 结构的变化能够自动反映在 NodeList 对象中。
也可以将 NodeList 转换为数组。
```javascript
Array.prototype.slice.call(someNode.childNodes, 0)
```

- parentNode 每个节点都有一个 parentNode 属性，该属性指向其父节点
- 包含在 childNodes 列表中的每个节点相互之间都是同胞节点， ```previousSibling``` 属性指向前一个兄弟节点， ```nextSibling``` 指向后一个节点。
- firstChild 和 lastChild 分别指向第一个子元素和最后一个子元素。
- hasChildNodes() 查询的节点是它的子节点就返回 true ，否则返回 false
- ownerDocument 该属性指向表示整个文档的文档节点。

### 3. 操作节点

- appendChild() 向 childNodes 列表的末尾添加一个节点。此方法返回新增的节点。
>如果传入到 appendChild() 中的节点已经是文档的一部分了，那结果就是将该节点从原来位置转移到新位置上，因为任何 DOM 节点都不能同时出现在文档中。

- insertBefore() 在指定节点之前插入新节点。此方法返回新增的节点。
- replaceChild() 接收两个参数：要插入的节点和要替换的节点。要替换的节点将由这个方法返回并从文当树中被移除，同时要插入的节点占据其位。
- removeChild() 移除节点，方法返回被移除的节点。
- 通过 replaceChild() 和 removeChild() 移除的节点仍然为文档所有，只不过在文档中没有自己的位置。
- cloneNode() 复制节点，接收一个布尔值参数，表示是否执行深复制。参数为 true 执行深复制，也就是复制节点及其整个子节点树；参数为 false ，只复制节点本身。复制后返回的节点文本属于文档所有，但并没有被指针连起来，除非通过 appendChild()， insertBefore()， replaceChild() 将它添加到文档中。
>这个方法不会复制 javascript 属性，只会复制特性和子节点，但 IE 浏览器有一个 bug ，会复制事件处理程序。

### Document 类型

- document 节点具有下列特征：
>nodeType 的值为 9
>nodeName 的值为 "#document"
>nodeValue 的值为 null
>parentNode 的值为 null
>ownerDocument 的值为 null

### 文档的子节点

- document 的documentElement，firstChild，lastChild 属性都指向 <html> 元素。
- document.body 取得对 <body> 的引用。
- document.title 取得文档标题
- document.URL 取得完整的 URL
- document.domain 取得域名
- document.referrer 取得来源页面的 URL

### DOM 一致性检测

- 由于 DOM 分为多个级别，也包含多个部分，因此检测浏览器实现了 DOM 的哪些部分就十分必要了。
- document.implementation 属性就是为此提供相应信息和功能的对象，与浏览器对 DOM 的实现直接对应。
- DOM1 级只为 document.implementation 规定了一个方法，即 hasFeature()，这个方法接收两个参数：要检测的 DOM 功能的名称及版本号。如果浏览器支持给定名称和版本的功能，则返回 true，如下面例子所示：

```javascript
var hasXmlDom = document.implementation.hasFeature("XML", "1.0")

```

### 文档写入

- write() 和 writeln() 这两个方法都接收一个参数，参数就是要写入到输出流中的文本。前者原样写入，后者会换行。
- open() 和 close() 分别用于打开和关闭网页的输出流。
