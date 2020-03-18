var people = ["Greg", "Mary", "Devon", "James"];
//Using a loop, iterate through this array and console.log all of the people.
for (let i=0; i<people.length; i++) {
    console.log(people[i]);
}

//Write the command to remove "Greg" from the array.
let removed = people.shift();
console.log("The first value removed is:" + removed);

//Write the command to remove "James" from the array.
let lastRemoved = people.pop();
console.log("The last value removed is: " + lastRemoved);
//Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log("people array after adding Matt is: " + people);

//Write the command to add your name to the end of the array.
people.push("Renu");
console.log("people array after adding an element at the end of the array: " + people);
//Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for ( let i=0; i< people.length; i++) {
    if(people[i] === "Mary") {
        break;
    }
    console.log(people[i]);
}
//Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let newPeople= people.slice(2,4);
console.log("Array after slice is: " + newPeople);
//Write the command that gives the indexOf where "Mary" is located.
console.log("The index of Mary is: " + people.indexOf("Mary"));
//Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log("The index of foo is: " + people.indexOf("foo"));
//Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
let people1 = ["Greg", "Mary", "Devon", "James"];
let people2 = people1.splice(2,1, "Elizabeth", "Artie")
console.log("The new people array is: " + people1 );
//Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people1.concat("Bob");
console.log("Concat with Bob:" + withBob);