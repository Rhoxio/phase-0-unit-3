// U3.W7: Eloquent JavaScript

// Run this file in your terminal using `node my_solution.js`. Make sure it works before moving on!

// Release 2: Program Structure (Ch. 2)
// Write your own variable and do something to it.

var thing = 5
var result = thing * thing
console.log(result)
// This solution also shows that you can use previous variables to create new ones. 


// Complete one of the exercises: Looping a Triangle, FizzBuzz, or Chess Board


 for (var num = 1; num <= 100; num++) {
 	if (num % 5 == 0 && num % 3 == 0)
 		console.log("FizzBuzz")
 	else if (num % 5 == 0)
 		console.log("Fizz")
 	else if (num % 3 == 0)
 		console.log("Buzz")
 	else
 		console.log(num)
 }

 // JavaScript makes more sense to me than Ruby does. I have no idea why. I think it is because things
 // have to be broken up differently.  

// Release 3: Functions

// Complete the `minimum` exercise.

function min(one, two) {
	if (one < two)
		console.log(one);
	else if (one > two)
		console.log(two); 
	else if (one == two)
		console.log ("They are equal.");
	else
		console.log ("Please input integers.");
}

min(1,10)




// Release 4: Data Structures: Objects and Arrays
// Create an object called "me" that stores your name, age, 3 favorite foods, and a quirk below.


var me = {
	name: "Kevin Maze",
	age: 23,
	fav_foods: ["Salmon", "Green Beans", "Scrambled Eggs"],
	quirk: "I was ambidextrous until I was nine."
}

console.log(me.name);
console.log(me.age);
console.log(me.fav_foods.join (" "));
console.log(me.quirk);


// function land() {
// 	var output = '';
// 	function ground(length) {
// 		for (var count = 0; count < length; count++)
// 			output += "_"
// 	};
// 	function flower(length) {
// 		output += "0"
// 		for (var count = 0; count < length; count++)
// 			output += "*";
// 		output += "0"
// 	};

// 	ground(2);
// 	flower(4);
// 	ground(2);
// 	return output;
// };


// console.log("This is added in",land())

// // function inventory(ducks, geese) {
// // 	var duckString = String(ducks);
// // 	while (duckString.count < 4)
// // 		duckString = "0" + duckString;
// // 	console.log(duckString + " Ducks")
// // 	if (geese == undefined)
// // 		console.log("No one raises geese any more.");
// // }

// inventory(1)

// function zeroPlace(num, width){
// 	var s = String(num);
// 	while (s.length < width)
// 		s = "0" + s;
// 	return s;
// }

// function inventory(badgers, deer, raccoons) {
// 	console.log(zeroPlace(badgers, 4) + " Badgers")
// 	console.log(zeroPlace(deer, 4) + " Deer")
// 	console.log(zeroPlace(raccoons, 4) + " Racoons")
// }

// inventory(56,10,99)