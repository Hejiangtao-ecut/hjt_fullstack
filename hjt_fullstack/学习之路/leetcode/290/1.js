var wordPattern = function (pattern, s) {
    let p = pattern.split('');
    let str = s.split(' ');
    let a = [], b = [];
    let index = -1;
    if (p.length != str.length) {
        return false;
    }
    for (const item of p) {
        index++;
        if (a.indexOf(item) < 0) {
            if (b.indexOf(str[index]) < 0) {
                a.push(item);
                b.push(str[index]);
            } else {
                return false;
            }
        }
        if (a.indexOf(item) !== b.indexOf(str[index])) {
            return false;
        }
    }
    return true;
};

console.log(wordPattern("abba", "dog cat cat fish"));