// 1. map() : Returns an Array

const people = [
  { id: 1, name: "Emmei", age: 29, salary: 300, designation: "Developer" },
  { id: 2, name: "Roufi", age: 30, salary: 200, designation: "Teacher" },
  { id: 3, name: "Rafia", age: 28, salary: 500, designation: "FMS Engineer" },
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

// 4. reduce() : Iterates, callback function
// Reduces to single value - number, array, object
// First Parameter ('acc') - total of all calculations
// Second Parameter ('curr') - current iteration/value

// Let's find the total salary for the people array

console.log("Time to play with reduce() function");
const totalSalary = people.reduce(function (acc, currItem) {
  console.log(`Current salary is ${currItem.salary}`);
  acc += currItem.salary;
  console.log(`accumlates to ${acc}`);
  return acc; // We must note that always the accumulator is returned
}, 0); // Since, Initial value of acc is number, we must return number in acc

console.log(`Total salary is ${totalSalary}`);
