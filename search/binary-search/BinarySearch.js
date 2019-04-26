export default function binarySearch(sortedArray, item, start = 0, end = sortedArray.length - 1) {
  // Base condition
  if (start > end) {
    return -1
  }
  
  // Determine the middle index
  const midpoint = Math.floor((start + end) / 2)

  // Is this the value we're searching for? 
  if (sortedArray[midpoint] === item) {
    return midpoint
  }

  // Is the value we're searching for greater than the midpoint? 
  // Don't forget to include the start otherwise it's not 
  // taking into account the part of the array we're currently working on
  return (sortedArray[midpoint] > item) ? 
    binarySearch(sortedArray, item, start, midpoint - 1) : 
    binarySearch(sortedArray, item, midpoint + 1, end)
}