const radius = 5
const diameter = 2 * radius
const circumference = 2 * Math.PI * radius
const area = Math.PI * Math.pow(radius, 2)

console.log("Diameter: " + diameter)
console.log("Circumference: " + circumference.toFixed(4))
console.log("Area: " + Math.floor(area * 1000) / 1000)
