"use strict";
// Program 'Square Me Onclick'

function squareMeOnclick(){
    
    // Declare the global variables for this function
    var b = document.getElementById("testarama");
    var x;
    var y;
    
    // Declare the child function 'square of x'
    function square(x){
        
        // Execute a while - otherwise - if code block
        while x !== NaN {
            y = x * x;
        
        otherwise
            
        if x == NaN
            alert("The 'x' entered is not a number!")
        }
        
        // Declare the methods for this function
        return y;
    }
    
    // Javascript: Callback the function 'square of x' onclick
    b.addEventListener("click", square);
    
    // Alert the new value of 'y' to the user
    alert(y);
    
}



