/*
This script finds the repositories of the github username entered. 

1. Attach a "click" event handler for the button.
2. Grab the username from the text input
3. With the username, create the github API url and store it in a variable named APIUrl
	- The completed url will look like this: https://api.github.com/users/myusername/repos
4. Use the AJAX function to call the API. 
	- Be sure to use the loader gif provided while loading the results from the API call. You can find the loader in the index.html 
	- Make sure your code handles the error when no data is returned by the API
5. Loop through the data and append the data to the div with the id of results.
6. Use the empty function to clear previous data from the results div. This should clear the results each time
the button's event is fired.
*/

/* global $ */

$(document).ready(function(){
   
    $(function(){
  $('#search').on('click', function(e){
    e.preventDefault();
    $('#results').html('<div id="loader"><img src="https://core.trac.wordpress.org/raw-attachment/ticket/21456/wpspin_light.gif" alt="loading..."></div>');
    
    var username = $('#username').val();
	 var APIUrl = "https://api.github.com/users/"+ username + "/repos";
	var requri = "https://api.github.com/users/"+ username ;
	 function requestJSON(url, callback) {
    $.ajax({
      url: url,
      complete: function(xhr) {
        callback.call(null, xhr.responseJSON);
      }
    });
  }
  requestJSON(requri, function(json){
  if(json.message == "Not Found" || username == '') {
        $('#results').html("<h2>No User Info Found</h2>");
      }
      
      else {
        // else we have a user and we display their info
        var fullname   = json.name;
        var username   = json.login;
       
        
         if(fullname == undefined) { fullname = username; }
       var outhtml = '<h2>'+fullname+' <span class="smallname">';
        
        outhtml = outhtml + '<div class="repolist clearfix">';
        
         var repositories;
        $.getJSON(APIUrl, function(json){
          repositories = json;   
          outputPageContent();                
        });          
        
        function outputPageContent() {
          if(repositories.length == 0) { outhtml = outhtml + '<p>No repos!</p></div>'; }
          else {
            outhtml = outhtml + '<p><strong>Repos List:</strong></p> <ul>';
            $.each(repositories, function(index) {
              outhtml = outhtml + '<li><a href="'+repositories[index].html_url+'" target="_blank">'+repositories[index].name + '</a></li>';
              console.log(repositories[index].name);
            });
            outhtml = outhtml + '</ul></div>'; 
            
          }
          $('#results').html(outhtml);
          console.log(json);
          
          
        } // end outputPageContent()
      } // end else statement
   } ); // end requestJSON Ajax call
  }); // end click event handler
    })});
    
    