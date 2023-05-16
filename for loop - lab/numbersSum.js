    function test(input) {
        let sum = 0
        let value = input[0]
        for (let i = 0; i < value.length; i++) {
            const inc = Number(value[i])
            sum += inc
        }
        console.log(`The sum of the digits is:${sum}`)
        
    }
test(["1234"])