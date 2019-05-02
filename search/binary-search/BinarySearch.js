export default function binarySearch(sortedArray, item, start = 0, end = sortedArray.length - 1) {
  // Base condition
  if (start > end) {
    return -1
  }
  
  // Determine the middle index
  // "(start + end) / 2" works but doesn't take into account edge cases where 
  // start and end integers are too large and can't be stored in a 32 bit system and cause 
  // errors in program execution 
  // "start + (end - start)/2"" will be safe for those integer values 
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