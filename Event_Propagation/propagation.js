// let heading = document.querySelector(".heading");
let button = document.querySelector(".btn");
let container = document.querySelector(".container");

// Let's click on the button and creating the heading element on the run time
// And try to assign the event handler again to the h2

button.addEventListener("click", (e) => {
  const heading = document.createElement("h2");
  heading.classList.add("heading");
  heading.textContent = "I am heading 2";
  container.appendChild(heading);
});

// Since the heading element and class were created on the fly, this event is not working.
// SOLUTION is Event Propagation where we set the event handler on the parent and target the element
// let heading = document.querySelector(".heading");
// heading.addEventListener("click", (e) => {
//   console.log("heading CLICKED");
// });

// Here we go then | Wonderful

container.addEventListener("click", (e) => {
  if (e.target.className === "heading") {
    console.log("Heading Clicked");
  }
});
