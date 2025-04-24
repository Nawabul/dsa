

//node class that store the character and the children of the node
class Node {
	children =[];
	eow = false; // end of word


	constructor(){
		for(let i=0; i<26; i++){
			this.children[i] = null;
		}
		
	}

}


class Trie {
	root;

	ans=""; // for longest string


	constructor(){
		this.root = new Node();

		// const word = ["i","like","sam","samsung","mobile"]

		// for(let i = 0; i<word.length;i++){
		// 	this.insert(word[i]);
		// }

		// console.log(this .search("the")); // true
		// console.log(this.search("thei")); // true
		// const wordBreakKey = "ilikesung";
		// console.log(this.wordBreak(wordBreakKey)) // true

		// const startWith = "asams";
		// console.log(this.startWith(startWith)); // true

		// count unique substring 
		// console.log(this.uniqueSubstring()); 
		const word = ["apple","appl","app","ap","a","apply","bannana"];
		for(let i = 0; i<word.length;i++){
			
			this.insert(word[i]);
		}
		console.log(this.longestString(this.root,"")); // 28
	}


	insert(word){
		let node = this.root;
		for(let i=0; i<word.length;i++){
			const index = word.charCodeAt(i) - 'a'.charCodeAt(0);

			if(node.children[index] == null){
				node.children[index] = new Node();
			}

			// at the end of word

			if((word.length -1) == i){
				node.children[index].eow = true;
			}
			node = node.children[index];
		}
	}


	search(word){
		let node = this.root;
		const wordLength = word.length;
		if(wordLength === 0){
			return true;
		}

		for(let i = 0; i<wordLength;i++){
			const index = word.charCodeAt(i) - 'a'.charCodeAt(0);
			if(node.children[index] == null){
				return false;
			}
			node = node.children[index];
			if(wordLength -1 === i && node.eow === false){
				return false;
			}

		}
		return true;
	}


	wordBreak(key){

		// base case
		if(key.length == 0){
			return true;
		}

		for(let i = 1; i<=key.length; i++){
			const first = key.substring(0,i);
			const second = key.substring(i);

			if(this.search(first) && this.wordBreak(second)){
				return true;
			}
		}
		return false;
	}


	startWith(key){

		// base case 
		if(key.length == 0){
			return true;
		}
		let node = this.root;
		for(let i = 0;i<key.length;i++){
			const index  = key.charCodeAt(i) - 'a'.charCodeAt(0);
			if(node.children[index] == null){
				return false;
			}
			node = node.children[index];
		}
		return true;
	}


	countNode(node){

		if(node == null){
			return 0;
		}
		let count = 0;
		for(let i = 0; i<26;i++){
			if(node.children[i] != null){
				count += this.countNode(node.children[i]);
				
			}
		}
		count += 1; // count the current node
		return count;

	}

	uniqueSubstring(){

		let node = this.root;
		const word = "apple";
		let count = 0;

		// step 1 : insert all suffix of the word in the trie
		for(let i = 0; i<word.length;i++){
		
			this.insert(word.substring(i));
		}

		count = this.countNode(node);
	

		return count;
	}

	longestString(node,tepm){

		// base case
		if(node == null){
			return ""
		};

		

		for(let i =0;i<26;i++){
			const char = String.fromCharCode(i + 'a'.charCodeAt(0));
			
			// append the character to the temp string
			tepm += char;
			
			if(node.children[i] != null && node.children[i].eow ==true){
				// check if the current string is greater than the ans string
				if(tepm.length > this.ans.length){
					this.ans = tepm;
					
				}
				// call the function recursively for the next character
				this.longestString(node.children[i],tepm);

				// remove the last character from the temp string
			}
			tepm = tepm.substring(0,tepm.length-1);
		}

		return this.ans;

	}
}




const trie = new Trie();