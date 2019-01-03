# vue 过渡 和 动画
- Vue在元素显示与隐藏的过渡中，提供了 6 个 class 来切换：
>1. v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
>2. v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
>3. v-enter-active：定义进入过渡生效时的状态，通俗点来说，就是定义元素在被插入到插入这个过程中的状态。它在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
>4. v-leave-active：定义离开过渡生效时的状态，通俗点来说，就是定义元素在离开的时候的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
>5. v-enter-to: 定义进入过渡的结束状态。（决定进来后最终是什么样子）在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
>6. v-leave-to: 定义离开过渡的结束状态。（决定离开后是什么样子）在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
>```注意，元素有 name 时，用 name 名代替 v :例如```
>```如果标签名为 <transition></transition> ，则使用 v-enter，如果标签名为 <transition name="sty"></transition>，则使用 sty-enter```
- 自定义过渡类名：可以用下面这几个特性自定义过渡类名。
1. enter-class
2. enter-active-class
3. enter-to-class
4. leave-class
5. leave-active-class
6. leave-to-class
>自定义过渡的类名优先级高于普通的类名。
使用时的语法格式
```javascript
<transition>
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
    <p v-if="show">移行大法</p>
</transition>
```
- 过渡中的 javascript 钩子函数
>进入中：
>beforeEnter
>enter
>afterEnter
>enterCancelled

>离开时：
>beforeLeave
>leave
>afterLeave
>leaveCancelled
```txt
当只用 JavaScript 过渡的时候，在 enter 和 leave 中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。
```
- 和类名一样，钩子函数也可以自定义

