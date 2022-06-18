"use strict";
const rock_btn = document.querySelector(".rock-btn");
const paper_btn = document.querySelector(".paper-btn");
const scissors_btn = document.querySelector(".scissors-btn");
const game_score = document.querySelector(".game-score");
const winner_text = document.querySelector(".winner");

// Счёт компьютера и пользователя
let playerScore = 0;
let computerScore = 0;
// Обработчик событий на кнопки

let arr = [rock_btn, paper_btn, scissors_btn];
arr.forEach((item, i) => {
  item.addEventListener("click", () => {
    let playerSelect = "";
    if (i == 0) playerSelect = "rock";
    if (i == 1) playerSelect = "paper";
    if (i == 2) playerSelect = "scissors";
    game(playerSelect);
    WinLose();
  });
});

// Функция,случайно возвращающая rock paper или scissors

function computerPlay() {
  let rand_num = Math.floor(Math.random() * 3);
  if (rand_num == 0) return "rock";
  else if (rand_num == 1) return "paper";
  else return "sciccors";
}

// Функция, которая берёт два значения и
// возвращает:0-ничья, 1- победа пользователя
// 2-победа компьютера
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) return 0;
  else if (
    (playerSelection == "rock" && computerSelection == "sciccors") ||
    (playerSelection == "sciccors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  )
    return 1;
  else return 2;
}

// Функция, которая проводит игры и подчитывает очки
function game(playerSelect) {
  let computerSelection = computerPlay();
  let result = playRound(playerSelect, computerSelection);
  if (result == 1) playerScore++;
  else if (result == 2) computerScore++;
  game_score.textContent = `Вы:${playerScore}, Компьютер ${computerScore}`;
}
// Функция, срабатывающая при достижении определённых очков
function WinLose() {
  if (playerScore>=5) {
    console.log(`Победил Пользователь`);
    winner_text.textContent = `Победил Пользователь`;
  } else if (computerScore>=5) {
    console.log(`Победил компьютер`);
    winner_text.textContent = `Победил Компьютер`;
  } else return;
}
