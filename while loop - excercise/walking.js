function walking(input){
    let index = 0
    let steps = input[index]
    index++
    let stepCounter = 0

    let goal = 10000

    while (steps !== "Going home"){
        steps = Number(input[index])
        stepCounter += steps
        index++  
    }

    if (steps === "Going home"){
        stepCounter = Number(input[index])
        index++
    }
    
    if (stepCounter >= goal){
        console.log(`Goal reached! Good job!`)
    } else {
        console.log(`${goal - stepCounter} more steps to reach goal`)
    }


}
walking(["1000",
"1500",
"2000",
"6500"])
