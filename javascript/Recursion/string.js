{
let first = -1;
let last = -1;

	// first and last occurance of give char in string
	
	const find_occurance = (str,index,target)=>{

		// break point 
		if(str.length == index){
			return index
		}


		if(str[index] == target){
			last = index
			if (first == -1) {
				first = index
			}
		}


		find_occurance(str,index+1,target)	
	}
	
const str = 'abac'
const target = 'a'
const index = 0

find_occurance(str,index,target)

console.log(first,' ',last)
}

