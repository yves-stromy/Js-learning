//promise-a promise is a js object that represents a value that will be available now later or never

const myPromise=new Promise((resolve,reject)=>{
const success=true
if(success){
    resolve("promise resolved")
}else{
    reject("promise rejected")
}
})
myPromise
.then((message)=>console.log(message))// this executes if the promise is a success
.catch((error)=>console.log(error))// this executes when the promise is not a success

const checkExamScore=new Promise((resolve,reject)=>{
    const score=75
    if(score>=50){
        resolve("congrats you passed the exam!")
    }else{
        reject("sorry, you failed the exam")
    }
})
checkExamScore
.then((message)=>console.log(message))
.catch((error)=>console.log(error))