// Higher Order Function

/**
 * Passing function as an Argument
 * returning function from another function
 */
function add(a,b){
    return a + b
}
function manipulate(a,b,func){
    let c = a + b
    let d = a - b

    function multiply(){
        let m = func(a,b)
        console.log(c*d*m)
    }
    return multiply
}
vf = manipulate(5,4,add)
console.log(vf)
vf()

// returning function from another function
function add(a,b){
    return a + b
}
function manipulate(a,b,func){
    let c = a + b
    let d = a - b
    return function(){
        let m = func(a,b)
        console.log(c*d*m)
    }
}
vf = manipulate(5,4,add)
console.log(vf)
vf()

/************************ End ************************/