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
