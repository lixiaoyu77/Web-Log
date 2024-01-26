function debounce(fn, wait) {
    let timeout;

    return function () {
        let context = this; // 保存this指向
        let args = arguments; // 拿到event对象

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            fn.apply(context, args)
        }, wait);
    }
}

// 创建一个防抖版本的函数
const debouncedFunction = debounce(function() {
    console.log("Function is debounced");
}, 200);

// 调用防抖函数
debouncedFunction(); // 在200毫秒内再次调用，将会重新计时