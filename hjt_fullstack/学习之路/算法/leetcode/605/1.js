// # 605
// var canPlaceFlowers = function (flowerbed, n) {
//     let str = flowerbed.join('');
//     let reg = /000/g;
//     let count = str.match(reg);
//     return count.length >= n;
// };

// canPlaceFlowers([1, 0, 0, 0,0, 1],1)

board = ["XXX", "O O", "XOX"];
var validTicTacToe = function (board) {
    let str = board.join('');
    try {
        if (str.match(/xxx/ig).length) {
            return false;
        }
        if (str.match(ooo/ig).length) {
            return false;
        }
    } catch (error) {
        
    }
    
    if (str.match(/x/ig).length < str.match(/o/ig).length) {
        // console.log('--------')
        return false;
    }
    if (check(str, 0, 3) || check(str, 1, 3) || check(str, 2, 3) || check(str, 0, 4) || check(str, 2, 2)) {
        return false;
    }
    return true;
};

function check(str, start, n) {
    if (str[start] == str[start + n] == str[start + n + n]) {
        return true;
    }
    return false;
}

console.log(validTicTacToe(board))