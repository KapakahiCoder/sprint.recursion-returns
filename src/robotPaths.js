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
    this.size = size;
    this.row = 0;
    this.col = 0;
  }

  solve() {
    let numberOfPaths = 0;
    const findPaths = (row, col) => {
      if (row === this.size - 1 && col === this.size - 1) {
        numberOfPaths++;
        return;
      }
      if (row < 0 || row >= this.size || col < 0 || col >= this.size) {
        return;
      }
      if (this.board.hasBeenVisited(row, col)) {
        return;
      } else {
        this.board.togglePiece(row, col);
        findPaths(row, col + 1);
        findPaths(row + 1, col);
        findPaths(row, col - 1);
        findPaths(row - 1, col);
        this.board.togglePiece(row, col);
      }
    };

    findPaths(0, 0);
    return numberOfPaths;
  }
}
module.exports = { RobotPaths };
