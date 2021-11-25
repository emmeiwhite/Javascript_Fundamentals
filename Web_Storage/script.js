// Web Storage API- Provided by Browser
// local storage and session storage
// setItem, getItem, removeItem, clear

// localStorage.setItem("userName","Galilio");
// localStorage.getItem("userName");

localStorage.setItem("userEmail", "emmeiwhite@gmail.com");
// sessionStorage.setItem("userEmail", "emmeiwhite@gmail.com");

// We will focus on localStorage.
// LocalStorage has no expiration time, Data in the LocalStorage persist till the user manually delete it.
const userName = localStorage.getItem("userEmail");
console.log(userName);

/** Let's use few methods for localStorage */

localStorage.setItem("profession", "web developer");
localStorage.setItem("age", "29");
localStorage.setItem("qualification", "B.Tech");

console.log(localStorage.getItem("profession"));
console.log(localStorage.getItem("age"));
console.log(localStorage.getItem("qualification"));
