let date1 = new Date("2024-03-19");
let date2 = new Date("2024-03-21");
let difference = Math.abs(date2 - date1);
let daysDiff = difference / (1000 * 60 * 60 * 24);

console.log("Differences in Days: " + daysDiff);
