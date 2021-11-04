


// Looping in array ;

// var num = [10,20,30,40,50];

// for( var i=0; i<5; i++ ) {

//     console.log(num[i]);
// }




//get string from user;

// var names  = new Array();

// for(var i = 0 ; i<5 ; i++) {

//      names[i] = prompt("Enter names ");
//      console.log(names[i]);
// }



//sum of all number ;

var number = new Array() ;
var sum = 0;

for(var i = 1 ; i <=5 ; i++) {

    number[i] = parseInt( prompt("Enter a number") )

}

for(var i = 1 ; i<=5 ; i++) {

    console.log(number[i]);
    sum = sum + number[i];

}

console.log("Sum = " +sum);



