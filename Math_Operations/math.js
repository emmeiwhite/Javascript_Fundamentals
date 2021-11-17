// Math : Standard build-in objects - always available

/** --- Rounding down and Rounding Up --- */

const num1 = 5.78;
console.log(Math.floor(num1)); // Rounding down

const num2 = 5.3;
console.log(Math.ceil(num2)); // Rounding up

const num3 = 25;
console.log(Math.sqrt(num3));

console.log(Math.PI);
console.log(Math.min(20, 12, 23, 3, 1));
console.log(Math.max(20, 12, 23, 3, 1));

// random() and floor()
console.log(Math.random()); //random [0,1)

console.log(Math.ceil(Math.random() * 10)); // [1,10]
console.log(Math.floor(Math.random() * 10)); // [0,9]
