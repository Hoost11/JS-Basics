function cleverLily(input){

    let age = Number(input[0])
    let washerPrice = Number(input[1])
    let pricePerToy = Number(input[2])
    let bdMoney = 10
    let totalSaved = 0

    for (let curBd = 1; curBd <= age; curBd++){
        if (curBd % 2 == 0){
            totalSaved += (bdMoney - 1)

            bdMoney += 10
        }
        else {
            totalSaved += pricePerToy
        }
    }
    if (totalSaved >= washerPrice){
        let moneyLeft = totalSaved - washerPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)}`)
    } else {
        let sumNeeded = washerPrice - totalSaved
        console.log(`No! ${sumNeeded.toFixed(2)}`)
    }




}
cleverLily(["10", "170.00", "6"])