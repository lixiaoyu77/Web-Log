function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function trafficLight () {
  while (true) {
    console.log('红灯亮')
    await sleep(3000) // 红灯亮3秒钟
    console.log('红灯熄，绿灯亮')
    await sleep(1000) // 绿灯亮1秒钟
    console.log('绿灯熄，黄灯亮')
    await sleep(1000) // 黄灯亮1秒钟
    console.log('黄灯熄')
  }
}

trafficLight()
