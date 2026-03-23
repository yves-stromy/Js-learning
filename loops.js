//loop are used to repeat code multiple times instead of writing it again and again 
 //for loop- it's used when you know how many times you want to run the loop
// for(initialization;condition;increment){}
for(let i=1;i<=50;i++ ){
    console.log(i)
}

//while loop- it's used when you don't know how many times the loop will run - variable while(variable<=value)
let x=10
while( x<=30){
    console.log( x)
    x++
}

// do..... while- runs atleast once even if the condition is false
let y=6
do{ console.log( y)
    y++
}
while( y<=12)

    //looping through an array
let products=["laptops","headphones","moniters"] 
  console.log( products) 

  for(let product of products ){
    console.log(product)
  }

 // break- it stops the loop early
 for( let a=1;a<=5;a++) {
   if(a==3) break
   console.log(a)
 }

 let numbers=[10,20, 30,40,50]
for( let num of numbers) {
  if( num==30){
    console.log( "found it")
    break
  } 
}
// continue- it skips one alteration 
let data=[ 10, -5,7,20,-6]
for( let num of data){
    if( num<0)continue
   console.log( num)    
}