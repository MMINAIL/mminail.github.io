Entering a prompt within a function ...

//Declare and establish the global variable
var result;

//Declare a Named Function with NAME getText
function getText() {
  var someText = prompt("Give me something to work on ...");
  /* Now, create a named function that will operate upon the now declared prompt that has been assigned to the var someText  */
  capWords(someText);
  /* Here, in Javascript, it is ok to put your function 'capWords' to work, even prior to declaration!
  alert(result.join(" "));
}

//Declare the 'capWords' function outside of the above code block
function capWords(input) {
  var counter;
  var inputArray = input.split(" ");
  var transformed = ""; /* Where an empty string is assigned to the now declared var 'transformed'
  result = [ ]; /* Where an empty array is assigned to the above now declared var 'result'
  for (counter = 0; counter < inputArray.length; counter++) {
	transformed = [
	  inputArray[counter].charAt(0).toUpperCase(),
	  inputArray(counter).substring(1) 
	].join("");
	result.push(transformed);
  }
}
//After the above program runs ...
document.getElementById("main_button").onclick = getText;