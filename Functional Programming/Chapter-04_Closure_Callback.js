// /* Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function. Lexical scoping is the process used to define the scope of a variable by its position in the source code.*/
// let g = 5
// function clos(){
//     let a = 10
//     console.log(g)
//     return function(){
//         console.log(a)
//     }
// }
// v = clos()
// v()

// // Callback
// function sample(a,b,cb){
//     c = a + b
//     d = a - b
//     console.log(cb(c,d))
// }

// function add(a,b){
//     return a + b
// }

// function sub(a,b){
//     return a - b
// }

// function multi(a,b){
//     return a * b
// }

// function divide(a,b){
//     return a / b
// }

// sample(10,5,add)
// sample(10,5,sub)
// sample(10,5,multi)
// sample(10,5,divide)
// It is Callback


arr = [1,2,3,4,5]
function formw(v){
    for (i = 0; i < v.length; i++){
        console.log(v[i] , i ,v)
    }
}
formw(arr)