// Write a function called myName that logs your full name. Save your full name to a variable inside of the function body, then use console.log to print your name to the console.

function myName () {
    return "Renu Shinde"; 
}

let fullName = myName();
console.log(fullName);

// Create an array called favoriteFoods which contains the strings "pizza" and "ice cream".

let favoriteFoods = ["Pizza", "ice cream"];

//Write a function called randomFood. The function should use Math.random to randomly choose a favorite food in your favoriteFoods array to return. For example, your function will return either pizza or ice cream, depending on what you get back from Math.random.

function randomFood () {
    for (let i=0; i< favoriteFoods.length; i++) {
        return Math.random(favoriteFoods[i]);
    }
}
console.log (randomFood());

// Create a variable called numbers which is an array that contains the numbers 1 through 10.

let numbers = [1,2,3,4,5,6,7,8,9,10];

// Write a function called displayOddNumbers which iterates over the numbers array and console.logs out all of the numbers that are odd. Here is what that might look like:

function displayOddNumbers () {
    for (let i=0; i<numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            console.log (numbers[i]);
        }
    }
}
console.log (displayOddNumbers());

// Write a function called displayEvenNumbers which iterates over the numbers array and console.logs out all of the numbers that are even.

function displayEvenNumbers () {
    for (let i=0; i<numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i]);
        }     
    }
}
console.log(displayEvenNumbers());

// Create a function called returnFirstOddNumber which iterates over the numbers array and returns the first odd number it finds

function returnFirstOddNumber () {
    for (let i=0; i< numbers.length; i++) {
        if (numbers[i] %2 !== 0) {
            return numbers[i];
        }
    }

}
console.log (returnFirstOddNumber());

// Create a function called returnFirstHalf which returns the first half of the numbers array

function returnFirstHalf () {
   return numbers.slice ( 0, numbers.length/2);
}
console.log(returnFirstHalf());

// Create a function called returnSecondHalf which returns the second half of the numbers array
 function returnSecondHalf () {
   return numbers.slice(numbers.length/2);

 }
 console.log (returnSecondHalf());