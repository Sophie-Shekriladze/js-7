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

