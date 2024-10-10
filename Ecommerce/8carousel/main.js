const imgs = document.getElementById("imgs");

// selecting all the images inside id='imgs' container
const img = document.querySelectorAll("#imgs img");

let idx = 0;

function nextImg() {
  idx++;
  if (idx > img.length - 1) {
    idx = 0;
  }
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}
setInterval(nextImg, 2000);
