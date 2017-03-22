var word = " ";

$(document).ready(
    $("li").click(function(){
         word = $(this);
        $(word).addClass("completed");
        
         $("i").click(function(){
            (word).fadeOut("fast");
        })
    }))
    $(".fa-plus").click(function(){
        $("input").toggle();
    })
   $('input').keypress(function(event){
       if(event.which == 13){
           var text = $("input").val()
        $('ul').append('<li><span><i class="fa fa-trash"></i></span>'+ text + "</li>")
        $('input').val(" ")
       } 
 
         $("li").click(function(){
         word = $(this);
        $(word).addClass("completed");
        
         $("i").click(function(){
            (word).fadeOut("fast");
        })
       $("input").focus(function() {
            $(this).val(" ");
});
         })
    })
    
    
        
    
   
    
   
    
    