// FOR LOOP
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}

//WHILE LOOP
let i = 0;
while (i <= 10) {
    console.log(i);
    i = i + 1;
}

//DO WHILE LOOP
do{
    console.log(i);
    i++
  }while(i <= 10)

//FOR-OF LOOP
dcheroes = [ "flash", "superman", "batman", "green-lantern"]
for(const dc of dcheroes) {
    console.log(`DC heroes are ${dc}`);
}

//MAPS DECLARATION
const anime = new Map
    anime.set('JBA', "Jojos Bizzare Adventures")
    anime.set('OPC', "One Piece")
    anime.set('NAR',"Naruto")
    anime.set('BLE', "Bleach")
//MAPS ITERATION USING FOR-OF LOOP 
for(const [key, value] of anime){
    console.log(key + " | " + value );
}



//FOR-IN LOOP _(iterates on objects, arrays.)_
const myObj = {
    name: "Vishal",
    age: "20",
    email: "laijdsfvn@google.com",
    hobby: "drawing, coding"
}
for (const key in myObj){
    console.log(key);//op: name age email hobby
    console.log(myObj[key]); //op: values aayegi isme.
}

let prog = ["java", "cpp", "python", "javascript", "c"]
for (const momos in prog){
    console.log(momos);//op: 0 1 2 3 4 5
    console.log(prog[momos]); //op: values aayegi isme.
}
// FOR-IN LOOP Map me nai chalta coz map is not iterable like object nd arrays.
// Arrays pe for-in, for-of dono loop chalte hai.
// Objects pe for-of loop nai chalta, usko iterate krne k liye for-in loop lagana padta hai.



 // forEach loop: (only for arrays.) // also called a call back function
//  forEach loop k function me koi bhi value return karega toh uska answer undefined hi ayega.
const op = ["luffy", "nami", "zoro", "sanji","robin","brook","franky","chopper","ussop"]
op.forEach( function (items) {
    console.log(items);
})
console.log("Members of Mugiwara no Luffy:-");
op.forEach( (items) => {
    console.log(items);
})

// arrays with objects as elemnts-
const mugiwaraTeam = [
    {
        name: "Luffy",
        power: "devil fruit and haki user",
        age: 19
    },
    {
        name: "Brook",
        power: "devil fruit user",
        age: 500
    },
    {
        name: "chopper",
        power: "devil fruit user",
        age: 14
    },
    {
        name: "robin",
        power: "devil fruit user",
        age: 35
    },
    {
        name: "zoro",
        power: "haki user",
        age: 25
    }
]
mugiwaraTeam.forEach( (value) => {
    console.log(`Member name:-${value.name}  & their Power:-${value.power}`);
} )

//array.filter is another method like forEach that can be used to filter through the arrays.
// also a call back function.
const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newnums = numList.filter ( function (nums) {
    return nums <= 7 ;
} )
console.log(newnums);

// now we will use filter method on the mugiwaraTeam array
const devilFruitUsers = mugiwaraTeam.filter( (guys) => { 
    return guys.power === "devil fruit user" && guys.age >=22
})
console.log(devilFruitUsers);

// we can do the same thing with forEach method as well heres how
let youngMembers = []
mugiwaraTeam.forEach( (guys) => {
    if (guys.age <= 25){
        youngMembers.push(guys.name)
    }
} )
console.log(youngMembers);

// array.map is another call back function
const numbers = [1,2,3,4,5,6,7,8,9,10]
const newNumbers = numbers.map( (nums) => nums + 10)
console.log(newNumbers);

// chaining means that you can apply methods on an array back to back.
// the second method will recieve first methods output as input.

const newerNums = numbers.map((nums)=> nums * 10 )
                         .map((nums) => nums + 5 )
                         .filter((nums) => nums >= 50 )
console.log(newerNums);


// array.reduce is another call back function with a little different syntax.

const numnums = [1,2,3,4,5]
let initialValue = 0
const NumNumNum = numnums.reduce( function(accumulative, currentValue) {
    return accumulative + currentValue;
},initialValue)

console.log(NumNumNum);

// easier way to write the above code.

const NumNum = numnums.reduce( (acc, cur) => (acc + cur) ,0)
console.log(NumNum);

// array.reduce on array with objects as elements

const shoppingCart = [
    {
        course: "java",
        price: 2999
    },
    {
        course: "javascript",
        price: 3999
    },
    {
        course: "python",
        price: 999
    },
    {
        course: "cp",
        price: 1499
    }
]

const bill = shoppingCart.reduce( (acc, item) => (acc + item.price) ,0 )
console.log(bill);