fast = document.querySelectorAll(".fast");
slow = document.querySelectorAll(".slow");

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

console.log(fast);
