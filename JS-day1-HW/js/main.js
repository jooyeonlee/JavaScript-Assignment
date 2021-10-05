//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(a_string, dogname){
    //Your code goes here
    for(let i=0; i<dogname.length; i++){
        if (a_string.includes(dogname[i]))
            return "Matched dog_name:" + dogname[i]
    }
    return "No Matches"
}

//Call method here with parameters
console.log(findWords(dog_string, dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    for(let i=0; i<arr.length; i++){
        if( i % 2 == 0){
            arr.splice(i,1,"even index");
        }
    }
    return arr
}

console.log(replaceEvens(Given_arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    // Return your answer
    return (l==w) ? l*w : 2*l+2*w
};

console.log(areaOrPerimeter(4, 4))
console.log(areaOrPerimeter(6, 10))

/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.*/

function squareDigits(num){
    let myFunc = number => Number(number);
    var intArr = Array.from(String(num), myFunc)
    for (let i=0; i<intArr.length; i++){
      intArr[i] = intArr[i]**2
    }
    return Number(intArr.join(""))
  }

  console.log(squareDigits(3212))
  console.log(squareDigits(2112))