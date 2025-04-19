let date7: Date = new Date("2024-03-19");
let date8: Date = new Date("2024-03-21");
let difference7: number = Math.abs(date7.getTime() - date8.getTime());
let daysDiff7: number = difference7 / (1000 * 60 * 60 * 24);

console.log("Differences in Days: " + daysDiff7);