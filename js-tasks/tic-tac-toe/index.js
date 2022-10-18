let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));



board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;
    
  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  checkWin();
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  
});



function displayTurn(turn) {
    // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
    if(turn === "x")
        document.getElementById("turn").innerHTML = "X turn";
    else
        document.getElementById("turn").innerHTML = "O turn";
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
    if (symbols[0][0] !== "") {
        if (symbols[0][1] === symbols[0][2] && symbols[0][0] === symbols[0][1] || symbols[1][0] === symbols[2][0] && symbols[0][0] === symbols[2][0] ||
            symbols[1][1] === symbols[2][2] && symbols[0][0] === symbols[2][2]) {
            alert(`wygral ${turn}`);
            return;
        }
    }
    if (symbols[2][0] !== "") {
        if (symbols[2][1] === symbols[2][2] && symbols[2][0] === symbols[2][1] || symbols[1][1] === symbols[0][2] && symbols[2][0] === symbols[0][2]) {
            alert(`wygral ${turn}`);
            return;
        }
            
    }
    if (symbols[1][1] !== "") {
        if (symbols[0][1] === symbols[2][1] && symbols[1][1] === symbols[2][1] || symbols[1][0] === symbols[1][2] && symbols[1][0] === symbols[1][1]) {
            alert(`wygral ${turn}`);
            return;
        }
           
    }
    if (symbols[0][2] !== "" && symbols[0][2] === symbols[1][2] && symbols[0][2] === symbols[2][2]) {
        alert(`wygral ${turn}`);
        return;
    }
        
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
document.getElementById("reset").addEventListener("click", reset());
function reset() {
    // 4. zresetuj stan gry
}
