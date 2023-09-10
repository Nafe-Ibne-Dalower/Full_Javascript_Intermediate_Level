console.log("Hello World😉😉😉")
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

/*
Structure:
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
name(argument1, argument2, argument3)
*/

// Let's build an function which can add
function add(a,b){
    console.log(a + b)
}
add(10,20)

// Let's build an function which can substract
function subs(a,b){
    return a - b
}
console.log(subs(20,10))

// Another Practice
function addnum(){
    temp = Number(' ')
    for(i = 0;i < arguments.length; i++){
        temp += arguments[i]
    }
    console.log(temp)
}

addnum(10,10,10)
/************* End *************/