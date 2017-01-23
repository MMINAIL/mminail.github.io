//How to Produce Simple Template Literals
//To produce a simple template literal, open up a Terminal window at 'Desktop' and place the following code in a (.js) file named 'test-med-plant'
//To begin the code and to trigger all error messages, add the 'use strict' line of code at the start of the program
"use strict";
//The first order of business is to wrap the new 'var' namespace in an anonymous function to eliminate the namespace from the global scope
(function() {
// Establish a 'namespace' container for the 'medPlant' project
var medPlant = medPlant || {};

//Next, establish the properties of the 'namespace' medPlant
medPlant.primaryTerpene = 'linalool'
medPlant.secondaryTerpene = 'myrcene'
medPlant.tertiaryTerpene = 'limonene'

//Establish the methods of the 'namespace' medPlant
medPlant.plant = function() {
	console.log(`The plant has been planted and will now produce ${medPlant.primaryTerpene}.`);
};

medPlant.feed = function() {
	console.log(`The plant has been fed and will now secrete ${medPlant.secondaryTerpene}.`);
};

medPlant.harvest = function() {
	console.log(`The plant has been harvested and will now provide ${medPlant.tertiaryTerpene}.`);
};

//Call the functions of the 'medPlant' project
medPlant.plant();
medPlant.feed();
medPlant.harvest();

//Close the block wrapper and anonymous (function(); {
})();

//To execute the program from a Terminal window at 'Desktop', type the following command line ...
node test-med-plant.js

//The console will now return the following three statements ...
The plant has been planted and will now produce linalool.
The plant has been fed and will now secrete myrcene.
The plant has been harvested and will now provide limonene.

//Notice how the set of enveloping back-ticks `...` holds the entire Template Literal.
//Inserted values designated by the 'dollar sign' and enclosed in a set of curly braces replace the old common Javascript string concatenation techniques of yesteryear
