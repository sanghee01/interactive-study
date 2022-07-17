const player = document.querySelector("#player");

const npc1 = document.querySelector("#npc1");
const npc2 = document.querySelector("#npc2");
const npc3 = document.querySelector("#npc3");

const talk = document.querySelector(".talk");
const overlay = document.querySelector(".talk__overlay");
const nextBtn = document.querySelector(".nextBtn");
const talkNpc = document.querySelector(".talk__char");
const talkScript = document.querySelector(".talk__script");

const dialog = {
  0: {
    name: "멍하나",
    script: [
      "냥돌 ㅎㅇ 나 멍하나임 너 뭐함",
      "나 걍 걷는중",
      "올 너가 웬 일",
      "ㅋ",
    ],
  },
  1: {
    name: "멍둘",
    script: [
      "올~~~~ 냥돌~~~ 너가 웬 일로 길에서 마주치냐~~",
      "멍하나랑 똑같은 말 하네",
      "그래? 너가 걷는다는건 잘 볼 수 없는 일이긴 하지",
      "ㅋ",
    ],
  },
  3: {
    name: "멍셋",
    script: ["헉!!!! 냥돌!!!!!", "웬 일로 걷냐고??", "엇...", "ㅋ"],
  },
};

let talkIndex = 0;
let npcIndex = 0;

const nextTalk = () => {
  talkNpc.textContent = dialog[npcIndex].name;
  talkScript.textContent = dialog[npcIndex].script[talkIndex];
  talkIndex++;
  if (talkIndex === 6) {
    talkIndex = 0;
    npcIndex++;
    closeTalk();
  }
};
const openTalk = () => {
  talk.classList.remove("hidden");
};
const closeTalk = () => {
  talk.classList.add("hidden");
};

overlay.addEventListener("click", closeTalk);
npc1.addEventListener("click", openTalk);
npc2.addEventListener("click", openTalk);
npc3.addEventListener("click", openTalk);
nextBtn.addEventListener("click", nextTalk);
