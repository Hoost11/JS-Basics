function projectMaker(input){
 let projectOwner = input[0]
 let projects = Number(input[1])
 let projectTimeTaken = Number(input[1]) * 3

 console.log(`The architect ${projectOwner} will need ${projectTimeTaken} hours to complete ${projects} project/s.`) 
}

projectMaker(["George", "4"])