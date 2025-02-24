
class Queue {
	 id;
	 student_name;
	 role_number;
	head = null
	 constructor(id,student_name,role_number,head){
		this.id = id
		this.student_name = student_name
		this.role_number = role_number
		this.head = head
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
			
			return 
			
		}

		const current_head = this.front_head // get last node head

		while(current_head.head != null){
			current_head = current_head.head
		}

		current_head.head = queue;
		
	 }

	 pull(){

		console.log('this is pull')
		if(this.isEmpty()){
			console.log("Queue is empty")
			return 
		}

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

}

// create instance 

const queue = new QueueUsingLL();

// add first student

queue.push(1,"Nawabul",22)
queue.push(2,"Meraj",23)

queue.pull() // print first node 

// print list 
queue.list()