 /* 
Create an html document containing a form and a list. The list items will be populated from your
JavaScript array.

The form will accept input, such as name, age, and address and will add it to the list of data. It will check if a name already exists in the list. 
If it does, trigger an update instead of adding to the list.

The list items are populated from the data array and when a name is selected, it displays the object 
details in the same input fields that were used to add or update the data.

1. Add JQuery CDN script in the index.html

2. Specify the document ready function to execute when the DOM is fully loaded

3. Add an event on the submit button to add or update an object in the list. Be sure to use PreventDefault to prevent the page refreshing on the form submit. 
After posting:
    a. Repopulate the list items with the updated data

4. Add an event on the dropdown so when a name is selected from the list, the object's details are displayed in the form
    a. If 'select a name' is selected, clear the form 

5. Add an event to the anchor within the list items so when a name is clicked, the object's details are displayed in the form

6. Add an event on the clear button to clear the form data

Bonus:
    Instead of using a list, try this exercise with a dropdown menu instead. Populate the dropdown menu with the data from the array. When data is
    submitted through the form, add or update the data and display it on the dropdown menu. Also, when a name is clicked from the dropdown menu, it
    should populate the form.
*/

/* global $ */
var data = [{
        "name": "Bob",
        "age": 35,
        "address": {
            "street": "6565 Sunset Blvd",
            "zip": "90028",
            "city": "Los Angeles"
        }
    }, {
        "name": "Angela",
        "age": 25,
        "address": {
            "street": "1234 Tropicana blvd",
            "zip": "89100",
            "city": "Las Vegas"
        }
    }, {
        "name": "Carol",
        "age": 52,
        "address": {
            "street": "4232 Melrose ave",
            "zip": "90029",
            "city": "Los Angeles"
        }
    }, {
        "name": "Jack",
        "age": 63,
        "address": {
            "street": "1344 First Street",
            "zip": "90105",
            "city": "Las Vegas"
        }
    }, {
        "name": "Celine",
        "age": 21,
        "address": {
            "street": "1344 First Street",
            "zip": "10003",
            "city": "New York"
        }
    }, {
        "name": "Luke",
        "age": 74,
        "address": {
            "street": "1344 first street",
            "zip": "10105",
            "city": "Bronx"
        }
    }, {
        "name": "Martin",
        "age": 55,
        "address": {
            "street": "1344 first street",
            "zip": "10108",
            "city": "Bronx"
        }
    }];
 
$(document).ready(function() {
    $.each( data, function( key, val ) {
            
            var $li = $("<li>"+ "Name:" + val.name + "<br>"+ "Age:"+ val.age +"<br>"+
            "Address: " + val.address.street +", "+ val.address.city+" "+ val.address.zip+"</li>");      
        $("ul").append($li); 
    
    });  
$('#my_form').keydown(function(e) {
    var val = [{
     "name" : $("#name").val(),
     "age" : $("#age").val(),
    'addr' : $("#addr").val(),
     "city" : $('#city').val(),
    "zip" : $('#zip').val()
    }]
    var key = e.which;
    if (key == 13) {
        
      for ( var i = 0 ; i< data.length;i++) {
                
                 for (var i in data) {
                    
                     if (data[i].name == val[0].name) {
                         $("#name").val(data[i].name);
                         $("#age").val(data[i].age);
                        $("#addr").val(data[i].address.street);
                        $('#city').val(data[i].address.city);
                        $('#zip').val(data[i].address.zip);
                        
                        
                        $("#button").click(function(key,val){
                            data[i].name = $("#name").val();
                            data[i].age= $("#age").val();
                            data[i].address.street= $("#addr").val();
                            data[i].address.city= $("#city").val();
                            data[i].address.zip= $("#zip").val();
                            $("li").remove();
                            
                             $.each( data, function( key, val ) {
            
                                var $li = $("<li>"+ "Name:" + val.name + "<br>"+ "Age:"+ val.age +"<br>"+
                                "Address: " + val.address.street +", "+ val.address.city+" "+ val.address.zip+"</li>");      
                                $("ul").append($li); 
                            
    });  
                        $("#name").val(" ");
                       $("#age").val(" ");
                        $("#addr").val(" ");
                        $("#city").val(" ");
                        $("#zip").val(" ");
                         })
                         break; //Stop this loop, we found it!
     

}
                 }    
       
         if (val[0].age == "") {
            alert("Age is missing");
        } else if (val[0].addr == "") {
            alert("Address is missing");
        }  else if (val[0].city == "") {
            alert("city is missing");
        } else if (val[0].zip == "") {
            alert("zip code is missing");
        }
        else {
        //$('#my_form').submit();
            alert("Form Submitted ...!!");}
            (e).preventDefault;
        $("ul").append($("<li>"+ "Name:" + val[0].name + "<br>"+ "Age:"+ val[0].age +"<br>"+
            "Address: " + val[0].addr +", "+ val[0].city+" "+ val[0].zip + "</li>"))

return false;
}
}});
});
    
    
