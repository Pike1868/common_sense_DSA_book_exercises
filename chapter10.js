//Recursively Recurse with Recursion

/**Recurse Instead of Loop
 * Let's say you work at NASA and need to program a countdown
 * function for launching a spacecraft. The particular function
 * that you're asked to write should accept a number -such as 10-
 * and display the numbers from 10 down to 0.
 */

function countDownToZero(number) {
  console.log(number);
  if (number > 0) countDownToZero(number - 1);
}

// countDownToZero(10);

/**Calculating factorials example:
 * The factorial function is  a calculation made based on recursion.
 * The calculation is ultimately made by factorial(1) passing its result
 * (which is 1) to factorial(2). Then factorial(2) multiplies this 1 by 2,
 * yielding 2, and passes this result to factorial(3). Finally, factorial(3)
 * takes this result, and multiplies it by 3, computing the result of 6.
 */

function factorial(number) {
  //base case: return 1 if the number input is 1
  if (number === 1) return 1;
  return number * factorial(number - 1);
}

// console.log(factorial(3)); //6

/**Exercise 4: Here is an array containing both numbers as well as other arrays,
 * which in turn contain numbers and arrays:
 *
 *let exampleList = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, [9, 10, 11, [12, 13, 14]]],
  [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
  33,
];
 *
 * Write a recursive function that prints all the numbers (and just numbers).
 */
let exampleList = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, [9, 10, 11, [12, 13, 14]]],
  [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
  33,
];

function printNumbersFromNestedArrays(array) {
  //we need to iterate through each element of the array.
  //if the element is a number we print
  //otherwise if it is an array we call the function on it to go through the nested array
  for (let element of array) {
    if (typeof element === "number") {
      console.log(element);
    } else {
      printNumbersFromNestedArrays(element);
    }
  }
}

printNumbersFromNestedArrays(exampleList);
