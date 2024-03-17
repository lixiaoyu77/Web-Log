function delayedPrint (message, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(message)
      resolve()
    }, delay)
  })
}

async function printThreeTimes () {
  await delayedPrint(1, 1000) // 打印 1，延迟 1000 毫秒
  await delayedPrint(1, 1000) // 再次打印 1，延迟 1000 毫秒
  await delayedPrint(1, 1000) // 最后打印 1，延迟 1000 毫秒
}

printThreeTimes()
