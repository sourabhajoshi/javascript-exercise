// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

const densityOfSubstance  = function(mass, volume){
    let densityOfSub = mass/volume;
    return densityOfSub;
}

console.log("Density of a substance is ", densityOfSubstance(10, 5));
