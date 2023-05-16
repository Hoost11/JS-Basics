function fishingBoat(input){
    let budget = Number(input[0])
    let season = input[1]
    let fishermenCount = Number(input[2])
    let cost= 0

    switch (season){

        case "Spring" : 
        cost = 3000; break;

        case "Summer" :
        case "Autumn" :
        cost = 4200; break;

        case "Winter": 
        cost = 2600; break
    }
    if (fishermenCount <= 6){
        cost *= 0.9
    }
    else if (fishermenCount >= 7 && fishermenCount <= 11){
        cost *= 0.85
    }
    else if (fishermenCount >= 12){
        cost *= 0.75
    }
    if (fishermenCount % 2 === 0 && season !== "Autumn" ){
        cost *= 0.95
    }

    if (cost <= budget){
        moneyLeft = budget - cost
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    }
    else if (cost > budget){
        moneyNeeded = cost - budget
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }




}

fishingBoat(["2000", "Winter", "13"])