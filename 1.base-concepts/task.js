function solveEquation(a, b, c) {
  let arr;
  let discriminant;
  arr = [];
  discriminant = Math.pow(b, 2) - 4*a*c;
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant == 0) {
    let x = -b/(2*a)
    arr.push(x);
  } else {
    let x1 = (-b - (Math.pow(discriminant, -2)))/(2*a);
    let x2 = (-b + (Math.pow(discriminant, -2)))/(2*a);
    arr.push(x1);
    arr.push(x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let today = new Date();
  let n = (date - today) / (30,5 * 60 * 60 * 24 * 1000);
  let s = amount - contribution;
  let p = 1/12 * percent;
  totalAmount = s * (p + (p / ( Math.pow((1 + p), n) - 1)));
  // код для задачи №2 писать здесь

  return totalAmount;
}
