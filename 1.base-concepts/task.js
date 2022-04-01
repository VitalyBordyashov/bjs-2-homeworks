"use strict";

function solveEquation(a, b, c) {
  let arr;
  let discriminant;
  arr = [];
  discriminant = Math.pow(b, 2) - 4*a*c;
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    let x = -b / (2 * a)
    arr.push(x);
  } else {
    let x1 = (-b + (Math.sqrt(discriminant)))/(2*a);
    let x2 = (-b - (Math.sqrt(discriminant)))/(2*a);
    arr.push(x1);
    arr.push(x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (isNaN(parseInt(percent))) {
    return ('Параметр "Процентная ставка" содержит неправильное значение ' + percent);
  } else if (isNaN(parseInt(contribution))) {
    return ('Параметр "Первоначальный взнос" содержит неправильное значение ' + contribution);
  } else if (isNaN(parseInt(amount))) {
    return ('Параметр "Общая стоимость" содержит неправильное значение ' + amount);
  }
  let today = new Date();
  let n = Math.round((date - today) / (30.5 * 60 * 60 * 24 * 1000));
  let s = amount - contribution;
  let p = 1/1200 * percent;
  totalAmount = (n * (s * (p + (p / (Math.pow((1 + p), n) - 1))))).toFixed(2);
  return totalAmount;
}
