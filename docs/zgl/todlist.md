### 实现饿了么组件todolist
 #### 技术: vue + bootstrap+scss
1. 分析todolist组件的理论分析部分
   - 表单功能部分采用v-on：click和v-model部分实现
   - 表格功能部分采用 v-for进行渲染
   - 数据存在localstoreage中，通过setitem进行存数据，通过getitem进行取数据(使用到了将json格式转化(Json.parse和Json.stringly))
   - 数组的栈添加功能（push）和数组的删除功能(splic)
   - 使用了bootstrap中的model（模态框）
2. 代码实现部分
- 表单部分：
```html
 <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="姓名"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">年龄</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="姓名"
          v-model="age"
        />
      </div>
      <button type="submit" class="btn btn-primary">增加</button>
      <button type="submit" class="btn btn-primary">取消</button>
    </form>
```
- 表格部分
```html
<table class="table" v-if="showtable">
        <thead>
          <tr>
            <th>序号</th>
            <th scope="col">姓名</th>
            <th scope="col">年龄</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.index">
            <th scope="row">{{ $index }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              删除
            </button>
          </tr>
          <tr v-else><p>暂无更多数据</p></tr>
        </tbody>
      </table>
       <button class="btn btn-primary">删除全部</button>
```

- 模态框部分(弹出框)

```html
<div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            确定要删除吗
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              关闭
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="remove($index)"
            >
              确认
            </button>
          </div>
```
- js部分(业务逻辑)
``` javascript
    export default {
//数据来源，模拟从后台传输的数据
  data() {
    return {
      name: "",
      age: "",
      list: [
        {
          index: 1,
          name: "朱广龙",
          age: 18
        },
        {
          index: 2,
          name: "朱广龙",
          age: 20
        }
      ],
      showtable:true
    };
  },
  methods: {
    //实现从表单中添加数据到表格中
    add() {
      const obj = {
        name: this.name,
        age: this.age
      };
      this.list.push(obj);
         this.name="";
         this.age=""
     /* 如果需要使用localstoreage：
      add(){
        ...
       const localstoreage=new localstoreage();
        存数据
       localstoreage.setitem(k,Json.parse(this.list));
       取数据
       Json.stringly( localstoreage.getitem(k,)); */
     }
    },
    //实现从表格中删除数据（表格和模态框的结合）
    remove(index) {
      this.list.splice(index, 1);
    }
  },
  removeall(){
   this.list;
},
 created(){
  //如果表格中内容为空则显示暂无更多数据
  if (this.list.length==0) {
    this.showtabel=!this.showtable;
  }
  }
};
```
