var age=prompt("What is your age?");
// If age is negative print error message
if(age<0){
    console.log("error");
}
// If age is 21 print "happy 21st birthday!"
if(age==21){
    console.log("Happy 21st birthday!");
}
// If age is odd print "your age is odd!"
//(not evenly divisible by two)
if(age%2==1){
    console.log("your age is odd!");
}
//BONUS If age is a perfect square print "perfect square!"
if(age%2==0){
    console.log("perfrect square");
}