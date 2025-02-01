// function sum(a,b){
//     return a+b
// }
// var c =sum(2,3)
// console.log(c)


// var age= 16; 
// if(age>18){
//     console.log("you r matured")
//  }
//  else{
//     console.log("you r not matured")
//  }

// var arr = [1,2,3,4,35,4,4,6]

// for(var i=0; i<arr.length; i++ ){
//     console.log(arr[i])
    
// }


// function to perform addition
function add(num1, num2) {
    return num1 + num2;
  }
  
  // function to perform subtraction
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  // function to perform multiplication
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // function to perform division
  function divide(num1, num2) {
    if (num2 != 0) {
      return num1 / num2;
    } else {
      return 'Error: Division by zero is not allowed';
    }
  }
  
  // take user input
  const num1 = parseFloat(prompt('Enter first number: '));
  const num2 = parseFloat(prompt('Enter second number: '));
  const operator = prompt('Enter operator (+, -, *, /): ');
  
  let result;
  
  // perform operation based on operator
  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    default:
      result = 'Error: Invalid operator';
  }
  
  // display result
  console.log(result);



