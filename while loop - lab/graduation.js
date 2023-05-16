function graduation(input){
    let index = 0
    let name = input[index]
    index++

    let avgGrade = 0
    let badGrades = 0

    let i = 1
    let hasExcluded = false

    while (i <= 12){
        let grade = Number(input[index])
        index++
        if (grade < 4.00){
            badGrades++
            if (badGrades > 1){
                hasExcluded = true
                console.log(`${name} has been excluded at ${i} grade`)
                break;
            }
            continue;

        }
        avgGrade += grade
        i++
    }
    if (!hasExcluded) {
    console.log(`${name} graduated. Average grade: ${(avgGrade / 12).toFixed(2)}`)
    }


}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
