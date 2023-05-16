function test(input) {
    index = 0
    let bestPlayer
    let mostGoals = 0

    while (input[index] !== 'END' && input[index] !== undefined) {
        let player = input[index]
        let goals = input[index + 1]
        if (mostGoals < goals) {
            mostGoals = goals
            bestPlayer = player
        }

        index = index + 2
    }
    console.log(`${bestPlayer} is the best player!`)
    if (mostGoals >= 3) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`)
    } else {
        console.log(`He has scored ${mostGoals} goals.`)
    }
}
test(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])
