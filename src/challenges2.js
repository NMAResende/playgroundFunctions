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
      if (cont > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    } else {
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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
