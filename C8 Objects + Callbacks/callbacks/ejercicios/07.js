function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   const resultado = [];


  for (let i = 0; i < arrayOfStrings.length; i++) {
  
    if (arrayOfStrings[i].toLowerCase().startsWith('a')) {
      resultado.push(arrayOfStrings[i]);
    }
  }

  return resultado; 
}

module.exports = filter;
