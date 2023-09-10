let arr = [1,2,3,4,5,6,7,8,9,10]
let filteredArr = arr.filter(function(value){
    return value % 2 === 0
})
// console.log(filteredArr)

function myFilter(arr,cb){
    filterEd = []
    for(i = 0; i < arr.length;i++){
        if (cb(arr[i],i,arr)){
           filterEd.push(arr[i]) 
        }
    }
    return filterEd
}
console.log(myFilter(arr,(value)=>{
    return value > 4
}))
console.log(arr)

