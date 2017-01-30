//Square It
"use strict";
//Declare and assign the arrow function to accept one argument
let SQ = (nbr) => {
  //Set the input variable locally within the function
  var nbr = prompt("Please enter an integer ...")
  /* where nbr = any whole integer */
  //Assign the calculation to a local variable
  var sq = nbr * nbr;
  /* where sq = square of the number */
  //Alert the result to the end-user
  window.alert("The square of the number given is " + sq);
  //Return and archive the result at the console
  return("square of the input = " + sq);
};

//The execution command for the SQ function
SQ();
/* Notice the open argument accepts the prompt nbr */