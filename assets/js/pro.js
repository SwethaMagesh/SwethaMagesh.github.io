function togglePCard(){
    var procur;
    var allCard=document.querySelectorAll(".projectCARD");
    if(allCard.length>0)
        {
                var i;
                for (i = 0; i < allCard.length; i++) 
                if(!allCard[i].classList.contains(arguments[0]))
                allCard[i].classList.remove('toggle');
           
        }     
    

   procur=document.querySelector("."+arguments[0]);
   procur.classList.toggle('toggle');

}