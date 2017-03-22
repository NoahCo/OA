//Annoy-omatic
// Create your own index.html
// 1. Ask the user " Are we there yet"
var answer=prompt("Are we there yet?");
var num=0;
while(num==0){
    if(answer=="yes" || answer=="yeah"){
        num++;
        
    }
    else{
        answer=prompt("Are we there yet?");
    }
}
console.log("Yay, we finally made it!");
// 2. Keep asking again and again until they enter "yes" OR "yeah"
// 3. Then, alert "Yay, we finally made it!"
