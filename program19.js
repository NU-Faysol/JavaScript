
// sum of 1+2+3+4+5+6+7+8+9+10....

// var sum = 0;

// for(i = 1 ; i<=5 ; i++) {

//     sum = sum+i;

//     document.write("Sum of "+ i + " + " +(sum-i)+" = " + sum + "<br/>");

// }

// document.write("total Sum = "+sum);




//User will give input and then program will sum this

var m = prompt("Enter Starting number ");
var n = prompt("Enter Ending number ");

var sum = 0 ;

for( var i = m ; i<=n ; i = i+1) { 
    
    sum = sum + i ;

}
document.write(sum);
