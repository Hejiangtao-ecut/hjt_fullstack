function duplicode(word){
    // map jsonobject
    let count = 0;
    for(let i=0;i<word.lenth;i++){
        let char = word[i];
        if(char in map){
            count ++;
        }else{
            map[char] = 1;
        }
    }
    return count;
}

console.log(duplicode("aadsdjfwuhh"))