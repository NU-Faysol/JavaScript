
//Ternary Operator;


//Is one number positive or negative or zero?;

// var number = prompt("Enter one number ");

// var result = number > 0 ? "Positive" : number < 0 ? "Negative"  : "Zero" ;

// console.log(result);




//which number is large number? ;

var num1 = prompt("Enter first number ");
var num2 = prompt("Enter secound number ");
var num3 = prompt("Enter third number ");


var result = num1 > num2 && num1 > num3 ? num1 + " is large number" : num2 > num1 && num2 > num3 ? num2 + " is large number" : num3 > num1 && num3 > num2 ? num3 + " is large number" : "Equal";
console.log(result);



