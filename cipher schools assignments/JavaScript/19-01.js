// Rest and Spread Operator are applicable in Arrays and Objects in JS
// For Object
// let object = {
//   name: "John",
//   age: 24,
//   address: {
//     city: "New York",
//     state: "NY",
//     country: "USA",
//   },
// };

// let object2 = JSON.parse(JSON.stringify(object));
// object2.address.city = "Newark";
// console.log(object2);

// Tomorrow we will learn
// .map(), .forEach(), .filter(), .find(), .sort()
// Object Destructuring in JS Objects
// Array matching, Object matching
// Maps/Set  1 min
// Classes in JS


// in javascript, we can declare a variable in 3 ways.
// 1. by usinf var
// 2. by using const
// 3. by using let


// let myname = "charan";
// myname="crazy";
// console.log(myname);


// string polation

let firstname = "sai";
let lastname = "charan";

// console.log(firstname + " " + lastname );   this is normal


console.log(`${firstname} ${lastname}`);



// functions


// it is a normal function

// function addtwonumbers(num1, num2) {
//     console.log(num1+num2);
// }

// addtwonumbers(12,1);

// it is a arrow function

// let addtwonumbers = (num1,num2) => {

//     console.log(num1+num2);
// }
// addtwonumbers(3,3);

// let addtwonumbers = (num1,num2=0) => {
//     console.log(num1);
//     console.log(num2);
//     return (num1+num2);

// }

// console.log(addtwonumbers(1,100));


// spread operator

// let arr = [1,2,3,4,5,6];

// let newarr = [999,999,...arr,999,999];
// console.log(newarr);


// rest operator 

// let maxOfNumbers = (...numbers) => {
//     let maximum = 0;

//     for(let number of numbers) {
//         maximum = Math.max(maximum, number);
//     }
//     return maximum;
// };

// console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9));

// let object = {
//     name: "Charan",
//     age: 21,
//     city: "Bargarh"
// };
// console.log(object);

// let object2 = {...object,country: "India",name: "Saicharan"};
// console.log(object2);.

let object = {
    name: "Charan",
    age: 21,
    address : {
        city: "Bargarh",
        state: "Odisha",
        // country: "India",

    }
};
console.log(object);

let object2 = {...object, country: "USA",name: "Saicharan"};
object2.address.country = "INDIA";
console.log(object2);
