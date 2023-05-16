function areaOfFigures(input){

    let type = input[0]

    if (type === "square"){
        let side = Number(input[1])
        let result = side * side

        console.log(result.toFixed(3))
    }
    else if (type === "rectangle"){
        let sideOne = Number(input[1])
        let sideTwo = Number(input[2])
        let result = sideOne * sideTwo
        console.log(result.toFixed(3))
    }

    else if (type === "circle"){
        let r = Number(input[1])
        let result = Math.PI * Math.pow(r, 2)
        console.log(result.toFixed(3))
    }
    else if (type === "triangle"){
        let sideOne = Number(input[1])
        let sideTwo = Number(input[2])
        let result = (sideOne * sideTwo) / 2
        console.log(result.toFixed(3))
    }
    }

areaOfFigures(["triangle", "4.5", "20"])