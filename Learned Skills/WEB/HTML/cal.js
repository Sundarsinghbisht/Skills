function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){10
    return a/b;
}

var a=parseFloat(prompt("Enter 1st no."));
var b=parseFloat(prompt("Enter 2nd no."));
var operator = prompt('Enter operator (+, -, *, /): ');

switch(operator){
    case '+':
        result = add(a,b);
      break;
    case '-':
        result = sub(a,b);
      break;
    case '+':
        result = mul(a,b);
      break;
    case '+':
        result = div(a,b);
      break;
      default:
        result = 'Error: Invalid operator';
    

}
document.write(result);