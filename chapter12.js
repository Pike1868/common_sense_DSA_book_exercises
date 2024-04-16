//Dynamic Programming

/**Example:
 * Recursive function that returns the max number from an array
 */

function max(arr) {
  // console.log("RECURSION")
  //base case: if the array only contains one number,
  //then that number would be the max, return it
  if (arr.length === 1) return arr[0];

  //calculate the max of the reminder of the array
  //store it in a variable
  let maxOfRemainder = max(arr.slice(1));

  if (arr[0] > maxOfRemainder) {
    return arr[0];
  } else {
    return maxOfRemainder;
  }

  //Could also just be written with one line of code
  //return Math.max(...arr);
}

// console.log(max([1, 2, 3, 4, 5]));

/**The fibonacci sequence is a mathematical sequence of numbers where
 * each subsequent number is the sum of the previous two numbers of the sequence.
 *
 * Below is an example using recursion to calculate the fibonacci sequence,
 * however since we are making two calls here, alarm bells should be going off
 * in our mind because a function calling itself twice can easily lead us down the road to
 * O(2^N)
 *
 * This is a case of what we call overlapping sub problems, which is due to the fact that
 * fib(n-1) and fib(n-2) end up calling many of the same calculations
 * ....see diagram on page 190
 */

function fib(n) {
  // console.log("Recursive call with n:", n)
  //base case: first two numbers of the series
  if (n === 0 || n === 1) return n;

  //return the sum of the previous two fibonacci numbers:
  return fib(n - 2) + fib(n - 1);
}

// console.log(fib(10)); //55

/**Luckily we have options to optimize this with Dynamic Programming.
 * Dynamic Programming is the process of optimizing recursive problems
 * that have overlapping sub problems.
 *
 * Optimizing an algorithm with DP is typically accomplished with one of two techniques.
 * 1. Memoization
 * 2. Bottom-up
 */

/**Memoization  Technique
 * Memoization essentially remembers previously computed functions
 * To do this we can save the result of previously computed functions to a hash table,
 * But how does the recursive function gain access to that hash table?
 * We pass the hash table as a second parameter to the function.
 *
 * By doing this we can go from Big O(2^N) => O(N)...see page 194 diagram
 *
 * Example: Implementing Memoization
 */

function fibMemo(n, memo = {}) {
  console.log("Recursive call with n:", n, "and memo hash:", memo);
  //base case: first two numbers of the series
  if (n === 0 || n === 1) return n;

  //Now we can check the memo hash table to see whether fib(n) was already computed or not:
  if (!memo[n]) {
    //If n is not in memo, compute fib(n) with recursion and store the result to the hash table
    memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
  }

  //By now, fib(n)'s result  is certainly in memo. Perhaps it was there before, or perhaps we just
  //stored if there in the previous line of code. But it should be there now.
  //So we can just return it:
  return memo[n];
}

// console.log(fibMemo(10)); //55

/**Bottom-Up Technique
 * All going bottom up means is to ditch recursion and use some other approach (like a loop) to solve
 * the same problem. The reason going bottom up is considered part of DP is because DP means taking
 * a problem that could be solved recursively and ensure that it doesn't make duplicate calls for
 * overlapping sub problems. Using iteration is one way to achieve this.
 *
 * Example Bottom-Up Fibonacci
 */

function bottomUpFib(n) {
  //base case: if n is 0 just return n
  if (n === 0) return n;

  //we can use variables a and b to start with the first two numbers in the fibonacci series
  let a = 0;
  let b = 1;

  //loop from 1 until n:
  for (let i = 1; i < n; i++) {
    //a and b move up to the next numbers in the series.
    //Namely,b becomes the sum of b + a, and a becomes
    //what b used to be.
    //we use a temporary variable to make these changes:
    let temp = a; //store the current value of a
    a = b; // move a up to b
    b = temp + b; //new b is old a + old b
  }

  //Since the loop only executes until n-1, return b
  return b;
}

// console.log(bottomUpFib(10));

/**Exercise 1. Add until 100.
 * Write a function that accepts an array of numbers and returns the sum
 * as long as a particular number doesn't bring the sum above 100. If adding
 * a particular number will make the sum higher than 100, that number is ignored.
 *
 * Avoid making unnecessary recursive calls
 */

function addUntil100(arr) {
  //base case return 0 if no arr is passed through
  if (arr.length === 0) return 0;

  let remainderSum = addUntil100(arr.slice(1));

  if (arr[0] + remainderSum > 100) {
    return remainderSum;
  } else {
    return arr[0] + remainderSum;
  }
}

/**Exercise 2. Use recursion to calculate the Nth number from a mathematical sequence
 * known as the "Golomb sequence". Use memoization to optimize your function.
 *
 */

function golomb(n, memo = {}) {
  if (n === 1) return 1;

  if (!memo[n]) {
    memo[n] = 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo);
  }
  return memo[n];
}

console.log(golomb(10));
