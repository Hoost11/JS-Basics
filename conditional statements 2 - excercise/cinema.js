function cinema(input){
    let type = input[0]
    let rows = Number(input[1])
    let columns = Number(input[2])
    let allSeats = rows * columns
    let cost = 0.0

    if (type === "Premiere"){
        cost = allSeats * 12
        console.log(`${cost.toFixed(2)} leva`)
    }
    else if (type === "Normal"){
        cost = allSeats * 7.5
        console.log(`${cost.toFixed(2)} leva`)
    }
    else if (type === "Discount"){
        cost = allSeats * 5
        console.log(`${cost.toFixed(2)} leva`)
    }


}

cinema(["Premiere", "10", "12"])