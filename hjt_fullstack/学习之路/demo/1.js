const mockjs = require('mockjs');

// let data = mockjs.mock({
//     "id|10": [{ 
//         "id|+1":0
//      }]
// })
// console.log(data)

let data = Mock.mock({
    'data|100': [{
        'key|+1': 1,
        'title': Random.csentence(10, 13),
        'content': Random.paragraph(),
        'name': '@name',
        'email': '@email',
        'sex|1': ['男', '女'],
        'zip': Random.zip(),
        'avatar': Random.image('200x100', '#FF6600')
    }]
})

console.log(data)