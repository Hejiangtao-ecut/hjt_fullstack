const lessons = [
    { name: 'js', price: 100 },
    { name: 'phppppppppp', price: 90 },
    {name:'css',price:110}
]

let proxy = new Proxy(lessons, {
    get(array,key) {
        // console.log(array[key]);
        const name = array[key].name;
        const price = array[key].price;
        array[key].name = name.length > 5 ? name.substr(0, 5) + '.'.repeat(3) : name
        return array[key];
    }
})

console.log(proxy[1]);