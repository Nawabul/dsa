class node {
	data
    next=null;

	constructor(data){
		this.data = data
	}
}

// linked handling class

class linkedList {
	head=null;

	// data in first
	addFirst(data){
		const newNode = new node(data)
		if(this.head==null){
			// add first list in linked
			this.head = newNode;
			return 
		}
		// if head have a address
		newNode.next = this.head
		this.head = newNode
	}

	// add data in last

	addLast(data){
		let newNode = new node(data)
		// if head is null
		if(this.head ==null){
			// add first list in linked
			this.head = newNode
			return
		}
		// if head have a address
		let currentNode = this.head 
		// loop until last node
		while(currentNode.next !== null){
			
			
			currentNode = currentNode.next;
		
		}
		// add last node
		currentNode.next = newNode;
	}

	// delete first node
	deleteFirst(){
		// if head is null
		if(this.head == null){
			return
		}

		let firstNode = this.head
		// delete first node 
		this.head = firstNode.next;

	}
	// print all node in list
	printNode(){
		let currentNode = this.head
		let data = ''
		while(currentNode.next !== null){
			currentNode = currentNode.next;
			data += '->'+currentNode.data
		}
		console.log(data)		
	}
}

let list = new linkedList();
// add first data
list.addFirst('Test');
list.addFirst('is');
list.addFirst('This');
list.addLast('a');
list.addLast('list');


list.addLast('last');

// print list
list.printNode()