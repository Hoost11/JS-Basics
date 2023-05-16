function journey(input){

    let budget = Number(input[0])
    let season = input[1]
    let destination = ''
    let typeOfStay = ''

    if (season === "winter"){
        typeOfStay = "Hotel"
    }
    else if (season === "summer") {
        typeOfStay = "Camp"
    }

    if (budget <= 100){

        destination = "Bulgaria"
        if (season === "summer"){
            budget *= 0.3
        }
        else if (season === "winter"){
            budget *= 0.7
        }
    }
    else if (budget <= 1000){
        destination = "Balkans"
        if (season === "summer"){
            budget *= 0.4
        }
        else if (season === "winter"){
            budget *= 0.8
        }
    }
    else if (budget > 1000){
        destination = "Europe"
        budget *= 0.9

        if (destination === "Europe"){
            typeOfStay = "Hotel"
        }
    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${typeOfStay} - ${budget.toFixed(2)}`)


}
journey(["50", "summer"])