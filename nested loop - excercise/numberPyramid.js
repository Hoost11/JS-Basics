function numberPyramid(input){
    let n = Number(input[0])
    let current = 1;

    for (let rows = 1; rows <= n; rows++){
        let line = '';

        for (let cols = 1; cols <= rows; cols++){
            if (current > n){
                break;
            }

            line += current + " ";
            current++;
        }

        console.log(line);
    }
}

numberPyramid(["7"])