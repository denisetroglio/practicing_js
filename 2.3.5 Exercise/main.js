"use strict";

/*
Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'
Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'*/

const notificationMessage = document.querySelector(".js_notification");
const title = document.querySelector(".js_title");
const paragraph = document.querySelector(".js_paragraph");

if (notificationMessage.classList.contains("warning")) {
  title.innerHTML = `AVISO`;
  paragraph.innerHTML = "¡Tenga cuidado! =0";
} else if (notificationMessage.classList.contains("error")) {
  title.innerHTML = `ERROR`;
  paragraph.innerHTML = "¡Ha surgido un error! =/";
} else if (notificationMessage.classList.contains("success")) {
  title.innerHTML = `CORRECTO`;
  paragraph.innerHTML = "¡Los datos son correctos! =)";
};
