function a() {
    var num = 1;
    function b() {
        console.log(++num);
    }
    return b;
}

const result = a();
result();
result();