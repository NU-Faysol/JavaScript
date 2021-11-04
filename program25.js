// Creating calculator using function ;

// function addition(num1,num2) {

//     var result = num1 + num2 ;
//     console.log(" Sum of "+num1 +" and "+num2 +" = "+result);

// }

// function subtraction(num1,num2) {

//     var result = num1 - num2 ;
//     console.log(" Sum of "+num1 +" and "+num2 +" = "+result);

// }

// function multiplication(num1,num2) {

//     var result = num1 * num2 ;
//     console.log(" Sum of "+num1 +" and "+num2 +" = "+result);

// }

// function division(num1,num2) {

//     var result = num1 / num2 ;
//     console.log(" Sum of "+num1 +" and "+num2 +" = "+result);

// }

// function remainder(num1,num2) {

//     var result = num1 % num2 ;
//     console.log(" Sum of "+num1 +" and "+num2 +" = "+result);

// }
// addition(20,30);
// subtraction(60,20);
// multiplication(6,9);
// division(2,60);
// remainder(4,2);




//IIFEs ( Immediately Invockeable Function Expressions )
(function display() {

    console.log("Hello iam Me");


})();


//parameterized function
( function displayMessage(msg,message) {

console.log(msg,message);

})("Hello ","Everyone");



// Function Expression ;

const disp = function displaymsg () {

    console.log("Hi , ia, message");
}
disp();