Vuex 存储的数据在页面刷新后会丢失  
其数据是存储在内存中的，页面刷新会导致整个前端应用的重新加载，从而导致 Vuex 中的状态被重置

# Vuex
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。

Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化。

Vuex 为 Vue Components 建立起了一个完整的生态圈，包括开发中的 API 调用一环。

（1）核心流程中的主要功能：

Vue Components 是 vue 组件，组件会触发（dispatch）一些事件或动作，也就是图中的 Actions;

在组件中发出的动作，肯定是想获取或者改变数据的，但是在 vuex 中，数据是集中管理的，不能直接去更改数据，所以会把这个动作提交（Commit）到 Mutations 中;

然后 Mutations 就去改变（Mutate）State 中的数据;

当 State 中的数据被改变之后，就会重新渲染（Render）到 Vue Components 中去，组件展示更新后的数据，完成一个流程。

（2）各模块在核心流程中的主要功能：

Vue Components∶ Vue 组件。HTML 页面上，负责接收用户操作等交互行为，执行 dispatch 方法触发对应 action 进行回应。
dispatch∶ 操作行为触发方法，是唯一能执行 action 的方法。
actions∶ 操作行为处理模块。负责处理 Vue Components 接收到的所有交互行为。包含同步/异步操作，支持多个同名方法，按照注册的顺序依次触发。向后台 API 请求的操作就在这个模块中进行，包括触发其他 action 以及提交 mutation 的操作。该模块提供了 Promise 的封装，以支持 action 的链式触发。
commit∶ 状态改变提交操作方法。对 mutation 进行提交，是唯一能执行 mutation 的方法。
mutations∶ 状态改变操作方法。是 Vuex 修改 state 的唯一推荐方法，其他修改方式在严格模式下将会报错。该方法只能进行同步操作，且方法名只能全局唯一。操作之中会有一些 hook 暴露出来，以进行 state 的监控等。
state∶ 页面状态管理容器对象。集中存储 Vuecomponents 中 data 对象的零散数据，全局唯一，以进行统一的状态管理。页面显示所需的数据从该对象中进行读取，利用 Vue 的细粒度数据响应机制来进行高效的状态更新。
getters∶ state 对象读取方法。图中没有单独列出该模块，应该被包含在了 render 中，Vue Components 通过该方法读取全局 state 对象。
Vuex 中 action 和 mutation 的区别
mutation 中的操作是一系列的同步函数，用于修改 state 中的变量的的状态。当使用 vuex 时需要通过 commit 来提交需要操作的内容。mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是实际进行状态更改的地方，并且它会接受 state 作为第一个参数：

```javascript
const store = new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    increment(state) {
      state.count++; // 变更状态
    },
  },
});
```

当触发一个类型为 increment 的 mutation 时，需要调用此函数：

```javascript
store.commit("increment");
```
而 Action 类似于 mutation，不同点在于：

Action 可以包含任意异步操作。
Action 提交的是 mutation，而不是直接变更状态。
```javascript
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
});
```

Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。 所以，两者的不同点如下：

Mutation 专注于修改 State，理论上是修改 State 的唯一途径；Action 业务代码、异步请求。
Mutation：必须同步执行；Action：可以异步，但不能直接操作 State。
在视图更新时，先触发 actions，actions 再触发 mutation
mutation 的参数是 state，它包含 store 中的数据；store 的参数是 context，它是 state 的父级，包含 state、getters
Vuex 和 localStorage 的区别
（1）最重要的区别

vuex 存储在内存中
localstorage 则以文件的方式存储在本地，只能存储字符串类型的数据，存储对象需要 JSON 的 stringify 和 parse 方法进行处理。 读取内存比读取硬盘速度要快
（2）应用场景

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。vuex 用于组件之间的传值。
localstorage 是本地存储，是将数据存储到浏览器的方法，一般是在跨页面传递数据时使用 。
Vuex 能做到数据的响应式，localstorage 不能
（3）永久性 刷新页面时 vuex 存储的值会丢失，localstorage 不会。

注意： 对于不变的数据确实可以用 localstorage 可以代替 vuex，但是当两个组件共用一个数据源（对象或数组）时，如果其中一个组件改变了该数据源，希望另一个组件响应该变化时，localstorage 无法做到，原因就是区别

Redux 和 Vuex 有什么区别，它们的共同思想
（1）Redux 和 Vuex 区别

Vuex 改进了 Redux 中的 Action 和 Reducer 函数，以 mutations 变化函数取代 Reducer，无需 switch，只需在对应的 mutation 函数里改变 state 值即可
Vuex 由于 Vue 自动重新渲染的特性，无需订阅重新渲染函数，只要生成新的 State 即可
Vuex 数据流的顺序是 ∶View 调用 store.commit 提交对应的请求到 Store 中对应的 mutation 函数->store 改变（vue 检测到数据变化自动渲染）
通俗点理解就是，vuex 弱化 dispatch，通过 commit 进行 store 状态的一次更变;取消了 action 概念，不必传入特定的 action 形式进行指定变更;弱化 reducer，基于 commit 参数直接对数据进行转变，使得框架更加简易;

（2）共同思想

单—的数据源
变化可以预测
本质上：redux 与 vuex 都是对 mvvm 思想的服务，将数据从视图中抽离的一种方案; 形式上：vuex 借鉴了 redux，将 store 作为全局的数据中心，进行 mode 管理;

为什么要用 Vuex 或者 Redux
由于传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致代码无法维护。

所以需要把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，组件树构成了一个巨大的"视图"，不管在树的哪个位置，任何组件都能获取状态或者触发行为。

另外，通过定义和隔离状态管理中的各种概念并强制遵守一定的规则，代码将会变得更结构化且易维护。

Vuex 和单纯的全局对象有什么区别？
Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化，从而能够实现一些工具帮助更好地了解我们的应用。
为什么 Vuex 的 mutation 中不能做异步操作？
Vuex 中所有的状态更新的唯一途径都是 mutation，异步操作通过 Action 来提交 mutation 实现，这样可以方便地跟踪每一个状态的变化，从而能够实现一些工具帮助更好地了解我们的应用。
每个 mutation 执行完成后都会对应到一个新的状态变更，这样 devtools 就可以打个快照存下来，然后就可以实现 time-travel 了。如果 mutation 支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，给调试带来困难。
Vuex 的严格模式是什么,有什么作用，如何开启？
在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。

在 Vuex.Store 构造器选项中开启,如下

```js
const store = new Vuex.Store({
    strict:true,
})
```
如何在组件中批量使用 Vuex
使用 mapGetters 辅助函数, 利用对象展开运算符将 getter 混入 computed 对象中 使用 mapMutations 辅助函数,在组件中这么使用