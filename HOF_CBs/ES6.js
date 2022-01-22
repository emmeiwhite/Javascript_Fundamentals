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

// 1. map()
/**
 * map always returns the new array
 * it does not change the size of the array
 */
const results = document.querySelector('.results');
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