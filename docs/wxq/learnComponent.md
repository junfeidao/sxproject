# 这里记录组件的使用知识

## 对props的理解

props给组件注册一些自定义属性，这个使用在vue-cli的初始项目中有体现，helloworld组件的msg就是。这个属性和html元素标签的属性差不多,都可以设置自己的值。
在组件中插入props的格式如下：

```javascript
props: {
  tableData: {
    type: Array,
    default() {
      return []
    }
  }
}
```

这是最新的官方格式，必须指定类型，以及返回值。

### props的命名

html的属性对大小写是不敏感的，所以如果设置的props的名字是驼峰式的使用时就要用等价的短横线分割命名。比如例子中的tableData，在引用组件时，用到tableData属性就要写table-data。

### props的类型

在最近的使用中，都是用了Array类型。还有String类型，Number类型，Boolean类型，以及Object类型。

## 插槽

就像```<p></p>```里面可以写点东西一样。vue的组件也可以插进去,这依赖于组件提供的slot。有了slot，组件标签之间可以插入文本、html代码、或者另外的组件。

### 具名插槽

如果只是一个单纯的slot，那么你在组件内添加的所有内容都将显示在这个slot上，而且只有一个。具名插槽更加详细。
通过给组件的slot中添加name属性并赋值，使用组件时在插入的html元素上添加slot=“name的值”，就可以一个组件拥有多个插槽。

### 作用域插槽

作用域插槽可以从子组件获取数据，组件设计时插入slot，并用v-bind绑定对象。使用时在插槽内部元素上用slot-scope定义插槽的名字。在table组件中，scope中的数据就是组件获取到的子组件数据。父组件封装在了element-ui中。

### element-ui表单验证

在实现table的过程中发现不添加表单验证会发生各种问题。自己用原生JS加了一下，弹出错误提醒，然后发现element-ui提供的表单验证更好看一些，还有一些方法很好用。这里记录一下。  

Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可.

```html
<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
```

上面这行代码是一个需要验证的表单的常规表头。:model是element表格的属性，绑定表单数据对象。rules也是element表格的属性。里面是表单验证规则。ref是vue的组件属性，这里注册是为了$refs的使用
>$refs的定义：一个对象，持有注册过 ref 特性 的所有 DOM 元素和组件实例。

```html
  <el-form-item label="活动名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
```

上面这段代码是验证表单中的一个from-item。在el-form-item中写入lable，以及prop。在el-input中绑定数据

```javascript
 data() {
  return {
    ruleForm: {
      name: '',
    },
    rules: {
      name: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ]
    }
  }
 }
```

上面两段代码是data以及rules的格式，rules的格式里有一些关键字，下面整理一些常用的。

* reauired：不可为空
* message： 错误发生时的提示  

* type：数据类型，
>>* 可选值：
>>* string，字符串
>>* number，数字
>>* boolean，逻辑变量
>>* method，函数
>>* regexp，正则
>>* integer，整数
>>* float，浮点数
>>* array，数组
>>* object，对象
>>* enum，枚举
>>* url，url类型
>>* hex，十六进制
>>* email  邮件
* min max:     min和max属性定义范围。对于string和array类型进行比较length，对于number类型，数量不得小于min或大于max。
* len:    要验证字段的确切长度，请指定该len属性。对于属性执行string和array类型比较length，对于number类型，此属性指示完全匹配number，即，它可能仅严格等于len。如果len属性与min和max范围属性组合，len优先。
* Whitespace 将该值设置为true，就可以检测到空格输入。但必须是string类型

```javascript
submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
```

上面两个函数是表单的提交以及重置函数。```this.$refs[formName].validate()```是对表单项调用validate()[element-ui中的方法]。所有校验通过后value为true，进入if语句弹出submit。
resetFields()也是element-ui中的方法。功能是对表单项进行重置，将其值重置为初始值并移除校验结果

### 自定义表单验证规则

```javascript
data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
```

组件中的写法一样，但是js中的data不一样了。这是一段校验两次密码输入的JS代码。data中有三个校验函数。作为rules2中validator的值。
