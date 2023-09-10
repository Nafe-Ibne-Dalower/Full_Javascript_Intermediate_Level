var arr = [1,2,3,4,5]

let sqrarr = arr.map(function(value){
    return value * value
})
console.log(arr)
console.log(sqrarr)

// Creating Our Map
function myMap(arr,cb){
    newArr = []
    for(i=0;i<arr.length;i++){
        temp = cb(arr[i],i,arr)
        newArr.push(temp)
    }
    return newArr
}

mapme = myMap(arr,(value)=>{
    return value * value
})
console.log(mapme)