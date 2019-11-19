console.log("Welcome to tut5");

// type conversion
let myVar;
myVar = 34;
console.log(typeof myVar);

// let myVar;
// myVar = String(34);
// console.log(typeof myVar)

let booleanVar = true;
console.log(booleanVar, (typeof booleanVar));

// let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = new Date();
console.log(date, (typeof date));

// let date = String(new Date());
// console.log(date, (typeof date));

let arr = [1, 2, 3, 4, 5];
console.log(arr.length, (typeof arr));

// let arr = String([1, 2, 3, 4, 5]);
// console.log(arr.length, (typeof arr));
 
let i = 8;
console.log(i.toString());

let stri;
stri = "343434";
console.log(stri, (typeof stri));

// let stri;
// stri = Number("343434");
// console.log(stri, (typeof stri));

// let stri;
//  stri = Number("3434d34");
//  console.log(stri, (typeof stri));

// let stri;
// stri = Number(true);
// console.log(stri, (typeof stri));

// let stri;
// stri = Number(false);
// console.log(stri, (typeof stri));

let number = Number("34.098");
console.log(number, (typeof number));

// let number = parseInt("34.098");
// console.log(number, (typeof number));

// let number = parseFloat("34.098");
// console.log(number, (typeof number));

// let number = parseInt("34.098");
// console.log(number.toFixed(30), (typeof number));

// Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);