console.log("Hello World😉😉😉")

// Function Expression is a way to store a function in a variable.
var addAll = function(){
    temp = Number(' ')
    for(i = 0;i < arguments.length; i++){
        temp += arguments[i]
    }
    console.log(temp)
}
addAll(10,10)

// Use of it
setTimeout(function(){
    console.log("I will print after 5 seconds...")
},5000)

// Node js is an 'Asynchoronous System'

// Inner function or Nested function
// Function in a function
function func1(name,roll){
    console.log(`User's name is ${name}`)
    function func2(){
        console.log(`Roll ${roll}`)
    }
    func2()
}

func1("Nafe",12406106)
/************** End **************/