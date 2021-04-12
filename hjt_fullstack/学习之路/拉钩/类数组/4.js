function foo(name, job) {
    let args = [...arguments]
    console.log(args);
}

foo('江河', '前端实习生');  // [ '江河', '前端实习生' ]