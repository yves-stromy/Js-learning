//a function is a block of code designed to perform a specific task
// a function cannot run unless it is called
function greet(){
    console.log("hello")
}
greet()

// functions with parameters or variables
function greetUser(name){
console.log("hello " +name)
}
// argument- exact value passed inside a function
greetUser("john")
greetUser("mary")
greetUser("mike")

function add(x,y,z){
    console.log(x+y+z)

}
add(12,6,50)

//function with return values
function totalPrice(price,quantity){
    return price*quantity
}
let amount=totalPrice(1000,6)
console.log(amount)

function area(length,width){
    return length*width
}
let result=area(20,60)
console.log(result)

// function with conditional statements
function checkAge(age){
    if(age>=18){
        console.log("you're an adult")
    }
    else{
        console.log("you're a minor")
    }
}
checkAge(20)
checkAge(11)

//function with default parameter
function greetings(name="guest"){
    console.log("hello "+name)
}
greetings()
greetings("benjamin")
