let arr = [1,2,3,4,5]

let sum = arr.reduce((prev,curr)=>{
    return prev + curr
},0)

let max = arr.reduce((prev,curr)=>{
    return Math.max(prev,curr)
})
console.log(sum)
console.log(max)

// Implementing
function myreduce(arr,cb,acc){
    for (i = 0; i <arr.length ; i++){
        acc = cb(acc,arr[i])
    }
    return acc
}

sum = myreduce(arr,(prev,curr)=>{return prev+curr},0)
console.log(sum)
max = myreduce(arr,(prev,curr)=>{return Math.max(prev,curr)},0)
console.log(max)
/************ Ending map filter reduce */