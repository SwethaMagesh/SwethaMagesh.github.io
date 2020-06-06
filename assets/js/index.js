function displayproCard(){
    var x=document.getElementsByClassName("pro");
    if(x.style.display=="block")
 {
     x.style.display="none";
    

 }
 else{
     x.style.display="block";
     
 }

}

function historyIn(){

    var x=document.getElementById("history");
    if(x.style.display=="none")
    x.style.display="block";
    else
    x.style.display="none";


     
}

function codes(){

    var x=document.getElementById("codes");
    if(x.style.display=="none")
    x.style.display="block";
    else
    x.style.display="none";


     
}

// This function based on window size
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
