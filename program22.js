
// break & continue statement ;


//break statement
document.write(" <h4> Break Statement </h4> ");
for(var i = 1 ; i <= 100 ; i++) {

    if( i==10 ) {

        break;
    }
    document.write(" " +i);
 

}

document.write(" <h3> Continue statement </h3> ")


//continue stateent

var j ;
for( j = 1 ; j <= 100 ; j++) {

    if( j%2==0 ) {

        continue;
    }
    document.write("  "+j);


}
