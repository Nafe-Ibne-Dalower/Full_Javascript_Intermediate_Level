console.log("Hello World😉😉😉")
// JavaScript Math Methods
/*
Method	                               Description
abs(x)	                               Returns the absolute value of x
acos(x)	                               Returns the arccosine of x, in radians
acosh(x)	                           Returns the hyperbolic arccosine of x
asin(x)	                               Returns the arcsine of x, in radians
asinh(x)	                           Returns the hyperbolic arcsine of x
atan(x)	                               Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	                           Returns the arctangent of the quotient of its arguments
atanh(x)	                           Returns the hyperbolic arctangent of x
cbrt(x)	                               Returns the cubic root of x
ceil(x)	                               Returns x, rounded upwards to the nearest integer
cos(x)	                               Returns the cosine of x (x is in radians)
cosh(x)	                               Returns the hyperbolic cosine of x
exp(x)	                               Returns the value of Ex
floor(x)	                           Returns x, rounded downwards to the nearest integer
log(x)	                               Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)	               Returns the number with the highest value
min(x, y, z, ..., n)	               Returns the number with the lowest value
pow(x, y)	                           Returns the value of x to the power of y
random()	                           Returns a random number between 0 and 1
round(x)	                           Rounds x to the nearest integer
sign(x)	                               Returns if x is negative, null or positive (-1, 0, 1)
sin(x)	                               Returns the sine of x (x is in radians)
sinh(x)	                               Returns the hyperbolic sine of x
sqrt(x)	                               Returns the square root of x
tan(x)	                               Returns the tangent of an angle
tanh(x)	                               Returns the hyperbolic tangent of a number
trunc(x)	                           Returns the integer part of a number (x)
*/

// Operations
console.log(Math.E)        // returns Euler's number
console.log(Math.PI)       // returns PI
console.log(Math.pow(2,5)) // returns 2 to the power 5
console.log(Math.pow(5,10)) // returns 2 to the power 5
console.log(Math.SQRT2)    // returns the square root of 2
console.log(Math.SQRT1_2)  // returns the square root of 1/2
console.log(Math.LN2)      // returns the natural logarithm of 2
console.log(Math.LN10)     // returns the natural logarithm of 10
console.log(Math.LOG2E)    // returns base 2 logarithm of E
console.log(Math.LOG10E)   // returns base 10 logarithm of E

a = 10.56
console.log(Math.abs(-10))  //  Returns the absolute (positive) value 
console.log(Math.ceil(a))   // 	Returns rounded up to its nearest integer
console.log(Math.floor(a))  // 	Returns rounded down to its nearest integer
console.log(Math.round(a))  //  Returns rounded to its nearest integer
console.log(Math.trunc(a))  //  Returns the integer part 

console.log(Math.max(100,200))
console.log(Math.min(100,200,400))

console.log(Math.random() * 50 + 1) // Returns Random Value between 1 to 50