class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
  }

  solve() {
    // Your code here.
    const result = 0;
    console.log("SSSSSSSSSSSSSSSSSSS", this.board, this.row, this.col);
    if (this.board[this.row - 1][this.col - 1]) {
      return 1;
    } else {
      this.board[0][0];
    }
    return result;
  }
}

module.exports = { RobotPaths };
