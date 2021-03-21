const climStairs=function(n) {
    if(n==1){
        return 1;
    }
    if(n==2){
        return 2;
    }
    if(n==3){
        return 3;
    }
    return climStairs(n-1)+climStairs(n-2);
}
//递归的算法
console.log(climStairs(99));