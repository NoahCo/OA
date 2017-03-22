/*
Word Unscramble

Create a function that will take a string and an array of letters
The array will contain all of the same letters as the string but will be scrambled
Example:  "hello" and ["l","e","h","o","l"] 

The function will move the indices and sort it until it equals the string.
*/

 unscramble(["l","e","h","o","l"], "hello");

function unscramble(array, word){
    for ( var i = 0; i < array.length; i++ ){
        if (array[i] != word[i]){
            array[i] = word[i]
        }
    }
    console.log( array.join('') +" = "+ word);
}
