<!-- Or, simply place the script here -->
<script language = “javascript”>
//set the variable
var greeting = new String("Hello There!");
//set the function
function greet(greeting){
	
	document.write('One ... Something Else, and<br>Two ... '
	+ greeting + ', and<br>Three ...!');
	
	return;
}
	document.getElementById("peek").innerHTML = greet("Try this one on for size!");
	console.log();
</script>