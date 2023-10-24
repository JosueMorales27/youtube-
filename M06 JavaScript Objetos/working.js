// TRABAJANDO CON OBJETOS 
//Dot - notation , notacion por punto . 
// bracket - Notation ,notacion por corchetes []

var persona = {nombre: "lucas", edad: 26, estudios: { esprogramador: true }  };

//console.log(persona.edad);
persona.nombre = "Martin";
persona.edad = 32;

var autos = {};
autos.marcas = {"ford","auDI","ferrari"};

console.log(autos);

var misfunciones = {
    saludar : function () {
        console.log("hola");
    },
};
misfunciones.saludar();

//// ACCEDER
//var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
//console.log(persona.edad);

//// ASIGNAR
//var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
//persona.nombre = 'Martín';
//console.log(persona.nombre);
//CREAR
//var autos = {};
//autos.marcas = ['Ford', 'Audi', 'Ferrari'];
//console.log(autos);
////BORRAR
//delete autos.marcas;
//console.log(autos);