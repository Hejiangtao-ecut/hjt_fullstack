var carFleet = function (target, position, speed) {
    let times = position.map((item, index) => {
        return (target - item) / speed[index];
    })
    console.table(times);
    for (let i = 0; i < position.length; i++) {
        for (let j = i + 1; j < position.length; j++) {
            if (position[i] < position[j]) {
                [position[i], position[j]] = [position[j], position[i]];
                [times[i], times[j]] = [times[j], times[i]];
            }
        }
    }
    console.table(position);
    console.table(times);
    let count = position.length;
    for (let i = 0; i < times.length; i++) {
        for (let j = i + 1; j < times.length; j++) {
            if (times[i] <= times[j]) {
                count--;
                times.splice(j, 1);
                j--;
            }
        }
    }
    return count;
};

console.log(carFleet(12,[10,8,0,5,3], [2,4,1,1,3]))