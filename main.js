const keys = document.querySelectorAll(".key");
console.log(keys);

window.addEventListener("keydown", function (e) {
  console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.play();
});

document.addEventListener("keydown", function (event) {
  console.log(event.keyCode);
  const number = event.keyCode;

  for (let i = 0; i < keys.length; i++) {
    // console.log(keys[i].getAttribute("data-key"));
    console.log(keys[i]);

    if (Number(keys[i].getAttribute("data-key")) === number) {
      console.log(keys[i]);
      keys[i].classList.add("playing");
      setTimeout(() => {
        keys[i].classList.toggle("playing");
      }, 100);
    }
  }
});
