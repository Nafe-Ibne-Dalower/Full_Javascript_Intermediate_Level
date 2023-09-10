// What is pure function
/**
 * Returns a constant value for a specified varible
 * Don't causes any observable side effect
 */

// Square Function
function sqr(n){
    console.log(n*n)
}
sqr(2)
sqr(2)
sqr(4)
sqr(4)
sqr(6)
sqr(6)

// Understanding Side Effect
let n = 10
function change(){
    n = 10*10
}
change() // Side Effect so it is not a pure function
console.log(n)


let std = {
    Student1:"Nafe",
    Student2:"Jimam"
}
console.log(std.Student1)
console.log(std.Student2)
function objChanger(std){
    std.Student1 = "Jimam",
    std.Student2 = "Nafe"
}
objChanger(std)
console.log(std)
objChanger(std)
console.log(std)
