// 1. map() : Returns an Array

const people = [
  { name: "Emmei", age: 29, designation: "Developer" },
  { name: "Roufi", age: 30, designation: "Teacher" },
  { name: "Rafia", age: 28, designation: "FMS Engineer" },
];

console.log(people.map((person) => person.age));
console.log(people.map((person) => person.name));
console.log(people.map((person) => person.designation));

// Let's add names of Persons to DOM

const names = people.map((person) => {
  return `<h2> ${person.name}</h2>`;
});

console.log(names.join(""));
document.body.innerHTML = names.join(""); // join() method makes one string out of array

// 2. filter() : Returns an Array

const filteredPersons = people.filter((person) => person.age <= 29);
console.log(filteredPersons);

// 3. find() : returns one item only | And first instance in case two conditions are satisfied

const filteredPerson = people.find((person) => person.age <= 29);
console.log(filteredPerson);
