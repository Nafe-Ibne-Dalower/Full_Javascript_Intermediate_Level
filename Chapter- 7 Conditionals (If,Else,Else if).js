console.log("Hello World😉😉😉")

/*
Very often when you write code, you want to perform different actions for different decisions.
conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed
*/

// ✨✨✨ Conditionals: It takes some conditions and apply it.
// There are many types of conditionals in python
// if, else if ,else, switch are those conditionals.


a = 20
b = 20

// Practice - 01
if (a>b){
    console.log('a is getter than b...')
}

else if (a<b){
    console.log('a is less than b...')
}

else{
    console.log('They are equal...')
}

// Practice -02
num = 10
if (num%2==0){
    console.log('Even')
}else{
    console.log('Odd')
}

// Ternary Operator
// Structure ---- condition ? 'True Side':'False Side'
n = 10
console.log(n%2==0 ? 'Even' : 'Odd')

// Switch
// Use the switch statement to select one of many code blocks to be executed.

/*

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

*/

a = 'NDC'
switch(a){
    case 'RBM':
        console.log("This is Nafe's School...")
        break
    case 'NDC':
        console.log("This is Nafe's College...")
        break
    default:
        console.log('Unknown School')
        break
}


/********************* End *********************/