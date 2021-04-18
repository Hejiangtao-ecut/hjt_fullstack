var canMakePaliQueries = function (s, queries) {
    let result = queries.map(item, index => {
        console.log(index)
        return checkQueries(s, item)
    });
    return result;
};

function checkQueries(s, arr) {
    let str = s.slice(arr[0], arr[1] + 1);
    console.log(str, '----', arr);
    if (str.length < 2) {
        return true;
    }
    let i = 0, j = str.length, x = arr[2];
    while (i < j) {
        console.log('start=======')
        if (str[i] == str[j]) {
            i++;
            j--;
        } else {
            if (x > 0) {
                i++, j--;
                arr[2]--;
            } else {
                return false;
            }
        }
        return true
    }
}


let s = "abcda", queries = [[3, 3, 0], [1, 2, 0], [0, 3, 1], [0, 3, 2], [0, 4, 1]];
console.log(canMakePaliQueries(s, queries));
// console.clear()