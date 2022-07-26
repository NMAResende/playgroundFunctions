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
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

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
