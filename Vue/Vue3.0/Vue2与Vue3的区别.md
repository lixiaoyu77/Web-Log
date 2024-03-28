#### 以下是 Vue.js 3 相对于 Vue.js 2 的一些主要区别：

### 性能改进：

Vue.js 3 在性能方面有了显著的改进。它引入了一些优化，比如使用 Proxy 代替 Object.defineProperty 实现响应式系统，提高了响应式数据的效率
Vue.js 3 也对虚拟 DOM 进行了改进，减少了不必要的重渲染，提高了渲染性能

### Composition API：

Vue.js 3 引入了 Composition API，这是一个新的组织组件逻辑的方式。与 Vue.js 2 中的 Options API 相比，Composition API 更加灵活，可以更好地组织和重用代码，并提供了更好的 TypeScript 支持。
Composition API 使得逻辑可以基于逻辑片段组织，而不是基于选项

### 更好的 TypeScript 支持：

Vue.js 3 对 TypeScript 的支持得到了改进。TypeScript 用户在使用 Vue.js 3 时会享受到更好的类型推断和类型检查，使得开发更加稳健

### 静态节点提升：

Vue.js 3 引入了静态节点提升，这是一个编译时的优化技术，能够将静态节点提升到渲染函数之外，从而避免了在每次渲染时都重新创建相同的节点

### Tree-shaking 支持：

Vue.js 3 的代码结构更加模块化，使得它更容易进行 Tree-shaking，即在打包时消除未使用的代码，减小包的体积

### 更好的 TypeScript 集成：

Vue.js 3 在设计时就考虑了对 TypeScript 的友好性，并且提供了完整的 TypeScript 类型定义文件

### 内置了新的 API：

Vue.js 3 内置了一些新的 API，比如 teleport、Suspense 等，使得开发者能够更方便地实现一些常见的功能
