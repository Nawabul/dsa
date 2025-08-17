class NumberOfIsland {

	constructor(){
		const cases = this.cases();
		for (const island of cases) {
			
			const count = this.countIsland(island)
			console.log('Island : ',count);
		}
	}
  cases() {
    // case 1: 1 island
    const case1 = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];

    // case 2: 3 island
    const case2 = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];

    return [case1, case2];
  }

  countIsland(islands) {
    let count = 0;
    const rows = islands.length;
    const cols = islands[0].length;
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (islands[row][col] === "1") {
        
		  islands[row][col] = '2'
		  let isIsland = true;
          for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            if (
              newRow >= 0 &&
              newRow < rows &&
              col >= 0 &&
              col < cols &&
              islands[newRow][newCol] == "2"
            ) {
              isIsland = false
            }
          }
		  if (isIsland) {
			count++;
		  }
        }
      }
    }
	return count;
  }
}


new NumberOfIsland();