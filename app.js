document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log("Button clicked"); // Here we can see that the code is not redundant
    console.dir(e.target);
  });
});
