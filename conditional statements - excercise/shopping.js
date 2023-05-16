function shopping(input){

    let budget = Number(input[0])
    let videoCardCount = Number(input[1])
    let processorsCount = Number(input[2])
    let ramCount = Number(input[3])

    let videoCardCost = videoCardCount * 250
    let processorsCost = (videoCardCost * 35) / 100 * processorsCount
    let ramCost = (videoCardCost * 10) /100 * ramCount
    let finalCost = videoCardCost + processorsCost + ramCost
    let discount = 0.0

    if (videoCardCount > processorsCount){
        discount = (finalCost * 15) / 100
        finalCost = finalCost - discount
    }
    if (budget >= finalCost){
        let moneyLeft = budget - finalCost
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
    }
    else{
        let moneyNeeded = finalCost - budget
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    }

}

shopping(["900", "2", "1", "3"])