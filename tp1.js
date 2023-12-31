/*  
  Ejercicio 1: 
  Implementar la función 'extractValues' que toma un objeto y retorna un array con todos los valores del objeto.
  Ejemplo: 
  extractValues({a: 1, b: 2, c: 3}) debería retornar [1, 2, 3]
*/

function extractValues(data) {
  // Tu código aquí
  const values = [];
  
  for (let key in data) {
    const value = data[key];
    values.push(value);
  }
  return values;
  }


/*  
  Ejercicio 2: 
  Implementar la función 'arrayToLengthCounters' que toma un array de strings y retorna un objeto donde cada elemento
  del array se convierte en una clave del objeto y el valor es la longitud de cada string.
  Ejemplo: 
  arrayToLengthCounters(['gato', 'perro', 'elefante']) debería retornar {gato: 4, perro: 5, elefante: 8}
*/

function arrayToLengthCounters(array) {
  // Tu código aquí
  const objeto = [];
  
  for (let key in array) {
    const value = array[key];
    Object.keys(objeto.push(value));
    Object.values(objeto.push(value.length));
  }
  return objeto;
}

/*  
  Ejercicio 3: 
  Implementar la función 'findKeysInCommon' que toma dos objetos y retorna un array con los nombres de las 
  propiedades que tienen en común.
  Ejemplo:
  findKeysInCommon({a: 1, b: 2, c: 3}, {b: 4, c: 5, d: 6}) debería retornar ['b', 'c']
*/

function findKeysInCommon(objeto1, objeto2) {
  // Tu código aquí
  const kobj1 = Object.keys(objeto1);
  const kobj2 = Object.keys(objeto2);  
  return kobj1.filter(e => kobj2.includes(e));  
}

// Llamamos a las funciones y mostramos los resultados

function main() {
  console.log("Ejercicio 1");
  console.log(extractValues({a: 1, b: 2, c: 3}));
  console.log("Ejercicio 2");
  console.log(arrayToLengthCounters(['gato', 'perro', 'elefante']));
  console.log("Ejercicio 3");
  console.log(findKeysInCommon({a: 1, b: 2, c: 3}, {b: 4, c: 5, d: 6}));
  console.log("Final del Practico");
}

main();
