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
	hitpoints: 10,
	look: "You see a target dummy."
}

var hit = {
	hit: false
}

function hit_roll() {
	var roll = Math.floor((Math.random() * 10) + 1) // The 1 will be replaced with a value modified for skill later
	if (roll > 5)
		hit.hit = true
	else
		hit.hit = false
}

function attack(weapon) {
	if (dummy.hitpoints <= 0) 
		return ("The dummy is damaged too heavily to train on.")
	else if (hit.hit == false)
		return ("You missed.")
	else if(dummy.hitpoints > 0)
		{player.sword_skill +=1;
		dummy.hitpoints -= weapon.damage + player.sword_skill;
		return ("You hit and deal " +String(weapon.damage)+ " damage.")}
	else
		return ("You somehow missed.") 
}

hit_roll()

console.log("-------------")
hit_roll()
console.log(attack(sword))


console.log("-------------")
hit_roll()
console.log(attack(sword))

console.log("-------------")
hit_roll()
console.log(attack(sword))
console.log("-------------")



// Refactored Code
// It is as refactored as the working solution is. 

// Reflection
// This took me a little while to figure out. I wanted to build what is essentially a 
// training dummy in a video game. Getting the damn dummy to take damage was easy. Figuring out how to
// make a hit claculator that scales with "skill" is harder. The skill value does go up, but I am
// working on a way to implement it. I wanted to get this version turned is ASAP, though. 
//
// I was going to use a nested if statement, but I decided that manipulating a variable attribute might be
// easier, as the syntax was confusing to me. Too many brackets to keep track of. 
//
// I was also not quite sure how to call other functions inside of a function, so I have the same piece of code
// that essentially circumnavigates the same problem. I could potentially use it to set like a blindness
// status or something, though. All I would have to is have it change the boolean, essentially. Maybe it was a good idea in disguise? 
