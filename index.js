/*let emp=[
    {
        id:101,
        name:"rishi",
        surname:"reddy",
    },
    {
        id:102,
        name:"rishitha",
        surname:"rey",
    },
    {
        id:103,
        name:"rishit",
        surname:"redd",
    }
];
const empjson=JSON.stringify(emp);
console.log(empjson);
const empArray=JSON.parse(empjson);
console.log(empArray);
for(let i=0;i<emp.length;i++)
{
    console.log(emp[i].name);
}
let j=0;
while(j<emp.length)
{
    console.log(emp[j].id);
    j++;
}
for(let em of emp)
{
    console.log(em.surname);
}

emp.forEach(function(em)
{
    console.log(em.id)
});
const names=emp.map(function(em)
{
    return em.name;
})
console.log(names[1]);
const sur=emp.filter(function(em)
{
    return em.id==103;
}).map(function(e)
{
    return e.surname;
})
console.log(sur);

let x=10;
let y=10;
if(x==10  || y==10)
{
    console.log("same");
}
else if(x<5){
    console.log("less than 5");
}
else{
    console.log("not same");
}

let x=10;
console.log((x<10)?"x is lesser":"x is greater r equal");

const lan="C";
switch(lan)
{
    case "HTML":console.log("HTML");
    break;
    case "CSS":console.log("CSS");
    break;
    default:console.log("beginner");
}

function showText(text)
{
    console.log(text);
}
showText("good Morning");

const showText= (text)=>{
    console.log(text);
}
showText("good night");

const foo=(a,b)=>
{
    if(a>b)
    {
        console.log("a is greater");
    }
    else if(a<b)
    {
        console.log(`${b} is greater`);
    }
    else
    {
        console.log("equal");
    }
}
foo(4,4);
foo(2,3);
foo(3,2);

function Mobile (name,price,launchDate)
{
    this.name=name;
    this.price=price;
    this.launchDate=launchDate;
}

const s=new Mobile("Samsung","2,00,000","20|10|2015");
console.log(s);

*/
class Mobile{
    constructor(name,price,launchdate)
    {
        this.name=name;
        this.price=price;
        this.launchdate=new Date(launchdate);
    }
    getLaunchYear()
    {
        return this.launchdate.getDate();
    }
};
const i=new Mobile("iphone","2,00,000","2002/10/12");
console.log(i.getLaunchYear());














