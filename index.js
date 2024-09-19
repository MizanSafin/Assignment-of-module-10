// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference(num1, num2) {
  return num1 - num2
}


let num1 = 1000;
let num2 = 100;
document.querySelector(
  ".display"
).innerHTML += `<li>The difference between ${num1} and ${num2} is ${calculateDifference(
  num1,
  num2
)}</li>`

// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(number) {
  let result = number % 2 === 0 ? false : true
  return result
}

let number = 10
document.querySelector(
  ".display"
).innerHTML += `<li>The number ${number} is odd  ? Ans :  ${isOdd(number)}</li>`

// 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(arr) {
  return Math.min(...arr)
}

let numbersArr = [7, 4, 2, 10]
document.querySelector(
  ".display"
).innerHTML += `<li>The minimum number from array ${numbersArr} is :  ${findMin(
  numbersArr
)}</li>`

// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numsArr) {
  let result = numsArr.filter((num) => num % 2 === 0)
  return result
}

document.querySelector(
  ".display"
).innerHTML += `<li>The even numbers from array ${numbersArr} is :  ${filterEvenNumbers(
  numbersArr
)}</li>`

// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(numbersArr) {
  let result = numbersArr.sort((a, b) =>  a - b).reverse()
  return result
}

document.querySelector(
  ".display"
).innerHTML += `<li>sorted in descending order number from  the array ${numbersArr} is :  ${sortArrayDescending(
  numbersArr
)}</li>`

// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
let str = "APPLE&ORANGE"
function lowercaseFirstLetter(str) {
  let result = str[0].toLowerCase() + str.slice(1, str.length)
  return result
}

document.querySelector(
  ".display"
).innerHTML += `<li>The first letter lowercased of the string ${str} is :  ${lowercaseFirstLetter(
  str
)}</li>`;






// 7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    
    return str.split("").filter(char => vowels.includes(char)).length;
}

document.querySelector(
  ".display"
).innerHTML += `<li>Number of vowels found in the string ${str} is :  ${countVowels(
  str
)}</li>`;


// 8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.


function findAverage(numbersArr){
    let total = numbersArr.reduce((acc,value)=>{
         return acc + value
    },0);

    let result =  total/numbersArr.length;
    return result.toFixed(2);
}

document.querySelector(
  ".display"
).innerHTML += `<li>The average of all numbers ${numbersArr} is :  ${findAverage(
  numbersArr
)}</li>`