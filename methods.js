//string methods
let message="Hello World"
console.log( message)
//.length
console.log( message.length)
//.toUpperCase()-converts the text to uppercase
console.log(message.toUpperCase())
//,toLowerCase()-coverts the text to lowercase
console.log(message.toLowerCase())
//.includes-to check if a string contains a certain text
console.log(message.includes("Hello"))
//.replace-It replaces a section of a text
console.log(message.replace("World","Kenya"))

//array methods
let fruits=["apple","banana","mango"]
//.push-adds a new item at the end of an array
fruits.push("orange")
console.log(fruits)
//.unshift-It adds a new item at the beginning of an array
fruits.unshift("pineapple")
console.log(fruits)
//.pop()-It removes the last item from the array
fruits.pop()
console.log(fruits)
//.shift()-It removes the first item from the array
fruits.shift()
console.log(fruits)
//.includes-it checks if an array contains a value or item 
console.log(fruits.includes("apple"))
//.length-returns the number of items in an array
console.log(fruits.length)

//indexing-it's used to access a specific element using they're position
let students=["mary","john","grace","mark"]
console.log(students)
//indexing starts from zero
console.log(students[0])
console.log(students[1])
console.log(students[2])
console.log(students[3])
console.log(students[4])

let language="javascript"
console.log(language)
console.log(language[0])
console.log(language[5])

//object methods
let employee={
    name:"sara",
    role:"developer",
    salary:50000
}
console.log(employee)
//Objects.keys()-it returns all the keys
console.log(Object.keys(employee))
//Objects.values()- returns all the values
console.log(Object.values(employee))

//Object.entries()- returns keys and values together
console.log(Object.entries(employee))

let user={
    username:"john doe",
    age: 34,
    email:"johndoe@gmail.com"
}
console.log(user)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
