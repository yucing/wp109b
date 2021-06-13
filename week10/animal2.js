class animal{
    constructor(name){
        this.name=name
    }
    say() {}
}

class dog extends animal{
    constructor(){
        super('狗')
    }
    say(){console.log(this.name,'旺旺')}
}

var a = new dog()
var animallist = [a]

for (var i of animallist){
    i.say()
}