let x=4+5;
let y="4"+5;
let z="HEllo"+5;
let a=3+4+"5";

const cars=["BMW","Mercedes","MG","Audi"];
/*
const person={
    firstname:"Rishi",
    lastname:"Mothe",
    age:22,
    eyecolor:"black",
    fullName:function(){
        return this.firstname+" "+this.lastname;
    }
};

x.age=23;
function fun1(p1, p2)
{
    return p1*p2;
}
person.Id=205;
person["newage"]=function(){
    return this.age-1;
}

document.getElementById("Demo").innerHTML= x+"<br>"+y+"<br>"+z+"<br>"+a;
document.getElementById("Demo").innerHTML=Math.pow(x,2);
document.getElementById("Demo").innerHTML=typeof cars[3]+" "+cars[0];
document.getElementById("Demo").innerHTML=person.lastname+" "+person.firstname;
let result=fun1(2,3);
document.getElementById("Demo").innerHTML=result;*/

// for(let i=0;i<Object.keys(person).length;i++){
//     document.getElementById("Demo").innerHTML=person[i];
// }
/*
1st method
let per="";
for(let x in person){
    per+=person[x]+" ";
};
document.getElementById("Demo").innerHTML=per;
2nd method
let per=Object.values(person);
document.getElementById("Demo").innerHTML=per;

//3rd method
let per="";
for(let [head,info] of Object.entries(person))
{
    per+=head +":"+info+"<br>";
}

let str=JSON.stringify(person);
document.getElementById("Demo").innerHTML=str;
*/
/*
function person(fname,lname,age,Id){
    this.firstname=fname;
    this.lastname=lname;
    this.agee=age;
    this.Idd=Id;
    this.eyecolor="black";
    this.bornyear=function(){
        return 2025-this.agee;
    }
}
person.prototype.mname="Reddy";
person.prototype.prevyearage=function(){
    return this.agee-1;
}

let per = new  person("rishi","Mothe",23,205);
document.getElementById("Demo").innerHTML="the age of "+per.firstname+" is "+per.agee+" "+per.eyecolor+" "+per.bornyear();

let sibl=new person("Rithu","Mothe",27,206);
sibl.nextyearAge=function(){
    return this.agee+1;
}
sibl.nation="Hindu";
document.getElementById("demo").innerHTML="the age of "+sibl.firstname+" is "+sibl.agee+" "+sibl.nation+" "+sibl.nextyearAge();

let cous=new person("varsha","Nimma",22,207);
document.getElementById("foo").innerHTML="the age of " +cous.firstname+" is "+cous.agee+" "+cous.mname+" "+cous.prevyearage();

function displayDate(){
    document.getElementById("time").innerHTML=Date();
}
*/
let sen="Rishi is shiseing";
let char=sen.lastIndexOf("shi",6);
document.getElementById("Demo").innerHTML=char;

