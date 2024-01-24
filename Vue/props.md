# Props
功能：让组件接收外部传过来的数据  
### 接收数据
1. 第一种方式(只接收)
```js
props:['name']  
```
2. 第二种方式(限制类型):
```js
props:{name:String}  
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
**props是只读的，Vue底层会监视对props的修改，如果进行了修改，就会发出警告**
1. 不要定义无用的属性,会提示存在的属性是undefined
2. props属性的优先级大于data
3. 尽量不要直接修改props里面的属性的值
4. props不能传入vue关键字(key,ref)
