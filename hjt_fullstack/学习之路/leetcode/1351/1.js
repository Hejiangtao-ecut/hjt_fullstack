var countNegatives = function (grid) {
    let num = 0;
    grid.forEach(element => {
        element.forEach(n => {
            if (n < 0) {
                num++;
            }
        })
    });
    return num;
};

countNegatives([[1, 2, 3], [4, 5, 6]]);