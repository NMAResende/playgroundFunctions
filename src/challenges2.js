// Desafio 11
function generatePhoneNumber(arrayNumbers) {

arrayNumbers.splice(0, 0, '(');
arrayNumbers.splice(3, 0, ')');
arrayNumbers.splice(4, 0, ' ');
arrayNumbers.splice(10, 0, '-');
let texto =  arrayNumbers.join('');

  if (arrayNumbers.length > 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] < 0 || arrayNumbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  let cont = 0;
  let novoArray = arrayNumbers.sort(function (a, b) { return a - b });
  let numeroRepetido = novoArray[0];
  for (let i = 0; i < novoArray.length; i += 1) {
    if (novoArray[i] == numeroRepetido) {
      cont = cont + 1;
      if (cont > 2) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
    } else {
      numeroRepetido = novoArray[i]
      cont = 1;
    }
  }

}

console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,0,1]))


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
