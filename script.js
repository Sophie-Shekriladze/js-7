"use strict";

//accordion

let accordion = document.querySelectorAll(".container");

for (let item of accordion) {
  item.addEventListener("click", function (event) {
    this.classList.toggle("activeContainer");
    console.log(this);
  });
}

//forEach

// accordion.forEach(element =>{
//     element.addEventListener("click", function (event) {
//         this.classList.toggle("activeContainer");
//         console.log(activeContainer);
//       });
// })

let scrollButton = document.getElementById("top");

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



let header = document.getElementById('header-scroll');

document.addEventListener('scroll', function() {
  
  let scrollOne = window.pageYOffset;
  
  if ( scrollOne > 100 ) {
    header.style.backgroundColor = "pink";
  } else {
    header.style.backgroundColor = "purple";
  }
  
});

