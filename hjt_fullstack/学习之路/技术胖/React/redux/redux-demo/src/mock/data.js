import mockjs, { mock } from 'mockjs';

export default mockjs.mock('/lists', 'get', {
    'list|10':["@ctitle(5)"]
})