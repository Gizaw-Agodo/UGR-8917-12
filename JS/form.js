
// java script for contact me page 
 var click = true;
function thankyou(){
    if (click){
        var content = document.getElementById('display');
        content.style.display = "block";
        click = false;
        }
    else{
        var content = document.getElementById('display');
        content.style.display = "none";
        click = true;
        }      
    }
 var button = document.getElementById('mybutton')
 button.addEventListener('click' , thankyou );
