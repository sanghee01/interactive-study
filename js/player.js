const player = document.querySelector("#player");
let x = 0;
let y = 0;

const npc = document.querySelectorAll(".npc");

npc[0].addEventListener("click", (e) => {
  x = e.clientX;
  y = e.clientY;
  player.style.transform = "translate(" + (x - 600) + "px," + (y - 205) + "px)";
});
