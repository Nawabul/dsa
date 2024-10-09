

class Queue {
	size = 0;
	rear = -1;
	front  = -1;
	array = [];
	constructor(size = 0) {
		this.size = size;
	}

	isEmpty(){
		return this.rear == -1 && this.front == -1;
	}
	isFull(){
		return (this.rear + 1)%this.size == this.front;
	}
	push(data){
		// check if queue is full
		if(this.isFull()){
			
			this.front = (this.front+1)%this.size
		}
		if(this.front == -1){
			this.front = 0;
		}
		
		this.rear = (this.rear + 1)%this.size;
		this.array[this.rear] = data;


	}

	pop(){
		if(this.isEmpty()){
			console.log('Queue is empty');
			return ;
		}
		const top = this.array[this.front];

		if(this.rear == this.front){
			this.front = -1;
			this.rear = -1;
		}else{
			this.front = (this.front + 1)%this.size
		}		 
	
		return top;
	}

	peek(){
		if(this.isEmpty()){
			console.log("Que is empty")
			return ;
		}

		return this.array[this.front];
	}
}


const queue = new Queue(2);

queue.push(1);
queue.push(1);
queue.push(2);




console.log(queue.pop())
console.log(queue.pop())
