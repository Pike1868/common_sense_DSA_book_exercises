/**Optimizing for Optimistic Scenarios
 *
 */

function insertionSort(arr) {
  //First we start a loop beginning at index 1,
  // that runs through the entire array
  for (let i = 1; i < arr.length; i++) {
    //Within each pass through, we save the value we're "removing"
    //in a variable called temp_value
    let temp_value = arr[i];
    //Next we create a variable called position, which will start
    //immediately to the left of the index of temp_value
    //This will represent each value we compare against the temp_value
    let position = i - 1;
    //We then begin an inner while loop, which runs as long as position
    //is greater or equal to 0
    while (position >= 0) {
      //Now we compare whether the value at position is greater
      //than the temp_value
      if (arr[position] > temp_value) {
        //If it is, then we shift that left value to the right
        arr[position + 1] = arr[position];
        //Then we decrement position by 1 to compare the next left value
        // against the temp_value in the next round of the while loop
        position = position - 1;
      } else {
        //if at any point we encounter a value at position that is less
        //then or equal to the temp_value, we can get ready to end our
        //pass-through, since it is time to move the temp_value to the gap
        break;
      }
      //The final step of each pass through is moving the temp-value into the gap
      arr[position + 1] = temp_value;
    }
  }
  //Then we can return the sorted array
  return arr;
}

console.log(insertionSort([4, 7, 2, 1, 3]));
