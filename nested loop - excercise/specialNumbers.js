function specialNumbers(input) {
    let specialNumber = Number(input[0]);
    let result = "";
  
    for (let i = 1111; i <= 9999; i++) {
      let isSpecial = true;
      let currentNumber = i.toString();
  
      for (let j = 0; j < currentNumber.length; j++) {
        let digit = Number(currentNumber[j]);
        if (specialNumber % digit !== 0) {
          isSpecial = false;
          break;
        }
      }
  
      if (isSpecial) {
        result += i + " ";
      }
    }
  
    console.log(result);
  }
  
specialNumbers(["3"])