$(document).ready(function(){
    $("button").click(function(){
        $("button").addClass("color");
        alert($(this).text());
    })
    $("input").on("keypress",function(event){
        console.log(( event.type + ": " +  event.which ))});
    $("h1").on("click",(function(){
        $(this).addClass("textColor");
    }))
})