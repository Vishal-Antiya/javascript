/*
==
>       
<
>=
<=
=== //STRICT CHECK: also compares the data types of the compared values
*/

console.log("2" > 1);   // op: true  // js converted 2 into a number and then compared

console.log(null == 0); // op: flase // here js is checking equality.
console.log(null >= 0); // op: true  // while comparing values js converts null in a number, 0.
console.log(null <= 0); // op: true  // hence last 3 were true true false while the 1st one was false BECAUSE
console.log(null < 0);  // op: flase // CHECKING EQUALITY AND COMPARING WORKS IN TWO DIFFERENT WAYS.


console.log(undefined == 0); // op: flase  // for undefined comparison always gives false.
console.log(undefined >= 0); // op: flase  
console.log(undefined <= 0); // op: flase  
console.log(undefined < 0);  // op: flase 

// === STRICT CHECK

console.log("2" == 2);  // op: true // == while checking the equality converts both into numbers and gives the op

console.log("2" === 2); // op: false // === while checking the equality will give false if the data type is not the same
