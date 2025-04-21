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
		let parent = null;
		while(current !=null){
			parent = current;
			if(data < current.data){
				current = current.left;
			}else{
				current = current.right;
			}
		}
		let newNode = new Node(data);
		if(data < parent.data){
			parent.left = newNode;
		}
		else{
			parent.right = newNode;
		}


	}
}


// Test the BST class
let bst = new BST();
let array = [10, 5, 15, 3, 7, 12, 18];
bst.buildTree(array);
console.log("In-order traversal of the BST:");
bst.printTree(bst.root);