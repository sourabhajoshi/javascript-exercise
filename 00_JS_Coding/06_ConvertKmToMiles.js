// write a JS to convert kilometers to miles.
// 1 kilometer (km) = 0.62137 miles (mi)

const KMTOMILESCONVERSIONFACTOR = 0.62137;

let distanceInKm = 15;

let distanceinMiles = distanceInKm * KMTOMILESCONVERSIONFACTOR;

console.log(`${distanceInKm} km = ${distanceinMiles.toFixed(2)} miles`);

