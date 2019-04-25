export default class BubbleSort {
  sort(originalArray) {
    // Keep track of whether a swap took place or not 
    let swapped = false
    // Clone original array
    const array = [...originalArray] 

    // We'll need to make at least as many passes as there are elements in the array
    for (let i=1; i<array.length; i++) {
      // Each iteration swap whenever we come across two adjacent numbers in the wrong place
      for (let j=0; j<array.length; j++) {
        if (array[j] > array[j + 1]) {
          const tmp = array[j + 1]
          array[j+1] = array[j]
          array[j] = tmp

          swapped = true
        }
      }

      if (!swapped) {
        // It's sorted 
        return array
      }
    }

    return array
  }
}