import React, { useState } from 'react';

function Demo1() {
    const [name, setName] = useState('江河');
    const [age, setAge] = useState(21);
    const [sex, setSex] = useState('男');
    return (
        <div>
            <p>name:{name}</p>
            <p>age:{age}</p>
            <p>sex:{ sex }</p>
        </div>
    )
}

export default Demo1;