console.log("Hello Wolrd😉😉😉")

/************* 

Boolean Values
Very often, in programming, you will need a data type that can only have one of two values, like

YES / NO
ON / OFF
TRUE / FALSE
For this, JavaScript has a Boolean data type. It can only take the values true or false.

*************/
// True
t = true
console.log(t)

// False
f = false
console.log(f)


// truthy and falsy values
// It is not boolean literally but in Js Engine it is declared as truth or false. Then it will be called as truthy or falsy.

// truthy
console.log(Boolean(Number(Infinity)))
console.log(Boolean(Number(+Infinity)))
console.log(Boolean(Number(-Infinity)))

// falsy
/*
' '
0
Null
Undefined
NaN
*/
// And all other values are truthy
/********************* End **********************/