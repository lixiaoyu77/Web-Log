# Vue 项目中遇到的一些坑及解决方案

1. **响应式数据更新问题**：
   在 Vue 中，对象的响应性是在初始化时建立的，如果在对象已经被创建后再添加新的属性，Vue 将无法监听到这个新属性的变化
   使用 **Vue.set** 或者 **Object.assign** 来触发响应式更新

```js
Vue.set(target, key, value)
```

target：目标对象  
key：要添加的属性名  
value：要添加的属性值  
**Vue.set** 的主要用途: 解决直接给响应式对象新增属性时，Vue 无法追踪的问题。

```js
<template>
  <div>
    <p>{{ user.name }}</p>
    <button @click="changeUserName">Change Name</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John',
        age: 25,
      },
    };
  },
  methods: {
    changeUserName() {
      // 不好的例子，Vue 无法追踪变动
      // this.user.name = 'Doe';

      // 好的例子，使用 Vue.set
      // Vue.set(this.user, 'name', 'Doe');

      // 或者使用 Object.assign
      this.user = Object.assign({}, this.user, { name: 'Doe' });
    },
  },
};
</script>

```

2. **异步更新导致的问题**：
   使用异步代码（例如定时器或 Promise）修改数据时，Vue 可能无法即时响应更新  
    使用 this.$nextTick 来确保在 DOM 更新后执行操作
   Vue 在处理异步代码时可能会出现数据更新不及时的情况。这是因为 Vue 的响应式系统是基于观察者模式的，而异步代码的执行可能独立于主线程，导致观察者无法即时捕捉到数据变化。

在 Vue 中，数据变化后，Vue 会异步地将变化通知到组件，然后进行重新渲染。但是，如果数据的变化是在异步代码中发生的，Vue 可能在异步代码执行完毕之前就完成了组件的渲染，导致组件无法即时反映数据的最新状态。

为了解决这个问题，可以考虑使用 this.$nextTick方法。$nextTick 会在 Vue 下一次更新循环中执行回调函数，确保在数据变化后立即获取到最新的 DOM 状态。例如：

```javascript
// 在异步代码中修改数据
someAsyncOperation().then(() => {
  this.data = newData

  // 使用 $nextTick 确保在 DOM 更新之后执行回调
  this.$nextTick(() => {
    // 在这里可以操作更新后的 DOM
    console.log(this.$el.textContent)
  })
})
// 通过使用$nextTick，你可以在数据变化后立即执行回调函数，而不必担心异步代码导致的数据更新延迟。这是一种常见的处理异步更新的模式a
```

3. **事件处理函数中的 this 丢失**：
   在事件处理函数中，this 的指向可能不是 Vue 实例。可以使用箭头函数或者 .bind(this) 来确保函数内的 this 指向 Vue 实例

4. **v-for 中的 key 问题**：
   在使用 v-for 渲染列表时，务必给每个项提供一个唯一的 key，使其性能降低,Vue 无法正确追踪项的状态  
   有助于 Vue 识别每个项的身份，以提高性能

5. **组件通信问题**
   当多个组件需要通信时，可以使用 **Vuex **进行状态管理，或者使用事件总线（$emit 和 $on）  
   注意不要滥用全局状态

6. **路由导航守卫的坑**：
   在使用 Vue Router 时，要注意路由导航守卫的执行时机  
   在 beforeRouteEnter 钩子中无法直接访问组件实例的 this，可以使用回调函数的方式处理

7. **CSS 作用域**：
   使用 scoped 属性，防止样式污染全局环境
   当你在一个组件的 style 标签中使用 scoped 属性时，Vue.js 会自动为这个组件的样式添加一个**唯一的标识符**，这样样式就只会应用到当前组件的元素上，而不会泄漏到其他组件。

8. **不要在模板中使用箭头函数**：
   在模板中使用箭头函数会导致 this 指向不正确。在模板中应该使用普通函数

9. **注意生命周期钩子的执行顺序**：
   了解 Vue 组件的生命周期钩子的执行顺序，以确保在正确的时机执行相关的操作。

10. **跨域问题**：
    浏览器的同源策略下，不同源之间进行网络请求会受到限制。同源策略要求网页只能向与其来源相同的服务器发送请求 1. CORS（Cross-Origin Resource Sharing）  
    服务器设置合适的响应头，允许指定的源（域）访问资源。在客户端，浏览器会在请求中添加一个 Origin 头，并检查服务器的响应头中是否包含 Access-Control-Allow-Origin  
     2. 代理服务器  
    在同源策略下，可以通过在同一域名下设置代理服务器，将请求发送到代理服务器，由代理服务器转发请求到目标服务器。前端请求代理服务器，绕过了同源策略的限制  
     3. jsonp

11. **v-if 和 v-for 一起使用的问题**：
    带来性能方面的浪费（每次渲染都会先循环再进行条件判断）
    这可能导致预期之外的结果。可以使用 template 元素或者计算属性来处理

```js
外层嵌套template（页面渲染不生成dom节点），在这一层进行v-if判断，然后在内部进行v-for循环
<template v-if="isShow">
    <p v-for="item in items">
</template>
```

12. **数据处理（精度丢失）**：
    数据处理中出现精度丢失问题，并采用了适当的方法来确保数据准确性(后端返回 string，或者前端使用 bignumber 库进行转化。)

13. **内存溢出**
    画 K 线图，js 逻辑写的有问题，点击事件发生时 canvas 反复渲染，导致内存逐渐升高，在 APP 内，直接导致了 APP 闪退。我重写了一下 js 逻辑，针对 canvas 做了一些优化，修复了这个 bug。
    目前对这块分析经验还不是很多，后续碰到问题再实践。
