// find best solution to place queen in chasse 

// save board
const saveBoard = (board,allBoard)=>{
	
	const newBoard = [];
	for(let i=0;i<board.length;i++){
		let row =''
		for(let j=0;j<board.length;j++){
			if (board[i][j] == 'Q') {
				row +='Q'
			}else{
				row +='*'
			}
		}
		newBoard.push(row)
	
	}
	// push new board in all board

	allBoard.push(newBoard)
}


const isSafe = (board,row,col)=>{
	// console.log(row,' ',col)
	// check horizontal
	for(let i=0;i<board.length;i++){
		if(board[row][i] == 'Q'){
			return false;
		}
	}
	// check vertical
	for(let i=0;i<board.length;i++){
		if(board[i][col] == 'Q'){
			return false;
		}
	}
	
	// check diagonal upper left
	for(let i = row,j=col; i>=0 && j>=0 ; i--,j--){
		if(board[i][j] == 'Q'){
			return false;
		}
	}
	// check diagonal upper right
	for(let i = row,j=col; i>=0 && j<board.length ; i--,j++){
		if(board[i][j] == 'Q'){
			return false;
		}
	}
	
	
	
	// check diagonal lower left
	for(let i = row,j=col; i<board.length && j>=0 ; i++,j--){
		if(board[i][j] == 'Q'){
			return false;
		}
	}
	// check diagonal lower right
	for(let i = row,j=col; i<board.length && j<board.length ; i++,j++){
		if(board[i][j] == 'Q'){
				return false;
			}
		}

		return true
}


// helper function

const helper = (board,allBoard,col)=>{
	console.log(board.length)
	if(board.length == col){
		//save the board
		saveBoard(board,allBoard);
		return;
	}
	
	for(let row=0;row<board.length;row++){
		
		//if safe 
		const safe =isSafe(board,row,col) 
		if(safe){
			
			
			//place queen in col
			 board[row][col] = "Q";
			 helper([...board],allBoard,col+1)
			 
			 board[row][col] = "*";
		
			
			}
		}

}


const solveQueen = (n)=>{
	let board = []; // store single time data
	const allBoard = new Array(); // store all posible data

	const boardDefualt = new Array(n).fill('*')

	
	for (let index = 0; index < n; index++) {
		board[index] = [ ...boardDefualt]
		
	}
	// helper 

	
	helper(board,allBoard,0);
	console.log(allBoard)
}

solveQueen(4)
