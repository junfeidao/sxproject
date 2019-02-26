## mixins
### 什么是mixins？
### 当一个组件的方法和属性与另外一个组件的方法与功能属性有重合部分，方法的使用完全一模一样此时就可以将这2个组件的共部分抽离形成一个的minxins，这是一个js对象，他可以是vue 的钩子函数，data，methods，compontens，deriactive等，（我个人其实可以归纳为mixins只能混合方法和对象，因为vue是由对象和方法组成的，还有个别的数组对象如mixins，porops等是不能混入的）
- 使用方法一：可以直接在script下面直接写一个minxins对象
```javascript
 const mixins={created（）{
   console.log（'我 是mixins）}}
   mixins：[mixins]
 ```
 - 使用方法二：当mixins比较多多，时我们可以通过在src里面新建一个mixins文件，里面放置各种各样的mixins，然后通过 import导入的方式，与组件不一样，mixins接受的是一个数组对象
 - 发现问题，当mixins使用时，如果当组件和混入对象含有同名选项时，这些选项将以恰当的方式混合
 - 每个mixins对象中都具有生命周期的钩子（Vue生命周期）和方法（甚至其他的），而且这些东西都是可用的。另外在Vue中的组件，同样也有这些生命周期的钩子函数和方法。所以当在组件上注册重复的过程时，顺序显得尤其重要。
 1. 数据合并（mixins中的数据首先会被执行，但最终执行结果由组件来确定）即当mixins中的数据与component中的数据相同时会被component中的数据所覆盖
 2. 钩子函数执行先后顺序（当组件使用的mixins对象有相同的选项时，比如钩子函数，就会全部被合并到一个数组中，因此都会被执行，并且mixins对象中的钩子会先被执行）即当mixins中的钩子函数与component中的钩子函数相同时，优先执行mixins中的钩子函数，然后在执行component中的钩子。
 3. 当mixins混入的为对象时如methods，component等时(被混合为同一个对象。当两个对象键名冲突时，组件选项优先)即当component中的methods将会覆盖mixinis中的methods，而不是由对象中的具体方法决定的而是由对象的键名决定与键值无关
 4. 关于全局mixins,我们不应该避免去使用，因为会给我们带来未知的东西





