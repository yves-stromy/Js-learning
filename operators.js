//operators are symbols used to perform operations on values or variables
//arithmetic operators-used for mathematical calculations

let a=10
let b=3
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)//remainder
console.log(a**b)//a to power b 

//comparison operators- they compare values and return true or false

let x=7
let y=9
console.log(x>y)// greater than 
console.log(x<y)// less than 
console.log(x>=y) //greater than or equal to
console.log(x<=y) //less than or equal to
console.log(x==y)// equal to
console.log(x!=y) //not equal to

//logical operators- used to combine conditions.

// the and operator- all the conditions must be true( &&)
let age=20
let hasId=false
console.log(age>=18 && hasId)

//or operator- atleast one condition must be true (||)
let studentAge=16
let hasParentPermission=true
console.log(studentAge>=18 || hasParentPermission)

// increment and decrement- used to increase or decrease the value by 1
let num=10
num++
console.log(num)
let j=8
j--
console.log(j)

//string operator- we use the plus sign to combine strings
let firstName="john"
let lastName="doe"
let fullName=firstName+" " +lastName
console.log(fullName)
