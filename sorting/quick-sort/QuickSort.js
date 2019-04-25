export default class QuickSort {
  sort(array, inputLowIndex = 0, inputHighIndex = array.length - 1) {
    const partition = (lowIndex, highIndex) => {
      const swap = (idx1, idx2) => {
        const tmp = array[idx1]
        array[idx1] = array[idx2]
        array[idx2] = tmp
      }

      // Use the last value as the pivot
      const pivot = array[highIndex]

      // @TODO Go back and study why partitionIndex is critical 
      let partitionIndex = lowIndex
      for (let i = lowIndex; i < highIndex; i++) {
        // @TODO Why is it "<" and not ">" ? 
        if (array[i] < pivot) {
          swap(i, partitionIndex)
          partitionIndex++
        }
      }

      // The element at the partitionIndex is guaranteed to be greater than or equal to pivot.
      // All elements to the left of partitionIndex are guaranteed to be less than pivot.
      // Swapping the pivot with the partitionIndex therefore places the pivot in its
      // final sorted position
      swap(partitionIndex, highIndex)

      return partitionIndex
    }

    // Base case is when low and high converge
    if (inputLowIndex < inputHighIndex) {
      const partitionIndex = partition(inputLowIndex, inputHighIndex)

      // Values left of partition index
      this.sort(array, inputLowIndex, partitionIndex - 1)
      // Values right of partition index
      this.sort(array, partitionIndex + 1, inputHighIndex)
    }

    return array
  }
}