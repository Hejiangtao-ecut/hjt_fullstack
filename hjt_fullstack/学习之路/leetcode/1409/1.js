var processQueries = function (queries, m) {
    let p = [];
    let result = [];
    let num = 0;
    let index = 0;
    for (let i = 1; i <= m; i++) { p.push(i) };
    queries.forEach(element => {
        result.push(p.indexOf(element));
        num = p.splice(result[index], 1);
        p.unshift(...num);
        index++;
    });
    console.log(result);
    return result;
};

processQueries([4, 1, 2, 2],4);