let radius2: number = 5;
let diameter2: number = 2 * radius2;
let circumference2: number = 2 * Math.PI * radius2;
let area2: number = Math.PI * Math.pow(radius2, 2);

console.log("Diameter: " + diameter2);
console.log("Circumference: " + circumference2.toFixed(4));
console.log("Area: " + Math.floor(area2 * 1000) / 1000);