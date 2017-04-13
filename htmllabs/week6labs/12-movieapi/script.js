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
    
    var movie = $('#movie').val();
	 var APIUrl = "https://www.omdbapi.com/?s="+ movie;
	 

	 function requestJSON(url, callback) {
    $.ajax({
      url: url,
      complete: function(xhr) {
        callback.call(null, xhr.responseJSON);
      }
    });
  }
  requestJSON(APIUrl, function(json){
  if( movie == '') {
        $('#results').html("<h2>No Movie Info Found</h2>");
      }
      
      else {
        // else we have a user and we display their info
        var outhtml;
           outhtml = outhtml + '<div class="repolist clearfix">';
         var results;
        $.getJSON(APIUrl, function(json){
          results = json.Search;   
          outputPageContent();                
        });          
        
        function outputPageContent() {
          if(results.length == 0) { outhtml = outhtml + '<p>No Films!</p></div>'; }
          else {
            outhtml = outhtml + '<h3><strong>Results for '+ movie + '....</strong></h3> <ul>';
            $.each(results, function(index) {
              outhtml = outhtml + '<li><a href="'+results[index].Poster +'" target="_blank">'+ results[index].Title + '(' + results[index].Year+' )</a></li>';
              console.log(results[index]);
            });
            outhtml = outhtml + '</ul></div>'; 
            
          }
          $('#results').html(outhtml);
          console.log(json.Search[0].Title);
         
          
        } // end outputPageContent()
      } // end else statement
   } ); // end requestJSON Ajax call
  }); // end click event handler
    })});
    
    