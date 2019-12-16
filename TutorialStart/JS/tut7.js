console.log("We are in tut7,js and lets discuss about arrays")

const marks = [34, 23, 24, 93, 73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23, 123, 21, 'Orange');
// console.log(arr);
// console.log(mixed);
// console.log(fruits[1]);
// console.log(arr.length);
// console.log(Array.isArray(arr));

arr[0] = 'harry';
arr[1] ='shafique';
// console.log(arr)
let arrelement = arr[0];
// console.log('element :', arrelement);
// let arrelement2 = arr[1];
// console.log('element:', arrelement2);

let value = marks.indexOf(93)
// console.log(value)

//  Mutating or Modifying arrays
// marks.push(3567);
// console.log(marks)

// marks.unshift(2345);
// console.log(marks);

// marks.pop();
// console.log(marks);

// marks.shift()
// console.log(marks);

// marks.splice(1, 3);
// console.log(marks);

// marks.reverse()
// console.log(marks);

let score = [2, 4, 6, 8, 10];
let score2 = [1, 3, 5, 7, 9];

score = score.concat(score2)
// console.log(score);

// let myobj = {
//     name : 'harry',
//     channel: 'CodeWithHarry',
//     isActive: true,
//     marks: [1, 2, 3, 4, 5]
// }
// console.log(myobj.marks)

let myobj = {
    "first name" : 'harry',
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1, 2, 3, 4, 5]
}
console.log(myobj['channel']);
console.log(myobj.channel)