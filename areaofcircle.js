// 2. Diameter, Circumference, and Area of Circle
function circleCalculations(radius) {
  let diameter = 2 * radius;
  let circumference = 2 * Math.PI * radius;
  let area = Math.PI * radius * radius;
  return `Diameter: ${diameter}, Circumference: ${circumference.toFixed(4)}, Area: ${area.toFixed(3)}`;
}
console.log(circleCalculations(5));