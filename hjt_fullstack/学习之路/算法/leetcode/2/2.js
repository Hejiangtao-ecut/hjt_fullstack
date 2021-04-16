var addTwoNumbers = function (l1, l2) {
    // let num1 = [];
    // let num2 = [];
    // while (l1 || l2) {
    //     if (l1) {
    //         num1.push(l1.val);
    //         l1 = l1.next;
    //     }
    //     if (l2) {
    //         num2.push(l2.val);
    //         l2 = l2.next;
    //     }
    // }
    const toNum = (arr) => {
        arr = arr.reverse().join('');
        return Number.parseInt(arr);
    }
    return toNum(l1) + toNum(l2);
};

console.log(addTwoNumbers([1, 2, 3], [4, 5, 6]))