/*
Destructuring pulls out properties or method by their name from object and assign it to a variable.
And in case of arrays, Destructuring pulls out element from array index wise and assign it to variables.
Destructuring is used when we dont want whole object or array, we need only specific data out of object 
or array.
*/
const Student = {
  name: "manthan",
  age: 21,
  greet() {
    console.log(`Hello ${this.name}`);
  },
};

// first way of destructuring
// const { name, greet } = Student;
// console.log(name, greet);

// second way of destructuring
const destruct = ({ name, age }) => {
  // pulled out by name.
  console.log(name, age);
};
destruct(Student);

// array destructuring
const arr = ["apple", "orange", "mango", "lemon"];
const [fruit1, fruit2] = arr; // pulled out by position i,e, fruit1 refers to 0th index and so on.
console.log(fruit1, fruit2);

// EXAMPLE
const obj1 = { key1: 1, key2: 2, key3: 1000 };

let { key1, key3 } = obj1;

key1 = 20;
key3 = 123;
// key1 and key3 variable holds value so you can't change the key values inside object using those variable.
console.log(key1, key3);
console.log(obj1.key1, obj1.key3);
