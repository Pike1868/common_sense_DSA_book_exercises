/**Blazing Fast Lookup with Hash Tables
 *
 * Most programming languages include a data structure called a: hash table
 *  Can also be called: hashes, maps, hash maps, dictionaries, or associative arrays.
 *
 * Hash tables can be used to look up data in just O(1)time.
 *
 */
/**How would we write a function that compares two arrays and lets us know
 * if one is a subset of the other?
 *
 * Ex: ["a","b","c","d","e", "f"] and ["b","d","f"] => true; the second array is a subset of the first array
 */

function isSubset(arr1, arr2) {
  let largerArr, smallerArr;
  //Determine which array is smaller:
  if (arr1.length > arr2.length) {
    largerArr = arr1;
    smallerArr = arr2;
  } else {
    largerArr = arr2;
    smallerArr = arr1;
  }
  //Iterate through the smaller array
  for (let i = 0; i < smallerArr.length; i++) {
    //Assume temporarily that the current value from
    //the smaller array is not found in the larger array
    let foundMatch = false;
    //For each value in the smaller array, iterate through
    //larger array
    for (let j = 0; j < largerArr.length; j++) {
      //If two values are equal, it means that all
      //values from smaller array are present in larger array
      if (smallerArr[i] === largerArr[j]) {
        foundMatch = true;
        break;
      }
    }
    //if the current value in the smaller array doesn't exist
    //in larger array, return false
    if (foundMatch === false) return false;
  }
  //if we got to the end of the loops, it means that all
  //values from smaller array are present in larger array;
  return true;
}

/**A more efficient solution that uses hash tables
 *
 */

function optimizedIsSubset(arr1, arr2) {
  let largerArr, smallerArr;
  let hashTable = {};

  //First we determine which array is smaller
  if (arr1.length > arr2.length) {
    largerArr = arr1;
    smallerArr = arr2;
  } else {
    largerArr = arr2;
    smallerArr = arr1;
  }

  //Store all items from largerArray inside hashTable
  for (const value of largerArr) {
    hashTable[value] = true;
  }

  //Iterate through each item in smallerArray and return false
  //if we encounter an item not inside hashTable
  for (const value of smallerArr) {
    if (!hashTable[value]) return false;
  }

  //If we get this far in our code without returning false,
  //all items in smallerArr must be contained in largerArr
  return true;
}

//Exercises
/** 1. Write a function that returns the intersection of two arrays.
 * The intersection is a third array that contains all values
 * contained within the first two arrays.
 *
 * For example, the insertion of [1,2,3,4,5] and [0,2,4,6,8] is [2,4].
 *
 * Your function should have a complexity of O(n)
 *
 */

//To take advantage of hashTables speed in searches we can
//convert both arrays to hashTables and then loop through
//the shortest array to check if all values are contained in the larger array

function valuesInBothLists(arr1, arr2) {
  //If array sizes will differ we need to determine the larger array
  let hashTable = {};
  let result = [];

  //Hash the elements of the larger array for efficient lookups
  for (let val of arr1.length > arr2.length ? arr1 : arr2) {
    hashTable[val] = true;
  }

  //Check each element of the smaller array against the hash table
  for (let val of arr1.length <= arr2.length ? arr1 : arr2) {
    if (hashTable[val]) {
      result.push(val);
    }
  }

  return result;
}

// console.log(valuesInBothLists([1, 2, 3, 4, 5, 7, 13], [0, 2, 4, 6, 8, 12, 7])); // [2,4,7]

/** 2. Write a function that accepts an array of strings
 * and returns the first duplicate value it finds.
 *
 *
 * For example if the array is ["a","b", "c","d","c","e","f"]
 * the function should return ["c"], since it's duplicated within
 * the array.
 *
 * (You can assume there is one pair of duplicates within the array)
 * Time Constraints: Big O(n)
 */

//input: array of strings
//output: str
//condition: first duplicate character in the array
//edge cases: types? Case sensitivity, non-alphanumeric characters? careful with numbers?

function firstDuplicateValue(listOfStrings) {
  //Base case check, no dupes possible if less than 2 items
  if (listOfStrings.length < 2) return null;
  let hashTable = {};
  //setting the dupe variable to null at first to assume no duplicates
  let dupe = null;

  //Now we can create a hash table for quick searches
  for (let char of listOfStrings) {
    //While we are creating the hash table,
    //we can check that the value doesn't already
    //exist in the hash table before adding it
    if (!hashTable[char]) {
      hashTable[char] = 1;
    } else {
      //If the char does exist, then we found a duplicate.
      //Once we find the first duplicate character we can
      //save it to the dupe variable and we're done
      dupe = char;
      break;
    }
  }
  //return the duplicate variable
  return dupe;
}

// console.log(firstDuplicateValue(["a", "b", "c", "d", "c", "e", "f"])); //"c"

// console.log(firstDuplicateValue(["a", "b", "c", "d", "A", "b", "C", "d"])); //"b"

/** 3. Write a function that accepts a string that contains all the
 * letters of the alphabet except one and returns the missing letter.
 *
 * For example, the string, "the quick brown box jumps over a lazy dog"
 * contains all the letters of the alphabet except the letter, "f".
 *
 * Constraints: Time complexity: Big O(n)
 */

//inputs: string (contains all the letters of the alphabet except one)
//output: string, the one letter of the alphabet that is missing
// conditions: missing letter of the alphabet
// edge cases: case sensitivity? what if more than one letter is missing?
//  non-alphabet characters,

const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";

function missingLetterOfAlphabet(str, alphabet = englishAlphabet) {
  // can add a second param incase user wants to add a specific alphabet,
  //otherwise we set the param default to englishAlphabet
  //Since we are searching for the 1 missing letter in any alphabet we would need to search n-1 times.
  if (str.length < alphabet.length - 1) return null;
  //To speed up searches we can convert the alphabet to a hash table.
  let alphabetHash = {};
  for (let letter of alphabet) {
    alphabetHash[letter] = 1;
  }

  //now as we look through the string we can update alphabetHash to delete entries
  for (let letter of str) {
    if (alphabetHash[letter]) {
      delete alphabetHash[letter];
    }
  }

  //That should take out all of the letters except the one missing
  //So now we should just be able to return the only key of the alphabet hash
  //A more complete solution may include a check that only one items is left in the hash table
  return Object.keys(alphabetHash)[0];
}

// console.log(
//   missingLetterOfAlphabet("the quick brown box jumps over a lazy dog")
// );

/** 4. Write a function that returns the first non-duplicated character in a string.
 * For example, the string, "minimum" has two characters that only exist once --
 * the "n" and "u", so your function should return "n", since it occurs first.
 *
 * Time constraints: Big O(n)
 *
 */

function firstNonDuplicate(str) {
  let hashTable = {};
  for (let i = 0; i < str.length; i++) {
    if (hashTable[str[i]]) {
      hashTable[str[i]]++;
    } else {
      hashTable[str[i]] = 1;
    }
  }
  for (let j = 0; j < str.length; j++) {
    if (hashTable[str[j]] == 1) {
      return str[j];
    }
  }
}

console.log(firstNonDuplicate("minimum")); //"n"
