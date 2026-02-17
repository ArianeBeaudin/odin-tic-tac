//AS LITTLE AS POSSIBLE GLOBAL VARIABLE AND ++ IFHE

//Players (obj)

//GameEngine

function createPlayer(pname, ptoken) {
  let name = pname;
  let token = ptoken;
  let victory_status = false;
  let just_played = false;

  return { name, token, victory_status, just_played };
}

function createGameEngine() {
  let board = [
    ["*", "*", "*"],
    ["*", "*", "*"],
    ["*", "*", "*"],
  ];

  function writeRow(player, position) {
    //  //where player = x or o, and position being array [x,y]
    board[position[0]][position[1]] = player;
  }

  //   writeRow("x", [1, 1]);
  //   writeRow("x", [1, 0]);
  //   writeRow("x", [1, 2]);
  //   console.log(board);

  function checkRow(player) {
    let victory_status = [false, player];
    //add verification loop

    return victory_status;
  }

  function playTurn(player, position) {
    writeRow(player, position);

    return checkRow(player);
  }

  return { board, playTurn };
}

//DisplayEngine

function createDisplayEngine(board, player) {
  visualBoard = [[], [], []];

  function initiateBoard() {
    let x = 0;

    while (x < 3) {
      //   visualBoard[x] = document.createElement("div");
      //   visualBoard[x] = "hl" + x;
      let y = 0;
      while (y < 3) {
        visualBoard[x][y] = document.createElement("div");
        visualBoard[x][y].id = x + "c" + y;
        visualBoard[x][y].innerHTML = board[x][y];
        visualBoard[x][y].style.backgroundColor = "pink";
        console.log(document.getElementById("board"));
        document.getElementById("board").appendChild(visualBoard[x][y]);
        y++;
      }
      x++;
    }
  }

  function drawLines() {
    document.getElementById("0c0").style.color = "red";
  }

  initiateBoard();
}

//MAIN

const gameEngine = createGameEngine();

console.log("main" + gameEngine.board);

gameEngine.playTurn("x", [2, 2]);

const sharkie = createPlayer("sharkie", "x");
console.log(sharkie);
console.log("main 2 " + gameEngine.board);

createDisplayEngine(gameEngine.board);
