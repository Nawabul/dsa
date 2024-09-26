 class quickSort {
	constructor(array){

		// sort method call
		this.sort(array,0,array.length-1);
		console.log(array);
	}

	// sort method

	sort (array,low,high){

		if(low<high){
			// find pivot index
			let pivot = this.partition(array,low,high);
			// recursive call for left subarray

			this.sort(array,low,pivot-1)
			// recursive call for right subarray
			this.sort(array,pivot+1,high)
		}

	}
	// partition method
	partition (array,low,high){
		// choose pivot element
		let pivot = array[high];
		let i = low-1;

		// travers in array to find pivot position
		for(let j = low;j<high;j++){

			// check
			if(array[j]<pivot){
				i++;
				// swap the element with i position and j
				let temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}

		// swap the pivot with i position

		i++;
		let temp = array[i];
		array[i] = pivot;
		array[high] = temp;
		
		return i;

	}
 }

 const array = [2,1,5,5,3,4];

 new quickSort(array);