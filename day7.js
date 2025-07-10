function myFunction(op){
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let result;
    switch(op) {
        case 'add':
          result = a + b;
          break;
        case 'sub':
          result = a - b;
          break;
        case 'mul':
          result = a * b;
          break;
        case 'div':
          result = a / b;
          break;
    }
    document.getElementById("result").innerHTML=result;
    console.log(result);

}