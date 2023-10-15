// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("objArrToSentencesArr", () => {
  it ("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
  expect(objArrToSentencesArr(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
})
})

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }]

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

/* Pseudo code:
name: objArrToSentencesArr
tools:
posiible too string interpolation
possibly use .toUppercase
possiby for lopp or .map to go through the array
goal: is go through the array pull out the name and occupation and return each instance with it's own sentence string interpolated and with the names capitalized
input: is an array of objets
output: An array of sentences
process: map throught the array, split the name at the space, capitalized the first letter of each name, join the firs letter of each name bacj=k to the rest of the name, and interpolate the name and occupation into a sentence
*/
const objArrToSentencesArr = (array) => {
  return array.map((value) => 
   `${value.name.split(" ").map(name =>  
   name.charAt(0).toUpperCase() + name.slice(1)).join(" ")} is ${value.occupation}.`
   )
}
// console.log(objArrToSentencesArr(hitchhikersCharacters))


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("modulosThree", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(modulosThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(modulosThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// Pseudo code:
//name: modulosThree
//tools: .filter, %, typeof
//goal: to return an array of only the REMAINDERS of the numbers when divided by 3.
//input: mixed data array
//output: an array of only the remainders of the numbers when divided by 3
//process:
//use .filter to go through the array and return only the numbers
//use % to get the remainder of the numbers when divided by 3
//return the array of remainders

const modulosThree = (array) => {
  return array.filter(value => typeof value === "number").map(value => value % 3)
}



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubeAndSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(cubeAndSum(cubeAndSum1)).toEqual(99)
    expect(cubeAndSum(cubeAndSum2)).toEqual(1125)
  })
})  
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// Pseudo code:
//name: cubeAndSum
//tools: .map, .reduce, Math.pow or **
//goal: to return the sum of all the numbers cubed
//input: an array of numbers
//output: a number
//process:
//use .map to go through the array and cube each number
//use .reduce to add all the cubed numbers together
//return the sum of all the cubed numbers

const cubeAndSum = (array) => {
  return array.map(value => Math.pow(value, 3)).reduce((acc, value) => acc + value)
}



