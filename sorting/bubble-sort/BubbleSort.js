export default class BubbleSort {
  sort(originalArray) {
    // Keep track of whether a swap took place or not 
    let swapped = false
    // Work with a clone of the original array
    const array = [...originalArray] 

    // Worst case, we'll need to make as many passes as there are elements in the array before it's sorted
    for (let i = 1; i < array.length; i++) {
      // Each iteration, do a swap whenever we come across two adjacent values in the wrong place
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          const tmp = array[j + 1]
          array[j + 1] = array[j]
          array[j] = tmp

          swapped = true
        }
      }

      if (!swapped) {
        // It's already sorted 
        return array
      }
    }

    return array
  }
}