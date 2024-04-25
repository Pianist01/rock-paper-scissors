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

const playerSelection = prompt('Rock, Paper, Scissors: Choose One!');
const playerChoice = playerSelection.toLowerCase();

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerChoice;

  if (playerChoice === computerSelection) {
    return 'Tie';
  } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
    return `You Win! ${playerChoice} beats ${computerSelection}`;
  } else if (playerChoice === 'paper' && computerSelection === 'rock') {
    return `You Win! ${playerChoice} beats ${computerSelection}`;
  } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
    return `You Win! ${playerChoice} beats ${computerSelection}`;
  } else {
    return `You Lose. ${computerSelection} beats ${playerChoice}.`;
  }
}


let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt('Rock, Paper, Scissors: Choose One!');
    playerChoice;
    let result = playRound();
    console.log(result);

    if (result.includes('Win')) {
      humanScore++;
    } else if (result.includes('Lose')) {
      computerScore++;
    }
  }
}
console.log(playGame());