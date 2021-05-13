var lastRemaining = function (n) {
    let stack = [];
    for (let i = 1; i <= n; i++) {
        stack.push(i);
    }
    let x = 1;
    while (stack.length > 1) {
        let newStack = [];
        if (x = 1) {
            for (let i = 1; i < stack.length; i++){
                newStack.push(stack[i]);
                i++;
            }
        } else {
            for (let i = (stack.length - 2); i >= 0; i--){
                newStack.push(stack[i]);
                i--;
            }
        }
        if (x == 1) {
            x = 0;
        } else {
            x = 1;
        }
        stack = newStack;
        console.log(x);
        console.log(stack);
    }
    return stack;
};

console.log(lastRemaining(9));