class animal{
    say(){}
}

class dog extends animal{
    say(){console.log('旺旺')}
}

var a = new dog()
var animallist = [a]

for (var i of animallist){
    i.say()
}