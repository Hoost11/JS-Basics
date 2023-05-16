function timePlus15(input){
    let hours = Number(input[0])
    let mins = Number(input[1])

    let minsFromHours = hours * 60
    let allTime = minsFromHours + mins + 15

    let totalHours = Math.floor(allTime / 60)
    let totalMins = allTime % 60

    if (totalHours == 24){
        totalHours = 0
    }
    if (totalMins <10){
        console.log(`${totalHours}:0${totalMins}`)
    }
    else {
        console.log(`${totalHours}:${totalMins}`)
    }

}

timePlus15(["23", "59"])