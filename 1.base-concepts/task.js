"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
    arr = [];
  }
  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  }
  if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "test"`;
  }
  if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "test"`;
  }
  if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "test"`;
  }
  let totalAmount;
  const bodyLoan = +amount - (+contribution);
  const creditTerm = ((date.getFullYear() - new Date().getFullYear()) * 12) - (new Date().getMonth() - date.getMonth());
  const monthlyPayment = bodyLoan * (((+percent) / 100 / 12) + (((+percent) / 100 / 12) / (((1 + ((+percent) / 100 / 12)) ** creditTerm) - 1)));
  totalAmount = creditTerm * monthlyPayment;
  return +totalAmount.toFixed(2);
}
