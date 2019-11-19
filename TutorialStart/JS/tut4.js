// Primitive data types 

 // String
 let name = "Shafique";
 console.log("my string is " + name);
 console.log("data type is " +(typeof name) );

// Number
 let marks = 34;
 console.log("data types is " + (typeof marks) );

 //boolean
 let isDriver = true;
 console.log("data types is " + (typeof isDriver));

 //Null
 let nullVar = null;
 console.log("data type is " + (typeof nullVar));

 //Undefined
 let undef = undefined;
 console.log("data type is " + (typeof undef));

 // Reference Data Types

 // Array
 let myarr = [1, 2, 3, 4, false, "string"];
 console.log("data type is " + (typeof myarr));

 // Object literals

 let stMarks ={
     Shafique : 89,
     Subhan : 65,
     Sufyan : 34,
 };
 console.log(stMarks);


 function findName(){
 }
 console.log(findName);

 let date = new Date();
 console.log(typeof date);