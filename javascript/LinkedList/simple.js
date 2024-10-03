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
	size = 0;
	// data in first
	addFirst(data){
		const newNode = new node(data)
		this.size++
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
		this.size++
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
			this.size=0
			return
		}
		
		this.size--
		let firstNode = this.head
		// delete first node 
		this.head = firstNode.next;

	}

	// delete last node

	deleteLast(){
		// if no node or only one node
		if(this.head == null || this.head.next == null ){
			this.head = null;
			this.size =0
			return;
		}

		this.size--

		let scondLast = this.head
		let lastNode = this.head.next;

		while(lastNode.next != null){
			
			scondLast = scondLast.next
			lastNode = lastNode.next
		
		}

		scondLast.next = null
	}

	delete(k=0){
		// if no node or only one node
		if(this.head == null || this.head.next == null){
			this.head = null
			return 
		}

		let secondNth = this.head;
		let currnetNode = this.head.next;

		// if k is greater than size
		if(k>=this.size){
			return 
		}

		if (k==0) {
			this.head = currnetNode
			return 
		}

		let i = 1;

		while(i<k && currnetNode != null){
			secondNth = currnetNode
			currnetNode = currnetNode.next;
			i++
		}

		
		secondNth.next = currnetNode.next
		
		this.size--
	}

	// delete last nth
	deleteLastNth(k=0){
		let nth = this.size - k;

		if (nth>0) {
			this.delete(nth)
		}
	}
	// get the size
	getSize(){
		console.log(this.size);
	}
	// reverse the list

	reverserList(){

		if(this.head == null || this.head.next == null){
			return
		}

		let prevNode = this.head;
		let currentNode = this.head.next;

		while(currentNode != null){
			let nextNode = currentNode.next;

			currentNode.next = prevNode;
		
			// update
			prevNode = currentNode
			currentNode = nextNode
		}
		this.head.next = null
		this.head = prevNode

	}

	reverseByrecursion(head){
		if(head == null || head.next ==null){
			return head
		}

		let newNode = this.reverseByrecursion(head.next);
		//update
		head.next.next = head
		head.next = null
		return newNode;

		
	}
	// print all node in list
	printNode(){

		if(this.head == null){
			console.log('list is empty')
			return 
		}
		let currentNode = this.head
		let data = ''
		while(currentNode !== null){
			data += '->'+currentNode.data
			currentNode = currentNode.next;
		}
		console.log(data)		
	}
}

let list = new linkedList();
// add first data

list.addFirst('a')
list.addFirst('is')
list.addFirst('This')
list.addLast('list')


// print list
list.printNode()

// list.head = list.reverseByrecursion(list.head)
// delete 2 node
list.deleteLastNth(1);
// reverse list
list.printNode();