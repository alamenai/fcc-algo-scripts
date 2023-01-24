function largestOfFour(arr) {
  return arr.map((sub) => sub.reduce((max, item) => Math.max(max, item)), 0);
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39, 45, 42],
    [1000, 1001, 857, 1],
  ])
);
