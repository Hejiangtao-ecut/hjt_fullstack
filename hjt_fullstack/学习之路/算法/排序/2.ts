// 选择排序
const arr1: Array<number> = [5, 423, 6, 421, 768, 54];

function sort1(array:Array<number>) {
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}

console.log(sort1(arr1))