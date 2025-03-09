// import { QueueUsingLL } from "../Queue/queue_using_link_list";
const QueueUsingLL = require('../Queue/queue_using_link_list')
class Node {

	data;
	left=null;
	right=null;

	constructor(data) {
		this.data = data;
	}
}

class Tree {

	diameterObject = {}

	constructor(array){
		const root = this.buildTree(array)
		// console.log(root.data)
		// // pre order traversal
		// console.log("Pre Order Traversal")
		// this.preOrderTraversal(root);

		// // in order traversal
		// console.log('in order traversal')
		// this.inOrderTraversal(root);

		// // post order traversal 
		// console.log("Post Order traversal")
		// this.postOrderTraversal(root)

		// get tree level
		// console.log('tree level')
		// this.treeLevel(root)

		// // count
		// console.log('count')
		// console.log(this.count(root,0))

		// sum
		// const sum = this.sum(root);
		// console.log('sum : ',sum)
		// // sum
		// const hight = this.hight(root);
		// console.log('Hight : ',hight)

		// diameter calculate
	//    const diameter =	this.diameter(root);
	// 	console.log("Calculate diamter : ",diameter)
	   const diameter =	this.diameterByObject(root);
		console.log("Calculate diameter by object : ",diameter.dm)
		;
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
		
		
		this.inOrderTraversal(leftNode)
		// print root node data
		console.log(data)
		this.inOrderTraversal(rightNode)

	
	}

	// post order traversal 
	postOrderTraversal(root){

		// base casd 
		if(!root){
			return 
		}

		const data = root.data
		const leftNode = root.left
		const rightNode = root.right

		this.postOrderTraversal(leftNode)
		this.postOrderTraversal(rightNode)
		console.log(data)

	}

	// get tree level

	treeLevel(root){

		if(!root){
			return 
		}

		// create queue 
		const queue =  new QueueUsingLL()

	
		let level = 0;
		queue.push(root)
		// push nulll
		queue.push(null);

		while(!queue.isEmpty()){

			let currentNode = queue.pull();

			if(currentNode === null){
				// level up
				level++;
				console.log("level :",level)
				if(queue.isEmpty()){
					break
				}else{
					queue.push(null)
				}
			}else{
				
				console.log( currentNode.data)
				// push children
				if(currentNode.left != null){

					queue.push(currentNode.left)
				}
				if(currentNode.right != null){

					queue.push(currentNode.right)
				}
			
			}


		}

		console.log('level ',level)



	}

	count(root){
		if(root === null){
			return 0;
		}
		

		const left = this.count(root.left,i)
		const right = this.count(root.right,i)
		return left + right + 1;
	}

	sum(root){

		if(!root){
			return 0;
		}


		const currentNumber = root.data;
		const leftNumber = this.sum(root.left)
		const rightNumber = this.sum(root.right)
		
		return currentNumber + leftNumber + rightNumber
	}

	hight(root){

		if(!root){
			return 0;
		}

		const leftHight = this.hight(root.left)
		const rightHight = this.hight(root.right)

		const maxHight = Math.max(leftHight,rightHight) + 1;
		return maxHight
	
	
	}

	diameter(root){

		if(!root){
			return 0;
		}

		// calculate left diameter
		const leftDiameter = this.diameter(root.left)
		// calculate right diameter
		const rightDiameter = this.diameter(root.right)

		const diameter = this.hight(root.left) + this.hight(root.right) + 1;

		return Math.max(leftDiameter,rightDiameter,diameter);
		
	}

	diameterByObject(root){

		if(!root){
			return {
				ht : 0,
				dm : 0
			}
		}

		const left = this.diameterByObject(root.left);
		const right = this.diameterByObject(root.right);

		const myHight = Math.max(left.ht,right.ht) + 1;

		const diam1 = left.dm;
		const diam2 = right.dm;
		const diam3 = left.ht + right.ht+ 1

		const maxDiam = Math.max(diam1,diam2,diam3)

		return {
			ht:myHight,
			dm:maxDiam
		}




	}

}

const array = [1,2,4,-1,-1,7,3,-1,6,-1,-1]

const TreeInstance = new Tree(array)