function dwarfRollCall(dwarves) {
  let dwarfLine = '';

  for(let i=0; i<dwarves.length; i+=2){
    dwarfLine += (i+1) + '. ' + dwarves[i] + " "
  }
  return dwarfLine
}

console.log(dwarfRollCall(["Doc", "Dopey", "Bashful", "Grumpy"]))

function summonCaptainPlanet(planeteerCalls){
  const output = [];
  for(let i=0; i<planeteerCalls.length; i++){
    output.push(planeteerCalls[i].toUpperCase()+"!")
  }
  return output
}

function longPlaneteerCalls(words) {
  for(let i=0; i<words.length; i++){
    if(words[i].length<=4){
      return false
    } else {
      return true
    }
  }
}

function findTheCheese (foods) {
  const threeCheeses = ['cheddar', 'gouda', 'camembart', 'swiss'];
  for(let i=0; i<foods.length; i++){
    if(threeCheeses.indexOf(foods[i])>-1){
      return foods[i]
    }
  }
  return 'no cheese!'
}

console.log(findTheCheese(['apple','gouda','cheddar','banana']))



function wordsWithB(words){
  const output = [];
  for(let i=0; i<words.length; i++){ß
    if(words[i][0]==="B"){
      output.push(words[i])
    }
  }
  return output;
}




// console.log(wordsWithB(['James', 'Sally', 'Bob'])) // bob
// console.log(wordsWithB(['James', 'Bob', 'Billy'])) // bob and billy
// console.log(wordsWithB(['James', 'Sally'])) // []

// newIng = [apple gouda cheddar  banana]
