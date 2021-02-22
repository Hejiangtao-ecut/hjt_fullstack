function removenum(numbers){
    let num = Math.min(...numbers);
    numbers.splice(numbers.indexOf(num),num);
    return numbers;
}

console.log(removenum([164,183,234,152,130,158,49]))