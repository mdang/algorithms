export default class InsertionSort {
  sort(originalArray) {
    const array = [...originalArray]

    // Go through each element 
    for (let i = 0; i < array.length; i++) {
      let currentIndex = i

      // Make sure we didn't reach the end
      // Have to check for "undefined" explicitly because negative numbers are falsy and will prematurely end the sort
      while (array[currentIndex - 1] !== undefined && 
        (array[currentIndex] < array[currentIndex - 1])) {
        // Keep swapping with each value that it's less than 
        const tmp = array[currentIndex - 1]
        array[currentIndex - 1] = array[currentIndex]
        array[currentIndex] = tmp

        // Shift the index to start from
        currentIndex--
      }
    }

    return array
  }
}