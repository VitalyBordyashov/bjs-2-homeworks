function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((v,i) => v === arr2[i]);
}

function advancedFilter(arr) {
  return arr.filter(elem => elem > 0).filter(elem => elem % 3 == 0).map(elem => elem * 10);
}
