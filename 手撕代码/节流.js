function throttled(fn, delay = 500) {
    let oldtime = Date.now()
    return function (...args) {
        let newtime = Date.now()
        if (newtime - oldtime >= delay) {
            fn.apply(null, args)
            oldtime = Date.now()
        }
    }
}

const throttledFn = throttled(function (a, b, c) {
    console.log(a, b, c);
}, 500);

throttledFn(1, 2, 3);