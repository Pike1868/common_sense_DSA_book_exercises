//Linear search on an Ordered array

let orderedList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function linearSearch(arr, searchValue) {
  //iterate through every element in the array
  for (let i = 0; i < arr.length; i++) {
    //if we find the searchValue that we're looking for, we return it's index
    if (arr[i] === searchValue) return i;
    //if we reach an element that is greater than the searchValue,
    // we can exit the loop early
    else if (arr[i] > searchValue) break;
  }
  //we can return null if the searchValue is not found in the array
  return null;
}

console.log(linearSearch(orderedList, 2) === 1); //asserting that the index returned is 1

/**Binary Search example
 *
 **Note: binary search is only possible within an ordered array
 */

function binarySearch(arr, searchValue) {
  //First we establish the lower and upper bounds of where the value
  // we're searching for can be. To start the lower bound is the first value in the array,
  //while the upper bound is the last value:
  lowerBound = 0;
  upperBound = arr.length - 1;

  //we begin a loop in which we keep inspecting the middlemost value
  // between the upper and lower bounds
  while (lowerBound <= upperBound) {
    //we find the midpoint between the upper and lower bounds:
    //(can use Math.floor in js to round down to the nearest index and avoid decimals)
    let midpoint = upperBound + lowerBound / 2;
    //we inspect the value at midpoint:
    let valueAtMidpoint = arr[midpoint];
    //if it is equal to the search value, we're done searching
    if (valueAtMidpoint === searchValue) {
      return midpoint;
    } else if (searchValue < valueAtMidpoint) {
      //if searchValue is less we update the upperBound
      upperBound = midpoint - 1;
    } else {
      //otherwise searchValue is greater than the value at the midpoint
      // and we update the lowerBound instead
      lowerBound = midpoint + 1;
    }
  }

  //If we narrowed down the bounds until they have reached each other,
  //that means that searchValue is not in the array
  return null;
}

console.log(binarySearch(orderedList, 2) === 1); //asserting that the index returned is 1
console.log(binarySearch(orderedList, 20) === null); //asserting that null is returned if array does not contain searchValue
