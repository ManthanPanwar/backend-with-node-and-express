const productOftwoNumbers = (a, b) => {
  return a * b;
};

const Student = {
  name: "manthan",
  age: 21,
  greet() {
    console.log(`Hello ${this.name}`);
  },
};
console.log(productOftwoNumbers(2, 7));
Student.greet();

//working of this keyword inside normal function
// 'this' looks for its value inside the same object it is called

// working of this keyword inside arrow function
// arrow function does not have this binding to it, so it looks at the just previous lexical parent and get 'this' value.
