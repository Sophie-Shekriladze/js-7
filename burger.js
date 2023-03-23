"use strict";

let navUl = document.getElementById("ul-item");
let burgerbar = document.getElementById("burgerBar");


burgerbar.addEventListener("click", function () {
  navUl.classList.toggle("toggleulNavigation");
  burgerbar.classList.toggle("activeBurgerBar");
});

let divWrapper = document.querySelector(".wrapper");
let title = document.querySelector(".title");
divWrapper.addEventListener("click", function (event) {
  console.log(this);
});

