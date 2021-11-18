// 1. document.getElementById()
// 2. document.getElementsByClassName()
// 3. document.getElementsByTagName()
// 4. document.querySelector()
// 5. document.querySelectorAll()

/** ADDING CLASSES | Let's take an example */

// 6. className
// 7. classList.add(), classList.remove(), classList.contains()

document.querySelector("h1").className = "haveFun"; // This only adds one class
const lists = document.querySelectorAll(".list");

lists.forEach((list) => {
  list.classList.add("menus");
});

/** Traversing DOM Elements */

// 8. children, parentElement, nextElementSibling, previousElementSibling

console.log(document.querySelector("ul").children);
console.log(document.querySelector("ul").childElementCount);
console.log(document.querySelector("ul").childNodes); // whitespace is also considered here
console.log(document.querySelector("ul").parentElement);
console.log(document.querySelector("ul").nextElementSibling);
console.log(document.querySelector("ul").previousElementSibling);

/**  Creating DOM Elements and placing */
// 9. document.createElement()
// 10. document.createTextNode()
// 11. appendChild(), insertBefore('element','location'),
// 12. replaceChild('new', 'old'), prepend(), innerText

const section = document.querySelector("section");

const div = document.createElement("div");
div.style.color = "#fff";
div.style.backgroundColor = "teal";
div.style.padding = "1rem 2rem";

const text = document.createTextNode("Where there is a will, there is a way");
div.appendChild(text);

section.appendChild(div);

// 13. remove(), removeChild()

document.querySelector(".main").remove();

document
  .querySelector("ul")
  .removeChild(document.querySelector(".list:last-child"));

// 14. innerHTML
// 15. textContent

const footer = document.querySelector("footer");
const footerMenus = `<ul class="footerLinks">
            <li class="links">home</li>
            <li class="links">services</li>
            <li class="links">contact</li>
        </ul>`;

footer.innerHTML = footerMenus;

const randomValue = "testing";

const footerLinks = document.querySelector(".footerLinks");
const listItem = `<li class="links">${randomValue}</li>`;

footerLinks.innerHTML += listItem;
