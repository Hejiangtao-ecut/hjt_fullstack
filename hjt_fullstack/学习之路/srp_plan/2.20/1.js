var isOneBitCharacter = function(bits) {
    const n = bits.length;
    let i = n - 2;
    while (i >= 0 && bits[i]) {
        i--;
    }
    return (n - i) % 2 === 0;
};