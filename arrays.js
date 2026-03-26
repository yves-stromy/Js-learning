//.map()- its used to transform every item in an array into something new
let numbers=[2,5,7,9,10,12]
let doubled=numbers.map((num)=>{
    return num *2
})
console.log(doubled)

let names=["john","mark","mary"]
let upperNames=names.map((name)=>{
    return name.toUpperCase()
})
console.log(upperNames)

//.filter()- is used to select items that meet a condition
let marks=[70,60,75,55,40,35]
let passedStudents=marks.filter((mark)=>{
    return mark>=50
})
console.log(passedStudents)

let fruits=["apple","banana","avocado","orange"]
let aFruits=fruits.filter((fruit)=>{
    return fruit.startsWith("a")
})
console.log(aFruits)

//.find()- it's used to get the first item that matches a condition
let scores=[30,50,66,64,23]
let result=scores.find((score)=>{
    return score>30
})
console.log(result)

let students=["lisa","joe","james","brian"]
let nameLength=students.find((student)=>{
    return student.length>4
})
console.log(nameLength)
