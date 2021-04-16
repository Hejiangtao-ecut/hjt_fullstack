function upcase(name) {
    return name.name.toUpperCase();
}
function test(name) {
    let demo = "demo:" + upcase(name);
    console.log(demo);
}

let name1 = {
    name: "demo1"
};

let name2 = {
    name:"dmeo2"
}

test(name1); //demo:DEMO1
test(name2); //demo:DMEO2