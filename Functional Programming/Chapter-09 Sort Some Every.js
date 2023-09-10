// sort some every '3' Important Array Methods...
const person = [
  {
    name: "A",
    age: 24,
  },
  {
    name: "B",
    age: 19,
  },
  {
    name: "C",
    age: 26,
  },
  {
    name: "D",
    age: 20,
  },
];

var arr1 = [1, 2, 3, 4, 5, 6, 9, 8, 1, 3, 4, 3];
var arr2 = [-1, -2, -3, 0, 4, 5, 6, 9, 8, 1, 3, 4, 3];
console.log(arr1.sort());
console.log(
  arr2.sort((a, b) => {
    if (a > b) {
      return 1; // for reversing -1
    } else if (a < b) {
      return -1; // for reversing +1
    } else {
      return 0;
    }
  })
);

console.log(
  person.sort((a, b) => {
    if (a.age > b.age) {
      return 1; // for reversing -1
    } else if (a.age < b.age) {
      return -1; // for reversing +1
    } else {
      return 0;
    }
  })
);

// every
let evarr = [12,3,5,6,-6,0]
console.log(evarr.every((value)=>{
    return value >= 0
}))

// some
let somearr = [12,-3,-5,-1,-6,-7]
console.log(somearr.some((value)=>{
    return value >= 0
}))

/******************* End *******************/