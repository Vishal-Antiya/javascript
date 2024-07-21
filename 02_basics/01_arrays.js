// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(5, 4, 3, 2, 1)
console.log(myArr2[1]);

// Array methods

myArr.push(6)
myArr.pop()
myArr.push(7)
console.log(myArr);

myArr.unshift(9)    //inserts new elements at the start of an array, and returns the new length of the array.
console.log(myArr);

myArr.shift()       // Removes the first element from an array and returns it. If the array is empty, undefined is returned 
console.log(myArr);

console.log(myArr.includes(9));  //will check if the value is in the array or not.
console.log(myArr.indexOf(3));   //will give the index of the value you gove

const newArr = myArr.join()     //Adds all the elements of an array into a string

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);       // op: 'A  [ 0, 1, 2, 3, 4, 5 ]'

const myn1 = myArr.slice(1, 3)  // gives an array that includes the 1st to 3rd element.(3rd excluded)

console.log(myn1);  // op: [ 1, 2 ].

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);               // myn2 includes element 1st to 3rd(3rd included).
console.log("C ", myArr);        // But the elements in myn2 are removed from myArr 
