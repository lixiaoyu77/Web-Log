// 定时器写法
function throttled (fn, delay = 500) {
    let timer = null
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
            }, delay)
        }
    }
}
const throttledFn = throttled(function (a, b, c) {
    console.log(a, b, c)
}, 500)

throttledFn(1, 2, 3)