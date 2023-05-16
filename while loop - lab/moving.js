function calculateFreeSpace(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let space = width * length * height;
  
    let i = 3;
    let boxes = input[i];
  
    while (boxes !== "Done") {
      space -= boxes;
      if (space < 0) {
        console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
        return;
      }
      i++;
      boxes = input[i];
    }
  
    console.log(`${space} Cubic meters left.`);
  }
  
  calculateFreeSpace(["10", 
  "1",
  "2",
  "4", 
  "6",
  "Done"])
  
  
  