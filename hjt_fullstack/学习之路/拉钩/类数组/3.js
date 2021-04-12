function foo(name, job) {
    let args = Array.prototype.slice.call(arguments);
    console.log(args);
}

foo('江河', '前端实习生');  // [ '江河', '前端实习生' ]