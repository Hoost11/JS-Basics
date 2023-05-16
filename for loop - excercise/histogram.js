function histogram(input){

    let numberCount = Number(input[0])
    let range1Count = 0
    let range2Count = 0
    let range3Count = 0
    let range4Count = 0
    let range5Count = 0

    for (let i = 1; i <= numberCount; i++){
        let currentNumber = Number(input[i])

    if (currentNumber < 200){
        range1Count++
    }
    else if (currentNumber <= 399){
        range2Count++
    }
    else if (currentNumber <= 599){
        range3Count++
    }
    else if (currentNumber <= 799){
        range4Count++
    }
    else {
        range5Count++
    }
}

    let range1Percent = (range1Count / numberCount) * 100
    let range2Percent = (range2Count / numberCount) * 100
    let range3Percent = (range3Count / numberCount) * 100
    let range4Percent = (range4Count / numberCount) * 100
    let range5Percent = (range5Count / numberCount) * 100

    console.log(`${range1Percent.toFixed(2)}%`)
    console.log(`${range2Percent.toFixed(2)}%`)
    console.log(`${range3Percent.toFixed(2)}%`)
    console.log(`${range4Percent.toFixed(2)}%`)
    console.log(`${range5Percent.toFixed(2)}%`)


}

histogram([20, 
    53, 
    7, 
    56, 
    180, 
    450, 
    920, 
    12, 
    7, 
    150, 
    250, 
    680, 
    2, 
    600, 
    200, 
    800, 
    799, 
    199, 
    46, 
    128,
    65])
