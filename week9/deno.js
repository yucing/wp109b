var c2e = { '狗': 'dog' , '貓':'cat', '一隻': 'a', '這隻': 'the', '追': 'chase', '吃': 'eat' }

function mt (c) {
  var e = []
  for (let i in c) {
    var cword = c[i]
    var eword = c2e[cword]
    e.push(eword)
  }
  return e
}

console.log('Deno.args=', Deno.args)
var e = mt(Deno.args)
console.log(e)

//Deno.args 接受輸入的引數