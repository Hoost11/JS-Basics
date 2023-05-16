function onTimeForExam(input){
    let examHour = Number(input[0])
    let examMin = Number(input[1])
    let arriveHour = Number(input[2])
    let arriveMin = Number(input[3])

    let totalExamTime = examHour * 60 + examMin
    let totalArrivalTime = arriveHour * 60 + arriveMin

    let totalDiffTime = Math.abs(totalExamTime - totalArrivalTime)
    let hoursDiff = Math.floor(totalDiffTime / 60)
    let minDiff = totalDiffTime % 60

    if (totalExamTime === totalArrivalTime){
        console.log('On time')
    }
    else if (totalExamTime < totalArrivalTime){
        console.log('Late')

        if (totalDiffTime < 60){
            console.log(`${totalDiffTime} minutes after the start`)
        } else {
            if (minDiff < 10){
                console.log(`${hoursDiff}:0${minDiff} hours after the start`)
            }
            else {
                console.log(`${hoursDiff}:${minDiff} hours after the start`)
            }
        }

    }
    else {
        if (totalDiffTime <=30){
            console.log('On time')
            console.log(`${totalDiffTime} minutes before the start`)
        }
        else {
            console.log('Early')

            if (totalDiffTime < 60){
                console.log(`${totalDiffTime} minutes before the start`)
            }
            else {
                if (minDiff < 10){
                    console.log(`${hoursDiff}:0${minDiff} hours before the start`)
                }
                else {
                    console.log(`${hoursDiff}:${minDiff} hours before the start`)
                }
            }
        }

    }
 
}


onTimeForExam(["11", "30", "8", "12"])