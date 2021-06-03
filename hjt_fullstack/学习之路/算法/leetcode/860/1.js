var lemonadeChange = function (bills) {
    let nums = 0;
    return bills.every(item => {
        return nums >= item - 5 ? nums += 5 : false
    })
};

console.log(lemonadeChange([5, 5, 5, 10, 20]))