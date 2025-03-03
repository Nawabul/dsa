class mergeSort {
	/**
	 * Constructor that initializes the merge sort algorithm.
	 * @param {Array} array - The array to be sorted.
	 */
	constructor(array) {
	  const length = array.length ?? 0; // Get the length of the array, ensuring it's not undefined.
	  this.divide(array, 0, length - 1); // Start the divide process (recursive sorting).
  
	  console.log("Sorted array:");
	  console.log(array);
	}
  
	/**
	 * Recursively divides the array into smaller subarrays until each subarray has only one element.
	 * @param {Array} array - The array to be sorted.
	 * @param {number} si - The starting index of the subarray.
	 * @param {number} ei - The ending index of the subarray.
	 */
	divide(array, si, ei) {
	  // Base condition: If starting index crosses or equals ending index, return (single element is already sorted).
	  if (si >= ei) {
		return;
	  }
  
	  // Calculate the middle index to divide the array.
	  const mid = si + Math.floor((ei - si) / 2);
  
	  // Recursively sort the first half of the array.
	  this.divide(array, si, mid);
	  // Recursively sort the second half of the array.
	  this.divide(array, mid + 1, ei);
  
	  // Merge the sorted halves.
	  this.conquer(array, si, mid, ei);

	  
	}
  
	/**
	 * Merges two sorted subarrays back into the original array.
	 * @param {Array} array - The array being sorted.
	 * @param {number} si - The starting index of the first subarray.
	 * @param {number} mid - The midpoint separating the two subarrays.
	 * @param {number} ei - The ending index of the second subarray.
	 */
	conquer(array, si, mid, ei) {
	  let firstIndex = si; // Pointer for the first subarray.
	  let secondIndex = mid + 1; // Pointer for the second subarray.
	  let mergeArray = []; // Temporary array to store sorted elements.
	  let mergeIndex = 0; // Index for inserting elements into mergeArray.
  
	  // Merge elements from both subarrays in sorted order.
	  while (firstIndex <= mid && secondIndex <= ei) {
		// Compare elements from both subarrays and insert the smaller one into mergeArray.
		if (array[firstIndex] <= array[secondIndex]) {
		  mergeArray[mergeIndex] = array[firstIndex];
		  firstIndex++; // Move first subarray pointer forward.
		} else {
		  mergeArray[mergeIndex] = array[secondIndex];
		  secondIndex++; // Move second subarray pointer forward.
		}
		mergeIndex++; // Move mergeArray pointer forward.
	  }
  
	  // Copy any remaining elements from the first subarray (if any).
	  while (firstIndex <= mid) {
		mergeArray[mergeIndex] = array[firstIndex];
		firstIndex++;
		mergeIndex++;
	  }
  
	  // Copy any remaining elements from the second subarray (if any).
	  while (secondIndex <= ei) {
		mergeArray[mergeIndex] = array[secondIndex];
		secondIndex++;
		mergeIndex++;
	  }
  
	  // Copy sorted elements from mergeArray back into the original array.
	  for (let i = 0, j = si; i <= mergeIndex - 1; i++, j++) {
		array[j] = mergeArray[i];
	  }
	}
  }
  
  // Example usage:
  const array = [2, 5, 1, 9, 8];
  new mergeSort(array); // Sorts the array using merge sort.
  