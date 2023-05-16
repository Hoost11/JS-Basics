function depositCalculator(input){
let depositSum = Number(input[0])
let depositPeriod = Number(input[1])
let annualInterest = Number(input[2])

let monthlyInterest = annualInterest / 100

let sum = depositSum + depositPeriod * ((depositSum * monthlyInterest) / 12)

console.log(sum)
}

depositCalculator(["200", "3", "5.7"])