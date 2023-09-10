function greet(name,message){
    console.log(`Hello ${name}`)
    function satHel(){
        console.log(`${message}`)
    }
    return satHel()
}

greet("Nafe","I am fine")
