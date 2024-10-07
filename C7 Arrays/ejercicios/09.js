function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var indiceAleatorio = Math.floor(Math.random() * array.length);
  // Devuelve el elemento en el índice aleatorio
  return array[indiceAleatorio];
}

module.exports = obtenerElementoAleatorio;
