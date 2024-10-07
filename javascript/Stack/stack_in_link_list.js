// node class

class Node {
	data;
	next;

	constructor(data){
		this.data = data;
	}
}

class Stack {
	size=0;
	head = null
	isEmpty(){
		return this.head==null;
	}

	push(data){

		const newNode = new Node(data);
		// check if no node in list
		if(this.isEmpty()){
			this.head = newNode;
			return 
		}
		newNode.next = this.head
		this.head = newNode;

	}

	pop(){
		if(this.isEmpty()){
			return null;
		}

		const top = this.head.data;
		this.head = this.head.next;
		return top;
	}

	peek(){

		if(this.isEmpty()){
			return null;
		}

		return this.head.data
	}

	// push at bottom 
	push_at_bottom(data){

		if (this.isEmpty()) {
		
			this.push(data)
			return 
		}

		const top = this.pop();
		this.push_at_bottom(data);
		this.push(top);
	}
	// reverse the stack
	revers(){
		if(this.isEmpty()){
			return null;
		}

		const top = this.pop();
		this.revers();
		this.push_at_bottom(top);
	}

}


const s = new Stack();

s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push_at_bottom(5);
s.revers()

while (s.peek() != null){
	console.log(s.pop());
}