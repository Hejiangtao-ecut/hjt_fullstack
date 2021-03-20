// const arr = [1, 2, 3, 4, 4, 5, 5, 5, 6, 7];


// console.log(arr.reduce((totol, num) => {
//     if (!totol.includes(num)) {
//         totol.push(num);
//     }
//     return totol;
// }, []));
// // []  unique


// // 不给参数，则会默认从第二项开始循环，acc默认为第一个参数
// console.log(
//     [1, 2, 3, 4].reduce((acc, num) => {
//         return acc+num
//     })
// )

const bills = [
    {
        type: 'shop',
        money:341
    },
    {
        type: 'shop',
        money:123
    },
    {
        type: 'transfer',
        money:123
    }, {
        type: 'hhwf',
        money:32432
    }
]

const newBills = bills.reduce((acc, bill) => {
    if (!acc[bill.type]) {
        acc[bill.type] = [];
    }
    acc[bill.type].push(bill);
    return acc;
}, {})

console.log(newBills);