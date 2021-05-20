const s = [];
let arr = s;
for (let i = 0; i < 3; i++){
    var pusher = {
        value : `item` + i
    }, temp;
    if (i !== 2) {
        temp = [];
        pusher.children = temp;
    }
    arr.push(pusher);
    arr = temp;
}

console.log(s[0]);