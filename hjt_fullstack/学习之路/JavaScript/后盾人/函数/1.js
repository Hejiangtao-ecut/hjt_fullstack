{
    let demo1 = function () {
        console.log('demo2')
    }
    let demo2 = function () {
        console.log('dmeo2');
    }
    globalThis.demo = { demo1, demo2 };
}

demo.demo1();