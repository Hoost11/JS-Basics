function salary(input){
    let tabsOpened = Number(input[0])
    let moneyEarned = Number(input[1])
    let penalty = 0

    for (let i = 2; i <= tabsOpened + 1; i++ ){
        let website = input[i]

        if (website == "Facebook"){
            penalty += 150
        }
        else if (website == "Instagram"){
            penalty += 100
        }
        else if (website == "Reddit"){
            penalty += 50
        }
    }

    let moneyLeft = moneyEarned - penalty

    if (moneyLeft <= 0){
        console.log("You have lost your salary.")
    } else {
        console.log(moneyLeft)
    }


}
salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])