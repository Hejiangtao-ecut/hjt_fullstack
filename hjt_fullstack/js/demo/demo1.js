// 2020/12/03

var obj = {
    id:"awesome",
    cool: function idshow() {
        console.log(this.id)
    }
}

obj.cool();

var id = "not awesome";

obj.cool();

setTimeout(obj.cool(),100);