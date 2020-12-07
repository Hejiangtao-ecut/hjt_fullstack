// console.log("hello world".slice(1))

function generateHashtag(str) {
    // 'hello world'  'Hello World'
    return str.length > 140 || str === '' ? flase: '#' + str.split('').map(capitalize).join('')
}
// map 的 callback
function capitalize(item){
    return item.charAt(0).toUpperCase() + item.slice(1)
}
  console.log(generateHashtag('hello world'));
  