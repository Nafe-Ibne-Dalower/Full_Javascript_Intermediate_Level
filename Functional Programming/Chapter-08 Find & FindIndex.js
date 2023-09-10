let arr = [1,2,3,4,5,6,7,8,9]
v = arr.find((value)=>{
    return value == 8
})
console.log(v)
v = arr.findIndex((value)=>{
    return value == 8
})
console.log(v)
// Implement
function myfind(arr,cb){
    for(i=0;i<arr.length;i++){
        cb(arr[i],i,arr)
        if(cb(arr[i])){
            console.log(arr[i])
        }
    }
}
myfind(arr,(value)=>{
    return value == 8
})

console.log(v)
