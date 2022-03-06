"use strict";

const paragraph = document.querySelector(".js_paragraph");
const btn = document.querySelector(".js_text");

function handleClickText() {
  paragraph.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
  console.log("Mi primer click, ¡ole yo y la mujer que me parió");
}

btn.addEventListener("click", handleClickText);
