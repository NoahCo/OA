/*
Create and array of movie objects. Each movie should have a title, 
rating, and hasWatched properties. Iterate through the array and 
print out something that looks like:
You have watched "Moonlight" - 5 stars
You have not seen "La La Land" - 4.5 stars
You have seen "Rogue One" - 5 stars
You have not seen "Frozen" - 3.5 stars
*/
var moonLight = {
     title: '"Moonlight"',
     rating : "5",
     hasWatched : "seen"
    
};
var laLand = {
     title : '"La La Land"',
     rating : "4.5",
     hasWatched : "not seen"
};
var r1 = {
     title :'"Rogue One"',
     rating : "5",
     hasWatched :"seen"
};
var frozen= {
     title : '"Frozen"',
     rating : "3.5",
     hasWatched : "3.5"
};

var myArray= [moonLight,laLand,r1,frozen];

function display(myArray){
    for (var i =0;i < myArray.length;i++){
        console.log("You have " + myArray[i].hasWatched +" "+ myArray[i].title+ " - "+ myArray[i].rating+ " stars")
    }
}