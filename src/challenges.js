// Desafio 1
function compareTrue(value1, value2) {
  
  if(value1 === 'amora' && value2 === 'morango'){
   return true;
  }else if (value1 === 'amora' && value2 === 'manga'){
    return false;
  }else if (value1 === 'morango' && value2 === 'manga'){
    return false;
  }else if (value1 === 'manga' && value2 === 'manga'){
    return false;
  }
  }
  console.log(compareTrue('amora', 'morango'));
  console.log(compareTrue('amora', 'manga'));
  console.log(compareTrue('manga', 'manga'));


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
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > cat2){
    return 'cat2';
  }
  else if (cat1 < cat2){
    return 'cat1';
  }
  else if (cat1 === cat2){
    mouse = 'os gatos trombam e o rato foge';
    return mouse;
    
  }
}
console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(1, 6, 12));
console.log(catAndMouse(1, 8, 8));

// Desafio 8
function fizzBuzz(array) {
  let returnArray = [];
  for (let i = 0; i < array.length; i += 1){
    
    if (array[i] % 3 === 0 && array[i] % 5 === 0){
      returnArray[i] = 'fizzbuzz'
    }else if(array[i] % 3 === 0){
      returnArray[i] = 'fizz';
    }else if (array[i] % 5 === 0){
      returnArray[i] = 'buzz';
    }else if (array[i] % 3 !== 0 && array[i] % 5 !== 0){
      returnArray[i] = 'bug!';
  }
}
return returnArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  for(let i = 0; i < string.length; i+=1){
    if(string[i] === 'a'){
     string = string.replace('a',1);
    }
    else if(string[i] === 'e'){
      string = string.replace('e',2);
    }
    else if(string[i] === 'i'){
      string = string.replace('i',3);
    }
    else if(string[i] === 'o'){
      string = string.replace('o',4);
    }
    else if(string[i] === 'u'){
      string = string.replace('u',5);
    }
  }
  return string;
}
console.log(encode('hello'));
console.log(encode('How are you today?'));
console.log(encode('This is an encoding test.'));
console.log(encode('go Trybe!'));

function decode(string) {
  for(let i = 0; i < string.length; i+=1){
    if(string[i] === '1'){
     string = string.replace('1', 'a');
    }
    else if(string[i] === '2'){
      string = string.replace('2', 'e');
    }
    else if(string[i] === '3'){
      string = string.replace('3', 'i');
    }
    else if(string[i] === '4'){
      string = string.replace('4', 'o');
    }
    else if(string[i] === '5'){
      string = string.replace('5', 'u');
    }
  }
  return string;
 }


console.log(decode('h2ll4'));
console.log(decode('H4w 1r2 y45 t4d1y?'));
console.log(decode('Th3s 3s 1n 2nc4d3ng t2st.'));
console.log(decode('g4 Tryb2!'));

// Desafio 10
function techList(arrayTec, stringName) {
  if(arrayTec === [] || stringName === ''){
    return 'Vazio!'
  }

  let lista = [];
for(let i = 0; i< arrayTec.length; i+=1){
    let nemObj = {
      tech: arrayTec[i],
      name: stringName
    }

    lista.push(nemObj);
}
return lista;

}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))

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
