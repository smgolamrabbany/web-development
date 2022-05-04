// Let's try to understand first for any number how to make them round, ceil and floor.

var number1 = 3.1416 ;
console.log("Orginal output: ", number1);
console.log( "using toFixed", number1.toFixed(2));  // Here tofixed is used for after dot how many carrecter want to take with main degit number

var number2 = 3.1416;
var num2 = Math.floor(number2);
/*
Here Math is a amazing libaray.
After Math, just adding a coma (,)
then floor is used for counting round from last absolate number. it will not counted any upper decimale number.
 */
console.log("Using Math.Floor:", num2);

var num21 = Math.ceil(number2) //same way , ceil will count top absulate number.
console.log("Using Math.ceil:", num21);

var num22 = Math.round(number2);
/*
 Same way, round will adjusted like:
 previous number<3.5>next absulate number
*/
console.log("Using Math.round:", num22);


/*
by using random attribute we can see the output randomly from any number.
if it showes decimal number. just do it round attribute to get the absulate number.
See example bellow for details.
 */

for (var i = 0; i<10; i++){       // this for loop is to show all the random number at once.
    var ludo1=Math.random()*6;    // random number can show within till 6
    var ludo2 = Math.round(ludo1);  // just round the random number by using round attribute
    console.log(ludo1,ludo2);   // we wants to know before round and after round output.
}

/*
Finally random number code is done.
 */