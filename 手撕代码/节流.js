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



function throttled(fn,delay=500){
    let oldtime = Date.now()
    return function(...args){
        newtime = Date.now()
        if(newtime - oldtime > delay){
            fn.apply(null,args)
            oldtime = Date.now();
        }
    }
}

function debounce(fn,wait){
    let timeout;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            fn.apply(context,args);
        },wait)
    }
}