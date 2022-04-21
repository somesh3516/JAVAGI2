let tomHeight=9
let tomMass=8
let jerryHeight=10
let jerryMass=45
let tomBMI= tomMass/(tomHeight * tomHeight)
let jerryBMI= jerryMass/(jerryHeight* jerryHeight)
console.log(tomBMI, jerryBMI)
let nope= jerryBMI<tomBMI
console.log(`Is Tom's BMI higher than Jerry's? ${nope}`)