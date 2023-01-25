function getIndexToIns(arr, num) {
  if (arr.length === 0) return 0;
  if (Math.max(...arr) - num < 0) return arr.length;
  return arr.sort((a, b) => a - b).findIndex((value) => num - value <= 0);
}

console.log(getIndexToIns([2, 20, 1, 30, 10], 19));
