function lunchBreak(input){

    let timeForBreak = Number(input[2])
    let timeForLunch = (1 / 8) * timeForBreak
    let movieName = (input[0])
    let timeForRest = (1 / 4) * timeForBreak
    let episodeDuration = Number(input[1])

    let totalTakenTime = timeForLunch + timeForRest
    let timeLeft = timeForBreak - totalTakenTime

    if (timeLeft >= episodeDuration){
        let finalTime = Math.ceil(timeLeft - episodeDuration)
        console.log(`You have enough time to watch ${movieName} and left with ${finalTime} minutes free time.`)
    }
    else{
        let timeNeeded = Math.ceil(episodeDuration - timeLeft)
        console.log(`You don't have enough time to watch ${movieName}, you need ${timeNeeded} more minutes.`)
    }

}

lunchBreak(["Game of Thrones", "60", "96"])