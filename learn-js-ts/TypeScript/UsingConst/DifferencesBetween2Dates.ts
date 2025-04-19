const date3: Date = new Date("2024-03-19");
const date4: Date = new Date("2024-03-21");
const difference2: number = Math.abs(date3.getTime() - date4.getTime());
const daysDiff2: number = difference2 / (1000 * 60 * 60 * 24);

console.log("Differences in Days: " + daysDiff2);