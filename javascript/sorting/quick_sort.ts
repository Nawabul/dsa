class quickSort {
	/**
	 * Constructor that initializes the quick sort algorithm.
	 * @param {Array} array - The array to be sorted.
	 */
	constructor(array) {
	  const length = array.length; // Get the length of the array.
	  this.sort(array, 0, length - 1); // Start sorting the array.
  
	 
	}
  
	/**
	 * Recursive Quick Sort function that sorts the array in place.
	 * @param {Array} array - The array to be sorted.
	 * @param {number} low - The starting index of the subarray.
	 * @param {number} high - The ending index of the subarray.
	 */
	sort(array, low, high) {
	  // Base case: If the subarray has one or no elements, return.
	  if (low >= high) {
		return;
	  }
  
	  // Partition the array and get the pivot index.
	  const i = this.partition(array, low, high);
  
	  // Move pivot to its correct position.
	  this.swap(array, i + 1, high);
  
	  // Recursively sort the left half (before pivot).
	  this.sort(array, low, i - 1);
  
	  // Recursively sort the right half (after pivot).
	  this.sort(array, i + 1, high);
	}
  
	/**
	 * Partitions the array and rearranges elements around the pivot.
	 * @param {Array} array - The array to be partitioned.
	 * @param {number} low - The starting index.
	 * @param {number} high - The ending index.
	 * @returns {number} The index where the pivot should be placed.
	 */
	partition(array, low, high) {
	  let i = low - 1; // Tracks position for smaller elements.
	  const pivot = array[high]; // Select the last element as the pivot.
  
	  for (let j = low; j < high; j++) {
		// If current element is smaller or equal to the pivot, swap it.
		if (array[j] <= pivot) {
		  i++; // Move smaller element index forward.
		  this.swap(array, i, j);
		}
	  }
  
	  return i; // Return the final position of the smaller elements.
	}
  
	/**
	 * Swaps two elements in the array.
	 * @param {Array} array - The array in which to swap elements.
	 * @param {number} i - First index.
	 * @param {number} j - Second index.
	 */
	swap(array, i, j) {
	  const temp = array[i];
	  array[i] = array[j];
	  array[j] = temp;
	}
  }
  
  // Example usage:
  const array = [1, 8, 9, 3, 4];
  
  new quickSort(array); // Sorts the array using Quick Sort.
  
  console.log("Quick Sort:");
	 
console.log(array); // Output: [1, 3, 4, 8,9]