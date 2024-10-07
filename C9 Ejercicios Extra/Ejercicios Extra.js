/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  const contador = {};
  for (const char of string) {
    contador[char] = (contador[char] || 0) + 1;
  }
  return Object.fromEntries(Object.entries(contador).sort());
}

function capToFront(string) {
  const mayusculas = string.split('').filter(char => char === char.toUpperCase()).join('');
  const minusculas = string.split('').filter(char => char === char.toLowerCase()).join('');
  return mayusculas + minusculas;
}

function asAmirror(frase) {
  return frase.split(' ').map(palabra => palabra.split('').reverse().join('')).join(' ');
}

function capicua(numero) {
  const strNumero = numero.toString();
  return strNumero === strNumero.split('').reverse().join('') ? "Es capicua" : "No es capicua";
}

function deleteAbc(string) {
  return string.replace(/[abc]/g, '');
}

function sortArray(arrayOfStrings) {
  return [...arrayOfStrings].sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  return array1.filter(value => array2.includes(value));
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};