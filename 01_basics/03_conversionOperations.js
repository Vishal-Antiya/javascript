let score = null
console.log(typeof score); //string

let numberScore = Number(score)

console.log(typeof numberScore); //number
console.log(numberScore);

/*
previous value => converted value
"33" => 33
"vishal" => NaN (Not a Number)
"33abc" => NaN
null => 0
undefined => NaN
*/

let value = undefined;

let booleanValue = Boolean(value);

console.log(typeof booleanValue);
console.log(booleanValue);

/*
previous value => converted value
1 => true; 0 => false
"" => false
"vishal" => true
null => false
undefined => false
*/

/***************OPERTIONS************************/

let val = 3;
negval = -val
console.log(negval); //-3 

// console.log(2 + 2);  ADD
// console.log(2 - 2);  SUBTRACT
// console.log(2 * 2);  MULTIPLY
// console.log(2 / 2);  DIVIDE
// console.log(2 % 2);  REMAINDER
// console.log(2 ** 5); 2 TO THE POWER OF 5


let str1 = "hello";
let str2 = " vishal";

let str3 = str1 + str2; // adds 2 strings together
console.log(str3);

console.log("1" + 2);     //op = 12
console.log(1 + "2");     //op = 12
console.log("1" + 2 + 2); //op = 122
console.log(1 + 2 + "2"); //op = 32

console.log( +true);   //op = 1. converts true to number.
// console.log(true+); //error. cannot compute