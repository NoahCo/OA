/*Functions Problem Set*/

/* 
isEven()
Write a function isEven() which takes a single numeric argument and 
return true if the number is even, and false otherwise
Example:
isEven(42)     //true
isEven(555)    //false
*/

function isEven(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}

/*
factorial()
Write a function factorial() which takes a single numeric argument
and returns the factorial of that number
6! is 6 x 5 x 4 x 3 x 2 x 1
0! is 1
Example: 
factorial(5);   //120
factorial(10);  //3628800
*/

function factorial(num1){
    var count=0;
    var result=1;
    for(count=num1;count>0;count--){
        result=result*count;
        
    }
    return result;
        
}
/*
kebabToSnake()
write a function kebabToSnake() which takes a single kebab-cased 
string argument and return the sanke_cased version
Basically, replace "-" with "_"
Example:
kebabToSnake("hello-world");    //"hello_world"
*/
function kebabToSnake(string){
    for (var i =0 ; i < string.length - 1;i++){
        
        if(string[i]=== "-"){
          var  word = string.indexOf(string[i]);
          var word1= string.indexOf(string[i+1]);
          var replace= string.slice(word,word1);
          replace = "_" ;
          var string1 = string.indexOf(string[0]);
          var string2 = string.indexOf(string[i]);
          var string3= string.indexOf(string[i + 1]);
          var fWord = string.slice(string1,string2);
          var lWord = string.slice(string3);
          string = fWord+replace+ lWord;
            
        
    }
}
return string
}
/*var indexOf1 = string.indexOf('-');
    var indexOf2 = string.indexOf("w");
    var replace= string.slice(indexOf1,indexOf2);
        replace="_";
    var string1 = string.indexOf("H");
    var string2 = string.indexOf("-");
    var string3= string.indexOf('w');
    var newWord = string.slice(string1,string2);
    var newWord1 = string.slice(string3);
    var end = newWord+replace+newWord1;
    return end; */