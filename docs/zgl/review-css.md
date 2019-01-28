## css简单一些比较常用的复习
- 块级元素
  - 什么叫块级元素
  - 块级元素是指在文档流中独自占一行的元素
  - 在文档流的特点
    1.宽度和父元素相同
    2.高度被内容撑开
- 内联元素（行内元素）
 - 什么叫内联元素
 - 内联元素是指在文档流中不会独自占一行的元素，像写字一样从左到右依次排开
 - 在文档流的特点
  宽度和高度被内容撑开
- css选择器（scss预处理选择器）
  - css选择器 
    - 选择器分类
    - 父子选择器，兄弟选择器，后代选择器，id选择器，class选择器，属性选择器，伪类选择器
    - 比较常用的非关系性选择器
      - id选择器 语法：#id{}
      - class选择器 语法 .class{}
      - 属性选择器  [name]{}或者[name="zgl"]{}
      - 元素选择器  dom{}
      - 并集选择器 语法：div,p,#id,.class,[name="zgl"]{}
      - 交集选择器 语法 div.class[name]{}（交集选择器中不能使用id选择器）
      - 通配选择器 语法 *{}
    - 比较常用的关系性选择器
      - 孩子选择器 语法 div>p{}
      - 后代选择器 语法 div p{}
      - 兄弟选择器 语法  p+{} 表示选中p元素的后一个兄弟
      - 兄弟选择器 语法  p~{}表示选中p元素后的所有兄弟
    - 伪类选择器
      - hover 表示当鼠标经过时，语法 a：hover{}
      - visited 表示已经点击过时 语法 a:visited{}
      - active  表示正在激活时  语法 a：active{}
      - before  表示在当前元素前面留空的位置  a：before {}
      - after  表示在当前元素后面留空的位置   a：after{}
      - last-child 表示当前元素的最后一个孩子 a：last-child{}
      - first-child 表示 当前元素的第一个孩子 a：first-child{}
      - nth-child（n） 表示当前元素的第几个孩子 a：nth-chlid
    - text常用的一些文本css样式
     - text-align
     - line-hight
     - lettetr-spacing 
     - word-spacing
     - text-transform
   - font常用的一些字体样式
     -  color
     -  font-size
     -  font-family
     -  font-deraction
     -  font-wight
     -  font-style
     -  简写属性，font-size一定要放在倒数第二个，font-family一定要放在倒数第一个，famliy可以串联，浏览器解析时会从第一个开始解释，如果解析不成功就会解析下一个字体
### 盒子模型（盒模型，box module模型）（css核心）  
 - 盒子模型认为所有的元素是放在一个盒子里面的，有内容区，内边距，边框，外边距
 - 块级元素的盒模型
  - 内容区
  1. width
  2. hight
  - 内边距
  1. padding
  2. padding-（top，right，bottom，left）
  3.  padding p1 p2(p1表示上下的内边距，p2表示左右的内边距)
  4.  内边距的颜色会继承于内容区
  - 边框
  1.boader
  2.要想boader齐作用，必须填写boader三要素（boader-color，border-width，boader-style）
  3.boader的三要素的每一个要素简写与padding相同
  4. boader简写时 不能分别对每一边起作用，而是会应用于全部边框
 - 扩展1：盒子模型的宽度度=padding-ltft+padding-right+boader-left+boader-ringht
 - 扩展2 ：盒子模型的高度=padding-top+padding-bottom+boader-top+boader-bottom
 - 扩展3：要使原来的宽高不变，在使用padding或者boader后，我们要进行相应的减去或者增加width或者减去
  - 外边距
  1.margin 与padding类似
  2. margin-bottom 或者 margin-right时自己是不会动的，会去挤别人
  3. margin会存在一个垂直外边距重叠
     - 当2个块级元素的外边距垂直相邻时（父子，兄弟），按照规定会取其最大值
     - 垂直外边距所带来的问题会导致在移动一个元素时，相邻的元素也会跟着动
     - 解决方案1：相邻：在其之间插入一个元素即可（div：after{content：""})
     - 解决方案2： 垂直 ：给某个元素加boader或者padding
- 内联元素的盒模型
  1.内联元素内容区没有width和hight
  2.内联元素没有margin-top和margin-bottom
  3.内联元素的相邻水平外边距取最大值
  4.内联元素可以由padding和boader，但是上下有时候不太好使
## 基于盒模型的布局（float，overflow，posstion。display）
  - display
  1.inline，表示将其转化为内联元素
  2.block ，表示将其转化为块元素
  3.inline-block ,表示将其转为行内块元素（使用的比较多）
  4.none 表示将该元素隐藏起来
  - overflow
  1.left，表示将其子元素超出父元素的部分隐藏起来
  2.right，表示将其子元素超出父元素的右边影藏起来
  3.hidden，表示将其超过父元素的地方影藏起来（用的比较多）
 - 脱离文档流
   - 块级元素将不再占一行，而是按一行一行排列，如果该行被占满就会自动换下一行，高度和宽度默认按内容撑开
   - 行内元素将会占一行，内联盒模型将支持宽高，简单理解就是将其转化为块盒模型
 - float
 1.盒子会尽量的往左上或者右上进行浮动，但不会超过其父元素或者相邻的元素
 2.将具有脱离文档流的特性
 3.浮动元素引发的文字环绕现象
- clear
1.left表示清楚其他元素左浮动对其的影响
2.right表示清楚其他元素右浮动对其的影响
3.both表示清楚其他元素对其影响最大的一边浮动
- posstion
     - relactive
     1.盒子不会脱离文档流
     2.（top，left，right，bottom）是相对于原来的位置
     3，布局还是按文档流的布局
     4.元素的层级会提升一级
     - absolute（fixed）
     1.盒子会脱离文档流
     2.（top，left，right，bottom）是相对于开启定位的最近的盒子，默认浏览器敞口的左上
     3.一般使用我们通常给他父元素开始相对定位（最常用）
     4.元素的层级会提升一级
### 脱离文档流带来的问题
会使其父元素高度塌陷
 - 开启BFC（每个盒子默认都有一个BFC模式）
 1.开启BFC模式的块元素能够包含其浮动的子元素
 2.开启BFC模式的浮动元素，将不会被不浮动的元素所覆盖
 3.开启BFC模式的块元素不在存在垂直外边距重叠
 4.形成了BFC的区域不会与float box重叠（可阻止因浮动元素引发的文字环绕现象
 - 启动BFC的方法
 1.给指定的块元素设置行高
 2.给指定的元素开启浮动
 3.给指定的元素的dispaly属性不为avisbilty
 4.开启绝对定位
-解决父元素高度塌陷的方案
 1.给父元素指定行高
 2.浮动父元素或者开启绝对定位
 3.给父元素的display属性设置为inlin-block
 4.清楚浮动 clear：both（不能解决垂直外边距重叠问题）
 5.最终解决方案：.clearfix:after{
     content:"";
     display:block;
     clear:both
}