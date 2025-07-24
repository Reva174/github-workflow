/*Write JavaScript to power the Rock Paper Scissors game with these requirements:
- Track player score, computer score, and round number
- Update the displayed scores, round, and result messages
- Add click event listeners for Rock, Paper, Scissors buttons:
    - When clicked, randomly generate computer's choice
    - Compare player choice and computer choice to determine the winner
    - Update player or computer score accordingly
    - Display current choices under "Your choice" and "Computer's choice"
    - Display a message for who won the round or if it's a tie
- Limit the game to 5 rounds, then display:
    - "🎉 Congratulations! You Won The Game!" if player wins
    - "💻 Game Over! Computer Wins The Game!" if computer wins
    - "🤝 It's a Tie Game! Try Again!" if tied
- Implement a Reset button to reset scores, round, displayed choices, and result messages to initial state
Use clean variable names, modular functions, and clear DOM updates.
*/
const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 1;

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const roundEl = document.getElementById("round");
const resultEl = document.getElementById("result");
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const resetBtn = document.getElementById("reset");

document.getElementById("rock").addEventListener("click", () => playRound("Rock"));
document.getElementById("paper").addEventListener("click", () => playRound("Paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("Scissors"));
resetBtn.addEventListener("click", resetGame);

function playRound(playerChoice) {
  if (round > 5) return;

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  playerChoiceEl.textContent = playerChoice;
  computerChoiceEl.textContent = computerChoice;

  let resultMessage = "";
  if (playerChoice === computerChoice) {
    resultMessage = "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore++;
    resultMessage = `You win this round!`;
  } else {
    computerScore++;
    resultMessage = `Computer wins this round!`;
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  resultEl.textContent = resultMessage;

  if (round === 5) {
    setTimeout(showFinalResult, 500);
  }

  round++;
  roundEl.textContent = `Round ${round > 5 ? 5 : round}/5`;
}

function showFinalResult() {
  if (playerScore > computerScore) {
    resultEl.textContent = "🎉 Congratulations! You Won The Game!";
  } else if (computerScore > playerScore) {
    resultEl.textContent = "💻 Game Over! Computer Wins The Game!";
  } else {
    resultEl.textContent = "🤝 It's a Tie Game! Try Again!";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  roundEl.textContent = "Round 1/5";
  resultEl.textContent = "Make your choice!";
  playerChoiceEl.textContent = "?";
  computerChoiceEl.textContent = "?";
}