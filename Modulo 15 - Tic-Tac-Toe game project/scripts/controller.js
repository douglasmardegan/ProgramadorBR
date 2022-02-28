document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      const popupWindow = document.querySelector(".popupWindow");
      const confettiEffect = document.querySelector("#my-canvas");
      const closePopupBtn = document.querySelector(".closeBtn");
      const resetGameBtn = document.querySelector(".resetBtn");

      popupWindow.classList.add("active");
      confettiEffect.classList.add("active");

      popupWindow.innerHTML = `
      <div>The winner was the "PLAYER ${playerTime == 0 ? 2 : 1}"</div>
      <button class="closeBtn" onclick="closePopup()">X</button>
      <button class="resetBtn" onclick="resetGame()">Reset</button>
      `;

      let confettiSettings = { target: "my-canvas" };
      let confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();

      resetGameBtn.addEventListener("click", resetGame());
      closePopupBtn.addEventListener("click", closePopup());
    }, 250);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class="${symbol}"</div>`;
}

function closePopup() {
  document.querySelector(".popupWindow.active").classList.remove("active");
  document.querySelector("#my-canvas.active").classList.remove("active");
}

function resetGame() {
  document.querySelector(".popupWindow").innerHTML = "";
  closePopup();

  gameOver = false;
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;

  let squares = document.querySelectorAll(".square");
  for (let square of squares) {
    square.innerHTML = "";
  }
}
