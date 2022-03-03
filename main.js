"use strict";

const Title = document.querySelector(".js_title");
Title.innerHTML="Practicing JS";

/* EJERCICIO 4
Seleccionando Adalabers:
Hay que crear una página HTML que contenga un listado con tu nombre y el de tu compañera, y un título que diga "La Adalaber seleccionada es: ". Usando JavaScript, tenemos que cambiar el título añadiendo el nombre del primer li. */


const Adalaber = document.querySelector(".js_adalaber");
Adalaber.innerHTML = "La Adalaber seleccionadda es:";

Adalaber.innerHTML = Adalaber.innerHTML + "Denise Troglio";

//------------------------------------------------------------------------//


/* EJERCICIO 6
Lorem ipsum:
Tenemos que crear una página HTML con un solo div, y usando JavaScript, añadir un h1 con el texto "Lorem ipsum", una imagen con el src http://via.placeholder.com/350x150 y un párrafo con el texto "Lorem ipsum dolor sit amet, consectetur adipisicing elit".*/

const listElement = document.querySelector(".js_list");
const TitleH1 = "<h1>Lorem ipsum</h1>";
const Image = "<img src=http://via.placeholder.com/350x150>";
const Paragraph = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>";

listElement.innerHTML = TitleH1 + Image + Paragraph ;

//------------------------------------------------------------------------//
//classList.add:

const sectionB = document.querySelector('.section-b');
sectionB.classList.add('hidden');

//------------------------------------------------------------------------//

