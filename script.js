fast = document.querySelectorAll(".fast");
slow = document.querySelectorAll(".slow");
let light = document.getElementById("light");

window.setInterval(() => {
  fast.forEach((element) => {
    element.classList.toggle("glow");
  });
}, 5);

window.setInterval(() => {
  slow.forEach((element) => {
    element.classList.toggle("glow");
  });
}, 1000);

function lightup(e) {
  let x = e.clientX;
  let y = e.clientY;
  light.style.left = x + "px";
  light.style.top = y + "px";
}

document.body.addEventListener("mousemove", lightup);
