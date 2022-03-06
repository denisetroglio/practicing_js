"use strict";

//Función sin parámetros
function hi() {
    return "Hola";
  }
    console.log(hi());
//Muestra en la consola la palabra 'Hola'


  //Función con parámetros
  function sum(a, b) {
    return a + b;
  }
console.log(sum(1, 4));
//Muestra en la consola un 5


//Una función puede devolver un valor utilizando la palabra clave return seguida del valor que queremos devolver. Para devolver una variable result, utilizaremos return result; en el código:

function sum(a, b) {
  const result = a + b;

  return result;
}

const sumResult = sum(3, 4); //sumResult vale 7



function sayHi(name) {
  return "Hi " + name;

  return "En un lugar de la Mancha"; //Esta línea nunca se llega a ejecutar pues está después de "return"
}

const result = sayHi("Ashley"); //result vale 'Hi Ashley'