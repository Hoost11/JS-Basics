function aquarium(input){

    let length = Number(input[0])
    let width = Number(input[1])
    let heigth = Number(input[2])
    let percent = Number(input[3]) / 100

    let capacity = length * width * heigth / 1000
    let taken = percent * capacity
    let volume = capacity - taken
    

    console.log(volume)

}

aquarium(["85", "75", "47", "17"])