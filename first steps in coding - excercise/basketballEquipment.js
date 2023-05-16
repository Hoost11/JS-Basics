function basketballEquipment (input){

    let basketballSneakers = Number(input[0]) - (Number(input[0]) * 0.4)
    let basketballShirt = basketballSneakers - (basketballSneakers * 0.2)
    let basketBall = basketballShirt /4
    let basketballAccessories = basketBall /5

    let allCost = basketballSneakers + basketballShirt + basketBall + basketballAccessories + Number(input[0])
    console.log(allCost)

}

basketballEquipment (["365"])