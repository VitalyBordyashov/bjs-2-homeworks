// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = min;
  sum = max;
  for (let i = 1; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i]
    };
  }
  avg = Number((sum/arr.length).toFixed(2));
  
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = arr[0];;
  for (let i = 1; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = worker(arrOfArr[0]);
  for (let i = 1; i < arrOfArr.length; i++) {
    let y = worker(arrOfArr[i]);
    if (y > max) {
      max = y;
    }
  }  
  
  return max;
}

// Задание 3
function worker2(arr) {
  getArrayParams(arr);
  let differenceAmounts = Math.abs(max - min);
  return differenceAmounts;
}
makeWork(arrOfArr, worker2);
