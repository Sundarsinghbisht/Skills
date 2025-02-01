function add(a, b) {
    return a + b;
  }
  
  function sub(a, b) {
    return a - b;
  }
  
  function mul(a, b) {
    return a * b;
  }
  
  function div(a, b) {
    return a / b;
  }
  
  while (true) {
    let c = prompt("Enter the first number:");
    let d = prompt("Enter the second number:");
  
    let choose = prompt(
      "Choose operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exit\n"
    );
  c= parseFloat(c);
  d= parseFloat(d);
    
    if (choose == 1) {
      console.log(add(c, d));
    } else if (choose == 2) {
      console.log(sub(c, d));
    } else if (choose == 3) {
      console.log(mul(c, d));
    } else if (choose == 4) {
      console.log(div(c, d));
    } else if (choose == 5) {
      console.log("Exiting the program");
      break;
    } else {
      console.log("Invalid choice");
    }
  }