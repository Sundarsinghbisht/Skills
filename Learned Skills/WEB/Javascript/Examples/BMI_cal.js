function bmiCalc(weight,height){
  
    var bmi =  weight /(height * height);
    return bmi;
}

function displayBmi(bmi){
if (bmi < 18.49) {
    return " you are underweight.";
}
else if (bmi > 18.5 && bmi <=24.9){
    return "  normal weight";
        
}
else{
    return " overweight";

}

}
const a = bmiCalc(100,1.8);
console.log("Your bmi is " + a  + " and " + displayBmi(a));


