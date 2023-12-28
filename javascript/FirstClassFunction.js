// 1) function statement or function declaration
function a(){
    console.log("function a() statement");
}
a()

// 2) funciton expression 
// here function is anonymous function and it is assigned to variable 'b'
var b = function (){
    console.log("function b() expression");
}

b()


// 3) funciton expression with named function
var c = function xyz(){
    console.log("named function c() expression");
}
c()

// 4) anonymous function
// function(){

// }

// 5) Difference between function parameters and function arguments
// function parameters = which are present in function definition inside ().
// function arguments = which we passed to function call inside ().

// 6) First Class Functions
// Defn :- Ability to use function as values or returning a function, 
// is known as First Class Functions.