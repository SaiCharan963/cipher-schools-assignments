// Class

// export default class Animal {
//   noOfLegs;
//   color;
//   family;
//   sound;

//   constructor(noOfLegs, color, family, sound) {
//     this.noOfLegs = noOfLegs;
//     this.color = color;
//     this.family = family;
//     this.sound = sound;
//   }

//   showAnimal() {
//     console.log(`The animal belongs to family: ${this.family}`);
//   }
// }

// export class Dog extends Animal {
//   breed;
//   weight;
//   height;

//   constructor(color, breed, weight, height) {
//     super();
//     super.sound = "Woof";
//     super.noOfLegs = 4;
//     super.family = "LoyalAnimal";
//     super.color = color;
//     this.breed = breed;
//     this.weight = weight;
//     this.height = height;
//   }
// }

// let animal = new Animal(4, "brown", "rodent", "Phew Phew");
// animal.showAnimal();

// let dog = new Dog("Beige", "Corgi", "30kg", "0.5m");
// console.log(dog);
// dog.showAnimal();

// export class Cat extends Animal {
//   showAnimal() {
//     console.log("This is cat");
//   }
// }

// let testCat = new Cat();
// testCat.showAnimal();




// let arr = [1,2,3,4,5];
// let sqrarray = [];

// for(let i=0; i<arr.length;i++) {
//     sqrarray[i]= arr[i]*arr[i];
// }
// console.log(sqrarray);


////////////////////////////
// let array = [1,2,3,4,5,6];

// function functionformap(element) {
//     return element*element;
// }

// let newarray = array.map(functionformap);
// console.log(newarray);

////////////////////////////////
// let array = [1,2,3,4,5,6];


// let functionformap = (element)  => element*element;
    

// let newarray = array.map(functionformap);
// console.log(newarray);

/////////////////////////////
// let array = [1,2,3,4,5,6,7,8,9,10];

   

// let newarray = array.map((element)  => element*element);

// console.log(newarray);

/////////////////////////////


let array = [1,2,3,4,5];
array.forEach(element => {
    element = element*element;
    console.log(element);
});
console.log(array);