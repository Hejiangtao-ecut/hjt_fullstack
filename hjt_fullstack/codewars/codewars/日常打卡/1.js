// function first(s){
//     let str = s.toLowerCase();
//     for (const item of str) {
//         if(str.indexOf(item) == str.lastIndexOf(item)){
//             return s[str.indexOf(item)];
//         }
//     }
//     return "";
// }

// console.log(first('stress'));

// function arr(nums,k){
//     for(;k>0;k--){
//         let num = nums[0];
//         for(let i = nums.length()-1;i>0;i--){
//             nums[i] = nums[i-1];
//         }
//         nums[0] = num;
//     }
//     return nums;
// }

// function nb(m){
//     let spend=0,n = 1;
//     while(spend<m){
//         spend += n**3;
//         if(spend==m){
//             return n;
//         }
//         n++;
//     }
//     return -1
// }

// console.log(nb(4183059834009))

