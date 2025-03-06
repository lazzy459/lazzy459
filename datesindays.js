// 4. Difference Between Two Dates
function dateDifference(date1, date2) {
  let d1 = new Date(date1);
  let d2 = new Date(date2);
  let difference = Math.abs(d2 - d1) / (1000 * 60 * 60 * 24);
  return difference;
}
console.log(dateDifference('2024-03-19', '2024-03-21')); // Output: 2