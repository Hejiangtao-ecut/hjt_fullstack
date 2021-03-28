const Mockjs = require('mockjs');

export default Mockjs.mock('infos', 'get', {
    data: [{
        'name': 'demo',
        'age':20
    }]
})