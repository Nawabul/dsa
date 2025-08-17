class RottenTime {
  constructor() {
    const firstCases = this.firstCases();

    for (const example of firstCases) {
      const solution = this.rottenTime(example);
      console.log("Rotten time:", solution);
    }
  }

  firstCases() {
    const case1 = [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ];
    const case2 = [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ];
    return [case1, case2];
  }

  rottenTime(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const queue = [];
    let fresh = 0;

    // Step 1: collect initial rotten and count fresh
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (matrix[i][j] === 2) {
          queue.push([i, j, 0]); // [row, col, minute]
        } else if (matrix[i][j] === 1) {
          fresh++;
        }
      }
    }

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    let minutes = 0;

    // Step 2: BFS
    while (queue.length > 0) {
      const [i, j, time] = queue.shift();
      minutes = Math.max(minutes, time);

      for (const [dx, dy] of directions) {
        const x = i + dx;
        const y = j + dy;
        if (
          x >= 0 &&
          x < rows &&
          y >= 0 &&
          y < cols &&
          matrix[x][y] === 1
        ) {
          matrix[x][y] = 2; // rot it
          fresh--;
          queue.push([x, y, time + 1]);
        }
      }
    }

    return fresh === 0 ? minutes : -1;
  }
}

const assignment = new RottenTime();
