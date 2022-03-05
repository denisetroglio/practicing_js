"use strict";

/* 2 - En este ejercicio vamos a crear un control de acceso. 
Para ello prepararemos una variable y le asignaremos un nombre. Posteriormente, si el nombre es el tuyo o el de tu compañera mostraremos el mensaje "Bienvenida, (tu nombre aquí)". 
Si el nombre es diferente al tuyo deberá mostrar "Lo siento pero el usuario que has introducido no está registrado".
Nota: cambia el valor de la variable y comprueba que todo funciona como esperas.*/

let nameUser = "Denise";
const welcomeMessageElement = document.querySelector('.js_welcome__text');

const errorMessageElement = document.querySelector(".js_errormessage");

if(nameUser === "Denise"){
welcomeMessageElement.innerHTML = `<h3>Bienvenida ${nameUser}</h3>`;
}else{
errorMessageElement.innerHTML = "Lo siento pero el usuario que has introducido no está registrado";
}



