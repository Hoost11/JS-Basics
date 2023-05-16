function toyShop(input){

    let tripPrice = Number(input[0])
    let puzzleCount = Number(input[1])
    let dollCount = Number(input[2])
    let bearCount = Number(input[3])
    let minionsCount = Number(input[4])
    let carsCount = Number(input[5])

    let toysPrice = (2.60 * puzzleCount) + (3 * dollCount) + (4.10 * bearCount) + (8.20 * minionsCount) + (2 * carsCount)
    let toyCount = puzzleCount + dollCount + bearCount + minionsCount + carsCount

    if (toyCount >= 50){
        toysPrice = toysPrice - (toysPrice * 0.25)
    }

    let rent = toysPrice * 0.10
    let finalProfit = toysPrice - rent
    let moneyNotEnough = tripPrice - finalProfit
    let moneyLeft = finalProfit - tripPrice

    if (finalProfit >= tripPrice){
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    }
    else {
        console.log(`Not enough money! ${moneyNotEnough.toFixed(2)} lv needed.`)
        
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"])