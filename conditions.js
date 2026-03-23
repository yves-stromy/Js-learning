//conditional statements are used to make decisions in code based on conditions
 //if statement- it runs only if the condition is true

 let age=19
 if(age>=18){
    console.log(" You're an adult.")
 }
// else statement-runs only if the condition is false
let citizenAge=18
if(citizenAge>=18){
   console.log("You can vote, you're an adult")
} else{
   console.log(" You can't vote, you're a minor")
}
 
//else if - they allow us to check multiple conditions (if will always be first)
let score=75
if( score>=80){
   console.log(" grade A")
}
else if( score>=70){
   console.log( " grade B")
}
else if ( score>=60) {
   console.log( " grade C")
}
else if ( score>=50){
   console.log(" grade D")
}
else{
   console.log( fail)
}

//switch statement- it's used when checking specific value
let amount=10000
switch( amount){
   case 500:
      console.log(" small pizza")
      break
   case 800: 
      console.log( " medium pizza")
      break
   case 1200:
      console.log(" large pizza")  
      break
   default:
      console.log( " sorry, we only offer small, medium and large pizza.")   
}
