// Desafio 11
function incorrectSize(numbers) {
  if (numbers.length !== 11) {
    return true;
  }
  return false;
}
function incorrectPhone(num) {
  if (num < 0 || num > 9) {
    return true;
  }
  return false;
}
function repeatedNumbers(num) {
  if (this.cont > 2) {
    return true;
  }
  if (num === this.numeroRepetido) {
    this.cont += 1;
    if (this.cont > 2) {
      return true;
    }
    return false;
  }
  this.numeroRepetido = num;
  this.cont = 1;
  return false;
}

function ordenarLista() {
  return this.novoArray.sort(function (a, b) { return a - b; });
}

function formatarTextoFinal(arrayNumbers) {
  arrayNumbers.splice(0, 0, '(');
  arrayNumbers.splice(3, 0, ')');
  arrayNumbers.splice(4, 0, ' ');
  arrayNumbers.splice(10, 0, '-');
  return arrayNumbers.join('');
}

function generatePhoneNumber(arrayNumbers) {
  if (incorrectSize(arrayNumbers)) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (incorrectPhone(arrayNumbers[i])) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  this.cont = 0;
  this.novoArray = [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    this.novoArray[i] = arrayNumbers[i];
  }
  this.novoArray = ordenarLista();
  this.numeroRepetido = this.novoArray[0];
  for (let i = 0; i < this.novoArray.length; i += 1) {
    if (repeatedNumbers(this.novoArray[i])) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return formatarTextoFinal(arrayNumbers);
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function testAbs(lineA, lineB, lineC, valorAbsA, valorAbsB, valorAbsC) {
  if (lineA > valorAbsA && lineB > valorAbsB && lineC > valorAbsC) {
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
