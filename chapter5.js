/**Optimizing Code with and without Big O
 *
 * Selection Sort
 */

function selectionSort(arr) {
    //Begin a loop that represents each pass through.
    //Using variable i to point to each value of the array
    //iterate up to the second-to-last value
  for (let i = 0; i < arr.length - 1; i++) {
    //Track the index of the lowest value we come across, starting with 0
    let lowestNumberIndex = i;
    //Within each pass through we check remaining values of the array to see
    //if there is a lower value than the current lowest value
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
    //If the lowest value from this pass-through is already in its correct place,
    //we don't need to do anything. But if the lowest value is not in its correct
    //place, we need to perform a swap. We swap the lowe3st value with the value at i
    if (lowestNumberIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[lowestNumberIndex];
      arr[lowestNumberIndex] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([4, 2, 7, 1, 3])); //[ 1, 2, 3, 4,7 ]
