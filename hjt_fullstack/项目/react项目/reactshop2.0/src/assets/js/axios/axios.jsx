// 封装ajax请求
import axios from 'axios';

export default async function Ajax(Url,pType='GET') {
    return await axios({
        method: pType,
        url:Url
    }).then(res => res.data)
    
}