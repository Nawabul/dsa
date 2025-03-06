
class Node {

	data;
	left=null;
	right=null;

	constructor(data) {
		this.data = data;
	}
}

class Tree {

	constructor(array){
		const root = this.buildTree(array)
		console.log(root.data)
		// pre order traversal
		console.log("Pre Order Traversal")
		this.preOrderTraversal(root);

		// in order traversal
		console.log('in order traversal')
		this.inOrderTraversal(root);
	}

	index=-1

	buildTree(array){
		this.index++
		if(array.length <= this.index ||  array[this.index] == -1){
			return null
		}

		// create new node
		const newNode = new Node(array[this.index])

		newNode.left = this.buildTree(array);
		newNode.right = this.buildTree(array)
		return newNode;
	}

	preOrderTraversal(root){

		// base case root is null

		if(!root){
			return 
		}
		const data = root.data;
		if(data){

			console.log(data);
		}

		// travers in left 
		this.preOrderTraversal(root.left)

		// travers in right subtree
		this.preOrderTraversal(root.right);


	}


	// in order traversal

	inOrderTraversal(root){

		// base case 
		if(!root){
			return
		}

		const data = root.data
		const leftNode = root.left
		const rightNode = root.right
		
		if(leftNode){
			// print left subtree
			// print left node data if exist 
			// console.log(leftNode.data)
		}
		
		this.inOrderTraversal(leftNode)
		// print root node data
		console.log(data)
		this.inOrderTraversal(rightNode)

		if(rightNode){

			// traveras right sub tree
			// console.log(rightNode.data)	
		}
	}

}

const array = [1,2,4,-1,-1,7,3,-1,6,-1,-1]

const TreeInstance = new Tree(array)