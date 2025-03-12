//  bmi = weight in Kg / (height x height) in m2

function getBMI(){
    let weight = prompt("Enter weight of person (kg) : ");
    let height = prompt("Enter height of person (m) : ");
    let bodyMassIndex = weight / (height*height);

    document.getElementById("bmi").innerHTML = bodyMassIndex
}