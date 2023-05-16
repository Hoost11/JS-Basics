function hotelRoom(input){
    let month = input[0]
    let nights = Number(input[1])

    let studio = ''
    let apartment = ''

   switch (month){

    case "May" :
    case "October" :
        studio = 50
        apartment = 65

        if (nights > 7 && nights <= 14){
            studio *= 0.95
        }
        else if (nights > 14){
            studio *= 0.70
        }

    case "June" :
    case "September" :
        studio = 75.20
        apartment = 68.70

        if (nights > 14){
            studio *= 0.80
            apartment *= 0.90
        }
    case "July" :
    case "August" :
        studio = 76
        apartment = 77

        if (nights > 14){
            apartment *= 0.90
        }
   }
   let apartmentPrice = nights * apartment
   let studioPrice = nights * studio

   console.log(`Apartment: ${apartmentPrice}`)
   console.log(`Studio : ${studioPrice}`)



    


}

hotelRoom(["May", "15"])