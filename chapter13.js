/**Recursive Algorithms for Speed
 *
 * Quicksort- an extremely fast sorting algorithm that is particularly
 * efficient for average scenarios. While in worst case scenarios (inversely sorted arrays)
 * it performs similarly to to insertion sort and selection sort, it is much faster for
 * average scenarios - which are what occurs most of the time.
 *
 * Quicksort relies on a concept called partitioning.
 *
 * Partitioning
 * To partition an array is to take a random value from the array - which is then called the pivot-
 * and make sure that every number tat is less than the pivot ends up to the left of the pivot, and
 * that every number greater than the pivot ends up to the right of the pivot.
 *
 *
 * The quicksort algorithm is a combination of partitions and recursion. It works as follows:
 * 1. Partition the array. The pivot is now in its proper place.
 *
 * 2. Treat the subarrays to the left and right of the pivot as their own arrays, and recursively repeat steps 1 and 2.
 * That means we'll partition each sub array and end up with even smaller sub arrays to the left and right of each sub arrays pivot.
 * We then partition those sub arrays and so on and so forth.
 *
 * 3. We then have a sub array that has zero or one elements that is our base case and we do nothing.
 *
 *
 * Quickselect explained.
 * 1. Choose a Pivot: Similar to quicksort, select a pivot element from the array. The choice of pivot can be random or the last element
 * of the array, as in typical quicksort implementations.
 *
 * 2. Partitioning: Partition the array such that elements less than the pivot are on the left, the pivot is in its final position,
 * and elements greater than the pivot are on the right. This step is identical to the partitioning step in quicksort.
 *
 * 3. Determine the Next Step: After partitioning, check the position of the pivot (let's call it pivotIndex). If pivotIndex is
 * equal to k-1 (where k is the position of the k-th smallest element we are searching for, and -1 because array indices start at 0),
 * then the pivot is the k-th smallest element, and we have found our answer.
 * If pivotIndex is greater than k-1, the k-th smallest element lies to the left of the pivot. Therefore, recursively apply quickselect
 * to the left subarray.
 * If pivotIndex is less than k-1, the k-th smallest element lies to the right of the pivot. Recursively apply quickselect to the right subarray.
 *
 * 4. Recursion: Unlike quicksort, quickselect does not need to recursively process both subarrays. It only recurses into the subarray that
 * contains the k-th smallest element based on the comparison with pivotIndex. This selective recursion reduces the average time complexity significantly.
 */
class SortableArray {
  constructor(array) {
    // Initialize with an array to be sorted
    this.array = array;
  }

  partition(left, right) {
    // Pivot selection: the rightmost element is chosen for simplicity
    let pivotIndex = right;
    let pivot = this.array[pivotIndex];

    // Start with the right pointer just left of the pivot to avoid including the pivot in the initial comparisons
    right -= 1;

    while (true) {
      // Move the left pointer right past any elements that are less than the pivot
      while (this.array[left] < pivot) {
        left += 1;
      }
      // Move the right pointer left past any elements that are greater than the pivot
      while (this.array[right] > pivot) {
        right -= 1;
      }

      if (left >= right) {
        // If pointers meet or cross, all necessary swaps have been done
        break;
      } else {
        // Swap elements at left and right pointers to partition the array
        let temp = this.array[left];
        this.array[left] = this.array[right];
        this.array[right] = temp;

        // Move the left pointer to continue partitioning
        left += 1;
      }
    }

    // Finalize the partition by swapping the pivot with the element at the left pointer
    let temp = this.array[left];
    this.array[left] = this.array[pivotIndex];
    this.array[pivotIndex] = temp;

    // Return the final pivot position for further recursive sorting
    return left;
  }

  quickSort(left, right) {
    // Base case: A subarray of zero or one element is already sorted, so we can return
    if (right - left <= 0) return;

    // Partition the array and get the pivot's final position
    let pivotIndex = this.partition(left, right);

    // Recursively sort elements left of the pivot
    this.quickSort(left, pivotIndex - 1);
    // Recursively sort elements right of the pivot
    this.quickSort(pivotIndex + 1, right);
  }

  quickSelect(left, right, k) {
    // If the part of the array contains only one element,return that element
    if (left === right) {
      return this.array[left];
    }

    // Partition the array and get pivot index
    let pivotIndex = this.partition(left, right);

    // If pivot index is the k-th element, return it
    if (k === pivotIndex) {
      return this.array[k];
      // If k-th element is on the left side, recurse the left
    } else if (k < pivotIndex) {
      return this.quickSelect(left, pivotIndex - 1, k);
    } else {
      // If k-th element is on the right side,recurse on the right
      return this.quickSelect(pivotIndex + 1, right, k);
    }
  }
}

let exampleArr = [0, 5, 2, 1, 6, 3];
let sortable = new SortableArray(exampleArr);

// To see the array sorted, then we can call quickSort
sortable.quickSort(0, sortable.array.length - 1);
console.log("Sorted Array:", sortable.array);

// To find the second smallest value, we can directly use quickSelect without sorting
let secondSmallest = sortable.quickSelect(0, exampleArr.length - 1, 1);
console.log("Second Smallest Element:", secondSmallest);





