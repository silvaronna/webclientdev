const radius7: number = 5;
const diameter7: number = 2 * radius7;
const circumference7: number = 2 * Math.PI * radius7;
const area7: number = Math.PI * Math.pow(radius7, 2);

console.log("Diameter: " + diameter7);
console.log("Circumference: " + circumference7.toFixed(4));
console.log("Area: " + Math.floor(area7 * 1000) / 1000);