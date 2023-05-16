function repainting(input){

    let nylonQuantity = Number(input[0])
    let paintQuantity = Number(input[1])
    let liquidQuantity = Number(input[2])
    let workHours = Number(input[3])

    let nylonCost = (nylonQuantity + 2) * 1.50
    let paintCost = ((paintQuantity * 10/100) + paintQuantity) * 14.50
    let liquidCost = liquidQuantity * 5
    let packages = 0.40
    let finalCost = nylonCost + paintCost + liquidCost + packages
    let workCost = (finalCost * 30/100) * workHours
    let allCost = workCost + finalCost

    console.log(allCost)

}

repainting(["10", "11", "4", "8"])