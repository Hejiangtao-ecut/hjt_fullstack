const lesson = [{ name: 'js' }, { name: 'css' }, { name: 'react' }];
let result = lesson.find(item => {
    console.log(item,'------')
    return item.name == 'css'
})

console.table(result);