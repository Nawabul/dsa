
const bubble_sort = (array, desc = false) => {
    // Get the length of the array
    const array_length = array.length;
    
    // Outer loop for multiple passes through the array
    for (let i = 0; i < array_length; i++) {
        // Inner loop for comparing and swapping adjacent elements
        for (let j = 0; j < array_length - 1-i; j++) {
            if (desc) {
                // For descending order, swap if current element is smaller
                if (array[j] < array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            } else {
                // For ascending order, swap if current element is greater
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }

    // Log the sorted array
    console.log(array);
};

// Example Usage
const array = [7, 8, 3, 2, 1];
bubble_sort(array, true); // Output: [8, 7, 3, 2, 1]
