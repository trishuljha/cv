 function stop()
 {
    if(document.getElementById('background').style.animation == "")
{
    
    document.getElementById('background').style.animation = "bm 1s linear infinite";
    document.getElementById('car').style.animation="m1 0.7s linear infinite";
    document.getElementById('wheel1').style.animation=" r1 0.6s linear infinite";
    document.getElementById('wheel2').style.animation=" r1 0.6s linear infinite";
    
    document.getElementById('a').innerHTML='stop';
    audio.play();


 }
 else
 {document.getElementById('background').style.animation = "";
 document.getElementById('car').style.animation="";
 document.getElementById('wheel1').style.animation="";
 document.getElementById('wheel2').style.animation="";
   
 document.getElementById('a').innerHTML='start';
 }
}