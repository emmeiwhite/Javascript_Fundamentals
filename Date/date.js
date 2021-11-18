// Date : Gothas are days, months are index based

const date = new Date();

console.log(date.getDate()); // It returns today's date of the month

console.log(date.getDay()); // 0 index based | Sunday has 0 index and Saturday has 6 index

console.log(date.getMonth()); // It is also 0 index based | January has 0 index and December has 11 index

// Time to make an array to get the actual Month and Day

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const sentence = `${days[date.getDay()]}, ${date.getDate()}, ${
  months[date.getMonth()]
}, ${date.getFullYear()}`;

document.querySelector("h3").innerHTML = sentence;
