function password(input){
    let index = 0
    let name = input[index]
    index++
    let password = input[index]
    index++

    let temporaryPass = input[index]
    index++

    while (temporaryPass !== password){
        temporaryPass = input[index]
        index++
    }
    console.log(`Welcome ${name}!`)


}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
