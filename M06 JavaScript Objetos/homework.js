/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var gato = {
      nombre: memphis,
      edad: 10,
      meow : function() {
         return "Meow!";
      }
   };
      return gato;
 }

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var user = {
      nombre: "alejandro",
      email: "alejandro@gmail.com",
      password: 1234,
   };
   return user;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null; 
   return objeto;
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   if (objeto.hasOwnProperty(metodo) && typeof objeto[metodo] === "function") {
      // Invocar la función
      objeto[metodo]();

}
var miObjeto = {
   saludar: function() {
       console.log("¡Hola!");
   }
};

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   if (objetoMisterioso.hasOwnProperty("numeroMisterioso")) {
      // Multiplicar el número por 5 y retornar el resultado
      return objetoMisterioso.numeroMisterioso * 5;
  } else {
      // Manejar el caso en el que la propiedad no exista
      console.log("La propiedad 'numeroMisterioso' no existe en el objeto.");
      return undefined;  // Otra opción es devolver un valor por defecto o lanzar una excepción
  }
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   if (objeto.hasOwnProperty(propiedad)) {
      // Eliminar la propiedad
      delete objeto[propiedad];
  }
  // Retornar el objeto modificado
  return objeto;
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return objetoUsuario.hasOwnProperty("email") && objetoUsuario.email !== undefined && objetoUsuario.email !== null;
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return objeto.hasOwnProperty(propiedad);
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return objetoUsuario.hasOwnProperty("password") && objetoUsuario.password === password;
}
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   if (objetoUsuario.hasOwnProperty("password")) {
      // Actualizar la contraseña
      objetoUsuario.password = nuevaPassword;
  } else {
      // Si la propiedad no existe, puedes crearla con la nueva contraseña
      objetoUsuario.password = nuevaPassword;
  }

  // Retornar el objeto modificado
  return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   if (objetoUsuario.hasOwnProperty("amigos") && Array.isArray(objetoUsuario.amigos)) {
      // Agregar el nuevo amigo al final del arreglo
      objetoUsuario.amigos.push(nuevoAmigo);
  } else {
      // Si la propiedad "amigos" no existe o no es un arreglo, crearla y agregar el nuevo amigo
      objetoUsuario.amigos = [nuevoAmigo];
  }

  // Retornar el objeto modificado
  return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for (var i = 0; i < objetoMuchosUsuarios.length; i++) {
      // Verificar si el usuario tiene la propiedad "esPremium"
      if (objetoMuchosUsuarios[i].hasOwnProperty("esPremium")) {
          // Definir la propiedad "esPremium" como true
          objetoMuchosUsuarios[i].esPremium = true;
      } else {
          // Si la propiedad "esPremium" no existe, crearla y definirla como true
          objetoMuchosUsuarios[i].esPremium = true;
      }
  }

  // Retornar el arreglo modificado
  return objetoMuchosUsuarios;
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   if (objetoUsuario.hasOwnProperty("posts") && Array.isArray(objetoUsuario.posts)) {
      // Inicializar la variable para almacenar la suma de likes
      var sumaLikes = 0;

      // Iterar sobre cada post en el arreglo
      for (var i = 0; i < objetoUsuario.posts.length; i++) {
          // Verificar si el post tiene la propiedad "likes"
          if (objetoUsuario.posts[i].hasOwnProperty("likes")) {
              // Sumar los likes al total
              sumaLikes += objetoUsuario.posts[i].likes;
          }
      }

      // Retornar la suma total de likes
      return sumaLikes;
  } else {
      // Si la propiedad "posts" no existe o no es un arreglo, retornar 0
      return 0;
  }
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   if (objetoProducto.hasOwnProperty("precio") && objetoProducto.hasOwnProperty("porcentajeDeDescuento")) {
      // Agregar el método calcularPrecioDescuento al objeto
      objetoProducto.calcularPrecioDescuento = function () {
          // Calcular el descuento
          var descuento = objetoProducto.precio * objetoProducto.porcentajeDeDescuento;

          // Calcular el precio final restando el descuento
          var precioFinal = objetoProducto.precio - descuento;

          // Retornar el precio final
          return precioFinal;
      };

      // Retornar el objeto modificado
      return objetoProducto.calcularPrecioDescuento();
  } else {
      // Si las propiedades necesarias no existen, retornar null u otro valor que indique que no se pudo calcular
      return null;
  }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
