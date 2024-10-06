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

	reversPartial(head=this.head){
		// base case 

		if(head == null || head.next == null){
			return head
		}

		let prev = head
		let current = head.next

		while(current != null){
			// next node
			let next = current.next;
			// reverse link
			current.next = prev 
			prev = current
			current = next
		}
		head.next = null
		return prev
	}

	findMidlle(){
		// base case
		if(this.head == null || this.head.next == null){
				return this.head;
		}

		let turtal = this.head;
		let hare = this.head;
		

		while(hare.next != null && hare.next.next){

			turtal = turtal.next;
			hare = hare.next.next
			
		}
		return turtal;
	}

	isPalindrom(){
		// base case
		if(this.head == null || this.head.next == null){
			return true;
		
		}

		// find middle of the link
		let middle = this.findMidlle();
		// revers half link
		let firstHead = this.head;
		let secondHead = this.reversPartial(middle.next);

		// check palindrom 
		while(secondHead.next != null){

			if(firstHead.data != secondHead.data){
				return false
			}
			firstHead = firstHead.next;
			secondHead = secondHead.next;
		}
		return true;
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

list.addFirst('2')
// list.addFirst('2')
list.addFirst('1')
list.addLast('1')


// print list
list.printNode()


console.log(list.isPalindrom());