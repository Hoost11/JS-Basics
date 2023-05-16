function trainTheTrainers(input){

    let JuryCount = Number(input[0])
    let averageForAll = 0
    let presentationCount = 0

    let index = 1

    while (input[index] !== "Finish"){
        let presentation = input[index]
        index++

        let presentationScore = 0
        for (let i = 0; i < JuryCount; i++){
            presentationScore += Number(input[index])
            index++
        }

        let presentationAverage = presentationScore / JuryCount
        console.log(`${presentation} - ${presentationAverage.toFixed(2)}`)

        averageForAll += presentationAverage
        presentationCount++
    }

    let finalAverage = averageForAll / presentationCount
    console.log(`Student's final assessment is ${finalAverage.toFixed(2)}`)

}
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

