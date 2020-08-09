/* SCOPES LET, VAR, CONST - ES6*/

/* There is three ways to declare JavaScript variables:*/
var variable1 = 1;
const variable2 = 2;
let variable3 = 3;

/* Accessing the variables values:*/
console.log(variable1)
console.log(variable2)
console.log(variable3)

/* But there are some differences between them, for example
you can't change the values of const variables because
they usually hold a value that cannot be modified*/

const pi = 3.14;

//trying to change "pi" value
pi = 3.15;

// It will display an error because we can't change a const value
console.log(pi)

/* Understanding Var Scope:*/

var aGlobalVar = "Hi Human"

//accessing var inside a function

function show(){
    console.log("aGlobalVar:" + aGlobalVar)
}

show()

//acessing var in Global Scope
console.log("We can access var here too:" + aGlobalVar)


/* Local Scope:*/


//Defining a var inside a function, a local scope

function showMsg(){
    var aLocalVar = "I only work inside this function"
    console.log(aLocalVar)
}

showMsg()

/* accessing a local var in global scope, it will return an error
because the var was defined in local scope, so aLocalVar only exists
inside the function it was set in, Same with let variables*/

console.log(aLocalVar)




/* LET AND VAR DIFFERENCES*/

let a = 2;
let b = 1;

//Defining a block and creating a let variable inside it
if (a > b){
    let c = "I am a let in a block scope dare to use me out of here"
    console.log(c)
}

//i dare you:
console.log(c)

var d = 2;
var e = 1;

//Defining a block and creating a var inside it
if (d > e){
    var f = "I am a var in a block scope"
    console.log(f)
}

/* We can access var out of the block scope, what it is not 
possible with let variables */

console.log("But for me it doenst mean a thing:" + f)


