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

/*________________________________________________________________________________________________________________________________

===============================================================
    In JS the variables are either stored in STACK or in HEAP. 
    All the PRIMITIVE data types are stored in STACK. 
    While the NON-PRIMITIVE are stored in HEAP.
================================================================
*/

let name1 = "vishal"; // string, a primitive data type

let name2 = name1;   //  here name2 gets the value 'vishal'

name2 = "bhavya"     //  but here the name2 gets another value 'bhavya'

console.log(name1);  // op: vishal
console.log(name2);  // op: bhavya

/* When stack gets another value(name2) assigned to first(name1) it creates a duplicate of first(name1).
So when you change name2's value to bhavya name1 remains the same, because only the duplicate has been changed.*/


let user1 = {                       // this is an object. a non-primitive data-type 
    email: "vishal@google.com",
    upi: "vishal@ybl"
}

let user2 = user1;  

user2.email = "vishal@facebook.com"

console.log(user1.email);   // op = vishal@facebook.com
console.log(user2.email);   // op = vishal@facebook.com

/* For a non-primitive data type, JS will store the value in a heap.
    So  {email: "vishal@google.com",
         upi: "vishal@ybl"}   will be stored in heap.
    At the same time variable called 'user1' will be created in stack and be assigned this value.
    
 -> Now when you declare user2, it will be created in stack and assigned the same value as user1 in the heap.
 -> So when you change user2's email, user1's email changes along with it, because they are both assigned to the same value in heap.*/
