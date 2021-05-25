import echo from '../conf/echo';
export function lazyImage() {
    echo.init({
        offset: 100, //可视区域多少像素开始加载图片
        throttle:0  // 加载延迟时间
    })
}