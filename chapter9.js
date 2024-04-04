//Crafting Elegant Code with Stacks and Queues
/**Write a function that uses a stack to reverse a string.
 *
 * Example:
 * reverseStringUsingStack("abcde") => "edcba"
 *
 */

function reverseStringUsingStack(str) {
  let stack = [];
  let reversedStr = "";

  for (let char of str) {
    stack.push(char);
  }

  while (stack.length) {
    let temp = stack.pop();
    reversedStr += temp;
  }

  return reversedStr;
}

console.log(reverseStringUsingStack("abcde"));

//Another way to solve this would have been to create a class for the stack

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     if (this.items.length === 0) {
//       return null;
//     }
//     return this.items.pop();
//   }

//   read() {
//     return this.items[this.items.length - 1];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }
// }

// function reverseStringUsingStack(str) {
//   let stack = new Stack();
//   let reversedStr = "";

//   for (let char of str) {
//     stack.push(char);
//   }

//   while (!stack.isEmpty()) {
//     reversedStr += stack.pop();
//   }

//   return reversedStr;
// }

// console.log(reverseStringUsingStack("xyz")); //zyx
