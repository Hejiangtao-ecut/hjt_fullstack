// 防抖
function showTop() {
    let scollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scollTop);
}

function debounce(fn, delay) {
    let timer = null;
    return () => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, delay);
    }
}