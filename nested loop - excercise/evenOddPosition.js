function evenOddPosition(input){

    let startNum = Number(input[0])
    let endNum = Number(input[1])

    let result = ''

    for (let currentNum = startNum; currentNum <= endNum; currentNum++){
        let evenPositionSum = 0
        let oddPositionSum = 0

        let currentNumString = String(currentNum)

        for (let index = 0; index < currentNumString.length; index++){
            let currentDigit = Number(currentNumString[index])

            if (index % 2 === 0){
                evenPositionSum += currentDigit
            } else {
                oddPositionSum += currentDigit
            }
        }
        if (evenPositionSum === oddPositionSum){
            result += currentNumString + ' '
        }
    }
    console.log(result)


}
evenOddPosition(["100000", "100050"])
