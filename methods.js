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