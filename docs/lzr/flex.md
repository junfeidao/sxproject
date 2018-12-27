## 一、Flex布局是什么？
    Flex是Flexible Box的缩写，意味“弹性布局”，用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为Flex布局。
    .box{
        display:flex;
    }
    行内元素也可以使用Flex布局
    .box{
        display:inline-flex;
    }
    Webkit内核的浏览器，必须加上-webkit前缀。
    .box{
        display:-webkit-flex;
        display:-flex;
    }
    注意，设为Flex布局后，子元素的float、clear和vertical-align属性将失效。

## 二、基本概念
    采用Flex布局的元素，成为Flex容器（flex container），简称“容器”。他的所有子元素自动成为容器成员，称为Flex项目（flex item），简称“项目”。

## 三、容器的属性
### 1.flex-direction属性
    flex-direction属性决定主轴的方向（即项目的排列方向）。
        .box{
            flex-dirention:row|row-reverse|column|column-reverse;
            }
    row(默认值)：主轴为水平方向，起点在左端
    row-reverse:主轴为水平方向，起点在右端
    column:主轴为垂直方向，起点在上方
    column-reverse：主轴为垂直反向，起点在下方
### 2.flex-wrap属性
    默认情况下项目都在一条线上，不进行换行
        .box{
            flex-wrap:nowrap|wrap|wrap-reverse;
        }
    nowrap:不换行（默认）
    wrap:换行，第一行在上方
    wrap-reverse换行，第一行在下方
### 3.flex-flow
    flex-flow属性是flex-direction属性和flex-wrap属性的简写
        .box{
            flex-flow:<flex-direction><flex-wrap>;
        }
### 4.justify-content属性
    justify-content属性定义了项目在主轴上的对齐方式。
        .box{
            justify-content:flex-start|flex-end|center|space-between|space-around;
        }
    flex-start(默认):左对齐
    flex-end:右对齐
    center:居中
    space-between：两端对齐，项目之间的间隔都相等。
    space-around：每个项目两侧的间隔都相等。所以项目之间的间隔比边框宽度大一倍。
### 5.align-items属性
    align-items属性定义
        .box{
            align-items:flex-start|flex-end|center|baseline|stretch;
        }
    flex-start:交叉轴的起点对齐
    flex-end:交叉轴的终点对齐
    center：交叉轴的中点对齐
    baseline：项目的第一行文字的基线对齐
    stretch：如果项目为设置高度或设为auto，将沾满整个容器的高度
### 6.align-content属性
    align-content属性定义了对根轴线的对齐方式。如果只有一根，该属性不起作用。
        .box{
            align-content:flex-start|flex-end|center|space-between|space-around|streth;
        }
    flex-start：与交叉轴的起点对齐。
    flex-end：与交叉轴的终点对齐。
    center：与交叉轴的中点对齐。
    space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
    space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
    stretch（默认值）：轴线占满整个交叉轴。
## 四、项目的属性
### 1.order属性
    order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0
        item{
            order:<integer>;
        }
### 2.flex-grow属性
    flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
        .item{
            flex-grow:<number>;
        }
    如果所有项目的flex-grow属性都为1，则它们将等分剩余空间。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
### 3.flex-shrink属性
    flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
        .item{
            flex-shrink:<number>;
        }
    当flex-shrink属性都为1时等比例缩小，当flex-shrink属性有一个为0时，0的不缩小
### 4.flex-basis属性
    flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。他的默认值为auto，即项目本来大小。
        .item {
            flex-basis:<length>|auto;
        }
    他可以设为跟width或height属性一样的值（px），则占据固定空间
### 5.flex属性
    .item{
        flex:none|[<'flex-grow'><'flex-shrink'>?|| <'flex-basis'>]
    }
    该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
    建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
### 6.align-self属性
    align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
        .item {
            align-self: auto | flex-start | flex-end | center | baseline | stretch;
        }
    该属性可能取6个值，除了auto，其他都与align-items属性完全一致