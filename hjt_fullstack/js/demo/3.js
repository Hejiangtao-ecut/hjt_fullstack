function duplicode(word){
    // es6 里的定义的新的数据结构 
    let map = new Map();
    // key=> value for O(n) O(1) redis elasticsearch

    for (const char of word) {
        if(map.has(char)){
            map.set(char,map.get(char)+1);
        }
        else{
            map.set(char,1)
        }
    }
    return map;
}

console.log(duplicode("aadsdjfwuhh"))