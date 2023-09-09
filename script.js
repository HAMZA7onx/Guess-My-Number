"use strict";

let score = document.querySelector(".score");
let heigh_score = document.querySelector(".heigh-score");
let guessing = document.querySelector(".guessing");
let smb = document.querySelector(".smb");
let input = document.querySelector(".input");
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let again = document.querySelector(".again");

// THE GAME LOGIC

//score

//
smb.textContent = Math.trunc(Math.random() * 20) + 1;
console.log(smb.textContent);

//
play.addEventListener("click", function () {
  let stop = 1;
  console.log(stop);
  console.log(input.value);
  if (score.textContent <= 0) {
    stop--;
    document.querySelector(".container").classList.add("lose");
    guessing.textContent = "You lose, Sorry";
  }
  if (stop == 1) {
    // if(input.value ==)
    if (input.value == smb.textContent) {
      document.querySelector(".container").classList.add("win");
      guessing.textContent = "Nice";
      play.classList.add("hidden");
      if (score.textContent > heigh_score.textContent) {
        heigh_score.textContent = score.textContent;
      }
    } else if (input.value >= Number(smb.textContent)) {
      score.textContent--;
      guessing.textContent = "heigh";
    } else {
      score.textContent--;
      guessing.textContent = "low";
    }
    //should continue the game or not:
    console.log(score.textContent);
  }
});

//again
again.addEventListener("click", function () {
  document.querySelector(".container").classList.remove("win");
  play.classList.remove("hidden");
  document.querySelector(".container").classList.remove("lose");
  score.textContent = 20;
  smb.textContent = Math.trunc(Math.random() * 20) + 1;
  console.log(smb.textContent);
});

//pause
pause.addEventListener("click", function () {
  document.querySelector(".windows").classList.add("index");
});

//close

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".windows").classList.remove("index");
});
