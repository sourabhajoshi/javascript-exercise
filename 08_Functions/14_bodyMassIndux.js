// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

const calculateBMI = function(weight, height){
    let bmi = weight/(height*height);

    //The switch statement doesn't evaluate conditions like bmi > 18.5. It only matches specific values.
    // switch(bmi){
    //     case bmi>18.5:
    //         return `Underweight: BMI is less than 18.5`;
    //         break;
    //     case (bmi <= 18.5 && bmi >= 24.9):
    //         return `Normal weight: BMI is 18.5 to 24.9`;
    //         break;
    //     case (bmi <= 25 && bmi >= 29.9):
    //         return `Overweight: BMI is 25 to 29.9`;
    //         break;
    //     default:
    //         return `Obese: BMI is 30 or more`;
    // }

    if (bmi < 18.5) {
        return `Underweight: BMI is ${bmi.toFixed(2)}`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return `Normal weight: BMI is ${bmi.toFixed(2)}`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        return `Overweight: BMI is ${bmi.toFixed(2)}`;
    } else {
        return `Obese: BMI is ${bmi.toFixed(2)}`;
    }
}

console.log(calculateBMI(70, 1.20));
