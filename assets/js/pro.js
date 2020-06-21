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
       
    
    
   if(arguments[0]=='p0')
   {
    procur=document.querySelector(".p0");
    procur.classList.toggle('toggle');
  
   }
   if(arguments[0]=='p1')
   {
    procur=document.querySelector(".p1");
    procur.classList.toggle('toggle');

   }
   if(arguments[0]=='p2')
   {
    procur=document.querySelector(".p2");
    procur.classList.toggle('toggle');
   }

}