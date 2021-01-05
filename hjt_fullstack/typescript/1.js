// user类型 Object 
const getUserInfo = function(user){
    if(!user || typeof user != 'object' || !Object.keys(user).includes("name") || !Object.keys(user).includes("age"))
        throw new Error('参数错误')
    return `name:${user.name},age:${user.age}`
}
console.log(getUserInfo({name:'koala',age:18}))
console.log(getUserInfo({name:'kaola'}))