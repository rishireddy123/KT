function myfunction(){
    var x=document.getElementsByClassName("hide");
    for(var i=0;i<x.length;i++)
    {
        x[i].style.visibility="hidden";
    }
}
function toChange(){
    document.getElementById("id2").innerHTML="hiiiiiii";
}
function fun3()
{
    document.getElementById('id3').innerHTML=Date();
}
function fun4()
{
    document.getElementById('id4').style.fontFamily="Arial";
    document.getElementById('id4').style.backgroundColor="black";
    document.getElementById('id4').style.color="white";
}

document.getElementsByTagName("a").innerHTML="https://www.w3schools.com/howto/howto_css_center_button.asp";