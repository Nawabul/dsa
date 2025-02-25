

const insertion_sort = (array)=>{

	const length = array.length;

	for(let i = 1; i<length;i++){

		let j = i;

		while(j>0 && array[j]<array[j-1]){

			const temp = array[j];
			array[j]  = array[j-1]
			array[j-1] = temp;
			j--;
		}
	}
	console.log(array)
}


const array = [8,7, 3,1,2]

insertion_sort(array)