// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA && valueB) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, false));
console.log(compareTrue(true, true));
console.log(compareTrue(false, false));

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
  let array = string.split(' ');
  return array;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(arrayObject) {
  let lastItem = arrayObject[arrayObject.length - 1];
  let firstItem = arrayObject[0];

  return lastItem.concat(', ', firstItem);
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
function getNewObj() {
  return {
    cont: 0,
    maior: -999,
  };
}
function validar(num) {
  if (this.newObj.maior <= num) {
    if (this.newObj.maior === num) {
      this.newObj.cont += 1;
    } else {
      this.newObj.maior = num;
      this.newObj.cont = 0;
      this.newObj.cont += 1;
    }
  }
}
function highestCount(arrayNumbers) {
  this.newObj = getNewObj();
  for (let index = 0; index <= arrayNumbers.length; index += 1) {
    validar(arrayNumbers[index]);
  }
  return this.newObj.cont;
}
console.log(highestCount([-2, -2, -2]));
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > cat2) {
    return 'cat2';
  } if (cat1 < cat2 && cat1 !== 0) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(1, 0, 2));
console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(1, 6, 12));
console.log(catAndMouse(1, 8, 8));

// Desafio 8
function verificarfizzBuzz(num, index) {
  if (num % 3 === 0 && num % 5 === 0) {
    this.returnArray[index] = 'fizzBuzz';
  } else if (num % 3 === 0) this.returnArray[index] = 'fizz';
  else if (num % 5 === 0) this.returnArray[index] = 'buzz';
  else this.returnArray[index] = 'bug!';
}

function fizzBuzz(array) {
  this.returnArray = [];
  for (let i = 0; i < array.length; i += 1) {
    verificarfizzBuzz(array[i], i);
  }
  return this.returnArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(p) {
  return p.replaceAll('a', 1)
    .replaceAll('e', 2)
    .replaceAll('i', 3)
    .replaceAll('o', 4)
    .replaceAll('u', 5);
}
console.log(encode('hello'));
console.log(encode('How are you today?'));
console.log(encode('This is an encoding test.'));
console.log(encode('go Trybe!'));

function decode(p) {
  return p.replaceAll(1, 'a')
    .replaceAll(2, 'e')
    .replaceAll(3, 'i')
    .replaceAll(4, 'o')
    .replaceAll(5, 'u');
}
console.log(decode('h2ll4'));
console.log(decode('H4w 1r2 y45 t4d1y?'));
console.log(decode('Th3s 3s 1n 2nc4d3ng t2st.'));
console.log(decode('g4 Tryb2!'));

// Desafio 10
function verificandoVazio(tech) {
  if (tech === [] || tech === undefined || tech.length === 0) {
    return true;
  }
  return false;
}
function verificandoVazio2 (name){
  if (name === '' || name === undefined) {
    return true;
  }
  return false;
}
function techList(arrayTec, stringName) {
  if (verificandoVazio(arrayTec) || verificandoVazio2(stringName)) {
    return 'Vazio!';
  }
  let lista = [];
  for (let i = 0; i < arrayTec.length; i += 1) {
    let nemObj = {
      tech: arrayTec[i],
      name: stringName,
    };
    lista.push(nemObj);
  }
  lista = lista.sort(function (a, b) {
    return ('', a.tech).localeCompare(b.tech);
  });
  return lista;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
