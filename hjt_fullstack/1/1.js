//  1995-3-1

function getAge(bir) {
    let timer = new Date(bir);
    let now = new Date();
    let x = new Date(+now - +timer);
    return x.getFullYear() - 1970;
}

console.log(getAge('2021-6-2'));