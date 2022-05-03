
/*
Number swap formula
 */



// formula 1:

var a = 2;
var b = 3;
console.log("before coding", "a=", a, ", b=",b);

[a,b ] = [b,a ];

console.log("after coding", "a=", a, ", b=",b);


// formula 2:

var num1 = 4;
var num2 = 7;

console.log( "before Coding: num1=" , num1, ", Num2: ", num2);

num1 = num1+num2;  // now total = 11 for num1 (4+7=11)
num2 = num1-num2  // now total = 4 for num2 (11-7=4)
num1 = num1-num2  // now total = 7 for num 1 ( 11 -4=7)

console.log( "After Coding: num1=" , num1, ", Num2: ", num2);


// coding 3

var digit1 = 121;
var digit2 = 307;
console.log("before coding", "digit1=",digit1, ", digit2=", digit2);

var temporarydigit=digit1; //now digit1 is totally empty
digit1=digit2;   // and it replaced the digit of digit2
digit2 = temporarydigit // now again digit 2 replaced with the previous temporarydigit

// let's finished the coding

console.log("after coding", "digit1=",digit1, ", digit2=", digit2);

