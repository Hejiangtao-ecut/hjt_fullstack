// 归并排序
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function mergeSort() {
    const merge = (left, right)=>{
        const result = [];
        let l = 0;
        let r = 0;
        while (l < left.length && r < right.length) {
            if (left[l] < right[r]) {
                result.push(left[l++]);
            } else {
                result.push(right[r++])
            }
        }
        while (l < left.length) {
            result.push(left[l++])
        }
        while (r < right.length) {
            result.push(right[r++])
        }
        return result;
    }
    const mergesort = (array) => {
        if (array.length < 2) {
            return array;
        }
        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle, array.length);
        return merge(mergesort(left), mergesort(right));
    }
    return mergesort(a);
}

console.log(mergeSort(a));