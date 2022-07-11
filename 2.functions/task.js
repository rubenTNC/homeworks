// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = 0;
  for (let number of arr) {
    sum += number;
  }
  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = 0;
  for (let arr of arrOfArr) {
    const funcResult = worker(arr);
    if (max < funcResult) {
      max = funcResult;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  return Math.max(...arr) - Math.min(...arr);
}