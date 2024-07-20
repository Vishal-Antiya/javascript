const name = "vishal"
const repoCount = 50

// console.log(name + repoCount + " Value"); // Do not use this. Instead use...

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vishal-antiya')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);         //these are some in-built js methods you can do on strings //check MDN docs.
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2));      // op: s
console.log(gameName.indexOf('t'));   // op: 9
console.log(gameName.split('-'));     // op: [ 'vishal', 'antiya' ]


const newString = gameName.substring(0, 7)
console.log(newString);               // op: vishal-

const anotherString = gameName.slice(-13, 4)
console.log(anotherString);           // op: vish

const newStringOne = "   vishal    "
console.log(newStringOne);            //op: '   vishal    '
console.log(newStringOne.trim());     //op: vishal      cuts off the extra spaces that people may add in the forms in the website for eg

const url = "https://vishal.com/vishal%20antiya"

console.log(url.replace('%20', '-'))    // op: https://vishal.com/vishal-antiya

console.log(url.includes('sundar'))     // op: flase

