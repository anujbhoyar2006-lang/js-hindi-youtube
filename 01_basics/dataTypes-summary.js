//  Primitive (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol(to make a value unique), BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 342314238458256953285456n



// Reference (Non Primitive) 

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name : "Nandu",
    age : 42
}

const myFunction = function(){
    console.log("Hello World!!!");
}

console.log(typeof anotherId);
