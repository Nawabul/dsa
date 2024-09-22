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

{
	// remove duplicate char in  string
	const set = new Set();
	const remove_duplicate = (str,index)=>{
		if(str.length == index){
		return Array.from(set).join('');
		}
		set.add(str[index])
		return remove_duplicate(str,index+1)

	}
	const str = 'abac'
	const index = 0
	const result = remove_duplicate(str,index);
	console.log('Remove duplicate : ',result)
}

{
	// print subsequencess
	const subsequences = (str,index,sub)=>{
		
		// base case
		if(str.length == index){
	     // print result
		 console.log(sub)
			return
		}
		const currentChar = str[index]
		// with currnet char
		subsequences(str,index+1,sub+currentChar)
		// without current char
		subsequences(str,index+1,sub)
	
	
	}
	const str = 'abc'
	const index = 0
	const sub = ''
	subsequences(str,index,sub)
}

{
	// keyboard map 
	const keyboard_map = {
		'1':['a','b','c'],
		'2':['d','e','f']
	}
	// print keyboard combination
	const keyboard_combination = (str,index,combination)=>{
		if(str.length == index){
			console.log(combination)
			return
		}
	const currentChar = str[index];

	const charList = keyboard_map[currentChar];

		for(let i=0;i<charList.length;i++){
			keyboard_combination(str,index+1,combination+charList[i])
		}
	

	}
	const str = '12'
	const index = 0
	const combination = ''
	keyboard_combination(str,index,combination)
}
