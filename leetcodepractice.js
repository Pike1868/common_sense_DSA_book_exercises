/**
You are given a 0-indexed array of strings words and a character x.
Return an array of indices representing the words that contain the character x.
Note that the returned array may be in any order. 

Example 1:

Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
Example 2:

Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]
Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
 * 
 */

var wordContainsChar = function (word, char) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) return true;
  }

  return false;
};

// console.log(wordContainsChar("leet", "e"));

var findWordsContaining = function (words, x) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (wordContainsChar(words[i], x)) {
      result.push(i);
    }
  }
  return result;
};

// console.log(findWordsContaining(["leet", "code"], "e"));
// console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
