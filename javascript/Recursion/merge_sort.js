class mergeSort {
	constructor(array){
		this.divide(array,0,array.length-1)
		console.log(array)
	}

	divide (array,start,end){
		// base case
		if(start >= end){
			return 
		}

		const mid = start + Math.floor((end-start)/2)
		// first half
		this.divide(array,start,mid)
		// last half
		this.divide(array,mid+1,end)

		// conquer the array 
		this.conquer(array,start,mid,end)
	}

	conquer (array,start,mid,end) {
		let mergeArray = [];
		let idx1 = start
		let idx2 = mid+1
		let x = 0;
		while(idx1<=mid && idx2<=end){

			if(array[idx1]<=array[idx2]){
				mergeArray[x++] = array[idx1++]
				
			}else{
				mergeArray[x++] = array[idx2++]
				
			}
		}
		
		// rest first 
		while (idx1<=mid ){
			mergeArray[x++] = array[idx1++]
			
		}
		while (x<=end ){
			mergeArray[x++] = array[idx2++]
			
		}

		// merge this new array in origanal array
		for(let i=0,j=start; i<mergeArray.length; i++,j++){
			array[j] = mergeArray[i];
		}
	}
}

// array 
let array = [2,1,5,3,4];

new mergeSort(array);