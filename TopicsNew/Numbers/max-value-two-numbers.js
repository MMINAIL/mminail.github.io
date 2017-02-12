// function #1
function maxValueTwoNumbers() {
  var stringArray = new Array(2);
    stringArray[0] = "aindex";
    document.write("☞ " + stringArray[0] + "<br>");
    stringArray[1] = "bindex";
    document.write("☞ " + stringArray[1] + "<hr>");

  var y = new Array();
    y = [5, 42, -6, 32, 17, 53, 25];
    window.alert("The multi-elements of your hard-coded array are " + y);
    document.write("Hard coded array elements: " + y + "<hr>");
    var x = Math.max.apply(Math, y);
    window.alert("The computer says the max value of your hard coded array is " + x);
    document.write("Your max value is " + x + "<hr>");
    window.alert("Calculation Complete");
    document.write("CALCULATION COMPLETE" + "<hr>");
  return x;
}    

//function #2
function maxValueTwoNumbers() {
  var a = new Number;
  var b = new Number;
  var y = new Array();
  var x = Math.max();

  var stringArray = new Array(2);
    stringArray[0] = "aindex";
    document.write("☞ " + stringArray[0] + "<br>");
    stringArray[1] = "bindex";
    document.write("☞ " + stringArray[1] + "<hr>");

  for(i = 0; i < 1; i++) {
    
      var a = Number(prompt("Enter the first of two numerals..."));
      window.alert("You entered " + a + ". Your first numeral will be stored as an integer.");
      document.write("Your first numeral is the integer " + a + "<hr>");

      var b = Number(prompt("Enter the second of two numerals..."));
      window.alert("You entered " + b + ". Your second numeral will be stored as an integer.");
      document.write("Your second numeral is the integer " + b + "<hr>");

      var y = [a, b];

      var x = Math.max(a, b);

  if ((a !== NaN) && (b !== NaN)) {
      
      window.alert("The computer says the max value of your two numerals is " + x);
      document.write("Your max value is " + x + "<hr>");
      window.alert("Calculation Complete");
      document.write("CALCULATION COMPLETE" + "<hr>");
      }
  else if ((a == NaN) || (b == NaN)) {
      window.alert("One or both of the two numbers that you entered is not a numeric character.")
      window.alert("You'll have to re-enter your two integers again.")
      window.alert("Setting the 'i' counter back to zero.");
      i = 0;
      window.alert("Back to the top of the loop you go until you get it right!")
      continue
      }
  else {
      window.alert("The program is stuck in a loop.");
      document.write("Looping" + "<hr>");
      }
    }
return x;
}