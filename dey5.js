function myfun(){
    document.getElementById("d5").style.fontFamily="Arial";
    document.getElementById("d5").style.color="red";
    let x=document.getElementsByTagName("p");
    for(let i=0;i<x.length;i++)
    {
        x[i].style.backgroundColor="blue";
    }
}