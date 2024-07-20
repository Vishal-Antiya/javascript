"use strict" //this will make the whole code use newer versions of js

// for documentation use: "mdn javascript docs"  &  "tc39.es"

/***************************PRIMITIVE DATATYPES*************************/

/*
number  (limit is 2 to the power of 53)
bigint 
string
boolean: true / flase
null: standaolone value / empty value
undefined: when you dont assign a value to a variable.
*/

let name = "vishal"
let age = 20
let married = false

//console.log(typeof XXXX); //tells you the datattype of the value you put in XXXX

console.log(typeof "vishal");   //string
console.log(typeof age);        //number
console.log(typeof null);       //object
console.log(typeof undefined);  //undefined


/****************************REFERENCE / NON-PRIMITIVE DATATYPES*********************************/

/*
arrays,
objects,
functions
*/

const heroes = ["ironman", "spiderman", "batman"] //this is how you declare an array

let myObj = {                                    // this is an object. VERY IMP
    name: "Vishal",
    age: 20,
    job: "student",
}

const myFunc = function(){                       // A FUNCTION.
    console.log("hello world");
}