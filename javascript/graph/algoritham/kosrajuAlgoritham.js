import Edge from "../utils/edge.js"





class KosarajuAlog {


	constructor(){

		this.kosaraju()
	}


	createGraphp(graph,v){

		for(let i = 0; i<=v; i++){

			graph[i] = []
		}	

		return graph
	}

	topSort(graph,cur,visited,stack){

		visited[cur] = true;

		const neighbors = graph[cur]
		for(const nei of neighbors ){

			const dest = nei.dest;
			if(!visited[dest]){
				this.topSort(graph,dest,visited,stack)
			}
		}

		// push last node in stack
		stack.push(cur)

	}

	initializeGraph(){
		const graph = [];
		  this.createGraphp(graph,4)

		  graph[0].push(new Edge(0,2))
		  graph[0].push(new Edge(0,3))
		  graph[1].push(new Edge(1,0))
		  graph[2].push(new Edge(2,1))
		  graph[3].push(new Edge(3,4))
		  return graph
	}


	transpose(graph){

		const length = graph.length;
		const visited = Array(length).fill(false)
		const transpose = []
			this.createGraphp(transpose,length)
		
		for(let i = 0; i<length; i++){
			
			const neighbors = graph[i]
			for(const nei of neighbors){
				const dest = nei.dest
				const src = nei.src
				transpose[dest].push(new Edge(dest,src))
			 }

		}
		return transpose
	}

	dfs(graph,cur,visited){

		visited[cur] = true
		console.log(cur)
		const neighbors = graph[cur]

		for(const nei of neighbors){

			const dest = nei.dest

			if(!visited[dest]){
				this.dfs(graph,dest,visited)
			}
		}
	}

    kosaraju(){

		const graph = this.initializeGraph()
		
		const length = graph.length-1

		// step 1: stack by topology sorting
		const stack = []
		let visited = Array(length).fill(false)
		
		for(let i =0;i<=length;i++){

			if(!visited[i]){
				this.topSort(graph,i,visited,stack)
			}
		}
		
		// step 2 : transpose graph direction
		const transposeGraph = this.transpose(graph)
		// console.log("Transpose Graph: ",transposeGraph)
		// step 3 : Print scc
		visited = Array(length).fill(false)
		while(stack.length>0){
			const cur = stack.pop();

			if(!visited[cur]){
				console.log("SCC: ")
				this.dfs(transposeGraph,cur,visited)
				console.log(" ")
			}

		}
	}
}

new KosarajuAlog();