{
	// check array is strictly sorted

	const is_strictly_sorted = (arr,index)=>{

		if(arr.length -1 == index){
			return true;
		}

		if(arr[index]<arr[index+1]){
			return is_strictly_sorted(arr,index+1);
		}
		// array is unsorted
		return false
	}

	const arr = [1,2,3,3];
	const result = is_strictly_sorted(arr,0);
	console.log('Result : ',result)
}