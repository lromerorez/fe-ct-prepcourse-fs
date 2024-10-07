function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    // Verificamos si el elemento es un string y tiene más de 5 caracteres
    if (typeof array[i] === 'string' && array[i].length >= 5) {
      return array[i]; // Devolvemos el primer string que cumple la condición
    }
  }
 
 
}

module.exports = obtenerPrimerStringLargo;
