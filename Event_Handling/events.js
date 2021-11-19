// 1. Get the Element reference and then attach the event handler
// 2. currentTarget vs target

/* 
currentTarget: 
   Always refers to the element to which the event handler 
   has been attached to.

target: identifies the element on which the event occured
   
*/

const section = document.querySelector("section");
const div = document.querySelector("div");
const span = document.querySelector("span");

section.addEventListener("click", function (e) {
  e.currentTarget.classList.add("red");
});

section.addEventListener("click", function (e) {
  e.target.classList.add("blue");
});

// div.addEventListener("click", function (e) {
//   e.currentTarget.classList.add("blue");
//   e.target.classList.add("blue");
// });

// span.addEventListener("click", function (e) {
//   e.currentTarget.classList.add("orange");
//   e.target.classList.add("orange");
// });
