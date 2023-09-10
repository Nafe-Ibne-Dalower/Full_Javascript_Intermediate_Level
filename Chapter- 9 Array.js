console.log("Hello World😉😉😉")

// It is an impressive display or range of a particular type of thing.
// An array is a data structure, a special variable, which can hold more than one value.
// Array Declrataion
let array = [1, 2, 3, 4,5] // literal
array = new Array(1, 2, 3, 4, 5) // Using constructor

console.log(array)
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array.length) // knowing the length


let arr = [1, 2, 3, 4,5] // literal
arr[6] = 6
arr[10] = 10
console.log(arr)
console.log(arr[7])
console.log(arr.length) // knowing the length
  
// Traversing
let ar = [2,4,6,8,10]

for(i = 0; i < ar.length; i++){
    console.log(ar[i])
}

for(i = 0; i < ar.length; i++){
    console.log(ar[i] * 2)
}

// Adding all the values of an array
let ar1 = [2,4,6,8,10]
sum = 0
for(i = 0; i < ar1.length; i++){
    sum += ar1[i]
}
console.log(sum)

/****************** End ******************/