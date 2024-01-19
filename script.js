let playerSymbol = "X";
let gameEnded = false;

const winPos = [
  [1, 2, 3], [4, 5, 6], 
  [7, 8, 9], [1, 4, 7], 
  [2, 5, 8], [3, 6, 9], 
  [1, 5, 9], [3, 5, 7]
];

for (let i = 1; i <= 9; i++) {
  const cell = document.getElementById(i.toString());
  cell.addEventListener("click", handleCellClick);
}

function handleCellClick() {
  if (this.innerHTML === "" && !gameEnded) {
    this.innerHTML = playerSymbol;
    this.classList.add(playerSymbol.toLowerCase());
    
    checkWin();
    
    playerSymbol = (playerSymbol === "X") ? "O" : "X";
  }
}


function checkWin() {
  for (const [pos1, pos2, pos3] of winPos) {
    const cell1 = document.getElementById(pos1);
    const cell2 = document.getElementById(pos2);
    const cell3 = document.getElementById(pos3);

    if (
      cell1.innerHTML === playerSymbol &&
      cell2.innerHTML === playerSymbol &&
      cell3.innerHTML === playerSymbol
    ) {

      [cell1, cell2, cell3].forEach(cell => cell.classList.add("win"));
      
      gameEnded = true;
      setTimeout(() => {
        alert(playerSymbol + " wins!");
      }, 500);
      return;
    }
  }

  if (isDraw()) {
    setTimeout(() => {
      alert("It's a draw!");
    }, 500);
    gameEnded = true;
  }
}

function isDraw() {
  for (let i = 1; i <= 9; i++) {
    const cell = document.getElementById(i.toString());
    if (cell.innerHTML === "") {
      return false;
    }
  }
  return true;
}

document.getElementById("reset").addEventListener("click", resetGame);

function resetGame() {
  for (let i = 1; i <= 9; i++) {
    const cell = document.getElementById(i.toString());
    cell.innerHTML = "";
    cell.classList.remove("x", "o", "win");
    gameEnded = false;
  }
}
