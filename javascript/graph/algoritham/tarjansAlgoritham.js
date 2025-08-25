import Edge from "../utils/edge.js"




class Tranjans {


	constructor(){

		this.tarjansAlgo()
	}


	createGraph(graph,v){

		for(let i=0; i<=v;i++){
			graph[i] = []
		}

		return graph
		}

	initializeGraph(){

		const graph = []
		this.createGraph(graph,5)

		graph[0].push(new Edge(0,1))
		graph[0].push(new Edge(0,2))
		graph[0].push(new Edge(0,3))

		graph[1].push(new Edge(1,0))
		graph[1].push(new Edge(1,2))
		
		graph[2].push(new Edge(2,0))
		graph[2].push(new Edge(2,1))
		graph[2].push(new Edge(2,3))
		
		graph[3].push(new Edge(3,0))
		graph[3].push(new Edge(3,2))
		graph[3].push(new Edge(3,4))
		graph[3].push(new Edge(3,5))
		
		graph[4].push(new Edge(4,3))
		graph[4].push(new Edge(4,5))

		graph[5].push(new Edge(5,3))
		graph[5].push(new Edge(5,4))

		return graph
	}

	dfs(
		graph,
		cur,
		par,
		time,
		visited,
		dt,
		low
	){

		visited[cur] = true
		dt[cur] = low[cur] = ++time;
		const neighbors = graph[cur]
		console.log("Time : ",time," : For : ",cur)
		for(const nei of neighbors){

			const dest = nei.dest

			if(dest == par){
				continue;
			}

			if(!visited[dest]){
				this.dfs(graph,dest,cur,time,visited,dt,low)
				low[cur] = Math.min(low[cur],low[dest])

				if(dt[cur]<low[dest]){
					console.log("Bridge is : ",cur,"-----",dest)
				}
			}else{
				low[cur]= Math.min(low[cur],dt[dest])
			}

		}

	}

	// tranjans algo

	tarjansAlgo(){

		const graph = this.initializeGraph();
		const v = graph.length
		const visited = Array(v).fill(false)
		let time = 0;
		const dt = []
		const low = []

		for(let i = 0; i<v;i++){

			if(!visited[i]){
				this.dfs(graph,i,-1,time,visited,dt,low)
			}
		}
	}


}


new Tranjans();