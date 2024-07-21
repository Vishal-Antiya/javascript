const score = 400                 // JS automatically defines the variable as a number.
console.log(score);     // op: 400

const balance = new Number(100);  //you explicitly define that the variable is a number.
console.log(balance);   // op: [Number: 400]

console.log(balance.toString());    // op: 100 --> a its a string now
console.log(balance.toFixed(2));       // op: 100.00 --> imcreases the decimal as you increase the number in the fixed.

const value = 57.87848465
console.log(value.toPrecision(4)); // op: 57.88    //gives you precise value upto the number you mention
console.log(value.toPrecision(3)); // op: 57.9     //so be careful when you use precision
console.log(value.toPrecision(2)); // op: 58       // also the outputs returned are all STRINGS.
console.log(value.toPrecision(1)); // op: 6e+1

const hundreds = 10000000000
console.log(hundreds.toLocaleString());            //op: 10,000,000,000   ---> Default format(millions)
console.log(hundreds.toLocaleString('en-IN'));     //op: 10,00,00,00,000  ---> Indian format(lakhs)


/**************************************************** MATHS ***************************************************/

console.log(Math);
console.log(Math.abs(-4));              //op: 4
console.log(Math.round(4.6));           //op: 5
console.log(Math.ceil(4.2));            //op: 5
console.log(Math.floor(4.8));           //op: 4
console.log(Math.max(4,85,67,41,23));   //op: 85
console.log(Math.min(47,58,65,45,8));   //op: 8

console.log(Math.random());              // will give you a num bw 0 & 1
console.log(Math.random() *10);          // will give you a num bw 0 & 10
console.log((Math.random() *10) +1);     // will give you a num bw 1 & 10

const high = 20;
const low = 10;

console.log(Math.random() * (high - low +1));               // will give you a num bw 0 & high
console.log((Math.random() * (high - low +1)) + low);             // will give you a num bw low & high
console.log(Math.floor ((Math.random() * (high - low +1)) + low));      // will give you an INTEGER bw low & high
