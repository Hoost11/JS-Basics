function saveMoneyForTrip(input) {
    let index = 0;
    let tripPrice = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;
    let days = 0;
    let spendingDays = 0;
  
    while (money < tripPrice && spendingDays < 5) {
      let action = input[index];
      index++;
      let amount = Number(input[index]);
      index++;
  
      if (action === "save") {
        money += amount;
        spendingDays = 0;
      } else if (action === "spend") {
        money -= amount;
        spendingDays++;
        if (money < 0) {
          money = 0;
        }
      }
  
      days++;
      if (spendingDays === 5) {
        console.log(`You can't save the money.`);
        console.log(`${days}`);
      } else if (money >= tripPrice) {
        console.log(`You saved the money for ${days} days.`);
      }
    }
  }
  
saveMoneyForTrip(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
