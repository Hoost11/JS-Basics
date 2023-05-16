function cinemaTickets(input) {

    let studentTickets = 0
    let standardTickets = 0
    let kidTickets = 0

    let index = 0
    let command = input[index]
    index++

    while (command !== "Finish"){

        let movieName = command

        let seatsAvailable = Number(input[index])
        index++

        let command1 = input[index]
        index++

        let seatsTaken = 0

        while (command1 !== "End"){

            let ticketType = command1
            seatsTaken++

            if (ticketType === "student"){
                studentTickets++
            } else if (ticketType === "standard"){
                standardTickets++
            } else {
                kidTickets++
            }

            if (seatsTaken == seatsAvailable){
                break;
            }

            command1 = input[index]
            index++


        }

        let percentTaken = (seatsTaken / seatsAvailable) * 100

        console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`)



        command = input[index]
        index++
    }

    let totalTickets = studentTickets + standardTickets + kidTickets
    console.log(`Total tickets: ${totalTickets}`)

    let standardTicketsPercentage = (standardTickets / totalTickets) * 100
    let studentTicketsPercentage = (studentTickets / totalTickets) * 100
    let kidTicketsPercentage = (kidTickets / totalTickets) * 100

    console.log(`${studentTicketsPercentage.toFixed(2)}% student tickets.`)
    console.log(`${standardTicketsPercentage.toFixed(2)}% standard tickets.`)
    console.log(`${kidTicketsPercentage.toFixed(2)}% kids tickets.`)




}  
  cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])