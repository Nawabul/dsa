

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


	constructor(){
		this.root = new Node();

		const word = ["i","like","sam","samsung","mobile"]

		for(let i = 0; i<word.length;i++){
			this.insert(word[i]);
		}

		// console.log(this.search("the")); // true
		// console.log(this.search("thei")); // true
		const wordBreakKey = "ilikesung";
		console.log(this.wordBreak(wordBreakKey)) // true
	}


	insert(word){
		let node = this.root;
		for(let i=0; i<word.length;i++){
			const index = word.charCodeAt(i) - 'a'.charCodeAt(0);

			if(node.children[index] == null){
				node.children[index] = new Node();
			}

			// at the end of word

			if(word.length -1 === i){
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
}




const trie = new Trie();