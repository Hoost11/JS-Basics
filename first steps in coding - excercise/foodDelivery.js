function foodDelivery(input){

    let chickenMenus = Number(input[0])
    let fishMenus = Number(input[1])
    let veggieMenus = Number(input[2])

    let chickenMenuPrice = chickenMenus * 10.35
    let fishMenuPrice = fishMenus * 12.40
    let veggieMenuPrice = veggieMenus * 8.15
    let fullPrice = chickenMenuPrice + fishMenuPrice + veggieMenuPrice
    let dessertPrice = fullPrice * 0.2
    let delivery = 2.50
    let finalPrice = fullPrice + dessertPrice + delivery

    console.log(finalPrice)

}

foodDelivery (["2", "4", "3"])