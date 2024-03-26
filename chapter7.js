/**Big O in Everyday Code */

/**Word Builder
 * Function that collects every combination of two character strings,
 * built from an array of single characters.
 *
 * Ex: ["a","b,"c,"d"] => ["ab", "ac,"ad,"ba","bc","bd","ca","cb", "cd", "da", "db", "dc"]
 *
 * First implementation is Big O(n^2) because of the nested loop
 */

function wordBuilder(arr) {
  let collection = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        collection.push(arr[i] + arr[j]);
      }
    }
  }
  return collection;
}

/**Now what would happen if we modified the algorithm to compute
 * each combination of three-character strings?
 *
 * Ex: ["a","b,"c,"d"] =>
 * ["abc", "abd","acb,"acd","adb","adc","bac","bad", "bca", "bcd", "bda", "bdc","cab", "cad", "cba","cbd","cda", "cdb", "dab", "dac", "dba", "dbc", "dca", "dcb"]
 *
 * The new implementation would use 3 nested loops, which would be a time complexity of Big O(n^3)
 *
 */

/**Clothing labels example
 *
 * Suppose you're writing software for a clothing manufacturer.
 * Our code accepts an array of newly produced clothing items (stored as strings),
 * and it creates text for every possible label we'll need.
 *
 * Specifically our labels should contain the item name, plus its size,
 * ranging from 1 to 5.
 *
 * Ex: ["Purple shirt", "Green shirt"] =>
 * ["Purple Shirt Size: 1","Purple Shirt Size: 2","Purple Shirt Size: 3", "Purple Shirt Size: 4", "Purple Shirt Size: 5",
 *  "Green Shirt Size: 1", "Green Shirt Size: 2","Green Shirt Size: 3", "Green Shirt Size: 4", "Green Shirt Size: 5"]
 *
 *
 * Time Complexity: Big O(n)
 *
 * Explanation:
 * This code contains nested loops, so it is tempting to call it Big O(n^2).
 * While the outer loops runs N times, the inner loop runs a constant 5 times.
 * So the inner loop will always run 5 times no matter what N is.
 * Therefor O(5n) => O(n)
 */

function markInventory(clothingItems) {
  clothingOptions = [];

  for (let item of clothingItems) {
    let range = 5;
    for (let i = 1; i <= range; i++) {
      clothingOptions.push(`${item} Size: ${i}`);
    }
  }
  return clothingOptions;
}

// console.log(markInventory(["Purple Shirt", "Green Shirt"]));

/**Palindrome Checker
 * A palindrome is a word or phrase that reads the same both forward and backwards.
 * Some examples include "racecar", "kayak", "deified"
 *
 * Write a function that checks whether a string is a palindrome
 *
 * Time Complexity: Big O(n/2) => we drop the constants and get Big O(n)
 */

function isPalindrome(str) {
  //If the string is less than 2 characters it is already true...
  if (str.length < 2) return true;
  //Start the leftIndex at 0
  let left = 0;
  //Start rightIndex at last index of str
  let right = str.length - 1;

  //Iterate until the left index reaches the middle of the str
  while (left < Math.floor(str.length / 2)) {
    if (str[left] !== str[right]) {
      return false;
    }
    //Move leftIndex 1 to the right
    left++;
    //Move the rightIndex 1 to the left
    right--;
  }
  //If we make it through the whole string without a mismatch
  //the string must be a palindrome
  return true;
}

// console.log(isPalindrome("racecar") == true);
// console.log(isPalindrome("truck") == false);
// console.log(isPalindrome("") == true);
// console.log(isPalindrome("abc") == false);

/**Get all products
 * Write a function that accepts an array of numbers
 * and returns the product of every combination of two numbers
 *
 * Ex: [1,2,3,4,5] => [2,3,4,5,6,8,10,12,15,20]
 *
 *
 * Time Complexity: Big O(n^2/2) => Big O(n^2)
 *
 * The inner loop runs approximately N + (N-1)+(N-2)+(N-3)...+ 1 times.
 * This formula always turns out to compute to about N^2/2
 */

function twoNumberProducts(arr) {
  let products = [];
  //Outer array
  for (let i = 0; i < arr.length; i++) {
    //inner array, in which j always begins
    //one index to the right of i
    for (let j = i + 1; j < arr.length; j++) {
      products.push(arr[i] * arr[j]);
    }
  }
  return products;
}

// console.log(twoNumberProducts([1, 2, 3, 4, 5]));

/**Dealing with multiple datasets
 * Now if instead of computing the product of every two numbers from a single array,
 * we instead compute the product of every number from one array by every number of a second array.
 *
 * Ex: [1,2,3] and [10,100,1000] => [10,100,100,20,200,2000,30,300,3000]
 *
 * Time Complexity: Big O(n * m)
 * where n is the size of one array and m is the size of the other
 */

function twoNumberProductsFromMultipleDatasets(arr1, arr2) {
  let products = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      products.push(arr1[i] * arr2[j]);
    }
  }
  return products;
}

// console.log(twoNumberProductsFromMultipleDatasets([1, 2, 3], [10, 100, 1000]));

/**Password Cracker
 * You're a hacker who's trying to figure out someone's password.
 * You decide on a brute force approach.
 * Write some code that produces every possible string of a given length.
 * 
 * This is a slow algorithm! If we print  each letter from the alphabet once
 * it would take 26 steps. When we print every two character combination, we end
 * up with 26 characters multiplied by 26 characters.
 * 
 * When printing every three character combination, we end up with 26*26*26 combinations
 * 
 * Pattern.... 26, 26^2, 26^3
 * Therefore in Big O Notation, we express this as O(26^n)...which is an utterly slow algorithm.
 * 
 * 
 */

// function everyPassword(length, prefix = "", result = []) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";

//   // Base case: if the current string (prefix) reaches the desired length
//   if (length === 0) {
//     console.log(prefix);
//     // add to result array, to collect all possibilities
//     result.push(prefix);
//     return;
//   }

//   // Recursively append each letter of the alphabet to the current prefix
//   for (let i = 0; i < alphabet.length; i++) {
//     everyPassword(length - 1, prefix + alphabet[i], result);
//   }

//   return result;
// }

