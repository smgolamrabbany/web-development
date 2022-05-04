/*
this Coding will help to get understand about to do the right coding for comparing two or 3 numbers where has the maximum value.
Here we will lean 3 numbers comaprison after doing 2 numbers maximum value output.
Let's discover it.
 */

// withing 2 numbers, let's find where is the maximum value.
var businessMan = 350;
var politician = 450;
console.log("Given Value: \nBusiness Value: ", businessMan,  "And", "Politician Value: ", politician);

if (businessMan>politician){
    console.log("Businessman has Bigger Value: ", businessMan);

}
else {
    console.log("Politician has Bigger Value: ", politician);
}


// let's try within 3 number or similar more number same partter.
var businessman1 = 1150;
var minister1 = 1575;
var sochib1 = 2247;
console.log("Given Value:\n", "Businessman: ", businessman1, " , ", "Minister: ", minister1, "&", "Sochib", sochib1);

// coding practice: 1

var Maximum_number = Math.max(businessman1,minister1,sochib1);
var Minimum_Number = Math.min(businessman1,minister1,sochib1);
console.log("Maximum Value is:", Maximum_number, "Minimum Value is: ",Minimum_Number );

//coding practice:2
if (businessman1>minister1){
    if (businessman1>sochib1){
        console.log("Businessman has Bigger Value:", businessman1);
    }
    else {
        console.log("Sochib has bigger value:", sochib1);
    }
}
else {
    if (minister1>sochib1){
        console.log("Minister has bigger value:", minister1);
    }
    else {
        console.log("Sochib has bigger Value:", sochib1);
    }
}


