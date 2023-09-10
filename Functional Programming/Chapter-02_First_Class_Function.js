// First Class Function

/**
 * 1.which can be stored in variable
 * 2. which can be stored in Array
 * 3. which can be stored in Object
 * 4. have the opportunity to create function anywhere
 * 5. pass function as an argument
 * 6. return function from another function
 */

// Storing in a variable
function add(a,b){
    console.log(a+b)
}

let funcVar = add 
add(5,5)
funcVar(5,5)
console.log(typeof(funcVar))

// Storing in a array
let arr = []
arr.push(add)
arr[0](5,8)

// Storing in a Object
var obj = {
    sumObj : add
}

console.log(obj)
obj.sumObj(8,8)

// Creating Function anywhere
setTimeout(function(){
    console.log("I am created in another function")
},2000)

/*************************** Then Js Functiona is a 'First Class Function' ************************** */