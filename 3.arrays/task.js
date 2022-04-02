function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length != arr2.length) {
    result = false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
  }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr  = arr.filter(elem => elem > 0).filter(elem => elem % 3 == 0).map(elem => elem * 10);
  return resultArr; // array
}
