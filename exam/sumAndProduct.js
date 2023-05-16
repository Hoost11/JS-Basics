function test(input){
    let n = Number(input[0])
    let firstResult = null;
    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    if (n % 5 == 0 && (a + b + c + d === a * b * c * d)) {
                        if (!firstResult) {
                            firstResult = `${a}${b}${c}${d}`
                        }
                    } else {
                        const sum = a + b + c + d;
                        const product = a * b * c * d;
                        if (product / sum == 3 && n % 3 == 0) {
                            if (!firstResult) {
                                firstResult = `${d}${c}${b}${a}`
                            }
                        }
                    }
                }
            }
        }
    }
    if (!firstResult) {
        console.log('Nothing found')
    } else {
        console.log(firstResult)
    }
}
test([123])