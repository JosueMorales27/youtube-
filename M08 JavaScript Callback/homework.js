/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
if (nombre.length === 0) {
   return nombre;
}
return nombre.chaArt(0).toUppeeCase() + nombre.slice(1);

}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
cb();
}

// Ejemplo de uso:
function miCallback() {
  console.log("¡Callback invocado!");
}

invocarCallback(miCallback);
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
return cb(num1, num2);
}

// Ejemplo de uso:
function suma(a, b) {
  return a + b;
}

const resultadoSuma = operacionMatematica(3, 5, suma);
console.log(resultadoSuma);  // Output: 8
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
  const suma = arrayOfNumbers.reduce((acc, num) => acc + num, 0);

  // Llamar al callback con el resultado de la suma como argumento
  cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
for (let i= 0; i< array.length; i++;) {
   cb(array[i]);
 }
}
function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
const newArray = [];
for (let i=0; i < array.length; i++) {
   newArray.push(cb(array[i]));
}
return newArray;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
const filteredArray = arrayOfStrings.filter(function(elemento) {
    // Verificar si el elemento comienza con la letra "a"
    return elemento.startsWith("a");
  });

  // Retornar el nuevo arreglo con los elementos filtrados
  return filteredArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
