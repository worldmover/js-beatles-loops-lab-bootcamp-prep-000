function theBeatlesPlay(musicians,instruments){
var array=[]

for(var i=0;i<musicians.length;i++){
    array[i]=(musicians[i]+" plays "+instruments[i])
}
return array
}

console.log("peppr")

function johnLennonFacts(facts){
  l = facts.length
  while(l>0){
    facts[l-1]=facts[l-1]+"!!!"
    l--
  }
  return facts
}