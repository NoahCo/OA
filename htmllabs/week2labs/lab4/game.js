/* 
Guessing Game
Create your own index page.
*/

//1. create secretNumber
var num=25;
//2. ask user for guess
var guess=prompt("Please guess the number?");
//3. check if guess is right
if(num==guess){
    console.log("Correct");
}
//4. check if guess is higher
else if(num<guess){
    console.log("Too high");
}
//5. otherwise, check if lower
else if(num>guess){
    console.log("Too low");
}
else{
    console.log("error");
}