//动态规划
//时间复杂度为O(n) 空间复杂度为O(1)
var climbStairs = function(n) {
    if(n < 1) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
 
    let a = 1;
    let b = 2;
    let temp = 0;
 
    for (let i = 3; i < n + 1; i++) {
        temp = a + b;
        a = b;
        b = temp;          
    }
    return temp;
}
console.log(climbStairs(99))