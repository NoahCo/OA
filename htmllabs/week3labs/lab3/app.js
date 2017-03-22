console.log("CONNECTED");

// 01 printReverse()
/* 
Write a function printReverse() that takes an array as an arguement
and prints out the elements in the array in reverse order
(don't actually reverse the array itself

Example:
printReverse([1,2,3,4]);
-> 4
-> 3
-> 2
-> 1
printReverse(["a","b","c","d"]);
-> d
-> c
-> b
-> a
*/
var myArray=["r",'o','w','o','1','l','e','h'];
function printReverse(myArray){
    for(var i = 0 ; i < myArray.length + i   ; i++){
        console.log(myArray.pop(i));
    }
  if (myArray.lastIndexOf()){
    return true;
    }
}
// 02 isUniform()
/*
Write a function isUniform() which takes an array as an argument
and returns true if all elements in the array are identical

Example:
isUniform([1,1,1,1])		-> true
isUniform([2,1,1,1])		-> false
isUniform(["a","a","a"])	-> true
isUniform(["a","b","p"])	-> false
*/
var order=[2,1,1,1];
function isUniform(order){
    for(var i = 0; i < order.length;i++){
        if(order[0]!=order[i]){
            return false;
            break;
        }
    }
    return true;
}

// 03 sumArray()
/*
Write a function sumArray() that accepts an array of numbers and 
returns the sum of all numbers in the array

Example:
sumArray([1,2,3])			-> 6
sumArray([4,8,5,10])		-> 27
sumArray([-5,100])			-> 95
*/
var num=[-5,100];
function sumArray(num){
    var total = 0;
    for( var i =0 ; i < num.length;i++){
        total+=num[i];
    }
    return total;
}

// 04 max()
/*
Write a function max() that accepts an array of numbers and 
return the maximum number in the array

Example:
max([1,2,3])                -> 3
max([4,10,5,10])            -> 10
max([-5,100])               -> 100
*/
var bigNum=[-5,100];
function max(bigNum){
    var highNum=bigNum[0];
    for(var i =0 ; i < bigNum.length;i++){
        if(highNum<bigNum[i]){
        highNum=bigNum[i];
     }
    }
    return highNum;
}