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


class suduku {
	
	board;
	constructor(board) {
		this.board = board;
		// console.log(board)
		this.helper(board,0,0);
	}
	// helper to assign
	helper (board,row,col){
		let nrow = row;
		let ncol = col;
		console.log(row,' ',col)
		if(col==9){
			nrow = row +1
			ncol =0
		}
		if(nrow === board.length){

			console.log(board);
			return true;
		}
		
	
		// already have number 
		if(board[nrow][ncol]){

			return this.helper(board,nrow,ncol+1)
			
		}else{
			// try all number
			for(let i=1;i<=9;i++){
				if(this.isValid(board,nrow,ncol,i)){
					board[nrow][ncol] = i
					// check next 
					if(this.helper(board,nrow,ncol+1)){
						return true
					}else{
						board[nrow][ncol] = null
						
						
					}
				}
			}
			return false
		}
	
	}

	// isValid function 
	isValid (board,row,col,number){
		// check row
		for(let i =0;i<9;i++){
			if(board[row][i] === number){
				return false;
			}
		}
		// check column
		for(let i =0;i<9;i++){
			// console.log(board)
			if(board[i][col] === number){
				return false;
			}
		}
		
		// check in grid ; 
		let startRow = Math.floor(row/3)*3
		let startCol = Math.floor(col/3)*3
		
		for(let i = startRow; i<=(startRow+2);i++){
			
			for(let j = startCol; j<=(startCol+2);j++){
				if(board[i][j]==number){
					false
				}
			}
		}
			
		return true;
	}


}

let array = [
		[null,8,null,7,null,1,null,3,null],
		[4,null,9,null,null,null,null,null,null],
		[null,5,null,null,6,null,4,1,8],
		[7,null,null,null,null,9,null,null,null],
		[8,null,null,6,1,null,5,null,null],
		[null,3,5,null,null,null,null,2,9],
		[null,6,null,4,null,7,null,9,null],
		[1,null,null,null,null,8,null,null,4],
		[null,2,null,null,5,null,null,7,null]
]

new suduku(array);