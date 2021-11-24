// Allows us to select dynamic elements
// Event Propagation - order in which the events are fired
// Event Bubbling - event is executed on the clicked element first then bubbles up -- default
// Event Capturing - fires at the root and fires until it reaches the target

const container = document.querySelector(".container");
const listItems = document.querySelector(".list-items");
const current = document.querySelector(".currentDetails");

// Now, main concept here is that we will set event handlers on these two elements which in the DOM tree above links
// Even when we click on the links we will see that events are automatically registered on the parent elements upto the root in the DOM tree

/*
container.addEventListener("click", (e) => {
  console.log("target", e.target);
  console.log("current target", e.currentTarget);
});

listItems.addEventListener("click", (e) => {
  e.stopPropagation(); // To stop event propagation
  console.log("target", e.target);
  console.log("current target", e.currentTarget);
});
*/

// Event Bubbling and Capturing

const eventDelegation = (e) => {
  console.log("target", e.target);
  console.log("current target", e.currentTarget);
};

// Bubbling is by default, from target to the root
/**
listItems.addEventListener("click", eventDelegation);
container.addEventListener("click", eventDelegation);
document.addEventListener("click", eventDelegation);
window.addEventListener("click", eventDelegation);
 */

// Capturing is from Root to the target, let's do that
listItems.addEventListener("click", eventDelegation, { capture: true });
container.addEventListener("click", eventDelegation, { capture: true });
document.addEventListener("click", eventDelegation, { capture: true });
window.addEventListener("click", eventDelegation, { capture: true });
