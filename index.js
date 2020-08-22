// Code your solution here!
// Write a recursive function to print out all of the characters in a string.

function printString(n){
    let subn;
    console.log(n[0]);
    if (n.length>1){
      subn = n.substring(1, n.length);
      printString(subn);
    }else {
      return;
    }
};
printString('tacotuesday');


// Once we've verified that our solution works, let's move it over to our `index.js` file and start attacking the remaining challenges in this lab.

// ## Additional string challenges

// 1. Write out a recursive function to reverse a string.
// 2. Write out a recursive function to see if a word is a palindrome.

// ## Array challenges

// Arrays are another type of recursion-happy data structure. This is because, similar to the string–substring relationship, the properties of an array can be thought of as a series of sub-arrays or, in the context of our `printString()` code above, a combination of sub-arrays and a final element.

// 1. Given an array and an index, write a recursive function to add up the elements of an array.
// 2. Write a recursive function to find the largest integer in an array.
// 3. Write out a function to see if an array includes a given element.


// 1. Write out a recursive function to reverse a string.
function reverseString(string) {
    if (string.length > 0){
      let rev = string[string.length - 1];
      substring = string.substring(0, string.length - 1);
      return rev + reverseString(substring);
    } else {
      return "";
    }
};
reverseString('big cow party here');