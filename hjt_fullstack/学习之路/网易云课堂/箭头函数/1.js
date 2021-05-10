var person={
    name: "江河",
    This:this,
    getName: function () {
        var This = this;
        setTimeout(function (){
            console.log(This);
            console.log(This.name);
        },100)
        
    }
}

var get = person.getName.bind(person);
get();