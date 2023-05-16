function tennisRanklist(input){

    let tournamentsCount = Number(input[0])
    let startingPoints = Number(input[1])
    let pointsWon = 0
    let tournamentsWon = 0

    for (let i = 2; i < input.length; i++){
        let tournamentResult = input[i]

        if (tournamentResult ==="W"){
            pointsWon += 2000
            tournamentsWon++
        }
        else if (tournamentResult === "F"){
            pointsWon += 1200
        }
        else {
            pointsWon += 720
        }

    }
    let averagePoints = Math.floor(pointsWon / tournamentsCount)
    console.log(`Final points: ${startingPoints + pointsWon}`)
    console.log(`Average points: ${averagePoints}`)

    let tournamentsWonPercent = (tournamentsWon / tournamentsCount) * 100

    console.log(`${tournamentsWonPercent.toFixed(2)}%`)

}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])