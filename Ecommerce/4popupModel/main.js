const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");

open.addEventListener("click", () => {
  container.classList.toggle("active");
});

close.addEventListener("click", () => {
  container.classList.toggle("active");
});
