let text = "This is Monu Boss and he is the King of this World ❤️❤️";

let index = 0;

const autoWriter = () => {
  document.body.innerHTML = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
};

setInterval(autoWriter, 100);
