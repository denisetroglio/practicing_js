"use strict";

const listDogs = document.querySelector(".js_doglist");
const firstDogImage =
  "<img src=https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg>";
const firstDogName = "<p>Dina</p>";
const secondDogImage =
  "<img src=https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg>";
const secondDogName = "<p>Luna</p>";
const thirdDogImage =
  "<img src=https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg>";
const thirdDogName = "<p>Lana</p>";

listDogs.innerHTML =
  firstDogImage +
  firstDogName +
  secondDogImage +
  secondDogName +
  thirdDogImage +
  thirdDogName;

console.log(listDogs);
