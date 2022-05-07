
/*
Here we will learn to check any dupplicate number from any array.
Let's discover it.
 */

var num = [1,5,4,7,8,9,6,3,2,1,4,7,8,5,11,1,2,14,15,18,19,17,18,19,20];   // taken some dupplicate number to check.
var uniqueNum = [] ;  // taken blank becuase we will check from num array and if found unique we will input here .
for (var i = 0; i<num.length; i++){
    var element = num[i];
    var index = uniqueNum.indexOf(element);
    if (index==-1){
        uniqueNum.push(element);
    }
}
 
console.log(uniqueNum);



//Let's do it once again

var questionsNumber = [1,2,4,3,2,1,5,6,4,7,8,9,1,2,5,4,6,9,1,4,5,7,8,9,10];
var uniqueQuestionNo = [];
for (var n = 0; n<questionsNumber.length; n++){
    var num1 = questionsNumber[n];
    var index1 = uniqueQuestionNo.indexOf(num1);
    if (index1==-1){
        uniqueQuestionNo.push(num1);
    }
}

console.log(uniqueQuestionNo);


//Let's try once again.

var randomNum = [11,11,12,14,13,14,18,15,16,14,17,18,11,18,19,14,20,15,14,16,17];
var uniqueRandomNumber = [];
for (var i = 0; i<randomNum.length; i++){
    var randomNumElements = randomNum [i];
    var randomNumIndex = uniqueRandomNumber.indexOf(randomNumElements);
    if (randomNumIndex==-1){
        uniqueRandomNumber.push(randomNumIndex);
    }
}

// Coding is done.




