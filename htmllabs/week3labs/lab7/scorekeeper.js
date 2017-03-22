/*
Score Keeping App

Recreate the html in the image screenshot and add your script
1. The Default score limit is 5
	The limit can be changed by the input field
2. Everytime player 1 or player 2 button is pressed score
	increments by 1 for player 1 or player 2.
3. When the score limit is reached the game is over
	Change the color to green for the winning player
4. Reset will set scores back to 0 for both players
	and will set the score limit back to the default

Use: event listeners, if/else statements, functions
*/

var deScore = 5;
var play1 =0;
var play2 =0;
var btn1 = document.getElementsByTagName("button")[0];
var btn2 =document.getElementsByTagName("button")[1];
var color =document.getElementsByTagName("button")[0].style.backgroundColor;
document.getElementById("score").addEventListener("input",scoreFunc);
document.getElementsByTagName("button")[0].addEventListener("click",play1Func);
document.getElementsByTagName("button")[1].addEventListener("click",play2Func);
document.getElementsByTagName("button")[2].addEventListener("click",rest);
function scoreFunc(){
	var x =  document.getElementById("score").value;
	deScore=x;
	document.getElementById("limit").innerHTML = " playing to : " + x;
	
}
function play1Func(){
	play1+=1;
	console.log(play1);
	document.getElementById("scoreDisply").innerHTML= play1 + " to " + play2;
	if(play1+play2==deScore){
			
			btn1.disabled =true;
			btn2.disabled = true;
			if(play1>play2){
				document.getElementById("scoreDisply").innerHTML= "The Winner : " + btn1.innerHTML;
				btn1.style.backgroundColor="green";
			}
			else{
				document.getElementById("scoreDisply").innerHTML= "The Winner : " + btn2.innerHTML;
				btn2.style.backgroundColor="green";
			}
			}
	//
	}

function play2Func(){
	play2+=1;
	console.log(play2);
	document.getElementById("scoreDisply").innerHTML= play1 + " to " + play2;
	if(play2+play1==deScore){
			
			btn1.disabled =true;
			btn2.disabled = true;
			if(play2>play1){
				document.getElementById("scoreDisply").innerHTML= "The Winner : " + btn2.innerHTML;
				btn2.style.backgroundColor="green";
			}
			else{
				document.getElementById("scoreDisply").innerHTML= "The Winner : " + btn1.innerHTML;
				btn1.style.backgroundColor="green";
			}
	}
}
function rest(){
	
//	document.getElementById("lastBtn").type="reset";
	btn1.disabled=false;
	btn2.disabled=false;
	play1=0;
	play2=0;
	btn1.style.backgroundColor= color;
	btn2.style.backgroundColor= color;
	deScore = 5;
	document.getElementById("limit").innerHTML = " playing to : " + deScore; 
}