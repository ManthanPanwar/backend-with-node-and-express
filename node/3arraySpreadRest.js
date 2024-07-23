const arr = ["apple", "orange", "", "mango", "", "lemon"];

const res = arr.map((item) => {
  if (item.length == 0) item = "empty string";
  return item;
});

console.log(arr);
console.log(res);

const hobbies = ["guitar", "chilling"];
// How is hobbies const and still doesn't error out when we add new hobby
/*
array and objects are reference data types. so Const hobbies is holding the reference 
which is pointing to array ['sports','reading']. So when we add elements to array, we 
are manipulating the array which is pointed by const hobbies. we are not changing the 
reference/ address. thats why it doesnt give error.
*/

// for of loop
for (let hobby of hobbies) {
  console.log(hobby);
}

const copiedArray = hobbies.slice(); // this method make a copy of a array
console.log(copiedArray);

// another way(using spread operator)
const copiedArray2 = [...hobbies, "piano"];
console.log(copiedArray2);

const Student = {
  name: "manthan",
  age: 21,
  greet() {
    console.log(`Hello ${this.name}`);
  },
};

const copiedStudent = { ...Student, roll: "21BCP045" };
console.log(copiedStudent);

// rest operator(any number of parameters can be inserted)
function toArray(...args) {
  return args;
}

console.log(toArray(1, 2, 4, 5, 22, 445, 67, 7654));

// pulling out elements out of arrays or objects --> spread operator
// merging multiple parameters into an array --> rest operator

const obj1 = { key1: 1 };

const obj2 = { ...obj1 };

if (obj2 === obj1) {
  console.log("same objects");
} else {
  console.log("different objects");
}
