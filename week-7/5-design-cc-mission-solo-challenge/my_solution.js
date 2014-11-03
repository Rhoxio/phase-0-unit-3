 // U3.W7: Design your own Code Combat Mission

// This is a solo challenge

// Your mission description: I want to create a simple text-based game where you can look at objects, 
// equip a weapon, and shoot a bow. 
// Goals: You can level up skills using target dummies or something. 
// Characters: Player 1
// Objects: Sword, Bow, Candle, Player
// Functions: Skill Up(sword), Skill Up(bow), Swing, Shoot, look(object), equip(item)

// Pseudocode

// Sword and Bow need to have a "damage" attribute as well as a boolean equip attribute. 
// Candle, Sword, Bow and Player need to have a "look" attribute that prints a description.

// For bow accuracy, I can make a low-end of a range for a random value and make the "top" value
// a "hit". I can have skill scale by increasing the low-end value, therefore increasing the hit chance.

// Remember to add a skill counter value to Player. Start from zero, and use some sort of
// scaling system to make it so you have to shoot multiple times to skill after skill 1. 

// Initial Code

var player = {
	inentifier: "Player 1",
	bow_skill: 0,
	sword_skill: 0,
	hitpoints: 10,
	bow_equip: false,
	sword_equip: false,
	look: "You see yourself."
}

var candle = {
	lit: true,
	look: "You see a candle."

}

var bow = {
	damage: 1,
	equip: false,
	look: "You see a bow."
}

var sword = {
	damage: 2,
	equip: false,
	look: "You see a sword."
}

var dummy = {
	hitpoints: 4,
	look: "You see a target dummy."
}



function attack(weapon) {
	// hit_roll
	// if hit_roll == true
	// 	do something
	if (dummy.hitpoints <= 0) 
	{
		return "The dummy is damaged too heavily to train on.";
	}
	else if (dummy.hitpoints > 0)
	{
		dummy.hitpoints -= weapon.damage;
		return "You hit and dealt " +String(weapon.damage)+ " damage."
	}
	else
		return "You should never see this."
	{
}

function hit_roll(){
	var roll = Math.floor((Math.random() * 10));
	console.log(roll)
	if (roll > 5)
		return true;
	else
		return false;
}

	


	// hit_roll();
	// if (hit_roll() == true)
		
	// else if (hit_roll() == false)
	// 	console.log("False")
// var a = 10;

// myFunction();

// function myFunction()
//    {
//    a = 20;
//    }

// console.log("Value of 'a' outside the function " + a);




// console.log(candle.lit)
// console.log(player.look)
console.log("-------------")
console.log(attack(sword))
console.log("-------------")
// console.log(attack(sword))
// console.log("-------------")
// console.log(attack(sword))
// console.log("-------------")
// console.log(dummy.hitpoints)
console.log(hit_roll())
console.log(hit_roll())
console.log(hit_roll())







// Refactored Code






// Reflection
// This project was fun to work on. I was able to get at least the two main pieces of the code working (The
// attack and hit_roll.) how I wanted them to work together. The syntax can be confusing at times, but I am not terribly
// worried about it. Preactice will make it feel more second-nature. Lots of brackets and stuff to remember to put in...
//
//
//
//
//
