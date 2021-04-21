var strStr = function (haystack, needle) {
    if (needle == '') {
        return 0;
    }
    let x = new RegExp(needle,'g')
    
    return x.test(haystack).lastIndex;
};

console.log(strStr("hello",'ll'));