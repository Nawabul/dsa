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
		let root = this.root;
		
		for(let i=0; i<array.length; i++){
			root = this.insert(root,array[i]);
		}
		this.root = root;
	}

	// print the tree in order
	printInOrderTree(node){
		if(node == null){
			return;
		}
		this.printInOrderTree(node.left);
		console.log(node.data);
		this.printInOrderTree(node.right);
	}


	// find rightmost node
	insert(root,data){
		
		if(root == null){
			 return  new Node(data);
			
		}


		if(data < root.data){
			root.left = this.insert(root.left,data);

		}else{
			root.right = this.insert(root.right,data);
		}
		return root;

	}

	// find element exist in tree
	search(root,data){
		if(root == null){
			return false;

		}
		if(root.data == data){
			return true;
		}
		else if (data < root.data){
			return this.search(root.left,data);
		}else{
			return this.search(root.right,data);
		}
	}
}


// Test the BST class
let bst = new BST();
let array = [10, 5, 15, 3, 7, 12, 18];
bst.buildTree(array);
console.log("In-order traversal of the BST:");
// bst.printInOrderTree(bst.root);
console.log(bst.search(bst.root, 9)); // true