const date1 = new Date("2024-03-19")
const date2 = new Date("2024-03-21")
const difference = Math.abs(date2 - date1)
const daysDiff = difference / (1000 * 60 * 60 * 24)

console.log("Differences in Days: " + daysDiff)
