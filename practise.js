// Number related methods

let num=3.1416;
console.log(num.toFixed(3));    //count after precision
console.log(num.toPrecision(3));    //count from start
console.log(num.toString());
console.log(num.toString(2));   // convert the number to binary
console.log(typeof num.toString());

// Math related methods

console.log(Math.abs(-3));
console.log(Math.sqrt(25));
console.log(Math.max(2,-3));
console.log(Math.min(2,-3));
console.log(Math.ceil(2.556));
console.log(Math.floor(2.556));
console.log(Math.round(2.49));
console.log(Math.ceil(2.5));

//Date related methods

let date=new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getTime());