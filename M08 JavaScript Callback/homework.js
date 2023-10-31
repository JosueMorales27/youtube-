function mayuscula(nombre) {
   if (nombre.length === 0) {
     return nombre;
   }
   return nombre.charAt(0).toUpperCase() + nombre.slice(1);
 }
 
 function invocarCallback(cb) {
   cb();
 }
 
 function operacionMatematica(num1, num2, cb) {
   return cb(num1, num2);
 }
 
 function sumarArray(arrayOfNumbers, cb) {
   const suma = arrayOfNumbers.reduce((acc, num) => acc + num, 0);
   cb(suma);
 }
 
 function forEach(array, cb) {
   for (let i = 0; i < array.length; i++) {
     cb(array[i]);
   }
 }
 
 function map(array, cb) {
   const newArray = [];
   for (let i = 0; i < array.length; i++) {
     newArray.push(cb(array[i]));
   }
   return newArray;
 }
 
 function filter(arrayOfStrings) {
   const filteredArray = arrayOfStrings.filter(function (elemento) {
     return elemento.startsWith("a");
   });
   return filteredArray;
 }
 
 module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
 };
 