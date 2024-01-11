// 1.编写一个sleep函数，先调用A等待n秒后再调用B（要求不允许改变A、B两个方法）
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // A 方法
  function A() {
    // 你的 A 方法的实现
    console.log('A 方法被调用了');
  }
  
  // B 方法
  function B() {
    // 你的 B 方法的实现
    console.log('B 方法被调用了');
  }
  
  // 调用 A 方法
  A();
  
  // 等待 5 秒后再调用 B 方法
  sleep(5000).then(() => {
    B();
  });