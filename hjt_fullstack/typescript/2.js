var getUserInfoWithTs = function (user) { return "name:" + user.name + " age:" + user.age; }; //约定函数返回值为string
console.log(getUserInfoWithTs({ name: "joke", age: 21 }));
