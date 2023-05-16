function santaDeers(input){

    let daysMissing = Number(input[0])
    let foodLeft = Number(input[1])
    let dailyFoodFirstDeer = Number(input[2])
    let dailyFoodSecondDeer = Number(input[3])
    let dailyFoodThirdDeer = Number(input[4])

    let totalFoodNeeded = (dailyFoodFirstDeer + dailyFoodSecondDeer + dailyFoodThirdDeer) * daysMissing

    if (foodLeft >= totalFoodNeeded){
        let foodMore = Math.floor(foodLeft - totalFoodNeeded)
        console.log(`${foodMore} kilos of food left.`)
    } else {
        let foodNeeded = Math.ceil(totalFoodNeeded - foodLeft)
        console.log(`${foodNeeded} more kilos of food are needed.`)
    }


}
santaDeers(["5",
"10",
"2.1",
"0.8",
"11"])

