// MODEL, DATA MODEL OR BUSINESS LOGIC

// Declaring and initializing variables
let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
// playerTime = 0 means
// playerTime = 1 means
// 'circle' symbol in 0 index and 'cross' symbol in 1 index of the 'symbols' list
let symbols = ["circle", "cross"];
let gameOver = false;
let winStates = [
  // Horizontal win state possibilities
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical win state possibilities
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal win state possibilities
  [0, 4, 8],
  [2, 4, 6],
];

// Creating a function to put a symbol according to player time and click position on game board
function handleMove(position) {
  if (gameOver) {
    return;
  }

  // The symbol will be inserted in the position according to the player's turn
  while (board[position] == "") {
    board[position] = symbols[playerTime];

    gameOver = isWin();

    let player0 = document.querySelector(".player-0");
    let player1 = document.querySelector(".player-1");

    if (playerTime == 0) {
      player0.style.color = "#F20D00";

      playerTime = 1;
      player1.style.color = "#00A540";
    } else {
      playerTime = 0;
      player0.style.color = "#00A540";

      player1.style.color = "#F20D00";
    }
  }

  return gameOver;
}

function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];

    let position0 = seq[0];
    let position1 = seq[1];
    let position2 = seq[2];

    if (
      board[position0] == board[position1] &&
      board[position0] == board[position2] &&
      board[position0] !== ""
    ) {
      return true;
    }
  }

  return false;
}

