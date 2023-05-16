function yardGreening(input){
let squareMeterPrice = 7.61
let yardGreeningPrice = Number(input[0]) * squareMeterPrice
let discount = yardGreeningPrice * 0.18
let finalPrice = yardGreeningPrice - discount

console.log(`The final price is: ${finalPrice} lv.`)
console.log(`The discount is: ${discount} lv.`)

}
yardGreening(["550"])