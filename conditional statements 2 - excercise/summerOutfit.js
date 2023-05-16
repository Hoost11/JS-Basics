function summerOutfit(input){

    let degrees = Number(input[0])
    let timeOfDay = input[1]
    let clothes
    let shoes

    if (degrees >= 10 && degrees <= 18){
        if (timeOfDay === "Morning"){
            clothes = "Sweatshirt"
            shoes = "Sneakers"
        }
        else if (timeOfDay === "Afternoon" || timeOfDay === "Evening"){
            clothes = "Shirt"
            shoes = "Moccasins"

        }
    }
    else if (degrees > 18 && degrees <= 24){
        if (timeOfDay === "Morning"){
            clothes = "Shirt"
            shoes = "Moccasins"
        }
        else if (timeOfDay === "Afternoon"){
            clothes = "T-Shirt"
            shoes = "Sandals"
        }
        else if (timeOfDay === "Evening"){
            clothes = "Shirt"
            shoes = "Moccasins"
        }
    }
    else if (degrees >= 25){
        if (timeOfDay === "Morning"){
            clothes = "T-Shirt"
            shoes = "Sandals"
        }
        else if (timeOfDay === "Afternoon"){
            clothes = "Swim Suit"
            shoes = "Barefoot"
        }
        else if (timeOfDay === "Evening"){
            clothes = "Shirt"
            shoes = "Moccasins"
        }
    }
    console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`)



}

summerOutfit(["16", "Morning"])