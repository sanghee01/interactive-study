const player = document.querySelector("#player");

const npc1 = document.querySelector("#npc1");
const npc2 = document.querySelector("#npc2");
const npc3 = document.querySelector("#npc3");

const talk = document.querySelector(".talk");
const overlay = document.querySelector(".talk__overlay");
const closeBtn = document.querySelector(".close");

const openTalk = () => {
  talk.classList.remove("hidden");
};
const closeTalk = () => {
  talk.classList.add("hidden");
};

overlay.addEventListener("click", closeTalk);
closeBtn.addEventListener("click", closeTalk);
npc1.addEventListener("click", openTalk);
npc2.addEventListener("click", openTalk);
npc3.addEventListener("click", openTalk);
