const people = [
    {
        name:'Emmeiwhite',
        age:29,
        position:'FE-II'
    },
    {
        name:'Nafiya',
        age:17,
        position:'Associate Developer'
    },
    {
        name:'Rafia',
        age:27,
        position:'FMS Engineer'
    },
    {
        name:'Faheem',
        age:18,
        position:'Assocaite Developer'
    },
]


const categories = [
    {
        name:'Noon Chai',
        category:'breakfast'
    },
    {
        name:'Eggs',
        category:'Lunch'
    },
    {
        name:'Biryani',
        category:'Dinner'
    },
    {
        name:'Roti, Daal',
        category:'breakfast'
    },
    {
        name:'Rice',
        category:'Lunch'
    },
    {
        name:'Noon Chai',
        category:'breakfast'
    },
    {
        name:'Butter',
        category:'breakfast'
    },
]
// 1. map()
/**
 * map always returns the new array
 * it does not change the size of the array
 */
const results = document.querySelector('.results');
const buttons = document.querySelector('.buttons');

const ages = people.map(person=>person.age);
console.log(ages);

const modified = people.map(({name,age,position})=>{
  return {
      name:`${name} Master`,
      age,
      position
  }
});

console.log(modified);
// map to render in DOM
const peopleDiv = people.map(({name,age,position})=>
{
    return `<div class="person">
       <h3> Name : ${name} </h3>
       <h3> Age : ${age} </h3>
       <h3> Position : ${position} </h3>

    </div>`
})

results.innerHTML = peopleDiv.join(''); 

// 2. new Set() | Getting the unique values

const totalCategories = categories.map(({category})=>category);
console.log(totalCategories);
const setOfCategories = new Set(totalCategories);
console.log(setOfCategories); // This is a set type

// converting set to array with spread operator
const uniqueCategories = ["all",...setOfCategories];
console.log(uniqueCategories);

const btnsResult = uniqueCategories.map((item)=>`<button class="category">${item}</button>`);
buttons.innerHTML = btnsResult.join('');