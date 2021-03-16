var lengthOfLastWord = function (s) {
    s = s.split(' ').reverse();
    for (let i = 0; i < s.length; i++){
        let p = /[a-z]{1,}/i;
        if (p.test(s[i])) {
            return (s[i].length)
        }
    }
    return 0;
};

console.log(lengthOfLastWord("Hello World"));