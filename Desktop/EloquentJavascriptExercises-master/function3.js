//alert("Hello!");

// difference = this function takes in two parameters and returns the difference of the two;

function difference (a,b) {
    return a-b;

}
console.log("The difference between two numbers is: "+ difference(5,3));

// product = this function takes in two parameters and returns the product of the two;

function product (a,b) {
    return a*b;
}
console.log ("The product is: " + product(4,3));

// lastElement - this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

function lastElement (arr) { 
   
        return arr[arr.length-1];
    
}
console.log ("The last element is: " + lastElement([2,3,4]));

// numberCompare: this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"

function numberCompare (a,b) {
    if (a === b) {
        return "numbers are equal";
    } else if (b>a) {
        return "b is greater than a";
    } 
    return "a is greater";
}
console.log ("number compare: " + numberCompare(2,1));

// singleLetterCount : this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

function singleLetterCount (str1, str2) {
    let commonLetter = 0;
    let newStr1 = str1.toLowerCase();
    let newStr2 = str2.toLowerCase();
    for (let i=0; i<newStr1.length; i++) {
        if (newStr1[i] === newStr2) {
            commonLetter++;    
        }
    }   
    return commonLetter;
}

console.log("the number of times that letter appears in the word is: " + singleLetterCount("amazinga", "A"));