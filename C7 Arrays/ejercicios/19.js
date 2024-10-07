function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) {
    return 0;
  }

  // Inicializamos el producto en 1
  let producto = 1;

  // Iteramos sobre los argumentos y multiplicamos
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }

  // Retornamos el producto final
  return producto;
}

module.exports = multiplicarArgumentos;
