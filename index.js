function theBeatlesPlay(musicians,instruments){
var array=[]

for(var i=0;i<musicians.length;i++){
    array[i]=(musicians[i]+" plays "+instruments[i])
}
return array
}

console.log("peppr")

function johnLennonFacts(facts){
  l = facts.length + 1
  while(l>0){
    facts[l]=facts[l]+"!!!"
    l=l-1
  }
  return facts
}