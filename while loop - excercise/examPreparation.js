function examPreparation(input){

    let index = 0
    let badGradesCount = Number(input[index])
    index++

    let command = input[index]
    index++

    let badGradeCounter = 0
    let allGradeCounter = 0
    let sumGrade = 0
    let needsBreak = false
    let taskName = ""

    while (command !== "Enough"){
        taskName = command
        let grade = Number(input[index])
        index++
        allGradeCounter++
        sumGrade += grade

        if (grade <= 4){
            badGradeCounter++
            if (badGradesCount <= badGradeCounter){
                needsBreak = true
                break;
            }
        }
        command = input[index]
        index++
    }
     if (needsBreak == true){
        console.log(`You need a break, ${badGradeCounter} poor grades.`)
     } else {
        let avgGrade = sumGrade / allGradeCounter
        console.log(`Average score: ${avgGrade.toFixed(2)}`)
        console.log(`Number of problems: ${allGradeCounter}`)
        console.log(`Last problem: ${taskName}`)
     }


}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
