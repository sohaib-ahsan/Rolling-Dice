"use strict";

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let activePlayer = 0;
let scores = [0, 0];
let current_score = 0;
score0.textContent = 0;
score1.textContent = 0;
let playing = true;
dice.classList.add("hidden");

function player() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  current_score = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}

btnRoll.addEventListener("click", function () {
  if (playing) {
    const random = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `dice-${random}.png`;
    if (random != 1) {
      current_score += random;
      document.getElementById(`current--${activePlayer}`).textContent =
        current_score;
    } else {
      player();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += current_score;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else player();
  }
});

btnNew.addEventListener("click", function () {
  scores = [0, 0];
  current_score = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  playing = true;
  activePlayer = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
});
