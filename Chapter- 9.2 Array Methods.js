console.log("Hello World😉😉😉")
// Array methods
/*
Array length
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()
Array reverse()
*/

// Type - 00
myArray = [1, 2, 3, 4, 5]
console.log(myArray.length)
console.log(myArray.reverse())

// Type - 01
console.log(myArray.toString()) // Converts array to string
myArray = [1, 2, 3, 4, 5]
console.log(myArray.join()) // Converts array to string.


// Type - 02
myArray = [1, 2, 3, 4, 5]
console.log(myArray.pop())  // removes the last element from an array
console.log(myArray.push(6)) // adds a new element to an array (at the end) then  returns the new array length
console.log(myArray)
myArray = [1, 2, 3, 4, 5]
console.log(myArray.shift())   // equals to pop
console.log(myArray.unshift()) // adds an element at the beginning and returns the length of the array

// Type - 03
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10]
console.log(arr1.concat(arr2)) // Concats two array

const arr3 = [[1, 2, 3],[4, 5]]
console.log(arr3.flat()) // Flattening an array is the process of reducing the dimensionality of an array.

const arr4 = [1, 2, 3, 4, 5]
delete arr4[0]; // Using delete leaves undefined holes in the array. Use pop() or shift() instead.
console.log(arr4[0])

// Type - 04
// Splicing & Slicing

// Splicing
arr5 = [1,2,3,4,6]
console.log(arr5.splice(4,4)) // Removing Data
console.log(arr5)
console.log(arr5.splice(3,3,5)) // adding new items to an array by removing an element
console.log(arr5)

// Slice()
arr6 = ['Bangladesh','India','Russia','China','America']
ForeignCountry = arr6.slice(1) // The slice() method slices out a piece of an array. [It starts count from 1.]
console.log(ForeignCountry)
/***************** End *****************/