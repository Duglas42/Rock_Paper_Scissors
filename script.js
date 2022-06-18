"use strict";
document.addEventListener("DOMContentLoaded",()=>{
  const rock_btn = document.querySelector(".rock-btn");
  const paper_btn = document.querySelector(".paper-btn");
  const scissors_btn = document.querySelector(".scissors-btn");
  const player__score = document.querySelector(".player__score");
  const computer__score = document.querySelector(".computer__score");
  const player__choice=document.querySelector(".player__choice"),
        computer__choice=document.querySelector(".computer__choice");
  const winner_modal=document.querySelector(".winner-modal");
  const modal__reset= document.querySelector(".modal__reset");

  const winner_text = document.querySelector(".winner");
  const greeting=document.querySelector(".greeting"),
        cap_1=document.querySelector(".cap_1"),
        cap_2=document.querySelector(".cap_2"),
        cap_3=document.querySelector(".cap_3");
  // Приветсвенная анимация
  
  greeting.classList.add("active");
  cap_1.classList.add("active");
  setTimeout(()=>{
    cap_1.classList.remove("active")
    cap_2.classList.add("active")
    setTimeout(()=>{
      cap_2.classList.remove("active")
      cap_3.classList.add("active")
      setTimeout(()=>{
        cap_3.classList.remove("active")
        greeting.classList.remove("active");
        document.body.className="game";
      },3000)
    },3000)
  },3000)
  



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
    console.log("Пользователь"+playerSelect)
    console.log("Компьютер"+computerSelection)
    if(computerSelection=="sciccors") computer__choice.textContent="✌";
    if(computerSelection=="rock") computer__choice.textContent="✊";
    if(computerSelection=="paper") computer__choice.textContent="✋";

    if(playerSelect=="rock") player__choice.textContent="✊";
    else if(playerSelect=="paper") player__choice.textContent="✋";
    else if(playerSelect=="scissors") player__choice.textContent="✌";
    let result = playRound(playerSelect, computerSelection);
    console.log(`результат ${result}`)
    if (result == 1) playerScore++;
    else if (result == 2) computerScore++;

    player__score.textContent=`Пользователь:${playerScore}`
    computer__score.textContent=`Компьютер:${computerScore}`
  }
  // Функция, срабатывающая при достижении определённых очков
  function WinLose() {
    if (playerScore>=5) {
      console.log(`Победил Пользователь`);
      winner_text.textContent = `Победил Пользователь`;
      winner_modal.classList.add("active");
    } else if (computerScore>=5) {
      console.log(`Победил компьютер`);
      winner_text.textContent = `Победил Компьютер`;
      winner_modal.classList.add("active");
    } else return;
  }
  modal__reset.onclick=()=>{
    winner_modal.classList.remove("active");
    player__score.textContent=`Пользователь:${0}`
    computer__score.textContent=`Компьютер:${0}`
    playerScore=0;
    computerScore=0;
  }
})