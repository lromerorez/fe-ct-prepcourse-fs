const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  //returns the modified object
  // Tu código:
  objeto[propiedad] = valor;
  return objeto;
};

module.exports = agregarNuevaPropiedad;
