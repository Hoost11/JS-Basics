function catDiet(input){

    let fatPercentage = Number(input[0]);
let proteinPercentage = Number(input[1]);
let carbPercentage = Number(input[2]);
let totalCalories = Number(input[3]);
let waterPercentage = Number(input[4]);

let dryWeightPercentage = 100 - waterPercentage;

let fatGrams = ((fatPercentage / 100) * totalCalories) / 9;
let proteinGrams = ((proteinPercentage / 100) * totalCalories) / 4;
let carbGrams = ((carbPercentage / 100) * totalCalories) / 4;

let totalGrams = fatGrams + proteinGrams + carbGrams;
let dryWeight = (totalGrams * dryWeightPercentage) / 100;
let caloriesPerGram = totalCalories / totalGrams;
let dryCaloriesPerGram = caloriesPerGram * (dryWeight / totalGrams);
let dryCaloriesPerGramFormatted = dryCaloriesPerGram.toFixed(4);

console.log(dryCaloriesPerGramFormatted);

}
catDiet(["60",
"25",
"15",
"2500",
"60"])
