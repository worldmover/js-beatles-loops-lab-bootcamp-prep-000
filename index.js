function theBeatlesPlay(musicians,instruments){
var array=[]

 for(var i=0;i<musicians.length;i++){
    array[i]=(musicians[i]+" plays "+instruments[i])
}
return array
}

console.log("facts")

function johnLennonFacts(facts){
  l=facts.length
  console.log(l)
  while(l>0){
    facts[l]=facts[l]+"!!!"
  }
  return facts
}