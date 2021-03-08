var maxScore = function (s) {
    let num = 0, left = 0, leftStr = '', right = 0, rightStr = '';
    for (let i = 1; i < s.length; i++){
        left = 0, right = 0;
        leftStr = s.slice(0, i);
        rightStr = s.slice(i);
        console.log("left:",leftStr,"right:",rightStr)
    }
};

maxScore("12345")