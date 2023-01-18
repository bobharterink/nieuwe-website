$(document).ready(function(){
    
    
          
    $(".close").click(removeDescription); 
    
    
    });
    
    
    
    
    
    function removeDescription(event) {
    
    
        if (navigator.userAgent.indexOf('iPhone')!=-1) {
            setTimeout(function(){
                window.location = 'hoodstuk1.html';
            },100); 
        } 
    
        $("html").css("overflow-y","visible");
        $("#description").empty();
        $("#description").removeClass("splitRight");

        setTimeout(function() {
            $("#projects, #description").removeClass("split");
        }, 1000);
     };