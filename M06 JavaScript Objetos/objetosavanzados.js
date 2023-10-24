//object
//objeto global que extiende diferentes metodos a los objetos.//metodos hasownproperty 

//var libro = { autor: "borges", genero: "policial", año: 1990 };
//var tienepropiedad = libro.hasOwnProperty("autor");
//console.log(tienepropiedad);

//var todaslaspropiedades =object.keys(libro);
//console.log(todaslaspropiedades);
//el bucle for in nos sirve unicamente para recorrer objetos propiedad por propiedad

//var mundo =  {continentes: 7, paises: 195, oceanos : 5 }; 
//for(var prop in mundo){
//    console.log("esta es la propiedad: " + prop)
//    console.log("Este es el valor: " + mundo[prop]);
//}
//javascript : this 
//funcionalidad particular : referencia al contexto 

var mascota = {
    animal: "perro",
    raza: "pastor aleman",
    amistoso: true,
    dueña: "maria lopez",
    info: function (){
        console.log("mi perro es un " + this.raza);
    },
};
mascota.info();