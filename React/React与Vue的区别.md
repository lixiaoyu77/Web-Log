# react 与 vue 区别
## 相同点
1. 都是创建 UI 界面的 JavaScript 库，
2. 都是组件化思想，组件化开发
3. 都是使用了虚拟 DOM，来提升渲染速度
4. 都有独立的状态管理库

## 不同点
1. 数据流：
vue 的思想是响应式的（MVVM），实现了数据的双向绑定。对每个属性建立 watcher,通过 getter,setter 劫持监听变化，响应式的更新对应的虚拟 DOM  
react 是函数式思想，单向数据流，react 在 setState 后会通过 diff 算法计算不同，重新走渲染的流程
2. 模板语法
vue 使用 template 模板，以 template+JavaScript+CSS 的组合模式呈现，通过 vue 是指令+模板语法实现。  
react 使用 jsx 模板，函数式编程，通过原生 JS 语法实现，比如插值，条件，循环等。map, if{}， A&&B
3. 渲染
vue 会跟踪组件的依赖关系，vue 是数据变化通知依赖项精确的驱动渲染，不需要重新渲染整个组件树  
react 在应用的状态被改变时，重新渲染全部子组件，但是可以通过 shouldComponentUpdate 等一些方法进行优化控制全部子组件都会重新渲染。
4. diff 算法
vue Diff 使用双向链表边对比边更新  
react 的 diff 将需要更新的部分添加到任务队列进行批量更新
5. 事件机制
vue 直接是原生事件
react 是合成事件: 事件冒泡到根节点进行事件委托处理，且做了跨端兼容处理。
6. 性能优化
在 Vue 中，一个组件在渲染期间依赖于自动追踪，因此系统知道提前预判哪一个组件需要渲染当组件状态发生改变时。每个组件可以被认为具有自动为你实现 shouldComponentUpdate，不需要注意嵌套的组件  
在 react 中，当组件状态改变时，它会触发整个子组件数重新渲染，以根组件作为渲染基点。为了避免不必要的子组件重新渲染，你需要使用 PureComponent 或者实现 shouldComponentUpdate
但是 vue 的响应式机制也有问题，就是当 state 特别多的时候，Watcher 也会很多，会导致卡顿，所以大型应用（状态特别多的）一般用 react，更加可控