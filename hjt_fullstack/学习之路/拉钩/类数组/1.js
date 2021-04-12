function foo(name,job) {
    console.log(arguments);
    console.log(Object.prototype.toString.call(arguments));
}

foo('江河','前端实习生');
// [Arguments] { '0': '江河', '1': '前端实习生' }
// [object Arguments]