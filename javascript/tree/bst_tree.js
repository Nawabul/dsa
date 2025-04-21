class Node {
	data= null;
	left= null;
	right= null;

	constructor(data){
		this.data = data;
	}
}


class BST {
	root = null;


	buildTree(array){

		if(array.length == 0){
			return null;
		}
		
		for(let i=0; i<array.length; i++){
			this.addNode(array[i]);
		}
	}

	// print the tree in order
	printTree(node){
		if(node == null){
			return;
		}
		this.printTree(node.left);
		console.log(node.data);
		this.printTree(node.right);
	}


	// find rightmost node
	addNode(data){
		
		if(this.root == null){
			this.root = new Node(data);
			return ;
		}
		
		let current = this.root;
		let currentData = current.data;
		let newNode = new Node(data);
		
	
		while(current != null){
		if(currentData == data){
			return ;
		}
		else if(currentData > data ){
			if(current.left == null){
				current.left = newNode;
				return ;
			}else{
				current = current.left;
				currentData = current.data;
			}
		}else{
			if(current.right == null){
				current.right = newNode;
				return ;
			}else{
				current = current.right;
				currentData = current.data;
			}
		}
	}


	}
}


// Test the BST class
let bst = new BST();
let array = [10, 5, 15, 3, 7, 12, 18];
bst.buildTree(array);
console.log("In-order traversal of the BST:");
bst.printTree(bst.root);