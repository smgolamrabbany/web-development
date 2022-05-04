/*
In this practices, we will learn about how can we find out the maximum value from an array number.
By using this code we can find out the highest number from a class.

Let's try to discover the code.

 */
 //Let's take the some array number.
 var classMarks  = [0,4,74,15,6,8,33,5,44,16,48,74,28,59,91,44,85,64,75,84,97,20,30,40,58,67];
 var marks = classMarks[0]; // Array position starts from 0; not 1;
 for (var i=0; i<classMarks.length; i++){     // we uses for loop to check the repeated array numbers.
     var elements = classMarks [i];   //after checking next elements it's replaces to next elements.
     if (elements>marks){   // now checking the value comaparing with marks.
         marks=elements;   // if found bigger than marks it will go to placed in the marks attribute. it's the final result we need.
     }
 }
 console.log("Highest Mark Is: ", marks);   // marks is our wanted result.


 /*
 Let's practices once again.
  */

 var num = [14,17,18,19,21,91,25,99, 26,28];
 var maximumValue = num[0];
 for (var n = 0; n<num.length; n++){
     var element = num[n];
     if (element>maximumValue){
         maximumValue = element;

     }
 }

 console.log("Maximum Value is: ", maximumValue);

 /*
 Coding is done
  */