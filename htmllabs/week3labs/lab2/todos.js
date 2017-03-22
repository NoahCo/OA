// Array Todo List APP
/*
1. Declare an array

2. Prompt user on what they would like to do from the following options, 
   then assign response to a variable
	- "new" will prompt to enter a new todo item and will then push 
		user entry to the existing array
		Display the newly added todo item in the console to confirm that it has been added
	- "list" will print in console each todo item in the array with its 
		corresponding index 
		Example: 
		-> 0 : Get the milk
		-> 1 : Pick up dry cleaners
		-> 2 : Wash clothes
	- "delete" will prompt the user to enter the index of a todo item they wish to delete
	- "quit" will end the program

Use functions for adding todo, printing the list, and deleting todo
*/

var myArray=["james","hoh","jam"];

var i=0
var con = true
do{
var answer= prompt("Chose from the following options:\n n for new \n l for list\n d for delete \n q for quit ");

switch (answer){
	case "n":
		do {
		var newItem = prompt("Please enter new list item");
		myArray[i]= newItem
		console.log(myArray[i]);
	//	myArray.push(i++);
		var end = prompt("continue? press any besides 'n'");
		}while(end !='n')
		break;
	case "l":
		for (var j =0; j < myArray.length;j++){
		console.log(myArray.indexOf(myArray[j])+" : " + myArray[j]);
		}
		break;
	case "d":
		var delItem = prompt("Enter the index of the item you wish to delete");
	for ( var k = 0 ; k < myArray.length; k++){
			if(delItem == myArray.indexOf(myArray[k])){
				myArray[k]=" ";
				}
			}
		break;	
	case "q":
		console.log("End of Program");
		con =false;
		break;
	default:
		console.log("Error");
	break;
}
	
}while(con==true)

	