//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFood(person) {
    for(key in person) {
        if (key == "shakes"){
            console.log(`My favorite ${key} are`);
            for(store in person[key][0]){
                console.log(`${person[key][0][store]} in ${store}`);
            }
        }
        else {
            console.log(`My favorite ${key} are ${person[key]}`);
        }
    }
}

favoriteFood(person3)
 
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age){
// Create our Person Prototype
    this.name = name;
    this.age = age;
// Use an arrow to create the printInfo method
    this.printInfo = () => {
        return `${this.name} is ${this.age} years old.`
    }
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age
    this.addAge = (age) => {
        this.age++;
    }
}

let person1 = new Person('Tom Holland', 25);
console.log(person1.printInfo());
person1.addAge();
person1.addAge();
person1.addAge();
console.log(person1.printInfo());
let person2 = new Person("Max Charles", 18);
console.log(person2.printInfo());
person2.addAge();
person2.addAge();
person2.addAge();
console.log(person2.printInfo());

// =============Exercise #3 ============/
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const checkString = (a_string) => {
    return new Promise((resolve, reject) => {
        if(a_string.length > 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
} 

checkString("Javascript")
.then (
    (result) => {console.log("Big word")}
)
.catch (
    (error) => {console.log("Small Number")}
)

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 
// with the exponent ranging from 0 to n (inclusive).
function powerOfTwo(n) {
    const result = [];
    for (let i=0; i<n+1; i++){
        result.push(2**i)
    }
    return result;
}

console.log(powerOfTwo(2));
console.log(powerOfTwo(4));

//In this kata you will create a function that takes a list of non-negative integers and strings 
//and returns a new list with the strings filtered out.
//filter_list([1,2,'a','b']) == [1,2]
//filter_list([1,'a','b',0,15]) == [1,0,15]
//filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    // Return a new array with the strings filtered out
    let newlist = l.filter(function isNumber(list) {
      return typeof(list) == "number";
    });
    return newlist
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));