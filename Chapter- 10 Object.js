console.log("Hello World😉😉😉")

// Object - It is a special type of array consuming some special property.

// Structure
let obj = {
    Property_Or_key1 : 'Value1',
    Property_Or_key2 : 'Value2',
    Property_Or_key3 : 'Value3',
    Property_Or_key4 : 'Value4',
}

// Let's have fun
Student_Nafe= {
    College: 'NDC',
    Roll : '12406106',
    Group : 'Science-06',
    Batch: 24,
    Class_roll:106
}
console.log(Student_Nafe)

// Accessing a property 'two ways'

/*
objectName.propertyName
objectName["propertyName"]
*/

// Dott Notation
console.log(Student_Nafe.Roll) 
console.log(Student_Nafe.Group) 
console.log(Student_Nafe.Batch) 
console.log(Student_Nafe.Class_roll) 
// Array Notation
console.log(Student_Nafe['Roll']) // Returns an string here...

// Updating Property
// With dott notation
console.log(Student_Nafe.Batch = 2024)
console.log(Student_Nafe.Batch)

// With Array notation
console.log(Student_Nafe['Batch'] = '2k24')
console.log(Student_Nafe)

// Applying Object Methods
/*
objectName.methodName()
*/
/*************** End **************/