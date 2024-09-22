
{
	// string permutation

	const string_permutaion = (str, permutation)=>{

		// base case to stop the function
		if(str.length ==0){
			console.log(permutation);
			return
		}

		for(let i = 0;i<str.length;i++){
			const currentChar = str[i]; // current char in string
			const remainingString = str.slice(0,i) + str.slice(i+1); // rest left and right string part

			string_permutaion(remainingString,permutation+currentChar); // re call the function
		}
	}

	const str = 'abc'
	 
	// identity point
	console.log('string permutaion')

	// call permutaion function
	string_permutaion(str,"");
}

{
	// count total path move from (0,0) to (n,m) in matrix

	const count_path = (i,j,n,m)=>{
		
		if(i == n || j == m){
			return 0;
		}
		// base case 
		if(i == n-1 && j== m-1){
			return 1;
		}
		
		// point is not on bottom 
		
			const downPath = count_path(i+1,j,n,m)
		
		// point is not on right side 
	
			 const rightPath = count_path(i,j+1,n,m)
		
		// return total count
		return downPath + rightPath
	}

	// call the count function
	const result = (count_path(0,0,3,3));
	console.log('Count total path : ',result);
}

{
	// number of way to arrange the tiles 

	const count_way = (n, // height of area
						m, // width of of tiles and area
					)=>{

						// base case  on less then zero
						if(n<0){
							return 0
						}
						// base case  on end
						if(n==0){
							return 1
						}

						// tiles horizontal
						const horizontal_count = count_way(n-1,m);
						// tiles vertical
						const vertical_count = count_way(n-m,m);

						return vertical_count+horizontal_count
						
					}

	const tiles_width = 2;
	const area_height = 5;
	const result = count_way(5,2);
	console.log('Number of way to arrange tiles :',result);				
}