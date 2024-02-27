
// Promise，有一个请求，5s内没有结果就提示超时

// 使用 Promise.race() 来设置一个超时，让 Promise 在一定时间内未解决就拒绝

function fetchData () {
  return new Promise((resolve, reject) => {
    // 模拟异步请求
    setTimeout(() => {
      // 假设请求成功
      resolve('请求成功')
    }, 6000) // 这里故意设置一个较长的请求时间
  })
}

function fetchWithTimeout (timeout) {
  return Promise.race([
    fetchData(),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('请求超时'))
      }, timeout)
    })
  ])
}

// 调用
const timeout = 5000 // 设置超时时间为 5s
fetchWithTimeout(timeout)
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.error(error.message) // 请求超时
  })
