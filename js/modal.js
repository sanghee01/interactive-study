const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal__overlay");
const closeBtn = document.querySelector("#close");

const openModal = () => {
  modal.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
  player.style.top = "450px";
  player.style.left = "700px";
};
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
npc[0].addEventListener("click", openModal);
