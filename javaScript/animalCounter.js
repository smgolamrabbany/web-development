/*
In this coding practice - we will try to solve bellow problems.

Problem: in a jangle - where live first 10 km dept 50 animals , next 10 km dept 100 animals and rest of the remaining dept average animals live quantity is 100 per Kilometers.

So let's try to code to solve this problem inshaAllah.

 */

 var depth = 21;   // taken any number which is assign for counting depth of forest road.
 var animalCount = 0;  // taken counting from 0. because we will input here by coding.

 if (depth<=10){
     animalCount = depth*50;  // first 10 km 50 animals.
 }
 else if (depth<=20){
     var firstPart = 10*50;  // only possible to come this line if count is more than 10. so let's calculate directly firt 10 km for 50 animals.
     var remainingPart = depth-10; // Now we need to take balance road depth after 10 km.
     var secondPart = remainingPart*100; // we calculated remaining depth with 100. because according to problem - after 10th next 10 km, animal quantities are 100/km.
     animalCount = firstPart+secondPart;  // we added first 10km + next 10 km together.
 }
 else{
  var firstPart = 10*50;
  var secondPart = 10*100;
  var remainingPart = depth-20;
  var thirdPart = remainingPart*300; // after 20 km 300 animals / km forever....
  animalCount= firstPart+secondPart+thirdPart; // added first 10, 2nd 10 and remaining KM's

 }
 console.log(animalCount);   // result.


 // Let's do it one more time.

 var roadDistance = 21;
 var animalQuantity = 0;
 if  (roadDistance<10){
  animalQuantity= 10*50;
 }
 else if (roadDistance<20){
  var firstDistance = 10*50;
  var remainingDistances = roadDistance-10;
  var secondDistances = remainingDistances*100;
  animalQuantity = firstDistance+secondDistances;
 }
 else {
  var firstDistance = 10*50;
  var secondDistance = 10*100;
  var remainingDistance = roadDistance-20;
  var thirdDistance  = remainingDistance*300;
  animalQuantity=firstDistance+secondDistance+thirdDistance;
 }
 console.log(animalQuantity);

 // Now let's do it in a function

 function animalCountingCalculation (animalQuantity) {    // only variables name are defined here as function variable. or var animalQuantity = 0; are assigned here as (animalQuantity). because it's the structure to make the function.  and added a function name. (animalCountingCalculation). rest of the code is same. only return added.
     var roadDistance = 21;
     if  (roadDistance<10){
         animalQuantity= 10*50;
     }
     else if (roadDistance<20){
         var firstDistance = 10*50;
         var remainingDistances = roadDistance-10;
         var secondDistances = remainingDistances*100;
         animalQuantity = firstDistance+secondDistances;
     }
     else {
         var firstDistance = 10*50;
         var secondDistance = 10*100;
         var remainingDistance = roadDistance-20;
         var thirdDistance  = remainingDistance*300;
         animalQuantity=firstDistance+secondDistance+thirdDistance;
     }
     return animalQuantity; // every function must end with return value.
 }

 var count = animalCountingCalculation(21);
 console.log(count);
 // or we can write this code like bellow.

 console.log(animalCountingCalculation(21));

 /*
 Now Code is done.

  */