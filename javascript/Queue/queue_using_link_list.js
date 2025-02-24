
class Queue {
	 id;
	 student_name;
	 role_number;
	head = null
	 constructor(id,student_name,role_number){
		this.id = id
		this.student_name = student_name
		this.role_number = role_number
		
	 }

}


class QueueUsingLL {
	 front_head = null // store the head of queue list
	 rear_head  = null // store rear node head of the queue
	 size = 0;

	 constructor(){
		console.log('linked list queue is started')
	 }

	 // is queue is empty 
	 isEmpty(){
		return this.front_head == null
	 }

	 // push the data

	 push(id,student_name,role_number){

		// create queue instance 
		// is first element
		const queue = new Queue(id,student_name,role_number,null);
		
		this.size ++;
		if(this.isEmpty()){
			this.front_head = queue
			this.rear_head = queue;
			
			return 
			
		}

		// O(1)
		this.rear_head.head = queue // store last previous node head 
		this.rear_head = queue      // store last node in rear head


		// O(n)
		// const current_head = this.front_head // get last node head

		// while(current_head.head != null){
		// 	current_head = current_head.head
		// }

		// current_head.head = queue;
		
	 }

	 pull(){

		// time complexcity O(1)

		console.log('this is pull')
		if(this.isEmpty()){
			console.log("Queue is empty")
			return 
		}
		this.size--;

		const first = this.front_head
		this.front_head = this.front_head.head;
		
		console.log(`id : ${first.id}  name : ${first.student_name}  role number : ${first.role_number}` );


	 }

	 peek(){
		const first = this.front_head
		console.log("This is peek")
		
		console.log(`id : ${first.id}  name : ${first.student_name}  role number : ${first.role_number}` );

	 }


	 list(){
		console.log("This is list")
		if(this.isEmpty()){
			console.log("Queue is empty");
			return 
		}

		let head = this.front_head

		while(head !== null){

			const first = head;
			head = head.head;
			console.log(`\nid : ${first.id}  name : ${first.student_name}  role number : ${first.role_number}` );
		}
	 }

	 sortByRoll() {
		console.log("Queue sorting by roll number");
		if (this.isEmpty() || this.front_head.head === null) {
			console.log('Queue is empty or has only one node. No sorting needed.');
			return;
		}
	
		let swapped;
		do {
			swapped = false;
			let prev = null;
			let current = this.front_head;
	
			while (current !== null && current.head !== null) {
				if (current.role_number > current.head.role_number) {
					// Swap nodes
					let nextNode = current.head;
					current.head = nextNode.head;
					nextNode.head = current;
	
					if (prev === null) {
						// Swapping at the head of the list
						this.front_head = nextNode;
					} else {
						// Link previous node to the new front of this pair
						prev.head = nextNode;
					}
	
					// Mark swap as done
					swapped = true;
					prev = nextNode;
				} else {
					// No swap needed; move both pointers forward
					prev = current;
					current = current.head;
				}
			}
		} while (swapped);
	
		// Update rear_head after sorting
		let temp = this.front_head;
		while (temp.head !== null) {
			temp = temp.head;
		}
		this.rear_head = temp;
	
		console.log("Queue sorted by roll number successfully.");
	}
	



}

// create instance 

const queue = new QueueUsingLL();

// add first student

queue.push(1,"Nawabul",24)
queue.push(2,"Meraj",23)
// queue.push(3,"Faiz",22)
// queue.push(3,"Test",21)


queue.sortByRoll() // print first node 


// print list 
queue.list()