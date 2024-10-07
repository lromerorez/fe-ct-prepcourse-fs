function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma = 0;

  // Iteramos sobre los elementos del arreglo y acumulamos la suma
  for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
  }

  // Calculamos el promedio dividiendo la suma por la cantidad de elementos
  let promedio = suma / resultadosTest.length;

  // Retornamos el promedio
  return promedio;
}

module.exports = promedioResultadosTest;
