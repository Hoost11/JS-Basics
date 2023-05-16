function newHouse(input){
    let flowerType = input[0]
    let flowerCount = Number(input[1])
    let budget = Number(input[2])
    let price

    if (flowerType === "Roses"){
        price = flowerCount * 5
    }
    else if (flowerType === "Dahlias"){
        price = flowerCount * 3.8
    }
    else if (flowerType === "Tulips"){
        price = flowerCount * 2.8
    }
    else if (flowerType === "Narcissus"){
        price = flowerCount * 3
    }
    else if (flowerType === "Gladiolus"){
        price = flowerCount * 2.50
    }

    if (flowerType === "Roses" && flowerCount > 80){
        price = price - (price * 0.1)
    }
    else if (flowerType === "Dahlias" && flowerCount > 90){
        price = price - (price * 0.15)
    }
    else if (flowerType === "Tulips" && flowerCount > 80){
        price = price - (price * 0.15)
    }
    else if (flowerType === "Narcissus" && flowerCount < 120){
        price = price + (price * 0.15)
    }
    else if (flowerType === "Gladiolus" && flowerCount < 80){
        price = price + (price * 0.2)
    }
    if (budget >= price){
        moneyLeft = budget - price
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`)
    }
    else if (budget < price){
        moneyNeeded = price - budget
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.   `)
    }


}

newHouse(["Roses", "55", "250"])