const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


marvel_heros.push(dc_heros)
console.log(marvel_heros);            //op: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]);      //op: flash


const allHeros = marvel_heros.concat(dc_heros)  
console.log(allHeros);                //op: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);           //op:   [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const very_new_heroes = [marvel_heros, dc_heros]
console.log(very_new_heroes);         //op:  [ ['thor', 'Ironman', 'spiderman'], 
                                      //       [ 'superman', 'flash', 'batman'] ]
/*
'...' add krne se concatinate hoga and nikal doge toh 3 dimensional array ban jayega.
for eg: [...marvel_heros, dc_heros], iska output ayega line 5 jesa
*/


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) 
// instead of infinity you can add the depth until which you want to flatten the array
console.log(real_another_array);    //op: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]


console.log(Array.isArray("Vishal"))       //op: false. checks if vishal is an array.
console.log(Array.from("Vishal"))          //op: [ 'V', 'i', 's', 'h', 'a', 'l' ].  makes an array out of the string vishal.
console.log(Array.from({name: "hitesh"}))  //op: [] . In this case you have to specify if u want to make an array out of 
                                           //  keys or out of the values. otherwise it returns an empty array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //op: [ 100, 200, 300 ]. Returns a new array from a set of elements.

