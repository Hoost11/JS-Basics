    function courierExpress(input) {

        let weight = Number(input[0]);
        let serviceType = input[1];
        let distance = Number(input[2]);
    
        let pricePerKm;
        let price;
        
        
            if (weight < 1) {
                pricePerKm = 0.03;
            } else if (weight >= 1 && weight <= 10) {
                pricePerKm = 0.05;
            } else if (weight > 10 && weight <= 40) {
                pricePerKm = 0.10;
            } else if (weight > 40 && weight <= 90) {
                pricePerKm = 0.15;
            } else {
                pricePerKm = 0.20;
            }
        
            price = distance * pricePerKm;
        
        if (serviceType === "express") {
        
            if (weight < 1) {
                pricePerKm = 0.03 * 0.8;
            } else if (weight >= 1 && weight <= 10) {
                pricePerKm = 0.05 * 0.4;
            } else if (weight > 10 && weight <= 40) {
                pricePerKm = 0.10 * 0.05;
            } else if (weight > 40 && weight <= 90) {
                pricePerKm = 0.15 * 0.02;
            } else {
                pricePerKm = 0.20 * 0.01;
            }
            
            price += distance * (weight * pricePerKm);
                
        }
        
        console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
    
    }
    
courierExpress(["87",
"express",
"130"])
