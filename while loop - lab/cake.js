function calculateCakePieces(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let cakeSize = width * length;
    let piecesTaken = 0;
    
    while (input[index] !== "STOP" && piecesTaken < cakeSize) {
      let pieces = Number(input[index]);
      index++;
      piecesTaken += pieces;
    }
  
    if (piecesTaken < cakeSize) {
      console.log(`${cakeSize - piecesTaken} pieces are left.`);
    } else {
      console.log(`No more cake left! You need ${piecesTaken - cakeSize} pieces more.`);
    }
  }
calculateCakePieces(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
