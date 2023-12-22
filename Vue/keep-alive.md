## Keep-alive

keep-alive是vue中的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM

keep-alive可以设置以下props属性：
**include - 字符串或正则表达式。只有名称匹配的组件会被缓存**
**exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存**
**max - 数字。最多可以缓存多少组件实例**

关于keep-alive的基本用法：

<keep-alive>
  <component :is="view"></component>
</keep-alive>
使用includes和exclude：

<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>

<!-- 正则表达式 (使用 `v-bind`) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- 数组 (使用 `v-bind`) -->
<keep-alive :include="['a', 'b']">
  <component :is="view"></component>
</keep-alive>
匹配首先检查组件自身的 name 选项，如果 name 选项不可用，则匹配它的局部注册名称 (父组件 components 选项的键值)，匿名组件不能被匹配

**设置了 keep-alive 缓存的组件，会多出两个生命周期钩子（activated与deactivated）**

## 原理：

**缓存机制**：<keep-alive> 包裹的组件在离开视图时并不会被销毁，而是被移除 DOM 并保存在内存中，以维持其状态和数据。
**生命周期**：被包裹的组件在被激活（重新被加载到视图中）时，不会经历 created 和 mounted 生命周期，而是触发 activated 生命周期钩子函数。在被离开时，触发 deactivated 钩子函数。
**LRU 算法**：一般来说，内存是有限的，Vue 中的 <keep-alive> 也使用了类似 LRU（Least Recently Used）算法，缓存的组件数量超过限制时，会优先删除最近最少使用的组件。
