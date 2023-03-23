"use strict";

let navUl = document.getElementById("ul-item");
let burgerBar = document.getElementById("burgerBar");

burgerBar.addEventListener("click", function () {
  navUl.classList.toggle("toggleulNavigation");
  burgerBar.classList.toggle("activeBurgerBar");
});

// let divWrapper = document.querySelector(".wrapper");
// let title = document.querySelector(".title");
// divWrapper.addEventListener("click", function (event) {
//   console.log(this);
// });
