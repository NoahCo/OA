/* 
Color Changer

Toggle the body's background color between Purple
and white, when a button is clicked.
*/

// Select the button and assign to a variable

// Attach an event listener to the button when it is clicked
// the callback function will use if/else statement
// check if it's purple- if it's purple change the background style to white
// otherwise it will change style to purple.

//Bonus: use the toggle method in

document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
   // alert ("Hello World!");
    if(document.body.style.backgroundColor === "") {
        document.body.style.backgroundColor = "purple";
    }
    else if(document.body.style.backgroundColor === "purple") {
        document.body.style.backgroundColor = "";
    };
};

 

 

