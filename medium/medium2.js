let userInput = prompt("Please pick a number 1-12!");
if(userInput<0){
     console.log("please choose a number between 1-12")
} if(userInput>12){
    console.log("please choose a number between 1-12")
}

let months=["January", "February", "March", "April","May","June","July","August","September","October","November","December"]
let trueMonth= (userInput -1)
    console.log(months[trueMonth])
