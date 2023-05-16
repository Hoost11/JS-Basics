function worldSwimmingRecord(input){

    let recordTime = Number(input[0])
    let distanceInMeters = Number(input[1])
    let metersForSecond = Number(input[2])

    let ivanTime = distanceInMeters * metersForSecond
    let delay = Math.floor(distanceInMeters / 15) * 12.5
    let ivanFullTime = ivanTime + delay

    if (recordTime > ivanFullTime){
        console.log(`Yes, he succeeded! The new world record is ${ivanFullTime.toFixed(2)} seconds.`)
    }
    else {
        let timeNeeded = ivanFullTime - recordTime
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`)
    }

}

worldSwimmingRecord(["10464", "1500", "20"])