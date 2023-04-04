"use strict";

const box = document.getElementById("box"),
  btn = document.getElementsByTagName("button"),
  radius = 15;

box.style.backgroundColor = "red";
box.style.cssText = `background-color: blue; border-radius: ${radius}px`;

// btn[0].style.borderRadius = `${radius}px`;
// btn[0].style.border = "1px solid crimson";
// btn[0].style.backgroundColor = "crimson";

// btn[1].style.borderRadius = `${radius}px`;
// btn[1].style.border = "1px solid blue";
// btn[1].style.backgroundColor = "blue";

// btn[2].style.borderRadius = `${radius}px`;
// btn[2].style.border = "1px solid blueviolet";
// btn[2].style.backgroundColor = "blueviolet";

// for (let i = 0; i < btn.length; i++) {
//   btn[i].style.cssText =
//     "background-color: red; border-radius: 15px; border: 1px solid red";
// }
