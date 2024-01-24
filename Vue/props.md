# Props
功能：让组件接收外部传过来的数据

接收数据
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
**props是只读的，Vue底层会监视对props的修改，如果进行了修改，就会发出警告**
