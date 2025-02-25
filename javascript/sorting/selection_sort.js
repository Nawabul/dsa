

const selection_sort = (array)=>{


	for(let i= 0; i<array.length;i++){
		
	let	smallest_number = array[i]
	let	smallest_index= i

		for(let j= i+1; j<array.length;j++){

			if(array[j]<smallest_number){
				smallest_number = array[j]
				smallest_index = j
			}
		}

		let temp = array[smallest_index]
		array[smallest_index] = array[i]
		array[i] = temp
	}

	console.log(array)
}


const array = [8,7, 3,1,2]

selection_sort(array)