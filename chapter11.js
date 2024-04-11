//Learning To Write In Recursive

//1. Recursive Category: Repeatedly Execute

/** Recursive Trick: Passing extra parameters
 * Once we have the index as a function argument,
 * we now have a way of incrementing and tracking
 * the index as we make each successive recursive call.
 *
 * Since we typically would always want to start our index
 * at 0, we can use default parameters to allow us to simplify
 * the function call. This way, the first time we call the function,
 * we don't have to pass in the index parameter. However we still
 * get to use the index parameter for all successive calls.
 */

function doubleArray(arr, index = 0) {
  //base case: when the index goes past the end of the array
  if (index >= arr.length) return arr;

  arr[index] *= 2;
  return doubleArray(arr, index + 1);
}

// console.log(doubleArray([1, 2, 3, 4, 5]));

//2. Recursive Category: Calculations (performing a calculation based on a subproblem)

/**Two approaches to calculations
 * 1. We can try to build the solution from the "bottom up"
 * 2. We can attack the problem by going "top down" by making the calculation based on
 * the problem's subproblem
 *
 * *While we can use recursion to achieve bottom up approach, it doesn't add much value
 *  over using a classic loop
 *
 * **But to go TOP DOWN, we need recursion.
 *
 * Recursion shines when implementing a top-down approach because going top down offers
 * a new mental strategy for tackling a problem.
 *
 * Top Down Thought Process:
 * When tackling a top-down problem it helps to think about the following steps
 * 1. Imagine the function you are writing has already been implemented by someone else.
 * 2. Identify the subproblem of the problem.
 * 3. See what happens when you call the function on the subproblem and go from there.
 */

/**Exercise: ArraySum
 * Write a function that sums up all the numbers in a given array.
 *
 * example: arraySum([1,2,3,4,5]) => 15
 */

function arraySum(arr, index = 0, sum = 0) {
  if (index > arr.length - 1) return sum;

  sum += arr[index];
  return arraySum(arr, index + 1, sum);
}

// console.log(arraySum([1, 2, 3, 4, 5]));

/**Exercise: stringReversal
 * Write a function that reverses a string
 *
 * example: reverseString("abcde") => "edcba"
 */

function reverseString(str, index = str.length - 1, result = "") {
  if (index < 0) return result;

  result += str[index];
  return reverseString(str, index - 1, result);
}

// console.log(reverseString("abcde"));

/**Exercise: countX
 * Write a function called countX that returns the number of x's
 * in a given string.
 *
 * example: countX("axbxcxdx") => 3
 */

function countX(str, index = 0, count = 0) {
  if (index >= str.length - 1) return count;
  if (str[index] === "x") {
    count += 1;
  }
  return countX(str, index + 1, count);
}

// console.log(countX("axbxcxdx"));

/**Exercise: Staircase problem
 * Let's say we have a staircase of N steps, and a person has
 * the ability to climb one, two, or three steps at a time.
 * How many different possible "paths" can someone take to reach the top?
 *
 * Write a function that will calculate this for N steps.
 * (Read explanation on pages 175-176)
 * For N steps, the number of paths is
 * ( number_of_paths(n-1) + number_of_paths(n-2)+ number_of_paths(n-3) )
 */

function numberOfPaths(n) {
  if (n < 0) {
    return 0;
  } else if (n == 1 || n == 0) {
    return 1;
  }

  return numberOfPaths(n - 1) + numberOfPaths(n - 2) + numberOfPaths(n - 3);
}

// console.log(numberOfPaths(4));

/**Exercise: Anagram Generation
 * Write a function that returns an array of all anagrams
 * of a given string. An anagram is a reordering of all the
 * characters within a string.
 *
 * example: anagrams("abc") => ["abc", "acb", "bac", "bca", "cab","cba"]
 *
 * Now let's say that the subproblem of "abcd" is "abc". The question then is:
 * if we had a working anagrams function that returned all the anagrams of "abc",
 * how can we use them to produce all the anagrams of the "abcd"?
 */

function generateAnagrams(str) {
  // Base case: If the word is empty, return an array containing an empty string
  if (str === "") return [""];

  // Initialize an empty array to store anagrams
  const anagrams = [];

  // Iterate through each character of the string
  for (let i = 0; i < str.length; i++) {
    // Generate the remaining letters by excluding the current character
    const remainingLetters = str.substring(0, i) + str.substring(i + 1);
    // Recursively generate all anagrams for the remaining letters
    const subAnagrams = generateAnagrams(remainingLetters);

    // Iterate over each sub-anagram from the recursive call
    for (let j = 0; j < subAnagrams.length; j++) {
      // Prefix the current character to each sub-anagram and add to the anagrams list
      anagrams.push(str[i] + subAnagrams[j]);
    }
  }

  // Return the complete list of anagrams
  return anagrams;
}

// console.log(generateAnagrams("cat")); // [ 'cat', 'cta', 'act', 'atc', 'tca', 'tac' ]

/**Exercise 1:
 * Use recursion to write a function that accepts an array of strings
 * and returns the total number of characters across all strings.
 *
 * Example:
 * countTotalCharactersInList(["ab","c","def","ghij"]) => 10
 */

function countTotalCharactersInList(arr, index = 0, total = 0) {
  //base case: if arr is empty return 0
  if (index === arr.length) return total;

  total += arr[index].length;

  return countTotalCharactersInList(arr, index + 1, total);
}

// console.log(countTotalCharactersInList(["ab", "c", "def", "ghij"]));

/**Exercise 2:
 * Use recursion to write a function that accepts an array of numbers,
 * and returns a new array containing just the even numbers.
 *
 * Example:
 * findEvenNumsFromList([1,2,3,4,5,6,7]) => [2,4,6]
 */

function findEvenNumsFromList(arr, index = 0, evenNumbers = []) {
  //Initialize variable to store even numbers
  //base case: if the index is equal to the length then we can return the evenNumbers list
  if (index === arr.length) return evenNumbers;

  //use the index to check if the current number is an even number
  if (arr[index] % 2 === 0) {
    //if the number is even, add it to the evenNumber list
    evenNumbers.push(arr[index]);
  }

  //recursively check the number at the next index, including the original array, and our current list
  return findEvenNumsFromList(arr, index + 1, evenNumbers);
}

// console.log(findEvenNumsFromList([1, 2, 3, 4, 5, 6, 7]));

/**Exercise 3:
 * There is a numerical sequence known as "Triangular Numbers". The pattern begins as 1,3,6,10,15,21,
 * and continues onward with the Nth number in the pattern, which is N plus the previous number.
 *
 * Write a function that accepts a number for N and returns the correct number from the series.
 *
 * Example:
 *  triangle(7) => 28
 */

function triangle(n) {
  //base case: if n is 1 return 1
  if (n === 1) return 1;
  return n + triangle(n - 1);
}

// console.log(triangle(7));

/**Exercise 5: Unique Paths
 * Let's say you have a grid of rows and columns. Write a function that accepts a number of rows
 * and a number of columns, and calculates the number of possible "shortest" paths from the upper-leftmost
 * square to the lower-rightmost square.
 *
 * for example a grid with 3 rows and 7 columns
 * uniquePaths(3,7) => 12
 */

function uniquePaths(rows, columns) {
  // Base case: if either rows or columns is reduced to 1,
  // only one path exists (either all the way right or all the way down)
  if (rows === 1 || columns === 1) return 1;

  // Recursive case: The number of unique paths to the current cell is the sum of the number of unique paths
  // to the cell directly to the right (rows - 1, columns) and the cell directly below (rows, columns - 1).
  // This is because at each cell, you can choose to either go right or down,
  // and these choices at each step determine a unique path.
  return uniquePaths(rows - 1, columns) + uniquePaths(rows, columns - 1);
}

// console.log(uniquePaths(3, 7));
