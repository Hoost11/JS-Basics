function trekkingMania(input){
    let groupCount = Number(input[0])
    let musalaCount = 0
    let montBlanCount = 0
    let kilimandjaroCount = 0
    let keyTwoCount = 0
    let everestCount = 0

    for (let i = 1; i <= groupCount; i++){
        let groupSize = Number(input[i])

        if (groupSize <= 5){
            musalaCount += groupSize
        }
        else if (groupSize <= 12){
            montBlanCount += groupSize
        }
        else if (groupSize <= 25){
            kilimandjaroCount += groupSize
        }
        else if (groupSize <= 40){
            keyTwoCount += groupSize
        }
        else {
            everestCount += groupSize
        }
    }

    let totalCount = musalaCount + montBlanCount + kilimandjaroCount + keyTwoCount + everestCount

    let musalaPercent = ((musalaCount / totalCount) * 100)
    let montBlanPercent = ((montBlanCount / totalCount) * 100)
    let kilimandjaroPercent = ((kilimandjaroCount / totalCount) * 100)
    let keyTwoPercent = ((keyTwoCount / totalCount) * 100)
    let everestPercent = ((everestCount / totalCount) * 100)

    console.log(`${musalaPercent.toFixed(2)}%`)
    console.log(`${montBlanPercent.toFixed(2)}%`)
    console.log(`${kilimandjaroPercent.toFixed(2)}%`)
    console.log(`${keyTwoPercent.toFixed(2)}%`)
    console.log(`${everestPercent.toFixed(2)}%`)


}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
