function  fruitShop(input){
    let fruit = input[0]
    let day = input[1]
    let quantity = input[2]
    let cost = 0

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
        if (fruit === "banana"){
            cost = quantity * 2.50
            console.log(cost.toFixed(2))
        }
        else if (fruit === "apple"){
            cost = quantity * 1.20
            console.log(cost.toFixed(2))
        }
        else if (fruit === "orange"){
            cost = quantity * 0.85
            console.log(cost.toFixed(2))
        }
        else if (fruit === "grapefruit"){
            cost = quantity * 1.45
            console.log(cost.toFixed(2))
        }
        else if (fruit === "kiwi"){
            cost = quantity * 2.70
            console.log(cost.toFixed(2))
        }
        else if (fruit === "pineapple"){
            cost = quantity * 5.50
            console.log(cost.toFixed(2))
        }
        else if (fruit === "grapes"){
            cost = quantity * 3.85
            console.log(cost.toFixed(2))
        }
        else {
            console.log("error")
        }
    }
    else if (day === "Saturday" || day === "Sunday"){
        if (fruit === "banana"){
            cost = quantity * 2.70
            console.log(cost.toFixed(2))
        }
        else if (fruit === "apple"){
            cost = quantity * 1.25
            console.log(cost.toFixed(2))
        }
        else if (fruit === "orange"){
            cost = quantity * 0.90
            console.log(cost.toFixed(2))
        }
        else if (fruit === "grapefruit"){
            cost = quantity * 1.60
            console.log(cost.toFixed(2))
        }
        else if (fruit === "kiwi"){
            cost = quantity * 3
            console.log(cost.toFixed(2))
        }
        else if (fruit === "pineapple"){
            cost = quantity * 5.60
            console.log(cost.toFixed(2))
        }
        else if (fruit === "grapes"){
            cost = quantity * 4.20
            console.log(cost.toFixed(2))
        }
        else {
            console.log("error")
        }
    }
    else {
        console.log("error")
    }


}

fruitShop(["apple", "Tuesday", "2"])