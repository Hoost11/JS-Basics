function puppyFood(input){

    let foodInKg = Number(input[0])
    let totalFoodEaten = 0
    let index = 1
    let foodEaten = input[index]

    while (foodEaten !== "Adopted"){
        totalFoodEaten += foodEaten
        index++
        foodEaten = input[index]
    }

    let foodLeft = foodInKg * 1000 - totalFoodEaten
    let foodNeeded = totalFoodEaten - foodInKg * 1000

    if (foodLeft >= 0){
        console.log(`Food is enough! Leftovers: ${foodLeft} grams.`)
    } else {
        console.log(`Food is not enough. You need ${foodNeeded} grams more.`)
    }




}
puppyFood([2,
    999,
    456,
    999,
    999,
    123,
    456,
    "Adopted"
    ])