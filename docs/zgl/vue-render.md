# render函数中的createElement
## 基本参数 
createElement（{String| Object|Function}）{

 }
1. 第一个参数是必选，可以是一个html标签也可以是一个组件或者函数对应template
 - 可以是html元素比如"div","a","span"
2. 第二个参数是可以选的数据对象对应data，components，props，methods
- 对应的便是一个.vue文件（template中的内容（包括v-bind等指令和数据））
- 在render函数中class和style属于第二个参数对象中的顶层对象'class':{
 foo:true,
 bar:false
}通常与：class='class'和的内容相同
- 正常的html特性
  - attrs（id），props(组件props)，domprops（dom属性）
  - 自定义事件监听 on{
  }
- 自定义事件触发 nativeOn{
}
- 自定义指令 directives：[]
3. 第三个参数是子节点，对应slot
ScpoeSlots:{
<name:props=>Vnode|Array<vnnode>}这里用java的泛型来表示
比如
name：default=>createElement("span",props.text)
//如果插槽有定义的名称
slot："",
key:'mykey',
ref:'myref'
}
## render函数示例
```javascript
    render(h) {
        return h('div',{ //第一个参数第二个参数对应的是组件
          'class':{
              show:this.show
          },
          attrs:{
              id:"element"
          },
          on:{
              this.handleClick()
          },
          "文本内容"
        })
         },
        data() {
            return {
                show:true
            }
        },
        methods: {
            handleClick(){
                console.log('clicked!')
            }
        }
    
```
## render 约束
错误示例：
- 示例一：
```javascript
//父组件
  render(h){
      return h('p','text')
  }
  //子组件
  render(h){
       var chilid=h(child)
      return h('div',[child,child])

  }
  
  ```
  错误示例二：
  ```javascript
   <div>
  <ele>
  <child></child>
  </ele>
  </div>
  render(h){
      return h('div',[
          this.$slot.default,
          this.$slot.default
      ])
  }
```
- 这2个示例都希望在子节点内渲染出2个child组件，但是实际只渲染出一个，因为在这种情况下，vnode受到了约束
- 正确示例
```javascript
render(h){
    return h('div',[
        Array.apply(null,{
            lenght:5
        }).map(()=>
           h(child)
        )
    ])
}
```
## 使用javascript代替模板功能
- 在render函数中，不需要vue内置的指令，比如v-if，v-for，当然叶没办法使用它们
```javascript
//比如 v-if 和v-else可以这样写
 render(h){
    if(this.show){
        return h('p','show的值为true')
    }else {
         return h('p','show的值为true')
    }
},
props:{
    show:{
        type:Boolean,
        default:true
    }
}

// 比如 v-for可以这样写
 render(h){
       for(let i=0;i<Node.length;i++){
           Node.push(h('p',this.list[i])
       }
    render('div',Node)
},
props:{
   list:{
        type:Array
        default:function(){
            return []
        }
    }
}

//v-model 可以这样写
render(h){
   var input= h('input',{
        domprops:{
            value:this.value
        },
        on:{
            input(event){
                this.value=event.target.value
            }
        }
    })
   var p= h('p',"value"+this.value)
    render(h,'div',[input,p])
}
```
