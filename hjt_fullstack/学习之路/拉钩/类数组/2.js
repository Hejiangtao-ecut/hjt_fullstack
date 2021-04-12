function add() {
    let count = 0;
    for (let i = 0; i < arguments.length; i++){
        count += arguments[i];
    }
    console.log(count);
    return count;
}

add(1, 2, 3, 4, 5); //15