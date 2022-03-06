function a() {
    var num = 1;
    function b() {
        num = num++;
        console.log(num);
    }
    return b;
}

const result = a();
result();
result();