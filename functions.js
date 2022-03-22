//Function Statement
//when you use Function Like this its called Function Statement

function a(){
  console.log("This is call Function Statement");
}
// Function Expression
//when we assign function as value to variable its call function expression here function act like a value

var b = function(){
  console.log("This is call Function Expression");
}
/*Difference between these two type of function is hoisting .. function is a hoisted and you can call it before its give you no error
but in the case of function b it act like variable you cannot call it before its give you undefined value  */

//Anonymous Fucntion
/*Function without name is called Anonymous Function.it will not execute it gives you syntax error. Anonymous fucntion used like 
varible . like above we used anonymous function and  assign to variable b */

function(){
  console.log("This is called Anonymous Function")
}

//First Class Function
/* when a function treated as a value and passed to another function and that function return function this 
concept is called first class function*/
var c = function(num){
   return function d(){
    console.log()
  }
 
}
console.log(c());