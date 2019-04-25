export default class MergeSort {
  sort(originalArray) {
    if (originalArray.length <= 1) {
      return originalArray
    }

    // Keep dividing the array in half until they're single elements
    const middleIndex = Math.floor(originalArray.length / 2)
    const leftArray = originalArray.slice(0, middleIndex)
    const rightArray = originalArray.slice(middleIndex)

    // Recursively break down and sort the items and then merge them again  
    return this.merge(
      this.sort(leftArray),
      this.sort(rightArray)
    )
  }

  merge(leftArray, rightArray) {
    let sortedArray = []
    let leftIndex = 0
    let rightIndex = 0

    // Compare left and right values and push the lower value until there are no more values
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        sortedArray.push(leftArray[leftIndex])
        // Advance to the next value 
        leftIndex++
      } else {
        sortedArray.push(rightArray[rightIndex])
        rightIndex++
      }
    }
    
    // If one of the two arrays still have elements then just concatenate what's left 
    // because it's already sorted
    return sortedArray
            .concat(leftArray.slice(leftIndex))
            .concat(rightArray.slice(rightIndex))
  }
}