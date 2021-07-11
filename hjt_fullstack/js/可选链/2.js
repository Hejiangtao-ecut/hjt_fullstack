const demo1 = {
    func() {
        console.log('欸嘿，就不报错！');
    }
}

const demo2 = {
    func = 'demo'
}

// demo1.func?.(); // 欸嘿，就不报错！
demo2.func?.(); // 