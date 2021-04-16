var generateMatrix = function (n) {
    let count = 1;
    let num = [];
    for (let i = 0; i < n; i++){
        if (!num[i]) {
            num[i] = [];
        }
        for (let j = 0; j < n; j++){
            num[i].push(count++);
        }
    }
    console.log(num);
};

