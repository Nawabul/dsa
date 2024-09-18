// declare function

const tower_of_hanoi = (
	n,
	sourece,
	helper,
	distination
		)=>{


			// last disk move from source to distination
			if(n==1){
				console.log(`move  disk ${n} from ${sourece} to ${distination}`)
				return
			}

			// first move from source to helper
			tower_of_hanoi(n-1,sourece, distination, helper)
			// move nth disk from source to distination
			console.log(`move disk ${n} from ${sourece} to ${distination}`)

			// move n-1 disk helper to distination

			tower_of_hanoi(n-1,helper,sourece,distination);
}

const dist = 3;
const source = 'S';
const helper = 'H';
const destination = 'D';

// call tower of hanoi function
tower_of_hanoi(dist,source,helper,destination);