const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.body.style.background = randomBg();
  btn.style.color = document.body.style.background;
});

const randomBg = () => {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
};
