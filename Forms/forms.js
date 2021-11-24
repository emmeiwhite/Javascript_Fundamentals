// form submit event listener
// e.preventDefault()
// getting form values
const form = document.querySelector("form");
const details = document.querySelector(".form-details");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = form["name"].value;
  const userEmail = form["email"].value;
  console.log(userName);
  console.log(userEmail);

  if (userName && userEmail) {
    console.log("Form Submitted successfully");
    document.querySelector(".userName").textContent = userName;
    document.querySelector(".userEmail").textContent = userEmail;
    details.style.display = "block";
    form.reset();
  } else {
    alert("Please fill form fields first");
  }
});
