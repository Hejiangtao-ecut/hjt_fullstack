// shell 排序

let arr = [1, 5, 8, 4, 6, 3, 2, 9, 7];

function sort(arr) {
    let length = arr.length;
    let gap = parseInt(length/2);
    while (gap > 1) {
        for (let i = 0; i <= gap; i++){
            for (let j = i; j < length; j = j+gap){
                if (arr[j] > arr[j + gap]) {
                    let num = arr[j + gap];
                    let x = j + gap;
                    while (x >= i && arr[x - gap] > num) {
                        arr[x] = arr[x - gap];
                        x = x - gap;
                    }
                    arr[x] = num;
                }
            }
        }
        gap = parseInt(gap / 2);
    }
}

sort(arr);
console.log(arr);