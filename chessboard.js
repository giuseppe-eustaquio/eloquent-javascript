let chessboard = "";
let temp = " ";
const size = 8;

for (let i = 1; i <= size; i++) {
  for (let j = 1; j <= size; j++) {
    chessboard = chessboard.concat(temp);
    temp === " " ? (temp = "#") : (temp = " ");
  }
  chessboard = chessboard.concat(i, "\n");

  temp === " " ? (temp = "#") : (temp = " ");
}
console.log(chessboard);
