var removeOuterParentheses = function (S) {
    let ss = S.split('');
    let count = -1;
    let num = [];
    ss.forEach(element => {
        element === '(' ? num.push(++count) : num.push(--count);
    });
    for (let i = 0; i < num.length; i++){
        num[i] === -1 ? ss[i] = 0 : 0;
        (num[i] === 0 && ss[i] === '(') ? ss[i] = 0 : 0;
    }
    return ss = ss.join('').replace(/0/g, '');
};

removeOuterParentheses("(()())(())");