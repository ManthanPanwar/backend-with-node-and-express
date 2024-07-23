// console.log("a");
// console.log("b");
// setTimeout(() => console.log("c"), 3000);
// setTimeout(() => console.log("d"), 0);
// console.log("e");

async function func() {
  console.log("a");
  console.log("b");
  const c = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("c");
      resolve();
    }, 3000);
  });
  const d = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("d");
      resolve();
    }, 0);
  });
  console.log("e");
}

func();
