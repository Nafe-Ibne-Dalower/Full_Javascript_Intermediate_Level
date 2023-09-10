// Recursion
function sum(n){
    if(n===1){
        return 1
    }
    return n +  sum(n-1)
}
console.log(sum(100))

// factorial calculator
function factorial(n){
    if(n===1){
        return 1
    }
    return n * factorial(n-1)
}
console.log(factorial(100))

/************ End ************/