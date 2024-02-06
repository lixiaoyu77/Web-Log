# Props 组件属性的缩写。

功能：让组件接收外部(父组件)传过来的数据

### 接收数据

1. 第一种方式(只接收)

```js
props: ['name']
```

2. 第二种方式(限制类型):

```js
props: {
  name: String
}
```

3. 第三种方式(限制类型,限制必要性,指定默认值):

```js
    props:{
      name:{
        type:String //类型
        required:true //必要性
        default:'张三' //默认值
      },
      }
```

### 例

```js
// 父组件
<Student name= 'leo' :age='18'>  //* bind这个value值bind在age上面，如果没有绑定，修改会直接拼接
// 子组件
<template>
<h1>{{name}}</h1>
<h1>{{age+1}}</h1>
</template>
<script>
    export default{
        name: 'student',
        data(){
            return{
                name : 'leo',
                age: 20,
            }
        },
        props:['name','age']
    }
</script>

```

### 注意事项

**props 是只读的，Vue 底层会监视对 props 的修改，如果进行了修改，就会发出警告**

1. 不要定义无用的属性,会提示存在的属性是 undefined
2. props 属性的优先级大于 data
3. 尽量不要直接修改 props 里面的属性的值
4. props 不能传入 vue 关键字(key,ref)
