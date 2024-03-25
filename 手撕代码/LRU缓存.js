
//LRU（最近最少使用）缓存，LRU缓存是一种常用的缓存淘汰策略
//它基于这样的思想：
//如果一个数据项最近一段时间内没有被访问，那么在未来它被访问的可能性也较小
//因此，当缓存空间不足时，LRU算法会淘汰最近最少被访问的数据项。
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.order = []
  }

  get (key) {
    if (this.cache.has(key)) {
      // 更新访问顺序
      this.order.splice(this.order.indexOf(key), 1)
      this.order.unshift(key)
      return this.cache.get(key)
    } else {
      return -1
    }
  }

  put (key, value) {
    if (this.cache.has(key)) {
      // 如果已经存在，更新值和访问顺序
      this.cache.set(key, value)
      this.order.splice(this.order.indexOf(key), 1)
      this.order.unshift(key)
    } else {
      // 如果缓存已满，删除最久未使用的项
      if (this.order.length === this.capacity) {
        const leastUsedKey = this.order.pop()
        this.cache.delete(leastUsedKey)
      }
      // 添加新项到缓存和访问顺序
      this.cache.set(key, value)
      this.order.unshift(key)
    }
  }
}

// 示例用法
const cache = new LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
console.log(cache.get(1)) // 输出 1
cache.put(3, 3) // 移除 key 2
console.log(cache.get(2)) // 输出 -1，因为缓存中不存在 key 2
cache.put(4, 4) // 移除 key 1
console.log(cache.get(1)) // 输出 -1，因为缓存中不存在 key 1
console.log(cache.get(3)) // 输出 3
console.log(cache.get(4)) // 输出 4
