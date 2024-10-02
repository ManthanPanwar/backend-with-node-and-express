const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => onClickFunction());

const onClickFunction = () => {
  const notify = document.createElement("div");
  notify.classList.add("toast");
  notify.innerHTML = "This is a Toast Notification";
  container.appendChild(notify);

  setTimeout(() => {
    notify.remove();
  }, 3000);
};
