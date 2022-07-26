// Desafio 1
function compareTrue(value1, value2) {
  const favoriteFruit = 'amora';
  const favoriteFruitSecond = 'morango';
  const doNotLikeFruit = 'manga';
  
  if(value1 === 'amora' && value2 === 'morango'){
   return true;
  }else if (value1 === 'amora' && value2 === 'manga'){
    return false;
  }else if (value1 === 'morango' && value2 === 'manga'){
    return false;
  }
  }
  console.log(compareTrue('amora', 'morango'));
  console.log(compareTrue('amora', 'manga'));


// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));


// Desafio 3
function splitSentence(string) {
    let array = string.split(" ");
    return array;
}
  console.log(splitSentence('go Trybe'));
  console.log(splitSentence('vamo que vamo'));
  console.log(splitSentence('foguete'));
  

// Desafio 4
function concatName(arrayObject) {
  let lastItem = arrayObject[arrayObject.length - 1];
  let firstItem = arrayObject[0];

  return lastItem + ', ' + firstItem;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let sumWins = wins * 3;
  let sumTies = ties * 1;
  let total = sumWins + sumTies;
  return total;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));


// Desafio 6
function highestCount(arrayNumbers) {
 let cont = 0;
 let maior = 0;
 for (let index in arrayNumbers){
  if(maior <= arrayNumbers[index]){
    if(maior === arrayNumbers[index]){
      cont += 1;
    }else{
      maior = arrayNumbers[index];
       cont = 0;
       cont +=1;
    }
  }
 }
 return cont;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
//console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
//console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
