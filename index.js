function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < 4; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0

while (i < facts.length) {
   array.push('${facts[i]}!!!')
   i++
 }
  return array
}
