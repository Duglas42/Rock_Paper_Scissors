"use strict";
function computerPlay(){
  let rand_num=Math.floor(Math.random()*3);
  if(rand_num==0) return "rock"
  else if(rand_num==1) return 'paper'
  else return "sciccors"
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection)
    return 0;
  else if (
    (playerSelection == "rock" && computerSelection == "sciccors") ||
    (playerSelection == "sciccors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  )
    return 1;
  else return 2;
}
function game(){
  let playerScore=0;
  let computerScore=0;
  for(let i=0;i<5;i++){
    let playerSelection=prompt("Введи что-нибудь");
    let computerSelection=computerPlay();
    if (playRound(playerSelection,computerSelection)==1) playerScore++;
    if(playRound(playerSelection,computerSelection)==2) computerScore++;
    console.log(`Счёт игрока ${playerScore}, счёт компьютера ${computerScore}`)
  }
  if(playerScore==computerScore) console.log("Ничья")
  else if(playerScore>computerScore) console.log("Ты выйграл!")
  else console.log("Компьютер выйграл!")
}
game();