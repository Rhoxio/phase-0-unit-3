U3.W7: Eloquent JavaScript

I worked on this challenge [by myself, with:]

You should complete any coding sections in the [my_solution.js](my_solution.js) file unless prompted to do so here. You can run the file using node. Similar to Ruby simply go to your terminal and type `node file_name.js`.

## Release 0: Introduction

- Did you learn anything new about JavaScript or programming in general?

I felt as if I got a better understanding of how a program runs on a basic level as they explained
exactly how the system pertaining to bits works. I understood it on a basic level, but it helped clarify and validate what I already felt was correct. 

- What do you still feel uncomfortable with?

I feel a little bit uncomfortable with the structure of javascript. It seems to use a lot more functions and variables that are not as clearly defined as something in Ruby might be. It is porbably
just going to be a matter of acclimating to a new type of code, though. 

## Release 1: Chapter 1: Values, Types, and Operators

- Identify 2 similarities and 2 differences between JavaScript and Ruby syntax with regard to numbers, arithmetic, strings, booleans, and various operators you noticed.

Pretty much everything from boolean operators to simple arithmetic is the same as it was in Ruby. The conditional statement format is even the same. This text did a good job of explaining how logic flowed in mathematical expressions, though. It was nice to have a scope of how to check if values evaluate to true or false by using 0, "", or undefined/null.

## Release 2: Chapter 2: Program Structure

- What is an expression?

An expression is essentialy a chain of logic that is used to show how something is to be manipulated. 

- What is the purpose of semicolons in JavaScript? Are they always required?

Accoring to the book, there are a few cases in which they are not required. They are used to break up code
in to chunks. The interpeter sees them as logical breaks, in a way. If everything is done, it tells the program where to look next, I think. 

- What is the cause of a variable returning "undefined?"

It means that there was never a value assigned to the variable itself. It can also return undefined if the
data assigned to it is not operable. 

- Write your own variable and do something to it in the [my_solution.js](my_solution.js) file.

Done.

- What does console.log do and when would you use it? What Ruby method is this similar to?

console.log() essentially prints something to the console. This is similar to print, p, and puts in Ruby. 

- Write a program that asks for a user to input their favorite food. If they input a string, say: "Hey! That's my favorite too!" If they put something other than a string, return "I wouldn't eat that."


Use the browser console to do this one. Node does not support the `prompt` function. Paste your solution in the box below.

```javascript

var input = prompt("What is your favorite food?", "");
if (String(input))
  alert("That's my favorite too!");
else
  alert("I wouldn't eat that...")

```

The only issue is that prompt turns everything in to a string, so checking for a string makes no sense. The only way to not get a string is to put in a nil/undefined value to it returns false. 

- Describe `while` and `for` loops

Loops in general are run until a condition is switched to state otherwise. Both types of loops can use a
chain-additive variable (x += 1) to check if it should stop. For loops take three parameters and make it generally
easier to do loops in a simple fashion. While loops on the other hand can contain more complexity then a for loop
at the cost of space and simplicity.

- Did you notice any other similarities or differences between Ruby and JavaScript in this section?

I did notice that many of the functions in JavaScript are closely related in name and useability to some of the default methods in Ruby. The main difference is how the code syntax is actually set up. 

- Complete at least one of the exercises (Looping a Triangle, FizzBuzz, or Chess Board) in the [my_solution.js](my_solution.js) file.

Done. I ended up solving FizzBuzz. 

## Release 3: Functions

- Compare local and global variables

They are a bit different than Ruby. They are not denoted by a prefix, but are defined by encapsulation. If you set
them outside of a function, they can be used inside of a function even if they are modified within a function. 

- When should you use functions?

You should use functions when you have a block of code that needs to be run against other pieces of
code in a quick and easy fashion. For example, writing a function to find the largest number in a set (essentially max) saves you from having to write a specific set of code for every object that you want to manipulate. 

- What is a function declaration?

It is essentially a faster way to define functions. Instead of setting
a function directly equal to a variable, it calls the keyword 'function' 
and has you set the parameters for it, basically. It works the same
way, but requires less typing and is much clearer because you don't have
to sort through all of those variables when you look at your code. You can simply see that there is a function. 

- Complete the `minimum` exercise in the [my_solution.js](my_solution.js) file.

## Release 4: Data Structures: Objects and Arrays

- What is the difference between using a dot and bracket to look up a property? Ex. array.max vs. array[max]

When you use a method call, (.whatever) you have to have it set to a variable and have some sort of function defined for it somewhere. When you use bracket notation, you can still call methods, but you can also evaluate an expression within whatever you appended it to.

Basically, you use method calls when you have a variable set that you want to work on the
value. You use brackets when you want to look at specific values in that data.  

- Create an object called "me" that stores your name, age, 3 favorite foods, and a quirk in your [my_solution.js](my_solution.js) file.

Done.

- What object in Ruby has a name and value property similar to a JavaScript object?

Umm... I am not sure what the question is asking. Similar to what? (I fixed the sentence syntax. I think this is what it meant to ask...?)

The first thing that came to mind was the fact that they used the name method to refer to the "operators" of objects. It seems very similar to a class and how you set up attributes in a class. 

```

## Release 6: Reflection
Write your reflection here.

This was probably the most productive and learning-packed day so far at DBC. Seeing the concepts that I picked up while learning Ruby thrown in to a format that is slightly different was revitalizing and overall great for my scope of reference when it comes to programming. 

I honestly liked having excplicit instructions on why things work, even if that meant that I
learned a bit of superfluous information. I felt as if I really got a solid grasp on how Javascript functions and classes can work together to make sets of data. Overall, the content I went through today had more meaning than usual simply because it was explained and shown extremely efficiently. I also made sure that I understood every nuance before I moved on. 