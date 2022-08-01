// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
  return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
  if (arrayNumbers[i] < 0 || arrayNumbers[i] > 9) {
  return 'não é possível gerar um número de telefone com esses valores';
  }
  }
  let cont = 0;
  let novoArray = [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
  novoArray[i] = arrayNumbers[i];
  }
  novoArray = novoArray.sort(function (a, b) { return a - b });
  let numeroRepetido = novoArray[0];
  for (let i = 0; i < novoArray.length; i += 1) {
  if (novoArray[i] === numeroRepetido) {
  cont += 1;
  }
  if (cont > 2) {
  return 'não é possível gerar um número de telefone com esses valores';
  } else if (novoArray[i] !== numeroRepetido) {
  numeroRepetido = novoArray[i];
  cont = 1;
  }
  }
  arrayNumbers.splice(0, 0, '(');
  arrayNumbers.splice(3, 0, ')');
  arrayNumbers.splice(4, 0, ' ');
  arrayNumbers.splice(10, 0, '-');
  let texto = arrayNumbers.join('');
  return texto;
  }
  console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));

// Desafio 12
function testAbs(lineA, lineB, lineC) {
  if (lineA > this.valorAbsA && lineB > this.valorAbsB && lineC > this.valorAbsC) {
    return true;
  }
}
function triangleCheck(lineA, lineB, lineC) {
  this.valorAbsA = Math.abs(lineB / lineC);
  this.valorAbsB = Math.abs(lineA / lineC);
  this.valorAbsC = Math.abs(lineA / lineB);
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return testAbs(lineA, lineB, lineC, this.valorAbsA, this.valorAbsB, this.valorAbsC);
  }
  return false;
}
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(2, 3, 4));

// Desafio 13
function hydrate(string) {
  let matches = string.match(/\d+/g);
  let sum = 0;
  for (let i = 0; i < matches.length; i += 1) {
    let n1 = parseInt(matches[i], 10);
    sum += n1;
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}
console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
