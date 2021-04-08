var a = 0;

Object.defineProperty(window, 'a', {
    get: function () {
        return ++a;
    }
});

console.log(a == 1 && a == 2 && a == 3);

