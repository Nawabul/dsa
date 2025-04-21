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

	// delete element from tree
	delete(root,data){
		// base case
		if(root == null){
			return root;
		}
		// find the node to be deleted

		// current data is matched
		if(data < root.data){
			// delete from left subtree
			root.left = this.delete(root.left,data);
		}else if (data > root.data){
			// delete from right subtree
			root.right = this.delete(root.right,data);
		}
		else{

			// case 1 : no child
			if(root.left == null && root.right == null){
				return null;
			}
			// case 2 : one child
			else if (root.left == null){
				return root.right;
			}
			else if ( root.right == null){
				return root.left;
			}
			// case 3 : two child
			else{
				let temp = this.minValueNode(root.right);
				root.data = temp.data;
				root.right = this.delete(root.right,temp.data);
			}
			
		}
		return root;
	}

	// find the minimum value in the tree
	minValueNode(root){
		let current = root;
		while(current.left != null){
			current = current.left;
		}
		return current;
	}

	// print in range 
	printInRange(root,low,hight){
	

		// base case
		if(root == null){
			return null;
		}
		const data = root.data;
		if(data >= low && data <= hight){
			this.printInRange(root.left,low,hight);
			console.log(data);
			this.printInRange(root.right,low,hight);
		}
		else if(data >= hight){
			this.printInRange(root.left,low,hight);
		}
		else{
			this.printInRange(root.right,low,hight);
		}
	}

	// print root to leaf path
	printRootToLeafPath(root, array){

		// base case
		if(root == null){
			return;
		}
		array.push(root.data);
		// if leaf node, print the path
		if(root.left == null && root.right == null){
			console.log("Root to leaf path: " + array.join("->"));
		}
		this.printRootToLeafPath(root.left,array);
		this.printRootToLeafPath(root.right,array);
	
		array.pop();
	}
}


// Test the BST class
let bst = new BST();
let array = [10, 5, 15, 3, 7, 12, 18];
bst.buildTree(array);
console.log("In-order traversal of the BST:");
// bst.printInOrderTree(bst.root);
// // delete one node
// bst.delete(bst.root, 7);
// console.log("In-order traversal after deleting 7:");
// bst.printInOrderTree(bst.root);
// console.log(bst.search(bst.root, 9)); // true
// print in range
// console.log("Print in range 7 to 15:");
// bst.printInRange(bst.root, 7, 15);
// // print root to leaf path
console.log("Print root to leaf path:");
let array1 = [];
bst.printRootToLeafPath(bst.root,array1);