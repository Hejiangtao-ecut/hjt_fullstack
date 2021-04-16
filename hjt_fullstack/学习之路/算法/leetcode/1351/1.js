var countNegatives = function (grid) {
    let num = 0;
    grid.forEach(element => {
        element.forEach(n => n<0?num++:0)
    });
    return num;
};

// countNegatives([[1, 2, 3], [4, 5, -1]])
console.log(countNegatives([[1, 2, 3], [4, 5, -1]]));