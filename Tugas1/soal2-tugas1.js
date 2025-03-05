//declaration of radius
let radius = 5;

//calculate
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * Math.pow(radius, 2);

//print
console.log("Diameter: " + diameter)
console.log("Circumference: " + circumference.toFixed(4))
console.log("Area: " + Math.floor(area * 1000) / 1000);