function getAgeDetails(){
    let age = prompt("Enter a age : ")
    age = parseInt(age);

    let ageDiff = Math.abs(18 - age);

    let feeback = age > 18 ? `You are old enough to drive.` : `You are left with ${ageDiff} years to drive.`

    document.getElementById("ageCalculator").innerHTML = feeback;
}