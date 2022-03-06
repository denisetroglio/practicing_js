"use strict";


// 1 - elemento de HTML
const button = document.querySelector('.alert');

// 3 - handler
function showAlert() {
  console.log('Alerta');
}

// 2 - listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', showAlert);