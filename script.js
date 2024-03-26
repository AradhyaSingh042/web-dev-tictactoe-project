// Tic-Tac-Toe Logic
let xIcon = `<i class="fa-solid fa-x" id="cell-icon-x"</i>`;
let oIcon = `<i class="fa-solid fa-o" id="cell-icon-o"</i>`;
let gameCells = document.querySelectorAll(".game-cell");
let turnIcon = document.getElementById("turn-icon");
let winIcon = document.getElementById("win-icon");
let quitBtn = document.querySelector(".quit-btn");
let nextBtn = document.querySelector(".next-btn");
let restartBtn = document.querySelector(".restart-container");
let currentIcon = xIcon;
let cellState = ["empty", "X", "O"];
let p1Score = 0;
let p2Score = 0;
let tiesScore = 0;

gameCells.forEach((gameCell) => {
  gameCell.state = cellState[0];
  gameCell.addEventListener("click", (details) => {
    gameCell.innerHTML = currentIcon;
    gameCell.style.backgroundColor = "#142128";
    if (currentIcon == xIcon) {
      gameCell.state = cellState[1];
      currentIcon = oIcon;
    } else if (currentIcon == oIcon) {
      gameCell.state = cellState[2];
      currentIcon = xIcon;
    }
    if (turnIcon.className == "fa-solid fa-o") {
      turnIcon.className = "fa-solid fa-x";
    } else if (turnIcon.className == "fa-solid fa-x") {
      turnIcon.className = "fa-solid fa-o";
    }
    checkRes();
  });
});

function checkRes() {
  if (checkTie() == true) {
    return;
  } else {
    checkTie();
  }
  verifyWinCondition(0, 1, 2);
  verifyWinCondition(3, 4, 5);
  verifyWinCondition(6, 7, 8);
  verifyWinCondition(0, 3, 6);
  verifyWinCondition(1, 4, 7);
  verifyWinCondition(2, 5, 8);
  verifyWinCondition(6, 4, 2);
  verifyWinCondition(0, 4, 8);
}

function updateScoreBoard(index) {
  if (gameCells[index].state == "X") {
    p1Score++;
  } else if (gameCells[index].state == "O") {
    p2Score++;
  }
  document.getElementById("player1-score").textContent = p1Score;
  document.getElementById("player2-score").textContent = p2Score;
}

function resetGame() {
  gameCells.forEach((gameCell) => {
    gameCell.state = cellState[0];
    gameCell.innerHTML = "";
    gameCell.style.backgroundColor = "#1F3540";
    currentIcon = xIcon;
  }, 1000);
}

function verifyWinCondition(index0, index1, index2) {
  if (
    gameCells[index0].state != "empty" &&
    gameCells[index0].state == gameCells[index1].state &&
    gameCells[index1].state == gameCells[index2].state
  ) {
    // winCheck
    document.querySelector(".win-screen").style.display = "flex";
    document.querySelector(".game-card").style.filter = "brightness(0.45)";
    if (gameCells[index0].state == "X") {
      winIcon.className = "fa-solid fa-x";
    } else if (gameCells[index0].state == "O") {
      winIcon.className = "fa-solid fa-o";
      winIcon.style.color = "#f2b237";
      document.querySelector(".take-the-round-text").style.color = "#f2b237";
    }
    updateScoreBoard(index0);
  }
}

function checkTie() {
  if (
    gameCells[0].state != "empty" &&
    gameCells[1].state != "empty" &&
    gameCells[2].state != "empty" &&
    gameCells[3].state != "empty" &&
    gameCells[4].state != "empty" &&
    gameCells[5].state != "empty" &&
    gameCells[6].state != "empty" &&
    gameCells[7].state != "empty" &&
    gameCells[8].state != "empty"
  ) {
    document.querySelector(".win-text").textContent = "TIE!";
    document.querySelector(".win-text").style.fontSize = "1.6rem";
    document.querySelector(".win-screen").style.display = "flex";
    document.querySelector(".game-card").style.filter = "brightness(0.45)";
    document.querySelector(".take-the-round-container").style.display = "none";
    tiesScore++;
    document.getElementById("ties-score").textContent = tiesScore;
    return true;
  }
}

nextBtn.addEventListener("click", () => {
  document.querySelector(".win-screen").style.display = "none";
  document.querySelector(".game-card").style.filter = "brightness(1)";
  resetGame();
});

quitBtn.addEventListener("click", () => {
  document.location.reload();
});

restartBtn.addEventListener("click", () => {
  document.location.reload();
});
