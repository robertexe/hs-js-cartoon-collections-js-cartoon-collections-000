function dwarfRollCall(dwarves) {
  let dwarfLine = '';

  for(let i=0; i<dwarves.length; i++){
    dwarfLine += (i+1) + '. ' + dwarves[i] + " "
  }
  return dwarfLine
}

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
  const threeCheeses = ['cheddar', 'gouda', 'camembart'];
  for(let i=0; i<foods.length; i++){
    if(threeCheeses.indexOf(foods[i])>-1){
      return foods[i]
    }
  }
  return 'no cheese!'
}
