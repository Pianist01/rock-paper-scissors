console.log('Hello');

// Function will randomly return one of the following results: rock, paper, scissors.

// User will be prompted with choosing either rock, paper, or scissors. 

// Game will keep track of score starting with 0.

// After each round, result will return with "You lose. Paper beats Rock." Scores then will be updated accordingly either for human or computer.

// Game will have a 5 round limit.

function getComputerChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  let randomChoice = Math.floor(Math.random() * choice.length);
  let computerChoice = choice[randomChoice];
  return computerChoice;
}

let humanSelection = '';
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  const rock = document.querySelector('#btnone');
  rock.addEventListener("click", () => {
    humanSelection = 'rock';
    playRound();
  });

  const paper = document.querySelector('#btntwo');
  paper.addEventListener("click", () => {
    humanSelection = 'paper';
    playRound();
  });

  const scissor = document.querySelector('#btnthree');
  scissor.addEventListener("click", () => {
    humanSelection = 'scissors';
    playRound();
  });
}

getHumanChoice();

const outCome = document.querySelector('#container');
const result = document.createElement('p');

const sheet = document.createElement('p');
const score = document.querySelector('#score');

function playRound() {
  let humanMove = humanSelection;
  computerSelection = getComputerChoice();

  if (humanMove === computerSelection) {
    result.textContent = 'Tie!';
    outCome.appendChild(result);
  } else if (humanMove === 'rock' && computerSelection === 'scissors') {
    humanScore++;
    result.textContent = `You Win! ${humanMove} beats ${computerSelection}`;
    outCome.appendChild(result);
    sheet.textContent = `You: ${humanScore}`;
    score.appendChild(sheet);
  } else if (humanMove === 'paper' && computerSelection === 'rock') {
    humanScore++;
    result.textContent = `You Win! ${humanMove} beats ${computerSelection}`;
    outCome.appendChild(result);
    sheet.textContent = `You: ${humanScore}`;
    score.appendChild(sheet);
  } else if (humanMove === 'scissors' && computerSelection === 'paper') {
    humanScore++;
    result.textContent = `You Win! ${humanMove} beats ${computerSelection}`;
    outCome.appendChild(result);
    sheet.textContent = `You: ${humanScore}`;
    score.appendChild(sheet);
  } else {
    computerScore++;
    result.textContent = `You Lose. ${computerSelection} beats ${humanMove}.`;
    outCome.appendChild(result);
    sheet.textContent = `Computer: ${computerScore}`;
    score.appendChild(sheet);
  }
}

function playGame() {
  for (i = 0; i < 5; i++) {
    let humanMove = humanSelection;
}
}

playGame();


// for (let n = 1; n < 10; n++) {
//   if (n % 1) {
//     alert(n);
//   }
// }