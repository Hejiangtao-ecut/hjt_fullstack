var replaceSpace = function (s) {
    const reg = new RegExp(' ', 'g');
    s = s.replace(reg, "%20");
    return s;
};