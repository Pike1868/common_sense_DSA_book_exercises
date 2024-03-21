//bubble sort

let unsortedList = [4, 2, 7, 1, 3];

function bubbleSort(arr) {
  //worst case we need to iterate through the whole arr
  for (let i = arr.length; i > 0; i--) {
    // we can initialize noSwaps to true for each pass
    let noSwaps = true;
    //Now we iterate from the beginning up to the sorted section
    for (let j = 0; j < i - 1; j++) {
      //We then compare and swap elements if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        //update noSwaps if a swap occurred
        noSwaps = false;
      }
    }
    //If no swaps were made during a pass, then the array is sorted
    // and we can exit early
    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort(unsortedList)); // [1, 2, 3, 4, 7]
console.log(bubbleSort([65, 55, 45, 35, 25, 15, 10])); //[10,15,25,35,45,55,65]

/**Exercise #4:
 * The following function finds the greatest single number within an array
 * but has an efficiency of O(n^2). Rewrite the function so that it becomes a speedy O(n)
 *
 * def greatestNumber(array):
 *  for i in array:
 *      #assume for now that i is the greatest:
 *      isIValTheGreatest = True
 *  for j in array:
 *      #if we find another value that is greater than i,
 *      #i is not the greatest:
 *      if j > i:
 *          isIValTheGreatest = False
 *
 *   #If by the time we checked all the other numbers,
 *   #i is still the greatest, it means that i is the
 *   # greatest number:
 *   if isIValTheGreatest:
 *          return i
 *
 */

function greatestNumberInList(arr) {
  //base case check: if arr is empty return undefined immediately
  if (arr.length === 0) return undefined;
  //setting variable to contain the greatest number we have seen,
  //assuming it is the first number to start
  let greatest = arr[0];
  //now we can start our loop from the second element 
  for (let i = 1; i < arr.length; i++) {
    //Using the built in max formula, we can store the greatest value
    // to our greatest variable as we iterate through the array just once
    greatest = Math.max(arr[i], greatest);
  }
  return greatest;
}

console.log(greatestNumberInList([1, 20, 3, 4, 5, 6, 7, 8, 9]));
