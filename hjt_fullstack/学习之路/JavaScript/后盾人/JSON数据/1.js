const user = {
    name: '江河',
    age: 18,
    school: 'ECUT',
    work: '前端实习生',
    // 复写toJSON方法
    toJSON: function () {
        return {
            name: this.name,
            school:this.school
        }
    }
}

let user1 = JSON.stringify(user);
console.log(user1); //{"name":"江河","school":"ECUT"}