function sumOfTwoNumbers(input){

    let start = Number(input[0])
    let end = Number(input[1])
    let magicNumber = Number(input[2])
    let numberFound = false
    let firstNumber = 0
    let secondNumber = 0
    let counter = 0 

    for (let x = start; x <= end; x++){
        for (let y = start; y <= end; y++){
            let sum = x + y
            counter++
            if (sum == magicNumber){
                firstNumber = x
                secondNumber = y
                numberFound = true
                break;
            }
                
        }
        if (numberFound){
            break;
        }


}
       if (numberFound){
        console.log(`Combination N:${counter} (${firstNumber} + ${secondNumber} = ${magicNumber})`)
    }
    else {
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }
}
sumOfTwoNumbers(["1",
"10",
"5"])
