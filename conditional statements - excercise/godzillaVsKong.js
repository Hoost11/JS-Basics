function godzillaVsKong(input){

    let movieBudget = Number(input[0])
    let statistsCount = Number(input[1])
    let oneCostumePrice = Number(input[2])

    let decor = movieBudget * 0.1
    let allCostumesPrice = statistsCount * oneCostumePrice

    if (statistsCount > 150){
        allCostumesPrice = allCostumesPrice * 0.9
    }
    let totalPrice = allCostumesPrice + decor

    if (movieBudget >= totalPrice){
        let moneyLeft = movieBudget - totalPrice
        console.log("Action!")
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }
    else{
        let moneyNeeded = totalPrice - movieBudget
        console.log("Not enough money!")
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    }

    }     

godzillaVsKong(["20000", "120", "55.5"])