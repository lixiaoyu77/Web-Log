function addAsync(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = a + b;
        resolve(result);
      }, 1000); // 模拟异步操作，比如网络请求或定时任务
    });
  }

// 使用异步加法
addAsync(2, 3)
.then(result => {
  console.log(result); // 输出 5
})
.catch(error => {
  console.error(error);
});


// 使用 async/await
async function performAddition() {
    try {
      const result = await addAsync(2, 3);
      console.log(result); // 输出 5
    } catch (error) {
      console.error(error);
    }
  }
  
// 调用使用 async/await 处理的异步加法
performAddition();