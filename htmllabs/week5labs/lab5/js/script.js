$(document).ready(function(){
             $(".q").on("click",function(){
                $(this).nextUntil(".q").slideToggle("fast");
                $(this).find("img").toggleClass("rotate");
       })
})


