// This function positions the footer based on window size
function hideMobBar(){
    var $containerw = $(window).width();
    if ($containerw >= 818) {
        $('#smallerVP').css({
           display:'none'
        });
    }
    
}

$(document).ready(function () {
    hideMobBar();//run when page first loads
});

$(window).resize(function () {
    hideMobBar();//run on every window resize
});

function navHIDE()
{
 var x=document.getElementById("smallerVP");
 
 if(x.style.display=="block")
 {
     x.style.display="none";
    

 }
 else{
     x.style.display="block";
     x.style.float="right";
 }
}
