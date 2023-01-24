function findLongestWordLength(str) {
  return str.split(' ').reduce((max, value) => Math.max(max, value.length), 0);
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
