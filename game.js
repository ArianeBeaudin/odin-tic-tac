//AS LITTLE AS POSSIBLE GLOBAL VARIABLE AND ++ IFHE

//Players (obj)

//GameEngine

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

  writeRow("x", [1, 1]);
  writeRow("x", [1, 0]);
  writeRow("x", [1, 2]);
  console.log(board);

  //function checkRow

  function checkRow() {}
}

createGameEngine();

//DisplayEngine

//MAIN

//invocate board
