function suitcasesLoad(input){

    let capacity = Number(input[0])
    let index = 1
    let volume = (input[index])
    let count = 0

    while (volume !== "End"){

        if (count % 3 == 2){
            volume *= 1.1
        }
        if (capacity < volume){
            console.log("No more space!")
            break;
        }

        capacity -= volume
        count++
        index++
        volume = (input[index])
    }

    if (volume == "End"){
        console.log("Congratulations! All suitcases are loaded!")
    }
    console.log(`Statistic: ${count} suitcases loaded.`)
}

suitcasesLoad([550, 100, 252, 72, "End"])
