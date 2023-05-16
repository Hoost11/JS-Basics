function computerFirm(input) {
    let n = Number(input[0]);
    let totalSales = 0;
    let totalRating = 0;
  
    for (let i = 1; i <= n; i++) {
      let num = Number(input[i]);
      let rating = num % 10;
      let sales = Math.floor(num / 10);
      let salesMade = 0;
  
      if (rating === 2) {
        salesMade = 0;
      } else if (rating === 3) {
        salesMade = sales * 0.5;
      } else if (rating === 4) {
        salesMade = sales * 0.7;
      } else if (rating === 5) {
        salesMade = sales * 0.85;
      } else if (rating === 6) {
        salesMade = sales;
      }
  
      totalSales += salesMade;
      totalRating += rating;
    }
  
    let avgRating = totalRating / n;
    let formattedSales = totalSales.toFixed(2);
    let formattedRating = avgRating.toFixed(2);
  
    console.log(`${formattedSales}`);
    console.log(`${formattedRating}`);
  }
  computerFirm(["3",
"103",
"103",
"103"])

  