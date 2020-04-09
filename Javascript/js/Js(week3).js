var fruits = ["Banana", "Orange", "Apple", "Mango"];

function loadFruits(){
   document.getElementById("fruits").innerHTML = fruits;
}

function myFunction() {
  var fruit = prompt("What is your favorite fruit? ");
  fruits[fruits.length] = fruit;
  document.getElementById("fruits").innerHTML = fruits;
}

/*var grades= [4,3,2,,,4];
var sum = 0;
var count=0;
if (grades.length > 0){
  for (index = 0; index < grades.length; index++){
      if(grades[index]!=undefined){
        sum += grades[index];
        count++;
    }
  }
  
  document.write(sum/count);
}
else
  document.write("Empty Array");*/
