// 效率最高、时间最短
var maxPerformance = function (n, speed, efficiency, k) {
    let rate = [];
    let sort = [];
    let time = [];
    let index = -1;
    for (const item of speed) {
        index++;
        rate.push(item * efficiency[index]);
        console.log(rate[index]);
    }
};

maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 2);
console.log('------------')
maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 3);
console.log('------------')
maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 4);