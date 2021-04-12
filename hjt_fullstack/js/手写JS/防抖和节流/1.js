// 节流

// 节流的操作
function showTop() {
    let scollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scollTop);
}

function throttle(fn,delay) {
    // fn 需要节流的方法
    // delay 时间阀
    let valid = false;
    return () => {
        if (valid) {
            // 关闭时间
            return
        }
        // 开启
        valid = true;
        setTimeout(() => {
            fn();
            // 开启后马上关闭
            valid = false;
        },delay)

    }
}