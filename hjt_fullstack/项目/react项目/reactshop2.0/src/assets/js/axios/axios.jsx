// 封装ajax请求

export default async function Ajax(Url,pType='GET') {
    return await fetch(Url,{method:pType})
        .then(res => res.json())
    
}